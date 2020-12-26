let links = document.getElementsByClassName("link");

for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", showPreview);
    // links[i].addEventListener("touchstart", showPreview);
}

function showPreview(event) {
    // let element = event.target;
    // let preview = event.target.nextSibling.nextSibling;
    
    let element = event.target.parentElement;
    let preview = element.nextSibling.nextSibling;
    console.log(element.parentElement);
    console.log(preview);

    if (element.classList.contains("open") == false) {
        preview.classList.add("show");
        element.classList.add("open");
        element.classList.add("expand");

    } else {
        preview.classList.remove("show");
        element.classList.remove("open");
        element.classList.remove("expand");
    }
}