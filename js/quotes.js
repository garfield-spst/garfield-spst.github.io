function fetchRandomQuote() {
  fetch("https://api.quotable.io/random")
    .then((response) => response.json())
    .then((data) => {
      const quoteElement = document.getElementById("quoterndm");
      quoteElement.innerHTML = `&#8220;<br>${data.content}<br>${data.author}`;
      //quoteElement.innerHTML = `${data.content}<br>${data.author}`;
    })
    .catch((error) => {
      console.error("Error fetching quote:", error);
    });
}
window.addEventListener("load", fetchRandomQuote);
