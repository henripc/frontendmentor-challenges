const invalidMessage = document.querySelector(".invalid-phrase");
const invalidIcon = document.querySelector('.invalid-img');
const email = document.querySelector(".email");
const nav = document.querySelector('.nav');
const headingContainer = document.querySelector('.heading-container');
const imgContainer = document.querySelector('.img-container');

const containers = [nav, headingContainer, imgContainer];

email.addEventListener("invalid", e => {
    e.preventDefault();
    invalidMessage.classList.add('show');
    invalidIcon.classList.add('show');
    e.stopPropagation();
});

containers.forEach(elem => {
    elem.addEventListener('click', e => {
        invalidMessage.classList.remove('show');
        invalidIcon.classList.remove('show');
    });
});