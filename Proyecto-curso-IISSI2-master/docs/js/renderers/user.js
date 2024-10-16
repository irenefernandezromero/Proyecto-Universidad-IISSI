"use strict";
import { parseHTML } from "/js/utils/parseHTML.js"; // Función para crear elementos del DOM
import { usersAPI }  from "/js/api/users.js";
import { messageRenderer } from '/js/renderers/messages.js';

const usersRenderer = { 
    // 5.2 Devuelve Card para la galería
    asCardUser: function (user) { // El parámetro es un objeto photo
    let card = parseHTML(
            `<div class="cointainer">
                
            <div class= "row">

                <div class= "col-md-4">
                    <div class = "fotoPerfil">
                        <img id= profilePhoto src="${user.avatarUrl} "
                            class="imgRedonda"
                            alt="">
                    </div>
                </div>

                <div class= "col-md-3">
                        <h4>${user.username}</h4>
                        <h6>${user.firstName} ${user.lastName}</h6>
                        <h6>${user.email}</h6>
                </div>

                <div class= "col-md-2">
                    <div class = seguidores></div>
                    <h6>1142 Seguidores</h6>
                </div>

                <div class= "col-md-2">
                    <div class = seguidores></div>
                    <h6>998 Seguidos</h6>
                </div>

            </div>

            <div id="divGalleryMp" class= "cointainer-myProfile">

            </div>

        </div>
        `);
        
        usersAPI.getById(user.userId)
        .then( users => { 
            
        })
        .catch ( error => (messageRenderer.showMessageAsAlert(error)) );
    
        return card;
        },
    
    };
    export { usersRenderer };