/* NAV BAR SCROLL */
window.addEventListener("scroll", () => {
  document
    .querySelector(".nav")
    .classList.toggle("active", window.scrollY > 50);
});

/* TMDB CONFIG */
const api = "api_key=d5f07f0dea6df66919bd755690461e0a";
const base_url = "https://api.themoviedb.org/3";
const banner_url = "https://image.tmdb.org/t/p/original";
const img_url = "https://image.tmdb.org/t/p/w300";

const requests = {
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=10749`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=99`,
};

/* UTIL */
function truncate(str, n) {
  return str?.length > n ? str.slice(0, n) + "..." : str;
}

async function fetchMovies(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("API Error");
    return await res.json();
  } catch (err) {
    console.error(err);
    return null;
  }
}

/* BANNER */
async function loadBanner() {
  const data = await fetchMovies(requests.fetchNetflixOrignals);
  if (!data) return;

  const movie = data.results[Math.floor(Math.random() * data.results.length)];

  if (movie.backdrop_path) {
    document.getElementById("banner").style.backgroundImage =
      `url(${banner_url}${movie.backdrop_path})`;
  }

  document.getElementById("banner_title").innerText =
    movie.name || movie.title || "Untitled";

  document.getElementById("banner_description").innerText = truncate(
    movie.overview,
    150,
  );
}

/* ROW CREATOR */
function createRow(titleText, movies) {
  const row = document.createElement("div");
  row.className = "row";

  const title = document.createElement("h2");
  title.className = "row_title";
  title.innerText = titleText;

  const posters = document.createElement("div");
  posters.className = "row_posters";

  movies.forEach((movie) => {
    if (!movie.poster_path) return;
    const img = document.createElement("img");
    img.className = "row_poster";
    img.src = img_url + movie.poster_path;
    img.alt = movie.title || movie.name;
    posters.appendChild(img);
  });

  row.appendChild(title);
  row.appendChild(posters);
  document.getElementById("headrow").appendChild(row);
}

/* LOAD ALL ROWS */
async function loadRows() {
  const originals = await fetchMovies(requests.fetchNetflixOrignals);
  if (originals) createRow("Netflix Originals", originals.results);

  const trending = await fetchMovies(requests.fetchTrending);
  if (trending) createRow("Trending Now", trending.results);

  const action = await fetchMovies(requests.fetchActionMovies);
  if (action) createRow("Action Movies", action.results);

  const comedy = await fetchMovies(requests.fetchComedyMovies);
  if (comedy) createRow("Comedy Movies", comedy.results);

  const horror = await fetchMovies(requests.fetchHorrorMovies);
  if (horror) createRow("Horror Movies", horror.results);

  const romance = await fetchMovies(requests.fetchRomanceMovies);
  if (romance) createRow("Romance Movies", romance.results);

  const docs = await fetchMovies(requests.fetchDocumentaries);
  if (docs) createRow("Documentaries", docs.results);
}

loadBanner();
loadRows();
