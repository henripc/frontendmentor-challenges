const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const ratingSelected = document.querySelector('.rating-selected');

let selectedRating = 0;

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    rating.classList.toggle('selected');
    selectedRating = rating.classList.value.split(' ')[1];
  });
});

btn.addEventListener('click', () => {
  if (selectedRating === 0) {
    return;
  } else {
    cardFront.classList.add('submit');
    cardBack.classList.add('show');
    ratingSelected.firstElementChild.textContent = selectedRating;
  }
});

