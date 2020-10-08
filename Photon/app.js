const auth = "563492ad6f9170000100000193f1ce3d82ef468dae9b35fd538d3e98";
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
let searchValue;
const more = document.querySelector(".more");
let page = 8;
let fetchLink;
let currentSearch;

// add event listeners
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
  e.preventDefault();
  currentSearch = searchValue;
  searchPhotos(searchValue);
});
more.addEventListener("click", loadMore);

function updateInput(e) {
  searchValue = e.target.value;
}
async function fetchApi(url) {
  const dataFetch = await fetch(url, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: auth,
    },
  });
  const data = await dataFetch.json();
  return data;
}

function generatePictures(data) {
  data.photos.forEach((photo) => {
    console.log(photo);
    const galleryImg = document.createElement("div");
    galleryImg.classList.add("gallery-img");
    galleryImg.innerHTML = `
          <div class="gallery-info">
          <p>${photo.photographer}</p>
          <a href=${photo.src.original}>Download</a>
          </div>
          <img src=${photo.src.large}></img>
          `;
    gallery.appendChild(galleryImg);
  });
}

async function curatedPhotos() {
  fetchLink =
    "https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/curated?per_page=8&page=1";
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

async function searchPhotos(search) {
  clear();
  fetchLink = `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search?query=${search}+query&per_page=8&page=1`;
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

function clear() {
  gallery.innerHTML = "";
  searchInput.value = "";
}

async function loadMore() {
  page++;
  if (currentSearch) {
    fetchLink = `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/search?query=${currentSearch}+query&per_page=8&page=${page}`;
  } else {
    fetchLink = `https://cors-anywhere.herokuapp.com/https://api.pexels.com/v1/curated?per_page=8&page=${page}`;
  }
  const data = await fetchApi(fetchLink);
  generatePictures(data);
}

curatedPhotos();
