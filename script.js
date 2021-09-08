
'use strict';
//console.log(document.querySelector('.message').textContent);

//document.querySelector(".message").textContent='correct number';

//document.querySelector('.number').textContent=14

let secretnumber=Math.trunc(Math.random()*20)+1;


let score=20

let highscore=0


document.querySelector('.check').addEventListener('click',function()
{
   
    const guess=Number(document.querySelector('.guess').value)

if(!guess)
{
    document.querySelector('.message').textContent="No number";
}
else if(guess===secretnumber)
{
    document.querySelector('.message').textContent="correct number"
    document.querySelector('body').style.backgroundColor='#008000'
    document.querySelector('.number').style.width='20em'
    document.querySelector(".number").textContent=secretnumber

    if(score>highscore)
    {
        highscore=score 
        document.querySelector('.highscore').textContent=highscore;
    }
}
else if(guess>secretnumber)
{
    if(score>0)
    {
        document.querySelector('.message').textContent='Too high'
        score--;
        document.querySelector('.score').textContent=score
    }
    else{
        document.querySelector('body').style.backgroundColor='red'
        document.querySelector('.message').textContent='U are lost'
        document.querySelector('.h1').style.backgroundColor='green'
        
    }

}
else
{
    if(score>0)
    {
        document.querySelector('.message').textContent='Too low'
        score--;
        document.querySelector('.score').textContent=score
    }
    else{
        document.querySelector('.message').textContent='U are Lost'
        document.querySelector('body').style.backgroundColor='red'
        
        document.querySelector('.h1').style.backgroundColor='green'

    }
} 

});

document.querySelector('.again').addEventListener('click',function()
{
    score=20
    secretnumber=secretnumber=Math.trunc(Math.random()*20)+1;
   
    document.querySelector('.message').textContent='Start guessing'
    document.querySelector('.score').textContent=score
    document.querySelector('.number').style.width='3em'
    document.querySelector('.number').textContent="?"
    document.querySelector('.guess').value=""
    document.querySelector('body').style.backgroundColor='black'


   
})
