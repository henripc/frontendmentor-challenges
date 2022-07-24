const emailInput = document.querySelector('.email-input');
const error = document.querySelector('.email-error');
const main = document.querySelector('.main');
const imgContainer = document.querySelector('.container-img');

emailInput.addEventListener('input', () => {
  if (window.screen.width <= 640) {
    if (emailInput.value === '' || /^\S+@\S+\.\S+$/g.test(emailInput.value)) {
      smallScreenValidInput();
    } else {
      smallScreenInvalidInput();
    }
  } else {
    if (emailInput.value === '' || /^\S+@\S+\.\S+$/g.test(emailInput.value)) {
      validInput();
    } else {
      invalidInput();
    }
  }
});

const validInput = () => {
  error.style.opacity = '0';
  emailInput.style.border = '1px solid var(--secondary-pale-blue)';
};

const invalidInput = () => {
  error.style.opacity = '1';
  emailInput.style.border = '1px solid var(--secondary-light-red)';
};

const smallScreenValidInput = () => {
  main.insertBefore(error, imgContainer);
  error.style.opacity = '0';
  error.style.alignSelf = 'flex-start';
  error.style.margin = '1rem 0 7rem 9.6rem';
  error.style.display = 'none';
  emailInput.style.border = '1px solid var(--secondary-pale-blue)';
};

const smallScreenInvalidInput = () => {
  emailInput.parentNode.insertBefore(error, emailInput.nextSibling);
  error.style.alignSelf = 'center';
  error.style.margin = '0.5rem 0 1.5rem 0';
  error.style.opacity = '1';
  error.style.display = 'block';
  emailInput.style.border = '1px solid var(--secondary-light-red)';
};
