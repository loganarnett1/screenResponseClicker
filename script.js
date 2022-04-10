const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");

let winnningSide = -1;
button1.ontouchstart = button1Touch;
button2.ontouchstart = button2Touch;

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
        winnningSide = 0;
    }
    setWinningSide();
}

function button2Touch(e)
{
    e.preventDefault();
    if(winnningSide === -1)
    {
        winnningSide = 1;
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