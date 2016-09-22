$(document).ready(function(){

	$("img").click(function(){
		$(this).animate({
			opacity: 0.25
		},
		500,
		function(){
			$(this).animate({
				opacity: 1
			},
			500
			);
		});
	});
});