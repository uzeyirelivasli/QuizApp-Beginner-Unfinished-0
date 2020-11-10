
    const first = document.querySelector('#first');
    const question = document.querySelector('#question');
    const img = document.querySelector('#img');
    const answer1 = document.querySelector('.answer1');
    const answer2 = document.querySelector('.answer2');
    const answer3 = document.querySelector('.answer3');
    const answer4 = document.querySelector('.answer4');
    const button = document.querySelector('#start-next-check-btn');
    const inputs = document.getElementsByClassName('input');
    const answers = document.querySelector('#answers');



//check only one checkbox at a time
$('.input').on('change', function() {
    $('.input').not(this).prop('checked', false);  
});

