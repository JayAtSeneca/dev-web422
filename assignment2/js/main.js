/*********************************************************************************
* WEB422 – Assignment 2
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name: Jay Pravinkumar Chaudhari Student ID: 147268205 Date: 2022-09-30
*
********************************************************************************/ 
let page = 1;
const perPage = 10;
function loadMovieData(title = null) {
  let url = title
    ? `https://kind-pink-beetle-hose.cyclic.app/api/movies?page=${page}&perPage=${perPage}&title=${title}`
    : `https://kind-pink-beetle-hose.cyclic.app/api/movies?page=${page}&perPage=${perPage}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      if (title) {
        let elem = document.getElementById("pagination");
        elem.classList.add("d-none");
      } else {
        let elem = document.getElementById("pagination");
        elem.classList.remove("d-none");
      }

      //Creating the <tr> Elements
      let postRows = `${data
        .map(
          (post) =>
            `
        <tr data-id=${post._id}>
            <td>${post.year}</td>
            <td>${post.title}</td>
            <td>${post.plot ? post.plot : "N/A"}</td>
            <td>${post.rated ? post.rated : "N/A"}</td>
            <td>${Math.floor(post.runtime / 60)}:${(post.runtime % 60)
              .toString()
              .padStart(2, "0")}</td>
        </tr>
        `
        )
        .join("")}`;

      //Adding <tr> Elements to the Table
      document.querySelector("#moviesTable tbody").innerHTML = postRows;

      //Updating the "Current Page"
      document.querySelector("#current-page").innerHTML = page;

      //Adding Click Events & Loading / Displaying Movie Data
      document.querySelectorAll("#moviesTable tbody tr").forEach((row) => {
        row.addEventListener("click", (e) => {
          let clickedId = row.getAttribute("data-id");
          fetch(
            `https://kind-pink-beetle-hose.cyclic.app/api/movies/${clickedId}`
          )
            .then((res) => res.json())
            .then((data) => {
              document.querySelector("#detailsModal .modal-title").innerHTML =
                data.title;
              let body = "";
              if (data.poster) {
                body = `<img class="img-fluid w-100" src="${
                  data.poster
                }" alt="${data.title} poster"><br><br>
                    <strong>Directed By:</strong> ${data.directors.join(
                      ", "
                    )}<br><br>
                    <p>${data.fullplot}</p>
                    <strong>Cast:</strong> ${
                      data.cast ? data.cast.join(", ") : "N/A"
                    }<br><br>
                    <strong>Awards:</strong> ${data.awards.text}<br>
                    <strong>IMDB Rating:</strong> ${data.imdb.rating} (${
                  data.imdb.votes
                } votes)`;
              } else {
                body = `<br><br>
                    <strong>Directed By:</strong> ${data.directors.join(
                      ", "
                    )}<br><br>
                    <p>${data.fullplot}</p>
                    <strong>Cast:</strong> ${
                      data.cast ? data.cast.join(", ") : "N/A"
                    }<br><br>
                    <strong>Awards:</strong> ${data.awards.text}<br>
                    <strong>IMDB Rating:</strong> ${data.imdb.rating} (${
                  data.imdb.votes
                } votes)`;
              }

              document.querySelector("#detailsModal .modal-body").innerHTML =
                body;
              let myModal = new bootstrap.Modal(
                document.getElementById("detailsModal"),
                {
                  backdrop: "static",
                  keyboard: false,
                }
              );

              myModal.show();
            });
        });
      });
    });
}

document.addEventListener("DOMContentLoaded", () => {
  loadMovieData();
  document.querySelector("#previous-page").addEventListener("click", () => {
    if (page > 1) {
      page--;
      loadMovieData();
    }
  });
  document.querySelector("#next-page").addEventListener("click", () => {
    page++;
    loadMovieData();
  });
  document.querySelector("#searchForm").addEventListener("submit", (event) => {
    loadMovieData(document.querySelector("#title").value);
    event.preventDefault();
  });
  document.querySelector("#clearForm").addEventListener("click", () => {
    document.querySelector("#title").value = "";
  });
});
