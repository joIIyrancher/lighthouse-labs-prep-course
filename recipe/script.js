$(document).ready(function() {
	console.log("script.js is connected!");
	$('img').click(function() {
		$(this).hide();
	});

	$('li.ingredient_items').click(function() {
		$(this).toggleClass('item-bought');
	});
});