console.log("Hello");
let n = Math.floor(Math.random() * 10) + 1;
console.log(n);
let count=0;

function validornot(){
    let guess = parseInt(document.getElementById("txt001").value);
    let result;
    count++;
    let gameOver = false;

     if(gameOver){
        return;
    }

    if(guess==n){
        result = "You won 😍";
        document.getElementById("txt001").disabled = true;
        document.getElementById("txt001").value=n;
        gameOver = true;
    }else if (count==5) {
        result= "You lost! ☹️ Your attempts are finished! Number is "+n;
        document.getElementById("txt001").disabled = true;
        gameOver = true;
    }else if(guess>n){
        result = "You lost! try again 😥. Your number is higher";
        document.getElementById("txt001").value="";
    }else{
        result = "You lost! try again 😥. Your number is lower";
        document.getElementById("txt001").value="";
    }
    document.getElementById("h3001").innerText=result;
    document.getElementById("txt001").focus();
    document.getElementById("h4001").innerText=" 👉 No. of Rounds: "+count;

}