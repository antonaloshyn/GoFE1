$.getJSON('https://raw.githubusercontent.com/goit-fe/markup_fe2o/master/js_19-20/data.json', function(data){
		 var skills = [];
		 var names = [];
		 var friends = [];

		for(var i = 0; i< data.length; i++){
		 	for(var j = 0; j<data[i].skills.length;j++){
		 		skills.push(data[i].skills[j].toLowerCase());
		 	}
		 }
		  skills = _.uniq(skills).sort();
		  console.log('Array with skills sorted by alphabet', skills);
 
		 var obj = {};
		 for(var i = 0; i<data.length; i++){
		 	obj[data[i].name] = data[i].friends.length;
		 }
		 var sorted= _.toPairs(obj);
		 sorted.sort(function(a, b) {return a[1] - b[1]});
		 sorted.reverse();
		 for (var i = 0; i<sorted.length;i++){
		 	names.push((sorted[i][0]));
		 }
		 console.log('Array with names sorted by number of friends',names);

		 for (var i = 0; i<data.length; i++){
		 		for(var j = 0; j<data[i].friends.length;j++){
		 			friends.push((data[i].friends[j].name));
		 		}
		 	}
		 friends = _.uniq(friends);
		 console.log('Array of user friends', friends);
})
