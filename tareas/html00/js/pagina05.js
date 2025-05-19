let ejemplo = document.getElementById("demo");
console.log(ejemplo);

function imagen(id) {
    return "<figure>" +
        '<img src="https://picsum.photos/id/' + id + '/200/200" " alt="">' +
        "<figcaption>Jonh</figcaption>" +
        "</figure>";
}

const Picture = (id) => {
    return `
                <figure>
                <img src="https://picsum.photos/id/${id}/200/200" alt="">
                <figcaption>Jonh</figcaption>
                </figure>
            `
}

ejemplo.innerHTML = "hola" + Picture(1);