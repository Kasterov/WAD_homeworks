var clickCount = true;

function Drop_info() {
  if (clickCount == true) {
    const quote = document.getElementById("InfoUser");
    quote.style.opacity = "1";
    clickCount = false;
    console.log(clickCount);
  } else {
    const quote = document.getElementById("InfoUser");
    quote.style.opacity = "0";
    clickCount = true;
    console.log(clickCount);
  }
}
