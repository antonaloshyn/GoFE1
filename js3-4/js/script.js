var data = {
	'pageTitle': 'Тест по программированию',
	'questions': [{
		'questionName': 'Вопрос №1',
		'questionList': [{
			'title': 'Вариант ответа №1 '
		},
		{
			'title': 'Вариант ответа №2'
		},
				{
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'questionName': 'Вопрос №2',
		'questionList': [{
			'title': 'Вариант ответа №1'
		},
		{
			'title': 'Вариант ответа №2'
		},
		{
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'questionName': 'Вопрос №3',
		'questionList': [{
			'title': 'Вариант ответа №1'
		},
		{
			'title': 'Вариант ответа №2'
		},
		{
			'title': 'Вариант ответа №3'
		}]
	}],
	// 'pageImg': {
	// 	'url': 'https://pp.vk.me/c621330/v621330643/bec4/HKzBQ1kbxPw.jpg',
	// 	'alt': 'альт текст',
	// 	'title': 'title текст'
	// }
}

var page = {
	buildPage: function(){
		var wrapper = document.createElement('div');
		wrapper.className ='wrapper';
		document.body.appendChild(wrapper);
		var titlePage = document.createElement('h2');
		titlePage.innerHTML = data.pageTitle;
		wrapper.appendChild(titlePage);
		var form = document.createElement('form');
		wrapper.appendChild(form);
	},
	buildList: function() {
		for(var i = 0; i < data.questions.length; i++) {
			var questionBox = document.createElement('div');
			questionBox.className = 'questionBox';
			document.querySelector('form').appendChild(questionBox);
			var titleCategory = document.createElement('h3');
			titleCategory.innerHTML = data.questions[i].questionName;
			questionBox.appendChild(titleCategory);

			var listWrap = document.createElement('ul');
			questionBox.appendChild(listWrap);

			for(var j = 0; j < data.questions[i].questionList.length; j++) {
				var listItem = document.createElement('li');
				listItem.className = 'listItem';
				listWrap.appendChild(listItem);
				
				var label = document.createElement('label');
    			listItem.appendChild(label);
				
				var checkbox = document.createElement('input');
				checkbox.className = 'checkbox';
				checkbox.setAttribute('type', 'checkbox');
				label.appendChild(checkbox);
				
				var listItem_link = document.createElement('span');
				listItem_link.className = 'listItem_link';
				listItem_link.innerHTML = data.questions[i].questionList[j].title;
				label.appendChild(listItem_link);

				// var listItem_link = document.createElement('a');
				// listItem_link.innerHTML = data.questions[i].questionList[j].title;
				// listItem_link.setAttribute('href', data.questions[i].questionList[j].href);
				// listItem.appendChild(listItem_link);
			}
		}
			var btnDiv = document.createElement('div');
			btnDiv.className ='text-center';
			document.querySelector('form').appendChild(btnDiv);

			var btn = document.createElement("BUTTON"); 
			btn.className = "btn btn-lg btn-info";       
			var t = document.createTextNode("Проверить мои результаты");       
			btn.appendChild(t);
			btnDiv.appendChild(btn);                                
	},


	pageInit: function() {
		this.buildPage();
		this.buildList();
	}
}

page.pageInit();


