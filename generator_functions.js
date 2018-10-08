function generator() {
	var that = this;
	this.parentElement = $('#skillTabs');
	this.info = informationPool['informations'];
	this.info['epTotal'] = this.info['epBase'];
	
	this.init = function() {
		that.generatePageStructure();
		var datalist = Object.keys(regularSkills);
		console.log(datalist);
		for (var iter in datalist) {
			var data = regularSkills[datalist[iter]];			
			var key = datalist[iter];
			that.generateForm('regularSkills', data, key)	
		}

		for (var skillIter in magicalSkills) {	
			var data = magicalSkills[skillIter];
			var key = datalist[iter];
			that.generateForm('magicalSkills', data, key)	
		}

		/*for (var skillIter in regularSkills) {	
			var data = regularSkills[skillIter];
			generateForm('regularSkills', data)	
		}

		for (var skillIter in regularSkills) {	
			var data = regularSkills[skillIter];
			generateForm('regularSkills', data)	
		}*/

		that.dataCollector();
		that.uiFunctions();
	}

	that.generatePageStructure = function() {
		for (var iter in pageStructure['tabs']) {
			var tab = pageStructure['tabs'][iter];
			$(that.parentElement).find('ul.tablist').append('<li><a href="#' + tab['id'] + '">' + tab['label'] + '</a></li>');
			$(that.parentElement).append('<section id="' + tab['id'] + '"></section>');

		}
	}


	//generates form by given model. 
	//need to exclude field definitions in different files in case of more needed field types
	this.generateForm = function(category, data, key) {
		$('#' + category).append('<div class="skillContainer"></div>');
		$('#' + category + ' .skillContainer:last-of-type').append('<h2>' + data['title'] + '</h2>');
		for (var iter in data) {
			var catData = data[iter];
			var legacy = '';
			var disabled = '';
			var heir = '';

			if (catData['condition']) {
				disabled = ' skillDisabled';
				heir = 'heir = "' + catData['condition'] + '"';	
			}

			if (catData['legacy']) {
				legacy = 'legacy = "' + catData['legacy'] + '"';
			}

			if (catData['type'] === 'check') {	
				$('#' + category + ' .skillContainer:last-of-type').append( 
					'<article class="' + key + '"><label for="' + catData['name'] + '"><span class="skillName">' + catData['label-de'] + '</span><div class="descriptiontext">'+ catData['description'] +'</div></label><div ' + legacy + ' class="skillInput ' + category + 'Input' + disabled + '" costs="' + catData['epCosts'] + '" condition = "' + catData['condition'] + '" name="' + catData['name'] + '" type="checkbox"></div><span> ('+ catData['epCosts'] +' EP)</span></article>'
				);
			}

			if (catData['type'] === 'number') {
				$('#' + category + ' .skillContainer:last-of-type').append( 
					'<article class="' + key + '"><label for="' + catData['name'] + '"><span class="skillName">' + catData['label-de'] + '</span><div class="descriptiontext">'+ catData['description'] +'</div></label><select ' + legacy + ' class="skillSelect ' + category + 'Input"' + disabled + ' costs="' + catData['epCosts'] + '" condition = "' + catData['condition'] + '" name="' + catData['name'] + '"></select><span> ('+ catData['epCosts'] +' EP)</span></article>'
				);
				that.createSelectBox(catData['name'], catData['rank'] + 1, $('#' + category + ' .skillContainer:last-of-type select'));
			}
		}
	}
	
	this.recalculateEp = function() {
		that.info['epTotal'] = that.info['epBase'] + that.info['epDF'] + that.info['epDays'];
		$('#epTotal').text(that.info['epTotal']);
		$('#epToUse').text(that.info['epTotal'] - that.info['epUsed']);
	}

	this.removeSkillFromList = function(category, name, label, rank, legacy, costs) {
		$('div[name="' + legacy + '"]').addClass('skillDisabled');
		$('div[name="' + legacy + '"]').removeClass('skillChecked');
		delete informationPool[category][legacy];
		delete informationPool[category][name];

		that.info['epUsed'] = that.info['epUsed'] - (parseInt(costs) * parseInt(rank));


		//exeption case
		//complete magical skills are dependent to a skill in regularSkills. Copy for alchemisticSkills needed. 
		if (name === 'magicalSkills') {
			$('#magicalSkills div.skillInput').addClass('skillDisabled');
			$('#magicalSkills div.skillInput').removeClass('skillChecked');
			delete informationPool['magicalSkills'];
		}
	}

	this.addSkillToList = function(category, skillClass, name, label, rank, legacy, costs) {
		$('div[name="' + legacy + '"]').removeClass('skillDisabled');
		//data should be auto-collected by model, automation needed here.
		informationPool[category][name] = {
			"name" : name, 
			"label" : label,
			"rank" : rank, 
			"costs" : costs
		};

		that.info['epUsed'] = that.info['epUsed'] + (parseInt(costs) * parseInt(rank));

		//exeption, also needed for alchemistic Skills
		if (name === 'magicalSkills') {
			$('#magicalSkills div.skillInput').removeClass('skillDisabled');
		}
	}

	this.createSelectBox = function(name, count, wrapper) {
		for (var i = 0; parseInt(count) > i; i++) {
			$(wrapper).append('<option key="' + name + '" name="' + i + '">' + i + '</option>');
		}	
	}

	//reacting of changes / inputs in form and changes actual JSONObject
	//including expeptions of actual case, should be changed in 'casefile' or something similar.
	this.dataCollector = function() {
		$('.skillSelect').on('change', function() {
			if ($(this).attr('disabled') !== 'disabled') {
				var val = $(this).val();
				var cat = $(this).parents('section').attr('id');
				var skillClass = $(this).parents('article').attr('class');
				that.removeSkillFromList(cat, $(this).attr('name'), $(this).parent().find('.skillName').text(), false, $(this).attr('legacy'));

				if ((that.info['epUsed'] + (parseInt($(this).attr('costs')) * parseInt(val))) <= that.info['epTotal']) {
					if (val !== '0') {
					that.addSkillToList(cat, skillClass, $(this).attr('name'), $(this).parent().find('.skillName').text(), parseInt(val), $(this).attr('legacy'), parseInt($(this).attr('costs')));
					} else {
						alert('So viele EPs hast du nicht zur Verfügung.');
					}	

					that.recalculateEp();
					$('#epUsed').text(that.info['epUsed']);
					$('#epToUse').text(that.info['epTotal'] - that.info['epUsed']);
				}
			}
		})

		$('.skillInput').on('click', function() {
			if ($(this).attr('disabled') !== 'disabled') {
				var cat = $(this).parents('section').attr('id');
				var skillClass = $(this).parents('article').attr('class');
				if ($(this).hasClass('skillChecked')) {
					that.info['epUsed'] = that.info['epUsed'] - parseInt($(this).attr('costs'));
					$(this).removeClass('skillChecked');
					that.removeSkillFromList(cat, $(this).attr('name'), $(this).parent().find('.skillName').text(), false, $(this).attr('legacy'));
				} else {
					if (that.info['epUsed'] + parseInt($(this).attr('costs')) <= that.info['epTotal']) {
						$(this).addClass('skillChecked');	
						that.addSkillToList(cat, skillClass, $(this).attr('name'), $(this).parent().find('.skillName').text(), 1, $(this).attr('legacy'), parseInt($(this).attr('costs')));
		
					} else {
						alert('So viele EPs hast du nicht zur Verfügung.');
					}	
				}	
				that.recalculateEp();
				$('#epUsed').text(that.info['epUsed']);
				$('#epToUse').text(that.info['epTotal'] - that.info['epUsed']);
			}
		});


		//case exeptions
		$('input[name="dfCount"]').on('keyup', function() { 
			that.info.dfCount = parseInt($(this).val());
			that.info['epDF'] = that.info['dfCount'] * that.info['epPerDF']; 
			that.recalculateEp();
		})

		$('input[name="dayCount"]').on('keyup', function() {
			that.info['dayCount'] = parseInt($(this).val());
			that.info['dayCount'] = parseInt($(this).val());
			that.info['epDays'] = Math.round(that.info['dayCount'] / 10);
			that.info['epDF'] = that.info['dfCount'] * that.info['epPerDF'];
			that.recalculateEp();
		})

		$('input[name="charName"]').on('keyup', function() {
			informationPool['informations'].characterName = $(this).val();
		});

		$('input[name="charCamp"]').on('keyup', function() {
			informationPool['informations'].camp = $(this).val();
		});

		$('input[name="playerName"]').on('keyup', function() {
			informationPool['informations'].playerName = $(this).val();
		});	
	}

	this.uiFunctions = function() {
		$('label').on('click', function() {
			$(this).find('.descriptiontext').toggle();
		});

		$( "#skillTabs" ).tabs();
		$('#epTotal').text(that.info['epTotal']);
		$('#epToUse').text(parseInt(that.info['epTotal']) - that.info['epUsed']);
	}	
}
