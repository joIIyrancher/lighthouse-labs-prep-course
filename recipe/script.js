$(document).ready(function() {
	console.log("script.js is connected!");
	$('img').click(function() {
		$(this).hide();
	});

	$('li.ingredient_items').click(function() {
		$(this).toggleClass('item-bought');
	});

	$('div').hover(function() {
		$(this).css("background-color", "#FFE4C4");
	}, function() {
		$(this).css("background-color", "#f5f5dc");
	});
});