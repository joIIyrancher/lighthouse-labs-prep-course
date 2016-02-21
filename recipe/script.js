$(document).ready(function() {
	console.log("script.js is connected!");
	$('img').click(
		function() {
			$(this).hide();
		}
	);
});