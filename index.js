var $start = document.querySelector("#start");
var $game = document.querySelector('#game');
$start.addEventListener("click",Start);
$game.addEventListener("click",boxClick);
var Score =0;
var color = ["blue","pink","green","black","gray","yellow","red"];
console.log(color.length)
function Start()
{
    $start.classList.add('hide');
    $game.style.background = "white";
    randomBox();
}
function boxClick(event)
{
    if(event.target.dataset.box)
    {
        randomBox();
        Score++;
    }
   
}
function randomBox()
{
    $game.innerHTML='';
    var box = document.createElement('div');
    var boxSize= random(30,120);
    var gameSize = $game.getBoundingClientRect();
    var maxTop = gameSize.height - boxSize;
    var maxleft = gameSize.width - boxSize;
    var maxColorNum = color.length;
    var colorNum = random(0,maxColorNum);
    box.style.height = box.style.width = boxSize + "px";
    box.style.backgroundColor = color[colorNum].toString();
    box.style.position = 'absolute';
    box.style.top = random (0,maxTop) + "px";
    box.style.left = random (0,maxleft) + "px";
    box.setAttribute('data-box', 'true')
    $game.insertAdjacentElement('afterbegin', box);
}
function random(min,max)
{
    return Math.floor(Math.random()*(max-min)+min);
}