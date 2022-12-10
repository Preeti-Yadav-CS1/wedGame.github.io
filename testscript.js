const cards = document.querySelectorAll(".cards__single");
var card1 = null;
var card2 = null;
var trialsRemaining = 6;
var cardsFlipped = 0;

function flipCard() {
  this.classList.toggle("flip");
  cardsFlipped += 1;
  
  if (cardsFlipped == 1){
    card1 = this;
  }
  
  if (cardsFlipped==2){
    card2 = this;
    console.log(card1.dataset.cardNum,card2.dataset.cardNum);
     if (card1.dataset.cardNum == card2.dataset.cardNum){
      console.log("matched");
         card1.removeEventListener('click',flipCard);
         card2.removeEventListener('click',flipCard);
         
    }else{
    setTimeout(()=>{
      console.log("not mathched");
      card1.classList.toggle('flip');
      card2.classList.toggle('flip');
      trialsRemaining -= 1;
      document.querySelector("#trials").innerHTML = trialsRemaining;
      if (trialsRemaining == 0){
        setTimeout(()=>{
          alert("Game Over");
        window.location.reload();
        },500);
        
        trialsRemaining = 6;
      }
    },500);
    }
    cardsFlipped = 0;
  }
}
cards.forEach((card) => card.addEventListener("click", flipCard));

//You can see full tutorial here
//https://www.ricardomoreira.io/blog/2020-06-15-flip-cards-with-javascript