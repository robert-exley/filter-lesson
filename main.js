$(document).ready(function () {
	$(".filter").on("click", function (e) {
		{
			$(this).toggleClass(".item");
			e.preventDefault();

			var button = $(this);
			var filter = button.data("filter");

			if (filter === "all") {
				$(".item").addClass("active");
			} else {
				$(".item.active").removeClass("active");
				$("." + filter).addClass("active");
			}
			if (filter === "reset") {
				$(".item").removeClass("active");
			}
		};
	});

});
