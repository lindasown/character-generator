function generator() {
	
	var that = this;
	this.info = informationPool['informations'];
	info['epTotal'] = info['epBase'];
	


	/*for (var skillIter in regularSkills) {	
		var data = regularSkills[skillIter];
		generateForm('regularSkills', data)	
	}


	for (var skillIter in regularSkills) {	
		var data = regularSkills[skillIter];
		generateForm('regularSkills', data)	
	}*/

	this.init = function() {
		var datalist = Object.keys(regularSkills);
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
	}


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
		info['epTotal'] = info['epBase'] + info['epDF'] + info['epDays'];
		$('#epTotal').text(info['epTotal']);
		$('#epToUse').text(info['epTotal'] - info['epUsed']);
	}

	this.removeSkillFromList = function(category, name, label, rank, legacy, costs) {
		$('div[name="' + legacy + '"]').addClass('skillDisabled');
		$('div[name="' + legacy + '"]').removeClass('skillChecked');
		delete informationPool[category][legacy];
		delete informationPool[category][name];

		info['epUsed'] = info['epUsed'] - (parseInt(costs) * parseInt(rank));


		if (name === 'magicalSkills') {
			$('#magicalSkills div.skillInput').addClass('skillDisabled');
			$('#magicalSkills div.skillInput').removeClass('skillChecked');
			delete informationPool['magicalSkills'];
		}
		
	}

	this.addSkillToList = function(category, skillClass, name, label, rank, legacy, costs) {
		$('div[name="' + legacy + '"]').removeClass('skillDisabled');
		informationPool[category][name] = {
			"name" : name, 
			"label" : label,
			"rank" : rank, 
			"costs" : costs
		};

		info['epUsed'] = info['epUsed'] + (parseInt(costs) * parseInt(rank));

		if (name === 'magicalSkills') {
			$('#magicalSkills div.skillInput').removeClass('skillDisabled');
		}
	}

	this.createSelectBox = function(name, count, wrapper) {
		for (var i = 0; parseInt(count) > i; i++) {
			$(wrapper).append('<option key="' + name + '" name="' + i + '">' + i + '</option>');
		}	
	}

	$('.skillSelect').on('change', function() {
		if ($(this).attr('disabled') !== 'disabled') {
			var val = $(this).val();
			var cat = $(this).parents('section').attr('id');
			var skillClass = $(this).parents('article').attr('class');
			that.removeSkillFromList(cat, $(this).attr('name'), $(this).parent().find('.skillName').text(), false, $(this).attr('legacy'));



			if ((info['epUsed'] + (parseInt($(this).attr('costs')) * parseInt(val))) <= info['epTotal']) {
				if (val !== '0') {
				that.addSkillToList(cat, skillClass, $(this).attr('name'), $(this).parent().find('.skillName').text(), parseInt(val), $(this).attr('legacy'), parseInt($(this).attr('costs')));
				} else {
					alert('So viele EPs hast du nicht zur Verf�gung.');
				}	

				that.recalculateEp();
				$('#epUsed').text(info['epUsed']);
				$('#epToUse').text(info['epTotal'] - info['epUsed']);
			}
		
		}
	})

	$('.skillInput').on('click', function() {
		if ($(this).attr('disabled') !== 'disabled') {
			var cat = $(this).parents('section').attr('id');
			var skillClass = $(this).parents('article').attr('class');
			if ($(this).hasClass('skillChecked')) {
				info['epUsed'] = info['epUsed'] - parseInt($(this).attr('costs'));
				$(this).removeClass('skillChecked');
				that.removeSkillFromList(cat, $(this).attr('name'), $(this).parent().find('.skillName').text(), false, $(this).attr('legacy'));
			} else {
				if (info['epUsed'] + parseInt($(this).attr('costs')) <= info['epTotal']) {
					$(this).addClass('skillChecked');	
					that.addSkillToList(cat, skillClass, $(this).attr('name'), $(this).parent().find('.skillName').text(), 1, $(this).attr('legacy'), parseInt($(this).attr('costs')));
	
				} else {
					alert('So viele EPs hast du nicht zur Verf�gung.');
				}	
			}	
			that.recalculateEp();
			$('#epUsed').text(info['epUsed']);
			$('#epToUse').text(info['epTotal'] - info['epUsed']);
		}
	});

	$('label').on('click', function() {
		$(this).find('.descriptiontext').toggle();
	});

	$('input[name="dfCount"]').on('keyup', function() { 
		info.dfCount = parseInt($(this).val());
		info['epDF'] = info['dfCount'] * info['epPerDF']; 
		that.recalculateEp();
	})

	$('input[name="dayCount"]').on('keyup', function() {
		info['dayCount'] = parseInt($(this).val());
		info['dayCount'] = parseInt($(this).val());
		info['epDays'] = Math.round(info['dayCount'] / 10);
		info['epDF'] = info['dfCount'] * info['epPerDF'];
		that.recalculateEp();
	})

	$('input[name="charName"]').on('keyup', function() {
		informationPool[4]['informations'].characterName = $(this).val();
	})

	$('input[name="charCamp"]').on('keyup', function() {
		informationPool[4]['informations'].camp = $(this).val();
	})

	$('input[name="playerName"]').on('keyup', function() {
		informationPool[4]['informations'].playerName = $(this).val();
	})

	$( "#skillTabs" ).tabs();

	
	
	$('#epTotal').text(info['epTotal']);
	$('#epToUse').text(parseInt(info['epTotal']) - info['epUsed']);

	
	

}

