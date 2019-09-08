$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event) {
	if (event.which === 13) {
		let textVal = $(this).val();
		$(this).val("");
		$("ul").append(getLi(textVal));
	}
});

$(".fa-plus").on("click", function() {
	$("input[type='text']").fadeToggle();
});

function getLi(text) {
	return "<li><span><i class='fa fa-trash'></i></span> " + text + "</li>";
}
