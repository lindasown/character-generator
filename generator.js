<script>

var epBase = 15;
var epPerDF = 1;
var epPerTenDays = 1;

var regularSkills	= {[
			{
				"name" :		"onehandedweapons", 
				"label-de" :	"Einh�ndige Waffen nutzen",
				"label-en" :	"One handed weapons",
				"description" : "<p>Mit dieser Charakterfertigkeit darf der Charakter einh�ndige Waffen bis zu einer maximalen L�nge von 115cm f�hren. Hierzu z�hlen z. B. auch Dolche und Wurfwaffen.</p>" +
								"<p>Hinweis: Diese Charakterfertigkeit ist Voraussetzung f�r die Fertigkeit �Kampf mit zwei Waffen�.</p>",
				"epCosts" :		1, 
				"condition" :	false, 
				"max":			false,
				"type" :		"check"
			}, 
			{
				"name" :		"twohandedweapons", 
				"label-de" :	"Zweih�ndige Waffen nutzen",
				"label-en" :	"Two handed weapons",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter zweih�ndige Waffen bis zu einer maximalen L�nge von 180cm f�hren.",
				"epCosts" :		2, 
				"condition" :	false, 
				"max":			false
				"type" :		"check"
			}, {
				"name" :		"poleweapons", 
				"label-de" :	"Stangenwaffen nutzen",
				"label-en" :	"Pole weapons",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter Stangenwaffen bis zu einer maximalen L�nge von 250cm f�hren."
				"epCosts" :		2, 
				"condition" :	false, 
				"max":			false
				"type" :		"check"
			}, {
				"name" :		"ambidexterity", 
				"label-de" :	"Kampf mit zwei Waffen",
				"label-en" :	"Ambidexterity",
				"description" : "Mit dieser Charakterfertigkeit darf der Charakter gleichzeitig zwei einh�ndige Waffen bis zu einer jeweiligen maximalen L�nge von 115cm f�hren.</p>" + 
								"Hinweis: Voraussetzung f�r diese Fertigkeit ist der Besitz der Fertigkeit �Einh�ndige Waffen nutzen�."
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