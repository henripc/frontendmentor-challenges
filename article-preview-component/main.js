const iconShare = document.querySelector('.icon-share');
const iconContainer = document.querySelector(".icon-container");
const socialContainer = document.querySelector('.socials-container');
const body = document.querySelector('body');
const iconContainerMobile = document.querySelector(".icon-container-mobile");
const iconShareMobile = document.querySelector('.icon-share-mobile');
const socialContainerMobile = document.querySelector('.socials-container-mobile');

iconContainer.addEventListener('mouseover', e => {
    iconShare.classList.add('icon-share-white');
});

iconContainer.addEventListener('mouseout', e => {
    iconShare.classList.remove('icon-share-white');
});

iconContainer.addEventListener('click', e => {
    if (window.innerWidth <= 800) {
        socialContainerMobile.classList.remove('hide-animation');
        socialContainerMobile.classList.add('show-animation');
    } else {
        socialContainer.classList.add('show');
    }
    e.stopPropagation();
});

body.addEventListener('click', e => {
    if (window.innerWidth <= 800) {
        socialContainerMobile.classList.remove('show-animation');
        socialContainerMobile.classList.add('hide-animation');
    } else {
        socialContainer.classList.remove('show');
    }
});

iconContainerMobile.addEventListener('mouseover', e => {
    iconShareMobile.classList.add('icon-share-dark');
});

iconContainerMobile.addEventListener('mouseout', e => {
    iconShareMobile.classList.remove('icon-share-dark');
});