const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button1div = document.querySelector("#button1 div");
const button2div = document.querySelector("#button2 div");

let winnningSide = -1;
let clickStart;
let clickEnd;
let setTimeAlready = false;
button1.ontouchstart = button1Touch;
button2.ontouchstart = button2Touch;

let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

/*
button1.addEventListener("touchStart", function(e)
{
    e.preventDefault();
    if(winnningSide === -1)
    {
        winnningSide = 0;
    }
    setWinningSide();
});

button2.addEventListener("touchStart", function(e)
{
    e.preventDefault();
    if(winnningSide === -1)
    {
        winnningSide = 1;
    }
    setWinningSide();
});
*/
function button1Touch(e)
{
    e.preventDefault();
    if(winnningSide === -1)
    {
        clickStart = Date.now();
        winnningSide = 0;
    }
    else if(winnningSide === 1)
    {
        clickEnd = Date.now();
        setClickEndTiming()
    }
    setWinningSide();
}

function button2Touch(e)
{
    e.preventDefault();
    if(winnningSide === -1)
    {
        clickStart = Date.now();
        winnningSide = 1;
    }
    else if(winnningSide === 0)
    {
        clickEnd = Date.now();
        setClickEndTiming()
    }
    setWinningSide();
}


function setWinningSide()
{
    if(winnningSide === 0)
    {
        button1.classList.add("winningSide");
        button2.classList.remove("winningSide");
    }
    else if(winnningSide === 1)
    {
        button2.classList.add("winningSide");
        button1.classList.remove("winningSide");
    }
}

function setClickEndTiming()
{
    if(!setTimeAlready)
    {
        let timeValue = clickEnd - clickStart
        if(winnningSide === 0)
        {
            if(timeValue < 1000)
            {
                //button2.innerHTML = `${timeValue} ms <br>behind`;
                button2div.innerHTML = `${timeValue} ms <br>behind`;
            }
            else
            {
                //button2.innerHTML = `${timeValue/1000} s <br>behind`;
                button2div.innerHTML = `${timeValue/1000} s <br>behind`;
            }
            
        }
        else if(winnningSide === 1)
        {
            if(timeValue < 1000)
            {
                //button1.innerHTML = `${timeValue} ms <br>behind`;
                button1div.innerHTML = `${timeValue} ms <br>behind`;
            }
            else
            {
                //button1.innerHTML = `${timeValue/1000} s <br>behind`;
                button1div.innerHTML = `${timeValue/1000} s <br>behind`;
            }
        }
        setTimeAlready = true;
    }
    
}