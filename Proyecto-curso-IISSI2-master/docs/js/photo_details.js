"use strict";
import { photoRenderer } from "/js/renderers/photo.js";
import { photosAPI } from "/js/api/photos.js";
import { commentsAPI } from "/js/api/comments.js";
import { valorationsAPI } from "/js/api/valorations.js";
import { messageRenderer } from "/js/renderers/messages.js";
import { commentRenderer } from "/js/renderers/comment.js";
import { valorationRenderer } from "/js/renderers/valoration.js";
import { sessionManager } from "/js/utils/session.js";


let urlParams = new URLSearchParams(window.location.search);
let photoId = urlParams.get("photoId");

function main() {
    let photoContainer = document.querySelector("#photo-details-colum");

    photosAPI.getById(photoId)
        .then(photos => {
            let photoDetails = photoRenderer.asDetails(photos[0]);
            photoContainer.appendChild(photoDetails);
        })
        .catch(error => {
            messageRenderer.showErrorMessage(error);
        });


    let deleteBtn = document.querySelector("#button-delete");
    deleteBtn.onclick = handleDelete;

    let editBtn = document.querySelector("#button-edit");
    editBtn.onclick = handleEdit;

    let valorarBtn = document.querySelector("#valoracion");
    valorarBtn.onsubmit = hacervaloraciones;

    let comentarBtn = document.querySelector("#form-comment");
    comentarBtn.onsubmit = commentPhoto;

    if(sessionManager.isLogged()){

    }else{        
        comentarBtn.style.display="none";
        valorarBtn.style.display="none";
}

    hideActionButtons();

    let mostrarcomentario = document.querySelector("#mostrar-comentarios");
    commentsAPI.getById(photoId)
        .then ( comments => {
            for (let com of comments){
                let commentDetails = commentRenderer.asComment(com);
                let username = 'username';
                let comment = 'comment';
                let date = 'date';
                let comentario = commentDetails[username] + ": " + commentDetails[comment] + "\n" + commentDetails[date] + "\n";
                console.log(commentDetails);
                if(comentario == null) {
                    mostrarcomentario.append("No hay comentarios");
                }else {
                    mostrarcomentario.append(commentDetails);
                }
            }
        })
        .catch ( error => {
            messageRenderer.showMessageAsAlert(error);
        })


        let mostrarvaloracion = document.querySelector("#valoracion-details");
        valorationsAPI.getAvg(photoId)
            .then ( valorations => {
                let clave = 'AVG(value)';
                console.log(valorations[0][clave]);
                //let media = valorationRenderer.asValoration(valorations);

                if(valorations[0][clave] == null){
                    mostrarvaloracion.append ("No hay aún valoraciones");
                }else{
                    mostrarvaloracion.append ("Valoración Media: " + valorations[0][clave]);
                }
            })
            .catch ( error => {
                messageRenderer.showMessageAsAlert(error);
            })

            


}

function hideActionButtons() {
    let actions_col = document.getElementById("photo-buttons-colum");
    if (!sessionManager.isLogged()) {
        actions_col.style.display = "none";
    }
}

function handleEdit(event) {
    window.location.href = "edit_photo.html?photoId=" + photoId
}


function handleDelete(event) {
    let answer = confirm("¿Seguro que quieres eliminar la foto?");
    if (answer) {
        photosAPI.delete(photoId)
            .then(data => window.location.href = "index.html")
            .catch(error => messageRenderer.showErrorMessage(error));
    }
}

function hacervaloraciones(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);

    formData.append("userId", sessionManager.getLoggedId());
    formData.append("photoId", photoId);
    valorationsAPI.create(formData)
        .then(data => window.location.href = "photo_detail.html?photoId=" + photoId)
        .catch(error => messageRenderer.showErrorMessage(error));    
    }


function commentPhoto(event) {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    
    formData.append("userId", sessionManager.getLoggedId());
    formData.append("photoId", photoId);
    commentsAPI.create(formData)
        .then(data => window.location.href = "photo_detail.html?photoId=" + photoId)
        .catch(error => messageRenderer.showErrorMessage(error));    
    }




document.addEventListener("DOMContentLoaded", main)

