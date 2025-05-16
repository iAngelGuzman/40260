export function loadXMLDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
        const xmlDoc = xhttp.responseXML;
        const cd = xmlDoc.getElementsByTagName("alumno");
        myFunction(cd);
    }
    xhttp.open("GET", "../xml00/alumno.xml", true);
    xhttp.send();
}

function myFunction(cd) {
    let table = "<tr><th style='text-align: center; border: solid 1px black;'>Nombre</th><th style='text-align: center; border: solid 1px black;'>Nacimiento</th></tr>";
    for (let i = 0; i < cd.length; i++) {
        table += "<tr><td style='text-align: center; border: solid 1px black;'>" +
            cd[i].getElementsByTagName("nombre")[0].childNodes[0].nodeValue +
            "</td><td style='text-align: center; border: solid 1px black;'>" +
            cd[i].getElementsByTagName("nacimiento")[0].childNodes[0].nodeValue +
            "</td></tr>";
    }
    document.getElementById("demo").innerHTML = table;
}

window.loadXMLDoc = loadXMLDoc;