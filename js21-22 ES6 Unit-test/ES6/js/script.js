"use strict";
$(function() {

    let data = {
        pageTitle: 'Тест на общую эрудицию',
        questions: [{
            questionName: "1. Какой сегодня год?",
            variant: [{
                answer: '2013',
                right: false
            }, {
                answer: '2016',
                right: true
            }, {
                answer: '2001',
                right: false
            }, ],
            inputName: ['11', '12', '13'],
        }, {
            
            questionName: "2. Чему равняется величина Пи?",
            variant: [{
                answer: '3,14',
                right: true
            }, {
                answer: '666',
                right: false
            }, {
                answer: '0,001',
                right: false
            }, ],
            inputName: ['21', '22', '23'],
        }, {

            questionName: "3. Чем обычно бьются на Пасху?",
            variant: [{
                answer: 'Руками',
                right: false
            }, {
                answer: 'Головами',
                right: false
            }, {
                answer: 'Куриными яйцами',
                right: true
            }, ],
            inputName: ['31', '32', '33'],
        }],
        result: "Проверить мои ответы"
    };

    //local storage
    localStorage.setItem('questions', JSON.stringify(data));
    let newObj = JSON.parse(localStorage.getItem('questions'));

    //template
    let $html = $('#test').html();
    let $body = $('body');
    let content = tmpl($html, {
        data: newObj
    });
    $body.append(content);
    
// modal window
    let $overlay;
    let $modal = $('.js-modal');
    let $close = $('.js-close');
    let $result = $('.js-result');
    let hideModal = () => {$overlay.remove(); $modal.removeClass('show')};

// verify answers
    let verify = (e) => {
        e.preventDefault();
        $close.one('click', hideModal);

        $overlay = $('<div class="overlay"></div>');
        $body.append($overlay);
        $modal.addClass('show');

        $('.block').each(function() {
            let $_this = $(this);
            $_this.find('input[type="checkbox"]');
        });

        //arr with right answers
        let rightAnswers = [];
        let getRightAnswers = () => {
            for (let value of newObj.questions) {
                for (let value2 of value.variant) {
                    let currentAnswer = value2.right;
                    rightAnswers.push(currentAnswer);
                }
            }
        };
        getRightAnswers();
        
        //arr with user answer
        let userAnswers = [];
        let getUserAnswers = () => {
            $('input[type="checkbox"]').each(function() {
                if ($(this).prop('checked')) {
                    userAnswers.push(true);
                } else {
                    userAnswers.push(false);
                }
            });
        };
        getUserAnswers();
        
        //compare two arrays
        let resultTest = JSON.stringify(rightAnswers) == JSON.stringify(userAnswers);
			if (resultTest) {
			    $result.text('Тест пройден - поздравляем!')
			} else {
			    $result.text('Тест не пройден. Попробуйте еще раз')
			}

        //delete checked
        $('input[type="checkbox"]').each(function() {
            $(this).removeAttr('checked')
        });        
    };

    $('.js-send').on('click', verify);

})
