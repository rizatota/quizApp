const quiz = [
    {
        question: "Most used programing language is:",
        a:"Java",
        b:"Python",
        c:"Javascript",
        d:"Ruby",
        correct:"c"
    },
    {
        question: "Which is the capital of Albania",
        a:"Durres",
        b:"Tirana",
        c:"Milano",
        d:"Munich",
        correct:"b"
    },
    {
        question: "Most vualuabe player right now",
        a:"Ronaldo",
        b:"Messi",
        c:"Belingham",
        d:"Vini Jr",
        correct:"c"
    }

]
const questionDisplay=document.getElementById('question');
const a_textDisplay=document.getElementById('a_text');
const b_textDisplay=document.getElementById('b_text');
const c_textDisplay=document.getElementById('c_text');
const d_textDisplay=document.getElementById('d_text');
const submitDisplay =document.getElementById('submit');
const quizDisplay=document.getElementById('quiz');
let current =0;
let score=0;
let answerEls=document.querySelectorAll(".answer");
loadQuiz();


function loadQuiz(){
    deselectQuestion();
let currentQuestion=quiz[current];

questionDisplay.innerText=currentQuestion.question;
a_textDisplay.innerText=currentQuestion.a;
b_textDisplay.innerText=currentQuestion.b;
c_textDisplay.innerText=currentQuestion.c;
d_textDisplay.innerText=currentQuestion.d;
}

function deselectQuestion(){
    answerEls.forEach((a)=>{
        a.checked=false;
        
    });
}

function selectQuestion(){
    
    let answerSelected=undefined;
    answerEls.forEach((answer)=>{
        if(answer.checked){
            answerSelected=answer.id;
            
        }
        
        
    });
    return answerSelected;
}


submitDisplay.addEventListener("click",()=>{
    const answerSelected =selectQuestion();
    if(answerSelected){

        if(answerSelected === quiz[current].correct){
            score++;
        }
        
        current++;
        if (current < quiz.length) {
            loadQuiz();
        } 

        else {
            quizDisplay.innerHTML = `
                <h2>You answered correctly at ${score}/${quiz.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;

            
        }
        


    }
       
    

});


