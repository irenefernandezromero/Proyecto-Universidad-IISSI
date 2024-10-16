"use strict";
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";
import { authAPI } from "/js/api/auth.js";


function main() {
    let form = document.getElementById("register-form");
    form.onsubmit = formHandler;

}

function formHandler(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

        sendLogin(formData);
    }


function sendLogin(formData) {
    authAPI.login(formData)
        .then(loginData =>{
            let sessionToken = loginData.sessionToken;
            let loggedUser = loginData.user;
            sessionManager.login(sessionToken, loggedUser);
            window.location.href = "index.html";
            })
        .catch(error => messageRenderer.showErrorMessage(error));
}

document.addEventListener("DOMContentLoaded", main);