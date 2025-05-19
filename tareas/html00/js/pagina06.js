const Picture = (id, name, redonda = false) => {
    const url = `https://picsum.photos/id/${id}/200/200`;
    return `
                <figure>
                    <img src="${url}" class="${redonda ? 'redonda' : ''}">
                    <figcaption>${name}</figcaption>
                </figure>
            `;
};

let x = document.getElementById('app').innerHTML = Picture(1, "John", true) + Picture(2, "Jane");

const list = app.querySelectorAll('img');
for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', function () {
        this.classList.toggle('redonda');
    });
}