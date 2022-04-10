const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

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
    else
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
    else
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
                button2.textContent = `${timeValue} ms behind`;
            }
            else
            {
                button2.textContent = `${timeValue/1000} s behind`;
            }
            
        }
        else if(winnningSide === 1)
        {
            if(timeValue < 1000)
            {
                button1.textContent = `${timeValue} ms behind`;
            }
            else
            {
                button1.textContent = `${timeValue/1000} s behind`;
            }
        }
        setTimeAlready = true;
    }
    
}