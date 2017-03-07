
(function () {

	var links = [];
	var rows = document.getElementsByClassName('row-content-holder');

	// find "more" links 
	for (var i = 0; i < rows.length; i++) {
		var a = rows[i].getElementsByTagName('a');
		for (var j = 0; j < a.length; j++) {
			var elem = a[j];
			if (elem.className === 'blue') {
				links.push(elem);

				// only click if description is not visible already
				if (elem.text.indexOf('more') > -1) {
					elem.click();
				}
			}
		}
	}

	// wait for all descriptions to be visible
	var timer = setInterval(function () {
		var descs = document.getElementsByClassName('taskDescWrap');
		if (descs.length === links.length) {
			clearInterval(timer);
			window.print();
		}
	}, 200);
})();