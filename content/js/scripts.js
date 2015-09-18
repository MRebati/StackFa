$(".search-input").focus(function  () {
	$(".search-home").addClass("active");
});
$(".search-input").blur(function  () {
	$(".search-home").removeClass("active");
});