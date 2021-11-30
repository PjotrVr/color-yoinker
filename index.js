buttons = document.querySelectorAll("button");
buttons_len = buttons.length;

for(let i=0; i < buttons_len; i++){
    buttons[i].addEventListener("click", function(){
        navigator.clipboard.writeText(buttons[i].innerText);
        alert("Color " + buttons[i].innerText + " has been added to clipboard!");
    })
}

inp = document.querySelector("input");
inp.addEventListener("keyup", updateInput);

function reset(index){
    buttons[index].style.color = "black";
    buttons[index].style.borderColor = "black";            
}

function fullReset(){
    for(let i=0; i < buttons_len; i++){
        reset(i);
        buttons[i].style.display = "block";
    }
}

function updateInput () {
    if (inp.value.length >= 1){
        for(let i=0; i < buttons_len; i++){
            if(buttons[i].innerText.startsWith("#" + inp.value)){
                buttons[i].style.borderColor = "white";
                buttons[i].style.color = "white";
            
            }
            else{
                reset(i);
                buttons[i].style.display = "none";
                
            }
        }
    }
    else {
        fullReset();

    }
};
