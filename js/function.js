function setLogo() {
	setInterval(
		function() {
			var index = Math.floor(Math.random() * Math.floor(3));
			if (index == 0){
				document.getElementById("profile_logo").src = "../images/GA_Red.png";
			} else if (index == 1) {
				document.getElementById("profile_logo").src = "../images/GA_Black.png";
			} else if (index == 2) {
				document.getElementById("profile_logo").src = "../images/GA_White.png";
			}
		}, 1000
	)
}

