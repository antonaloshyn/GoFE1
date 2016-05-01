function GoogleCallback(jqueryObj, data) {
		
		var resultObj = data.results;
		console.log('data', resultObj);
		$('.js-result').find('li').remove();

		for(var i = 0; i < resultObj.length; i++) {
			console.log(resultObj[i]);
			var item = '<li>'+
				'<a href="'+resultObj[i].url+'" target="_blank">'+resultObj[i].title+'</a>'+
				'<p>'+resultObj[i].visibleUrl+'</p>'+
				'<p class="contentBox">'+resultObj[i].content+'</p>'+
				'</li>';

			$('.js-result').append(item);
			
		}

	}
		
	$(function(){
		function search() {
			var inputTxt = $('.js-input').val();
			
			$.ajax({
			    // AJAX-specified URL
			   url: 'http://ajax.googleapis.com/ajax/services/search/web?v=1.0&key=ABQIAAAACKQaiZJrS0bhr9YARgDqUxQBCBLUIYB7IF2WaNrkYqF0tBovNBQFDtM_KNtb3xQxWff2mI5hipc3lg&rsz=large&q='+inputTxt+'&callback=GoogleCallback&context=?',
			   dataType : "jsonp",
			   // Handle the success event
			   success: function (data) {
			      
			   }
			});
		}

	$('body').on('click', '.js-btn', function(){
		search();

	});
	$(document).keypress(function(e) {
	    if(e.which == 13) {
	    	e.preventDefault();
	        search();
	    }
	});

	// PROTOTYPE
	function Human() {
		this.name = 'Denis',
		this.age = 19,
		this.sex = 'male',
		this.height = 175,
		this.weight = 90
	}	

	function Worker() {
		this.job = 'IT company',
		this.salary = 100,
		this.working = function() {
			console.log('work');
		}
	}

	function Student() {
		this.education = 'KPI',
		this.grant = 200,
		this.watching = function() {
			console.log('watch');
		}
	}

Worker.prototype = new Human();
Student.prototype = new Human();

var newStudent = new Student();
newStudent.watching();

var newWorker = new Worker();
newWorker.working();

});