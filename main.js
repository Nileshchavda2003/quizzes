const quizzQ = [
    {
        question:"1. What is the capital city of Gujarat?",
        a: "a) Ahmedabad",
        b: "b) Gandhinagar",
        c: "c) Surat",
        d: "d) Rajkot",
        ans: "b) Gandhinagar"
    },
    {
        question:"2. What is the capital city of Gujarat?",
        a:"a) Ahmedabad",
        b:"b) Gandhinagar",
        c:"c) Surat",
        d:"d) Rajkot",
        ans:"b) Gandhinagar"
    },
    {
        question:"3. What is the capital city of Gujarat?",
        a:"a) Ahmedabad",
        b:"b) Gandhinagar",
        c:"c) Surat",
        d:"d) Rajkot",
        ans:"b) Gandhinagar"
    }
]
const question= document.querySelector('#question');
const op1= document.querySelector('#op1');
const op2= document.querySelector('#op2');
const op3= document.querySelector('#op3');
const op4= document.querySelector('#op4');

let quitionNum = 0;
const  submit = document.querySelector('#submit');
const loadQuetion = () => {
    const quitionlist = quizzQ[quitionNum];
    question.innerText=quitionlist.question;
    op1.innerText = quitionlist.a;
    op2.innerText = quitionlist.b;
    op3.innerText = quitionlist.c;
    op4.innerText = quitionlist.d;

}

loadQuetion();
