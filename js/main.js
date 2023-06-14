const div = document.querySelector(".content");

const promise = fetch("https://www.omdbapi.com/?apikey=b6003d8a&s=All");

promise
  .then((response) => response.json())
  .then(({ Search }) => {
    for (let i = 0; i < Search.length; i++) {
      console.log(Search[i].Title, "dfdf");
      div.innerHTML += `
        <div class="container">

        </div>
               <div>
          <img  class="gradient-border" id="box"src="${Search[i].Poster}" alt="" />
          <h5 class = "words"><span class = "title">${Search[i].Title}</span>
          <span class = "year">${Search[i].Year}</span> </h5>
        </div>`;
    }
  });
