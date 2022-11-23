image_list = ["images/one.png","images/two.png","images/three.png","images/four.png","images/five.png","images/six.png"];

function getRandomInt(max){
    return Math.floor(Math.random()*max);
}
function play_game(){
    var p1d = getRandomInt(6);
    var p2d = getRandomInt(6);
    document.getElementById("p1image").src = image_list[p1d];
    document.getElementById("p2image").src = image_list[p2d];

    if(p1d > p2d){
        document.getElementById("result").innerHTML = "The Winner is : Player 1";
    }
    else{
        document.getElementById("result").innerHTML = "The Winner is : Player 2";    
    }
}