let gameSeq=[];
let userSeq=[];

let started=false;
let level=0;
let btns=['one','two','three','four'];

let highscore=0;

let h4=document.querySelector('h4');

document.addEventListener('keydown', function(){
    if(started==false){
        console.log("Game started");
        started=true;

        levelUp();
    }
});
function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(function(){
        btn.classList.remove('flash');
    },250);
}
function levelUp(){
    userSeq=[];
    level++;
    h4.innerText=`Level ${level}`;

    let randIdx=Math.floor(Math.random()*4);
    // console.log(`Random index generated is ${randIdx}`);
    let randClass=btns[randIdx];
    // console.log(`Random class is ${randClass}`);
    let randBtn=document.querySelector(`.${randClass}`);
    // console.log(randBtn);
    gameSeq.push(randClass);
    console.log(gameSeq);
    btnFlash(randBtn);
}
function checkAns(idx){
    if(level>highscore){
        highscore=level;
    }
    if(userSeq[idx]===gameSeq[idx]){
        if(userSeq.length===gameSeq.length){
           setTimeout(levelUp(),1000);
        }
    }
    else{
        h4.innerHTML=`Game over! Your Score was <b>${level}</b>. Your high score was ${highscore} <br> Press any key to start`;
        reset();
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function(){
            document.querySelector('body').style.backgroundColor='white';
        },150);
    }
}
function btnPress(){
    btnFlash(this);
    let btn=this;
    userClass=btn.getAttribute('id');
    userSeq.push(userClass);
    console.log(userSeq);
    checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll('.box');
for(btn of allBtns){
    btn.addEventListener('click', btnPress);
}
function reset(){
    gameSeq=[];
    userSeq=[];
    started=false;
    level=0;
}
