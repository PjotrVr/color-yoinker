buttons = document.querySelectorAll(".main");
buttons_like = document.querySelectorAll(".like");
buttons_len = buttons.length;
buttons_like_values = Array(buttons_len);

for(let i=0; i < buttons_len; i++){
    buttons_like_values[i] = 0;
}

for(let i=0; i < buttons_len; i++){
    buttons[i].addEventListener("click", function(){
        navigator.clipboard.writeText(buttons[i].innerText);
        alert("Color " + buttons[i].innerText + " has been added to clipboard!");
    });

    buttons_like[i].addEventListener("click", function(){
        if(buttons_like_values[i] === 0){
            buttons_like[i].innerText = Number(buttons_like[i].innerText.replace(" 👍", "")) + 1 + " 👍";
            buttons_like[i].style.backgroundColor = "blue";
            buttons_like_values[i] = 1;
        }
        else if(buttons_like_values[i] === 1){
            buttons_like[i].innerText = Number(buttons_like[i].innerText.replace(" 👍", "")) - 1 + " 👍";
            buttons_like[i].style.backgroundColor = "yellow";
            buttons_like_values[i] = 0;
        }
    });
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
        buttons[i].style.display = "inline";
        buttons_like[i].style.display = "inline";
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
                buttons_like[i].style.display = "none";
            
            }
        }   
    }

    else {
        fullReset();
        
    }
}