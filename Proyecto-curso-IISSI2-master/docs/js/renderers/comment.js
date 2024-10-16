"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { usersAPI } from "/js/api/users.js";
import { messageRenderer } from '/js/renderers/messages.js';


const commentRenderer = {
    asComment: function (comment) {
        let card = parseHTML(
            `<div class="col-md mb-3">
                <p ><a class="user-comentario" href="usuario.html?userId=${comment.userId}"></a> Ha comentado:</p>
                <p>${comment.comment} </p>
                <small> ${comment.date} </small> 
            </div>`);

        usersAPI.getById(comment.userId)
            .then(users => {
                card.querySelector(".user-comentario").innerHTML = `
                ${users[0].username} 
                `;
            })
            .catch(error => (messageRenderer.showMessageAsAlert(error)));
        return card;


    },
};
export { commentRenderer };