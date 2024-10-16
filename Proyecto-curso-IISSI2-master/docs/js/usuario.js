"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js"
import { usersAPI } from "/js/api/users.js"
import { messageRenderer } from "/js/renderers/messages.js";
import { usersRenderer } from '/js/renderers/user.js';
import { sessionManager } from "/js/utils/session.js";



const urlParams = new URLSearchParams(window.location.search); // Objeto query de la ventana

const userId = urlParams.get('userId');


function main(){
    let container = document.querySelector("#perfil-usuario");
    photosAPI.getByUserId(userId)
        .then(photos =>{
            let pfilter = photos.filter(photo=> photo.userId == sessionManager.getLoggedId() || photo.visibility == 'Public' );     // Si hay éxito
                let gallery = galleryRenderer.asCardGallery(pfilter);
                container.appendChild (gallery);
        })
        .catch(error => messageRenderer.showErrorMessage(error));


    let photoContainer = document.getElementById("perfil-usuario2");
        usersAPI.getById (userId)
            .then ( users => { 
                    console.log(users[0].username);
                    let photoDetails = usersRenderer.asCardUser(users[0]);
                    photoContainer.appendChild(photoDetails);
            })
            .catch( error => {messageRenderer.showMessageAsAlert( error );
            });
}

/*
function showUsuario() {
    let title = document.getElementById("perfil-usuario");
    let text;
    if (sessionManager.isLogged()) {
        let firstName = sessionManager.getLoggedUser().firstName;
        let lastName = sessionManager.getLoggedUser().lastName;
        let username = sessionManager.getLoggedUser().username;
        let email = sessionManager.getLoggedUser().email;

        usersAPI.getById(userId)
        .then( users => { 
            console.log(users[0].username);
                text= `«${users[0].firstName} ${users[0].lastName} ${users[0].username} ${users[0].email}»`
                 
        })
        } else {
        text = `<small> Guest</small>`;
    }
    title.innerHTML = text;
*/


document.addEventListener("DOMContentLoaded", main)
