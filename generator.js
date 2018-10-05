<script>

var epBase = 15;
var epPerDF = 1;
var epPerTenDays = 1;

var regularSkills	= {[
			{
				"name" :		"onehandedweapons", 
				"label-de" :	"Einhändige Waffen nutzen",
				"label-en" :	"One handed weapons",
				"description" : "<p>Mit dieser Charakterfertigkeit darf der Charakter einhändige Waffen bis zu einer maximalen Länge von 115cm führen. Hierzu zählen z. B. auch Dolche und Wurfwaffen.</p>" +
								"<p>Hinweis: Diese Charakterfertigkeit ist Voraussetzung für die Fertigkeit «Kampf mit zwei Waffen».</p>",
				"epCosts" :		1, 
				"condition" :	false, 
				"max":			false,
				"type" :		"check"
			}, 
			{
				"name" :		"twohandedweapons", 
				"label-de" :	"Zweihändige Waffen nutzen",
				"label-en" :	"Two handed weapons",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter zweihändige Waffen bis zu einer maximalen Länge von 180cm führen.",
				"epCosts" :		2, 
				"condition" :	false, 
				"max":			false
				"type" :		"check"
			}, {
				"name" :		"poleweapons", 
				"label-de" :	"Stangenwaffen nutzen",
				"label-en" :	"Pole weapons",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter Stangenwaffen bis zu einer maximalen Länge von 250cm führen."
				"epCosts" :		2, 
				"condition" :	false, 
				"max":			false
				"type" :		"check"
			}, {
				"name" :		"ambidexterity", 
				"label-de" :	"Kampf mit zwei Waffen",
				"label-en" :	"Ambidexterity",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einhändige Waffen bis zu einer jeweiligen maximalen Länge von 115cm führen.</p>" + 
								"Hinweis: Voraussetzung für diese Fertigkeit ist der Besitz der Fertigkeit «Einhändige Waffen nutzen»."
				"epCosts" :		2, 
				"condition" :	"onehandedweapons", 
				"max":			false
				"type" :		"check"
			}

]};
var magicalSkills	= {};
var alchemicSkills	= {};







</script>

<form>
	<label for="onehandedweapons"><input type="checkbox" name="onehandedweapons">

</form>