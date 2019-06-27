const fs = require("fs");
$(document).ready(function(){


	var projects = [];

	fs.readdir("projects", function(err, items) {
		projects.push("ellonigger");
		var scope = angular.element($('[ng-controller="ctrl"]')).scope();


		for (var i=0; i<items.length; i++) {
			scope.$apply(function(){
				scope.projects.push(items[i].split('.')[0]);
			});
		}
	});



	$(document).on('click','.projects', function(){

	});
});
