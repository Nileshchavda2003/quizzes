
const quizzQ = [
    {
        question : '1. What is the capital city of Gujarat?',
        a : "a) Ahmedabad",
        b : "b) Gandhinagar",
        c : "c) Surat",
        d : "d) Rajkot",
        ans : "b) Gandhinagar"
    },
    {
        question :"2. What is the capital city of Gujarat?",
        a : "a) Ahmedabad",
        b :"b) Gandhinagar",
        c :"c) Surat",
        d :"d) Rajkot",
        ans :"b) Gandhinagar"
    },
    {
        question :"3. What is the capital city of Gujarat?",
        a : "a) Ahmedabad",
        b : "b) Gandhinagar",
        c : "c) Surat",
        d : "d) Rajkot",
        ans : "b) Gandhinagar"
    }
]


const question = document.querySelector('#question');
const option1 = document.querySelector('#op1');
const option2 = document.querySelector('#op2');
const option3 = document.querySelector('#op3');
const option4 = document.querySelector('#op4');
const submit = document.querySelector('#submit');

// const answers = document.querySelectorAll('.answer');

let questionNum = 0;
let score = 0;

const loadQuestion = () => {

    const questionList = quizzQ[questionNum];

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
    
}

loadQuestion();

const getcheckAns = () => {
    let answer;
    answers.forEach((curAnsElem) => {
        if(curAnsElem.checked){
            answer = curAnsElem.id;
        }
    });
    return answer;
}

submit.addEventListener('click', () => {
    // const checkAns = getcheckAns();
    // console.log(checkAns);

    // if(checkAns == quizDB[questionNum].ans){
        // score++;
    // };

        questionNum++;
     
    if(questionNum < quizzQ.length){
     
         loadQuestion(questionNum);
    
       }

})