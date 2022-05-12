//Selectors
var thankYouCard = document.querySelector(".thanks-state")
var rateCard = document.querySelector(".rating-card")
var submitBtn = document.querySelector(".submit-btn");
var score = document.querySelector("#score")
const ratingBtns = document.querySelectorAll('.rating-btn');
let scores = 1

//EventListeners
submitBtn.addEventListener("click", onSubmit)

//Functions
ratingBtns.forEach( btn => {
  btn.addEventListener('click', rateBtnClick);
});

function onSubmit(){
  rateCard.classList.add('hide');
  score.textContent =scores;
  thankYouCard.classList.remove('hide');
  console.log('submit click');
}

function rateBtnClick(event) {
  ratingBtns.forEach(btn => {
      btn.classList.remove('active');
  });
  
  if (event.target.classList.contains('rating-btn')){
      event.target.classList.add('active');
  } else {
      event.target.parentElement.classList.add('active');
  }
  scores = event.target.textContent;
}