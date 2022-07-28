const ratings = document.querySelectorAll('.rating');
const btn = document.querySelector('.btn');
const cardFront = document.querySelector('.card-front');
const cardBack = document.querySelector('.card-back');
const ratingSelected = document.querySelector('.rating-selected');

const ratingArray = [];

ratings.forEach(rating => {
  rating.addEventListener('click', () => {
    const numberChosen = rating.classList.value.split(' ')[1];
    if (rating.classList.toggle('selected')) {
      ratingArray.push(numberChosen);
    } else {
      const index = ratingArray.indexOf(numberChosen);
      ratingArray.splice(index, 1);
    }
  });
});

btn.addEventListener('click', () => {
  if (ratingArray.length !== 1) {
    return;
  } else {
    cardFront.classList.add('submit');
    cardBack.classList.add('show');
    ratingSelected.firstElementChild.textContent = ratingArray[0];
  }
});
