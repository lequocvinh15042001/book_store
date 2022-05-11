function showFormLogin() {
    document.getElementById('formLog').style.transform = "translate(-50%, -50%)";
    document.getElementById('formLog').style.opacity = 1;
    document.getElementById('formRes').style.transform = "translate(-50%, -245%)";
    document.getElementById('formRes').style.opacity = 0;
    document.querySelector('.modal-login').style.display = "block";
}

function showFormRegister() {
    document.getElementById('formRes').style.transform = "translate(-50%, -50%)";
    document.getElementById('formRes').style.opacity = 1;
    document.getElementById('formLog').style.transform = "translate(-50%, -245%)";
    document.getElementById('formLog').style.opacity = 0;
    document.querySelector('.modal-login').style.display = "block";

}

function hiddenModal() {
    document.querySelector('.modal-login').style.display = "none";
    document.getElementById('formRes').style.transform = "translate(-50%, -245%)";
    document.getElementById('formLog').style.transform = "translate(-50%, -245%)";
}

function hiddenNXB() {
    document.getElementById('mobile-nxb').checked = false;
}