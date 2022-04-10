const input = document.querySelector("input");
const counter = document.getElementById("counter");
const text = document.querySelector("text");
const button = document.getElementById("btn");

// counter = input.value.length;

    input.addEventListener("keyup", function(){
        if(input.value.length > 15){
            counter.innerHTML = "15 karakterden fazla giriş yapamazsınız";
            input.setAttribute("disabled", true);
            input.style.borderColor = "red";
            input.style.color = "black";
            counter.style.color = "red";
        } else {
            counter.innerHTML = input.value.length;
            counter.style.color = "black";
        }
    });

    btn.addEventListener("click" , function() {
        input.removeAttribute("disabled", true);
        input.value = " ";
        counter.innerHTML = " ";
        input.style.borderColor = "black";
    });