const email = document.querySelector('.input-email');
const inputs = document.querySelectorAll('.input');
const form = document.querySelector('.form');

const addEmptyError = input => {
  input.nextElementSibling.style.display = 'block';
  input.previousElementSibling.style.display = 'block';
  input.style.border = '2px solid var(--primary-red)';
};

const removeEmptyError = input => {
  input.nextElementSibling.style.display = 'none';
  input.previousElementSibling.style.display = 'none';
  input.style.border = '1px solid var(--neutral-grayish-blue)';
};

inputs.forEach(input => {
  input.addEventListener('blur', () => {
    if (!input.value) {
      addEmptyError(input);
    } else {
      if (input.classList.contains('input-email') && !/^\S+@\S+\.\S+$/g.test(input.value)) {
        return;
      } else {
        removeEmptyError(input);
      }
    }
  });
});

inputs.forEach(input => {
  input.addEventListener('input', () => {
    if (input.value) {
      removeEmptyError(input);
    } else {
      addEmptyError(input);
    }
  });
});

email.addEventListener('input', () => {
  if (email.value === '' || /^\S+@\S+\.\S+$/g.test(email.value)) {
    email.nextElementSibling.nextElementSibling.style.display = 'none';
  } else {
    email.nextElementSibling.nextElementSibling.style.display = 'block';
    email.previousElementSibling.style.display = 'block';
    email.style.border = '2px solid var(--primary-red)';
  }
});

form.addEventListener('submit', event => event.preventDefault());