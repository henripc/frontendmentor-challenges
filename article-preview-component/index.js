const iconShare = document.querySelector('.icon-share');
const socialContainer = document.querySelector('.socials-container');
const iconContainer = document.querySelector(".icon-container");
const body = document.querySelector('body');

iconContainer.addEventListener('mouseover', e => {
    iconShare.classList.add('icon-share-white');
});

iconContainer.addEventListener('mouseout', e => {
    iconShare.classList.remove('icon-share-white');
});

iconContainer.addEventListener('click', e => {
    socialContainer.classList.add('show');
    e.stopPropagation();
});

body.addEventListener('click', e => {
    socialContainer.classList.remove('show');
});

