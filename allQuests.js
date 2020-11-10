const allQuests =[
    //id,question,answers(4)

    {
        id: 1,
        question: 'What is 2+2?',
        image: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/2plus2-1596824542.jpg',
        answers: [
            {text: 'What is what?', correct: false},
            {text: '22', correct: false},
            {text: 'I have no clue', correct: false},
            {text: '4', correct: true}
        ]
    },
    {
        id: 2,
        question: 'Who is Jeff Bezos?',
        image:'https://www.biography.com/.image/c_fill%2Ccs_srgb%2Cfl_progressive%2Ch_400%2Cq_auto:good%2Cw_620/MTY2NzA3ODE3OTgwMzcyMjYw/jeff-bezos-andrew-harrer_bloomberg-via-getty-images.jpg',
        answers: [
            {text: 'My dad', correct: false},
            {text: 'Amazon CEO', correct: true},
            {text: 'I wish he were my dad', correct: false},
            {text: 'Ceo of Google', correct: false}
        ]
    },
    {
        id: 3,
        question: 'Are you having fun today?',
        image:'https://www.catholictv.org/sites/default/files/uploads/u24/fun.png',
        answers: [
            {text: 'Naaah', correct: false},
            {text: "i'm allllright", correct: true},
            {text: 'just casual day', correct: false},
            {text: "my corona test is positive soo...", correct: false}
        ]
    },
    {
        id: 4,
        question: 'How is development going?',
        image:'https://researchleap.com/wp-content/uploads/2019/06/4-tips-for-identifying-and-developing-high-performing-employees-e1562332730502.png',
        answers: [
            {text: 'Learning learning learning', correct: false},
            {text: 'Good? :)', correct: false},
            {text: 'Error again???', correct: true},
            {text: "I developed a Google clone", correct: false}
        ]
    },
    {
        id: 5,
        question: "what is 'the correct answer'",
        image:'https://previews.123rf.com/images/dirkercken/dirkercken1312/dirkercken131200024/24419932-correct-answer-right-choice.jpg',
        answers: [
            {text: 'hah?', correct: false},
            {text: 'is that something philosophic', correct: false},
            {text: 'The correct answer', correct: true},
            {text: '42', correct: false}
        ]
    }
];