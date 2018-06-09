//tabs
$(document).ready(function() {
	// Variables
	var clickedTab = $(".tabs > .active");
	var tabWrapper = $(".tab__content");
	var activeTab = tabWrapper.find(".active");
	var activeTabHeight = activeTab.outerHeight();

	// Show tab on page load
	activeTab.show();

	// Set height of wrapper on page load
	tabWrapper.height(activeTabHeight);

	$(".tabs > li").on("click", function() {
		// Remove class from active tab
		$(".tabs > li").removeClass("active");

		// Add class active to clicked tab
		$(this).addClass("active");

		// Update clickedTab variable
		clickedTab = $(".tabs .active");

		// fade out active tab
		activeTab.fadeOut(250, function() {
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");

			// Get index of clicked tab
			var clickedTabIndex = clickedTab.index();

			// Add class active to corresponding tab
			$(".tab__content > li")
				.eq(clickedTabIndex)
				.addClass("active");

			// update new active tab
			activeTab = $(".tab__content > .active");

			// Update variable
			activeTabHeight = activeTab.outerHeight();

			// Animate height of wrapper to new tab height
			tabWrapper
				.stop()
				.delay(50)
				.animate(
					{
						height: activeTabHeight
					},
					500,
					function() {
						// Fade in active tab
						activeTab.delay(50).fadeIn(250);
					}
				);
		});
	});

	$("nav > a").on("click", function() {
		console.log("nav clicked",this)
		$("nav > a").removeClass("active");
		// Add class active to clicked tab
		$(this).addClass("active");

		// Update clickedTab variable
		clickedNav = $(this);

		// toggle tabs
		toggleTabs(clickedNav.hasClass("tabsOn"))

		// fade out active tab
		activeTab.fadeOut(250, function() {
			// Remove active class all tabs
			$(".tab__content > li").removeClass("active");

			// Get index of clicked tab
			console.log('id',clickedNav.attr('id'))
			var clickedTabIndex = parseInt(clickedNav.attr('id'));
			console.log("length",$(".tabs > li").length,"clicked index",clickedTabIndex)

			// Add class active to corresponding tab
			$(".tab__content > li")
				.eq(clickedTabIndex)
				.addClass("active");

			// update new active tab
			activeTab = $(".tab__content > .active");

			// Update variable
			activeTabHeight = activeTab.outerHeight();

			// Animate height of wrapper to new tab height
			tabWrapper
				.stop()
				.delay(50)
				.animate(
					{
						height: activeTabHeight
					},
					500,
					function() {
						// Fade in active tab
						activeTab.delay(50).fadeIn(250);
					}
				);
		});
	});

	// Variables
	var colorButton = $(".colors li");

	colorButton.on("click", function() {
		// Remove class from currently active button
		$(".colors > li").removeClass("active-color");

		// Add class active to clicked button
		$(this).addClass("active-color");

		// Get background color of clicked
		var newColor = $(this).attr("data-color");

		// Change background of everything with class .bg-color
		$(".bg-color").css("background-color", newColor);

		// Change color of everything with class .text-color
		$(".text-color").css("color", newColor);
	});


	var r = 105
	for (var i=0; i<=1; i+=0.5) {
		var theta = 2*Math.PI/4*i
		var x = r*Math.cos(theta)
		var y = r*Math.sin(theta)
		console.log("for theta",theta,"x:",x,"y:",y)
	}
});

//end of tabs

function toggleTabs(on) {
	console.log(on)
	var str;
	if (on)  {
		$(".tabs").fadeIn(250)
		// Remove class from active tab
		$(".tabs > li").removeClass("active");
		// Add class active to clicked tab
		$(".tabs").children().first().addClass("active");
	}
	else 
		$(".tabs").fadeOut(250)

}

