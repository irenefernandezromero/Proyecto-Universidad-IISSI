"use strict";
import { galleryRenderer } from "/js/renderers/gallery.js";
import { photosAPI } from "/js/api/photos.js"
import { messageRenderer } from "/js/renderers/messages.js";
import { sessionManager } from "/js/utils/session.js";



function main(){
    let container = document.querySelector("div.container");
    photosAPI.getAll()
        .then(photos =>{
            let pfilter = photos.filter(photo=> photo.visibility == 'Public' );     // Si hay éxito
                let gallery = galleryRenderer.asCardGallery(pfilter);
                container.appendChild (gallery);
        })
        .catch(error => messageRenderer.showErrorMessage(error));


}

document.addEventListener("DOMContentLoaded", main)

