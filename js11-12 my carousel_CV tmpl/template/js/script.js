'use strict'
$(function(){

	var html = $('#resume').html();
	console.log(html);

	var myResume = [
			{	
				name: 'Антон Алёшин',
				img: './img/userpic.jpg',
				info: 'Будущий повелитель тегов'
			},
			{	
				reasons: ['Это круто',
				'Люблю, когда на сайте всё красиво и двигается',
				'Меня заставляют это делать мои кредиторы']
			},
			{
			
				tel: '050-050-50-50',
				vk: 'https://vk.com/anton_aloshyn'
			},
			{
			
				feedback:'На меня можно положиться, если я сам сейчас на ком-то не лежу'
			}
		];

	var content = tmpl(html,{
		data: myResume
	});

	$('body').append(content);

});