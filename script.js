let userscore=0;
let compscore=0;
const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"]
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
}
const drawgame=()=>{
    console.log("game was draw");
    msg.innerHTML="game was draw.Play Again";
    msg.style.backgroundcolor="#81b31";
}
const showwinner=(userwin)=>{
    if(userwin){
        userscore++;
        userscorepara.innerHTML=userscore;
        console.log("you win");
        msg.innerHTML="You Win ";
        msg.style.backgroundcolor="green";
        
        
        
    }else{
        console.log("you lose");
        msg.innerHTML="You Lose";
        msg.style.backgroundcolor="red";
        compscore++;
        compscorepara.innerHTML=compscore;
    }
}
const playgame =(userchoice)=>{
    console.log("userchoice =",userchoice);
    const compchoice=gencompchoice();
    console.log("compchoice = ",compchoice);
    if(userchoice==compchoice){
        drawgame();

    } else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=compchoice ==="paper"?  false : true;
        }else if(userchoice==="paper"){
            userwin=compchoice==="scissors"? false : true;
        }else {
            userwin=compchoice==="rock"? false : true;
        }
        showwinner(userwin);
    } 
}

choices.forEach((choice)=>{
    
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    });
});
