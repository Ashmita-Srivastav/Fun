let scale = 1;

function showmessage1() {
    hideAll();
    document.getElementById("messageBox1").style.display = "block";
    document.getElementById("btn1").style.display = "block";
    document.getElementById("restartBtn").style.display = "none";
}

function showmessage2() {
    hideAll();
    document.getElementById("messageBox2").style.display = "block";
    document.querySelector(".boy").src = "cry_boy.gif";
    document.getElementById("goodloop").style.display = "block";
}

function showmessage3() {
    hideAll();
    document.getElementById("messageBox3").style.display = "block";
    document.querySelector(".boy").src = "happy.gif";
    document.getElementById("restartBtn").style.display = "block";
}

function loopNo() {
    scale += 0.2;
    const boyImg = document.querySelector(".boy");
    boyImg.style.transform = `scale(${scale})`;
    boyImg.style.transition = "transform 0.3s ease";
    document.getElementById("goodloop").style.display = "block";
}

function loopYes() {
    hideAll();
    document.getElementById("messageBox3").style.display = "block";
    document.querySelector(".boy").src = "happy.gif";
    document.getElementById("restartBtn").style.display = "block";
}

function restartChat() {
    scale = 1;
    hideAll();
    const boyImg = document.querySelector(".boy");
    boyImg.style.transform = "scale(1)";
    boyImg.src = "boy2.gif";
    document.getElementById("btn").style.display = "block";
    document.getElementById("restartBtn").style.display = "none";
}

function hideAll() {
    document.getElementById("messageBox1").style.display = "none";
    document.getElementById("messageBox2").style.display = "none";
    document.getElementById("messageBox3").style.display = "none";
    document.getElementById("btn1").style.display = "none";
    document.getElementById("btn").style.display = "none";
    document.getElementById("goodloop").style.display = "none";
}