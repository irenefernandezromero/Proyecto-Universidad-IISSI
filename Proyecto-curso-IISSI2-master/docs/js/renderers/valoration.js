
"use strict";
import { parseHTML } from "/js/utils/parseHTML.js";
import { valorationsAPI } from "/js/api/valorations.js";

const valorationRenderer = { 
    asValoration: function (valoration) {
            let card = parseHTML(
                    `<div class ="user-valoration" ></div>`);
        
    
    valorationsAPI.getAvg(valoration.value)
    .then( valorations => { 
        card.querySelector(".user-valoration").innerHTML=`
        <small> ${valorations.value}</small>`;
    })
    .catch ( error => (messageRenderer.showMessageAsAlert(error)) );

    return card;

    },
};
export { valorationRenderer };
