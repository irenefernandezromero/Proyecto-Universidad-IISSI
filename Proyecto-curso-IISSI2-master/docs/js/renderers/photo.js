
"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
import { usersAPI } from "/js/api/users.js"; // API, para obtener datos del usuario
import { messageRenderer } from '/js/renderers/messages.js';


const photoRenderer = {
    asCard: function (photo) {
            let card = parseHTML(
                    `<div class="col-md-4 mb-3">
                        <div class="card">
                            <div class="embed-responsive embed-responsive-4by3">
                                <a href="photo_detail.html?photoId=${photo.photoId}">
                                    <img src="${photo.url}" class="img-fluid card-image embed-responsive-item">
                                </a>
                            </div>
                            <div class="card-body text-center text-dark p-0">
                                <h5 class="card-title">${photo.title}</h5>
                                <p class="card-text">${photo.description}</small></p>
                                <p class="card-text user-name"></p>
                            </div>
                        </div>
                    </div>)
                `);
    usersAPI.getById(photo.userId)
    .then( users => { 
        let userId=photo.userId;
        card.querySelector(".user-name").innerHTML=`
        <small>Publicado por <a href="usuario.html?userId=${userId}"> «${users[0].username}»  </a>
                  , <strong>${photo.visibility}</strong>
        </small>`;
    })
    .catch ( error => (messageRenderer.showMessageAsAlert(error)) );

    return card;
    },
    asDetails: function (photo) {
        console.log(photo);
        let html = `<div class="">
                        <h3 class="m-0">${photo.title}</h3>
                        <h6 class="m-0">${photo.description}</h6>
                        <small class="m-0">Publicadooo por
                            <a href= "usuario.html?userId=${photo.userId}" class="user-link">
                            </a> 
                            , ${photo.date}, <strong>${photo.visibility}</strong> access
                        </small>
                        <img src="${photo.url}" class="img-fluid p-2 bg-light rounded">
                    </div>`;
        let photoDetails = parseHTML (html);
        
        usersAPI.getById(photo.userId)
        .then( users => { 
            photoDetails.querySelector(".user-link").innerHTML=`
                 «${users[0].username}»
            `;
        })
        .catch ( error => (messageRenderer.showMessageAsAlert(error)) );
        return photoDetails;
        },
};
export { photoRenderer };
