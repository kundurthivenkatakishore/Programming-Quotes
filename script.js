document.body.innerHTML=`<div class="heading-container">
<h1>Edsger W. Dijkstra-Programming Quotes</h1>
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Edsger_Wybe_Dijkstra.jpg/220px-Edsger_Wybe_Dijkstra.jpg" width="100px" height="100px">
</div>
<div id="mainContainer" class="maincontainer"></div>`

const getQuotes=async ()=>{
  try{
      const data=await fetch("https://programming-quotes-api.herokuapp.com/quotes/author/Edsger%20W.%20Dijkstra")
      const quotes=await data.json();
      console.log(quotes)
      mainContainer.innerHTML="";
      quotes.forEach((quote) => {
        displayQuote(quote);
      });
  }
  catch(error){
    console.log(error);
  }
}
getQuotes();
const displayQuote=(obj)=>{
  mainContainer.innerHTML+=
  `<div class="container">
    <p>\"${obj.en}\"</p>
  </div>`
}