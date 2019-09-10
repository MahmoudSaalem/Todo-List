$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

$("ul").on("click", "span", function(event) {
	$(this).parent().parent().slideUp(200, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

$("input").on("keypress", function(event) {
	if (event.which === 13 && $(this).val().replace(/\s/g, "") != "") {
		let textVal = $(this).val();
		$(this).val("");
		$("ul div").removeAttr("id");
		$("ul").append(getLi(textVal));
		$("#last").slideDown(200);
	}
});

$(".fa-plus").on("click", function() {
	$("#input").slideToggle();
});

function getLi(text) {
	return "<div id='last' style='display: none;'><li><span><i class='fa fa-trash'></i></span> " + text + "</li></div>";
}
