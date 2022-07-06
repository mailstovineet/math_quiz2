player_1=localStorage.getItem("player 1 name: ");
player_2=localStorage.getItem("player 2 name: ");
uppercase1=player_1.toUpperCase();
uppercase2=player_2.toUpperCase();
player1_score=0;
player2_score=0;
document.getElementById("name1").innerHTML=uppercase1+" - ";
document.getElementById("name2").innerHTML=uppercase2+" - ";
document.getElementById("score1").innerHTML=player1_score;
document.getElementById("score2").innerHTML=player2_score;
document.getElementById("question").innerHTML=uppercase1+" is asking the question";
document.getElementById("answer").innerHTML=uppercase2+" is answering the question";

function send_answer(){
number1=document.getElementById("number_1").value;
number2=document.getElementById("number_2").value;
real_answer=parseInt(number1)*parseInt(number2);
question="<h4>"+number1+"*"+number2+"</h4>";
answer="<br>answer - <input id='input_answer'>";
button="<br><br><button class='btn btn-info'onclick='check();'>Check Answer</button>";
div=question+answer+button;
document.getElementById("output").innerHTML=div;
document.getElementById("number1").value="";
document.getElementById("number2").value="";
}

var question_turn=player_1;
var answer_turn=player_2;

function check(){
check_answer=document.getElementById("input_answer").value;
if(real_answer=check_answer){
    if(answer_turn=player_1){
        player1_score=player1_score+1;
        document.getElementById("score1").innerHTML=player1_score;
    }
    else{
        player2_score=player2_score+1;
        document.getElementById("score2").innerHTML=player2_score;
    }
}
if(question_turn=player_1){
    question_turn=player_2;
    document.getElementById("question").innerHTML=uppercase2 + " is asking the question";
    document.getElementById("answer").innerHTML=uppercase1 + " is answering the question";
}
else{
    question_turn=player_1;
    document.getElementById("question").innerHTML=uppercase1 + " is asking the question";
    document.getElementById("answer").innerHTML=uppercase2 + " is answering the question";
}
}