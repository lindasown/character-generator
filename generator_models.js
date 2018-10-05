informationPool = {
	"regularSkills" : {
	}, 
	"magicalSkills" : {
	},
	"alchemisticBasicSkills" : {
	},
	"alchemisticAdvSkills" : {
	},
	"informations" : {
		"characterName" : '',
		"camp" : '',
		"playerName" : '',
		"dfCount" : 0,
		"dayCount" : 0, 
		"epBase" : 15,
		"epUsed" : 0,
		"epPerDF" : 1,
		"epPerTenDays" : 1,
		"epTotal" : 0,
		"epDF" : 0,
		"epDays" : 0, 
		"language" : 'DE'
	}
}

var regularSkills = {
	"fight" : {
		"title" : "Kampffertigkeiten",
		"onehandedweapons" : {
			"name" :		"onehandedweapons", 
			"label-de" :	"Einhändige Waffen nutzen",
			"label-en" :	"One handed weapons",
			"description" : "<p>Mit dieser Charakterfertigkeit darf der Charakter einhändige Waffen bis zu einer maximalen Länge von 115cm führen. Hierzu zählen z. B. auch Dolche und Wurfwaffen.</p>" +
							"<p>Hinweis: Diese Charakterfertigkeit ist Voraussetzung für die Fertigkeit «Kampf mit zwei Waffen».</p>",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"legacy":		"ambidexterity",
			"max":			false,
			"type" :		"check"
		}, 
		"twohandedweapons" : {
			"name" :		"twohandedweapons", 
			"label-de" :	"Zweihändige Waffen nutzen",
			"label-en" :	"Two handed weapons",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter zweihändige Waffen bis zu einer maximalen Länge von 180cm führen.",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		},
		"poleweapons" : {
			"name" :		"poleweapons", 
			"label-de" :	"Stangenwaffen nutzen",
			"label-en" :	"Pole weapons",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter Stangenwaffen bis zu einer maximalen Länge von 250cm führen.",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"ballisticweapons" : {
			"name" :		"ballisticweapons", 
			"label-de" :	"Schusswaffen nutzen",
			"label-en" :	"Ballistic weapons",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter zweihändige Waffen bis zu einer maximalen Länge von 180cm führen.",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"siegeweapons" : {
			"name" :		"siegeweapons", 
			"label-de" :	"Belagerungs- und übergrosse Schusswaffen nutzen",
			"label-en" :	"Siege weapons",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter zweihändige Waffen bis zu einer maximalen Länge von 180cm führen.",
			"epCosts" :		3, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"ambidexterity" : {
			"name" :		"ambidexterity", 
			"label-de" :	"Kampf mit zwei Waffen",
			"label-en" :	"Ambidexterity",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	"onehandedweapons", 
			"max":			false,
			"type" :		"check"
		}, 
		"brawling" : {
			"name" :		"brawling", 
			"label-de" :	"Nahkampf, + 1 Rang",
			"label-en" :	"Brawling, + 1 Rank",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		9,
			"condition" :	false, 
			"max":			false,
			"type" :		"number"
		}, 
		"shielduse" : {
			"name" :		"shielduse", 
			"label-de" :	"Schild nutzen",
			"label-en" :	"shield use",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		3, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	}, 
	"armour" : {
		"title" : "Dargestellte Rüstung",
		"lightarmour" : {
			"name" :		"lightarmour", 
			"label-de" :	"Leichte Rüstung",
			"label-en" :	"light armour",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"mediumarmour" : {
			"name" :		"mediumarmour", 
			"label-de" :	"Mittlere Rüstung",
			"label-en" :	"medium armour",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		4, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"heavyarmour" : {
			"name" :		"heavyarmour", 
			"label-de" :	"Schwere Rüstung",
			"label-en" :	"heavy armour",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		8, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	}, 
	"healing" : {
		"title" : "Heilkunde",
		"firstaid" : {
			"name" :		"firstaid", 
			"label-de" :	"Erste Hilfe",
			"label-en" :	"First Aid",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"legacy":		"healing",
			"max":			false,
			"type" :		"check"
		}, 
		"healing" : {
			"name" :		"healing", 
			"label-de" :	"Heilkunde",
			"label-en" :	"Healing",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	"firstaid", 
			"legacy":		"medicine",
			"max":			false,
			"type" :		"check"
		}, 
		"medicine" : {
			"name" :		"medicine", 
			"label-de" :	"Arztkunde",
			"label-en" :	"Medicine",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		4, 
			"rank" :		false,
			"condition" :	"healing", 
			"max":			false,
			"type" :		"check"
		}
	}, 
	"varia" : {
		"title" : "Diverses", 
		"bodyregeneration" : {
			"name" :		"bodyregeneration", 
			"label-de" :	"Regeneration",
			"label-en" :	"body regeneration",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"toughess" : {
			"name" :		"toughness", 
			"label-de" :	"Zähigkeit",
			"label-en" :	"toughness",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	}, 
	"adventure" : {
		"title" : "Abenteuerfähigkeiten", 
		"makefire" : {
			"name" :		"makefire", 
			"label-de" :	"Feuer machen",
			"label-en" :	"Make Fire",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"pick" : {
			"name" :		"pick", 
			"label-de" :	"Schlösser öffnen / bauen",
			"label-en" :	"Pick / Build Locks",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"findtraps" : {
			"name" :		"findtraps", 
			"label-de" :	"Fallen finden / entschärfen / bauen",
			"label-en" :	"Find / Disarm / Build Traps",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		3, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"readwrite" : {
			"name" :		"readwrite", 
			"label-de" :	"Lesen und Schreiben",
			"label-en" :	"Read / Write",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"basicmathematics" : {
			"name" :		"basicmathematics", 
			"label-de" :	"Zählen und Rechnen",
			"label-en" :	"Basic Mathematics",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"herbalism" : {
			"name" :		"herbalism", 
			"label-de" :	"Kräuteranbau / Tierzucht",
			"label-en" :	"Herbalism / Animal Breeding",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	}, 
	"craft" : {
		"title" : "Handwerk", 
		"woodwork" : {
			"name" :		"woodwork", 
			"label-de" :	"Holzarbeiten / Schild und Wehranlagen reparieren",
			"label-en" :	"Wood Work / Repair Shield and Defence Constructions",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"leatherwork" : {
			"name" :		"leatherwork", 
			"label-de" :	"Lederarbeiten / Lederrüstung reparieren",
			"label-en" :	"Leather Work / Repair Leather Armour",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"metalwork" : {
			"name" :		"metalwork", 
			"label-de" :	"Metallarbeiten / Metallrüstung reparieren",
			"label-en" :	"Metal Work / Repair Metal Armour",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		3, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	},
	"access" : {
		"title" : "Zugänge zu Sonderfähigkeiten",
		"magicalSkills" : {
			"name" :		"magicalSkills", 
			"label-de" :	"Magiefertigkeiten",
			"label-en" :	"Magical Skills",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"legacy" :		"magicalSkills",
			"max":			false,
			"type" :		"check"
		}, 
		"simpleAlchemisticSkills" : {
			"name" :		"simpleAlchemisticSkills", 
			"label-de" :	"einfache Alchemiefähigkeiten",
			"label-en" :	"simple Alchemistic Skills",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}, 
		"advancesAlchemisticSkills" : {
			"name" :		"advancedAlchemisticSkills", 
			"label-de" :	"erweiterte Alchemiefähigkeiten",
			"label-en" :	"advanced Alchemistic Skills",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	false, 
			"max":			false,
			"type" :		"check"
		}
	}, "resistances" : {
		"title" : "Resistenzen",
		"damageResistance" : {
			"name" :		"damageResistance", 
			"label-de" :	"+1 Rang Schadensresistenz",
			"label-en" :	"+1 Rank Damage Resistance",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		4, 
			"rank" :		9,
			"condition" :	false, 
			"max":			false,
			"type" :		"number"
		}, 
		"magicResistance" : {
			"name" :		"magicResistance", 
			"label-de" :	"+1 Rang Magieresistenz",
			"label-en" :	"+1 Rank Magic Resistance",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		9,
			"condition" :	false, 
			"max":			false,
			"type" :		"number"
		}, 
		"alchemisticResistance" : {
			"name" :		"alchemisticResistance", 
			"label-de" :	"+1 Rang Alchemieresistenz",
			"label-en" :	"+1 Rank Alchemistic Resistance",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		9,
			"condition" :	false, 
			"max":			false,
			"type" :		"number"
		}
	}
}

var magicalSkills	= {
	"timelimitedCurses" : {
		"title" : "Zeitlich begrenzte Zauber", 
		"blindness" : {
			"name" :		"blindness", 
			"label-de" :	"Blindheit",
			"label-en" :	"Blindness",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"condition" :	'magicalSkills', 
			"rank" :		false,
			"max":			false,
			"type" :		"check"
		},
		"mute" : {
			"name" :		"mute", 
			"label-de" :	"Schweigen",
			"label-en" :	"Mute",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	'magicalSkills', 
			"max":			false,
			"type" :		"check"
		}, 
		"deafness" : {
			"name" :		"deafness", 
			"label-de" :	"Taubheit",
			"label-en" :	"Deafness",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	'magicalSkills', 
			"max":			false,
			"type" :		"check"
		}, 
		"sleep" : {
			"name" :		"sleep", 
			"label-de" :	"Schlaf",
			"label-en" :	"Sleep",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		2, 
			"rank" :		false,
			"condition" :	'magicalSkills', 
			"max":			false,
			"type" :		"check"
		}
	},
	"offensiveMagic" : {
		"title" : "Offensive Zauber", 
		"gustOfWind" : {
			"name" :		"gustOfWind", 
			"label-de" :	"Windstoss",
			"label-en" :	"Gust of Wind",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		1, 
			"rank" :		false,
			"condition" :	'magicalSkills', 
			"max":			false,
			"type" :		"check"
		}, 
		"energyball" : {
			"name" :		"energyball", 
			"label-de" :	"Energieball",
			"label-en" :	"Energyball",
			"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
							"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen».",
			"epCosts" :		4, 
			"rank" :		false,
			"condition" :	'magicalSkills', 
			"max":			false,
			"type" :		"check"
		}
	}
};
var alchemisticBasicSkills	= {};
var alchemisticAdvSkills	= {};