"use strict";
import { sessionManager } from "/js/utils/session.js ";

function main() {
    showUser();
    addLogoutHandler();
    hideHeaderOptions();

}
function hideHeaderOptions() {
    let headerRegister = document.getElementById("navbar-register");
    let headerLogin = document.getElementById("navbar-login");
    let headerLogout = document.getElementById("navbar-logout");
    let headerSubirFoto = document.getElementById("navbar-subirFoto");


    if (sessionManager.isLogged()) {
        headerRegister.style.display = "none";
        headerLogin.style.display = "none ";

    } else {
        headerLogout.style.display = "none";
        headerSubirFoto.style.display = "none ";

    }
}


function addLogoutHandler() {
    let logoutButton = document.getElementById("navbar-logout");
    logoutButton.addEventListener("click", function () {
        sessionManager.logout();
        window.location.href = "index.html";
    });
}


function showUser() {
    let title = document.getElementById("navbar-title");
    let text;
    if (sessionManager.isLogged()) {
        let username = sessionManager.getLoggedUser().username;
        let email = sessionManager.getLoggedUser().email;
        let userId = sessionManager.getLoggedUser().userId;
        text = `<a href="usuario.html?userId=${userId}" style="color:#FFFFFF;"> <small>${username}</small> </a>`;
    } else {
        text = "Desconectado";
    }
    title.innerHTML = text;
}

document.addEventListener("DOMContentLoaded", main);