var data = {
	'pageTitle': 'Тест по программированию',
	'categories': [{
		'categoryName': 'Вопрос №1',
		'categoryList': [{
			'href': 'http://q1.com',
			'title': 'Вариант ответа №1 '
		},
		{
			'href': 'http://q2.com',
			'title': 'Вариант ответа №2'
		},
				{
			'href': 'http://q3.com',
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'categoryName': 'Вопрос №2',
		'categoryList': [{
			'href': 'http://q.com',
			'title': 'Вариант ответа №1'
		},
		{
			'href': 'http://q.com',
			'title': 'Вариант ответа №2'
		},
		{
			'href': 'http://q.com',
			'title': 'Вариант ответа №3'
		}]
	},
	{
		'categoryName': 'Вопрос №3',
		'categoryList': [{
			'href': 'http://q.com',
			'title': 'Вариант ответа №1'
		},
		{
			'href': 'http://q.com',
			'title': 'Вариант ответа №2'
		},
		{
			'href': 'http://q.com',
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
	},
	buildList: function() {
		for(var i = 0; i < data.categories.length; i++) {
			var categoryBox = document.createElement('div');
			categoryBox.className = 'categoryBox';
			document.querySelector('.wrapper').appendChild(categoryBox);
			var titleCategory = document.createElement('h3');
			titleCategory.innerHTML = data.categories[i].categoryName;
			categoryBox.appendChild(titleCategory);

			var listWrap = document.createElement('ul');
			categoryBox.appendChild(listWrap);

			for(var j = 0; j < data.categories[i].categoryList.length; j++) {
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
				listItem_link.innerHTML = data.categories[i].categoryList[j].title;
				label.appendChild(listItem_link);

				// var listItem_link = document.createElement('a');
				// listItem_link.innerHTML = data.categories[i].categoryList[j].title;
				// listItem_link.setAttribute('href', data.categories[i].categoryList[j].href);
				// listItem.appendChild(listItem_link);
			}
		}
			var btnDiv = document.createElement('div');
			btnDiv.className ='text-center';
			document.querySelector('.wrapper').appendChild(btnDiv);

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


