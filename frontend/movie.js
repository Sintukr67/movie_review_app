
const url = new URL(location.href);
const movieId = url.searchParams.get("id");
const movieTitle = url.searchParams.get("title");

const APILINK = "http://localhost:8000/api/v1/reviews/";

const main = document.getElementById("section");
const title = document.getElementById("title");

title.innerText = movieTitle;

main.innerHTML += `
<div class="row">
  <div class="column">
    <div class="card">
      <p><strong>New Review</strong></p>
      <p><strong>Review:</strong>
      <input type="text" id="new_review"></p>
      <p><strong>User:</strong>
      <input type="text" id="new_user"></p>
      <p>
        <button onclick="saveNewReview()">💾 Save</button>
      </p>
    </div>
  </div>
</div>
`;

function saveNewReview() {
  const review = document.getElementById('new_review').value;
  const user = document.getElementById('new_user').value;
  fetch(APILINK + "new", {
    method: 'POST',
    headers: {
      'Accept': 'application/json,text/plain,*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, review, movieId })
  }).then(res => res.json()).then(res => {
    console.log(res);
    location.reload();
  });
}

function returnReviews(url) {
  fetch(url + "movie/" + movieId)
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        const div_card = document.createElement("div");
        div_card.className = "row";
        div_card.innerHTML = `
          <div class="column">
            <div class="card" id="${element._id}">
              <p><strong>Review:</strong> ${element.review}</p>
              <p><strong>User:</strong> ${element.user}</p>
              <p>
                <button onclick="editReview('${element._id}','${element.review}','${element.user}')">✏️ Edit</button>
                <button onclick="deleteReview('${element._id}')">🗑️ Delete</button>
              </p>
            </div>
          </div>
        `;
        main.appendChild(div_card);
      });
    });
}

function editReview(id, review, user) {
  const element = document.getElementById(id);
  element.innerHTML = `
    <p><strong>Review:</strong><input type="text" id="review_${id}" value="${review}"></p>
    <p><strong>User:</strong><input type="text" id="user_${id}" value="${user}"></p>
    <p><button onclick="saveEditedReview('${id}')">💾 Save</button></p>
  `;
}

function saveEditedReview(id) {
  const review = document.getElementById('review_' + id).value;
  const user = document.getElementById('user_' + id).value;
  fetch(APILINK + id, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json,text/plain,*/*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ user, review })
  }).then(res => res.json()).then(res => {
    console.log(res);
    location.reload();
  });
}

function deleteReview(id) {
  fetch(APILINK + id, { method: 'DELETE' })
    .then(res => res.json())
    .then(res => {
      console.log(res);
      location.reload();
    });
}

returnReviews(APILINK);

