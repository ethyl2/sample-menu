$(document).ready(function(){
	var veg = false;

	$("button#vegOn").click(function() {
		if (veg == false) {
			veg = true;
			makeSubstitutions();
		}
	}) //end vegOn click handler

	$("button#restoreMe").click(function() {
		if (veg == true) {
			veg = false;
			restoreMenu();
		}
	}) //end restoreMe click handler

	function makeSubstitutions() {
		$f = $("li.fish").parent().parent().detach();
		$("li.hamburger").replaceWith("<li class='portobello substitution'><em>giant portobello mushrooms</em></li>");
		$(".meat").after("<li class='tofu substitution'><em>tofu</em></li>");
		$m = $(".meat").detach();
		$(".substitution").parent().parent().addClass("veg_leaf");
	} //end makeSubstitutions function

	function restoreMenu() {
		$(".substitution").parent().parent().removeClass("veg_leaf");
		$(".menu_entrees li").first().before($f);
		$("li.portobello").replaceWith("<li class='hamburger'>hamburger</li>");
		$(".tofu").each(function(i) {
			$(this).after($m[i]);
		});
		$("li.tofu").detach();
	} //end restoreMenu function

}); //end document ready function
