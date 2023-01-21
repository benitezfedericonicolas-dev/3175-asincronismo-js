// Constantes
//const XML = require('xmlhttprequest').XMLHttpRequest;
import {XMLHttpRequest} from "xmlhttprequest";
const URLROOT = "https://api.escuelajs.co/api/v1/users";

// Programa
const personalFetch = (url, callbackFunction) => {
    let xml = new XMLHttpRequest();

    xml.open(
        'GET',
        url,
        true
    );

    xml.onreadystatechange = (evento) => {
        if (xml.readyState == 4 && xml.status == 200) {
            console.log(`${JSON.parse(xml.responseText)}`);
            callbackFunction(null, JSON.parse(xml.responseText));
        }

        if (xml.readyState == 4 && xml.status != 200) {
            let error = new Error(`
            Error: <br>
            readyState: ${xml.readyState} <br>
            status: ${xml.status} <br>
            responseText: ${xml.responseText}`);
            console.log(error);
            return callbackFunction(error, null);
        }
    }

    xml.send();
}

// ==================================================

personalFetch(
    `${URLROOT}/2`,
    function (error1, dato1) {
        if (error1) return console.error(error1);
        console.log(dato1.name);
    }
);

