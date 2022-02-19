document.querySelector(".email").addEventListener("invalid", e => {
    e.preventDefault();
});

document.querySelector(".form").addEventListener("submit", function (event) {
    if (!this.checkValidity()) {
        event.preventDefault();
    }
});