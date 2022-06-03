const btnDisplayAdvice = document.querySelector("[data-display-advice]");
const quote = document.querySelector("[data-quote]");
const quoteId = document.querySelector("[data-advice-number]");

btnDisplayAdvice.addEventListener("click", getAdviceObj);

function getAdviceObj() {
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(xhttp);
      xhttp = JSON.parse(xhttp.responseText);
      displayAdvice(xhttp);
    }
  };
  xhttp.open("GET", `https://api.adviceslip.com/advice/${genRandNbr(224)}`)
  xhttp.send();
}

function displayAdvice(value) {
  quote.innerText = value.slip.advice;
  quoteId.innerText = value.slip.id;
}

function genRandNbr(max, min = 0) {
  const random = Math.floor(Math.random() * (max - min) + min) + 1;
  return random;
}
