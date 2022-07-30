const items = document.querySelectorAll('.item');
const icons = document.querySelectorAll('.icon');

const closeContainer = container => {
  const containerText = container.getElementsByClassName('container-text')[0];
  container.classList.remove('open');
  container.classList.add('close');
  containerText.classList.remove('show');
  containerText.classList.add('hidden');
  containerText.style.opacity = '0';
  container.getElementsByClassName('icon')[0].classList.remove('rotate');
};

const openContainer = container => {
  const containerText = container.getElementsByClassName('container-text')[0];
  container.classList.remove('close');
  container.classList.add('open');
  containerText.classList.remove('hidden');
  containerText.classList.add('show');
  containerText.style.opacity = '1';
  container.getElementsByClassName('icon')[0].classList.add('rotate');
};

const mainLogic = element => {
  element.addEventListener('click', () => {
    document.querySelectorAll('.container-element').forEach(container => {
      if (container !== element.parentElement.parentElement) {
        closeContainer(container);
      }
    });

    const containerElement = element.parentElement.parentElement;

    if (containerElement.classList.contains('close')) {
      openContainer(containerElement);
    } else {
      closeContainer(containerElement);
    }
  });
};

items.forEach(item => {
  mainLogic(item);
});

icons.forEach(icon => {
  mainLogic(icon);
});

