function showFormAdd() {
    document.getElementById('formAdd').style.transform = "translate(-50%, -50%)";
    document.getElementById('formAdd').style.opacity = 1;
    document.querySelector('.modal-login').style.display = "block";
}

function showFormEdit() {
    document.getElementById('formEdit').style.transform = "translate(-50%, -50%)";
    document.getElementById('formEdit').style.opacity = 1;
    document.querySelector('.modal-login').style.display = "block";

}

function showFormDelete() {
    document.getElementById('formDel').style.transform = "translate(-50%, -50%)";
    document.getElementById('formDel').style.opacity = 1;
    document.querySelector('.modal-login').style.display = "block";

}

function hiddenModal() {
    document.querySelector('.modal-login').style.display = "none";
    document.getElementById('formEdit').style.transform = "translate(-50%, -245%)";
    document.getElementById('formAdd').style.transform = "translate(-50%, -245%)";
    document.getElementById('formDel').style.transform = "translate(-50%, -245%)";
}

function hiddenNXB() {
    document.getElementById('mobile-nxb').checked = false;
}