function setLogo() {
	setInterval(
		function() {
			var index = Math.floor(Math.random() * Math.floor(3));
			if (index == 0){
				document.getElementById("profile_logo").src = "../images/GA - Red.png";
			} else if (index == 1) {
				document.getElementById("profile_logo").src = "../images/GA - Black.png";
			} else if (index == 2) {
				document.getElementById("profile_logo").src = "../images/GA - White.png";
			}
		}, 1000
	)
}

