var symbolsAll = "abcdefghijklmnopqrstuvwxyzABCDWFGHIJKLMNOPQRSTUVWXYZ123456789!@#$%&^*()[]{}.,?/\|";
var symbolsCap = "ABCDWFGHIJKLMNOPQRSTUVWXYZ";
var yourPass = document.getElementById("yourPassword");
var generatePassButton = document.getElementById("passGen");
var copyToClip = document.getElementById("copyPass");
    function generatePassword() {
        var finishedPassword = "";
        var lengthPass =  prompt("How many characters for your password? Type a number");
        var capitalLetter = confirm("Does it need to begin with a capital letter?");
        if (lengthPass<5){
            alert("Password must be longer than 5 characters");
            generatePassword();
        }
        
        else if (lengthPass>=5 && capitalLetter===false){
            for (i=0;i<lengthPass;i++){
                finishedPassword = finishedPassword + symbolsAll.charAt(Math.floor(Math.random() * Math.floor(symbolsAll.length - 1)));
                console.log(finishedPassword);
            }
            document.getElementById("yourPassword").innerHTML = finishedPassword;
            document.getElementById("yourPassword").style.fontSize = "40px";
        } else {
            finishedPassword = finishedPassword + symbolsCap.charAt(Math.floor(Math.random() * Math.floor(symbolsCap.length-1)));
            document.getElementById("yourPassword").innerHTML = finishedPassword;
            document.getElementById("yourPassword").style.fontSize = "40px";
                for (i=0;i<lengthPass-1;i++){
                    finishedPassword = finishedPassword + symbolsAll.charAt(Math.floor(Math.random() * Math.floor(symbolsAll.length - 1)));
            } 
                    document.getElementById("yourPassword").innerHTML= finishedPassword;
                    document.getElementById("yourPassword").style.fontSize = "40px";
                    console.log(finishedPassword);
        }
    }
    function copyClip(elementId) {
        var clipBoard = document.createElement('input');
        clipBoard.setAttribute("Value",document.getElementById(elementId).innerHTML);
        document.body.appendChild(clipBoard);
        clipBoard.select();
        document.execCommand("copy");
        document.body.removeChild(clipBoard);
    }  
generatePassButton.addEventListener("click",generatePassword);