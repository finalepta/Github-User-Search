import "./style.scss";
import "./js/tabs.js";
import colors from "./js/colors.js";

const input = document.querySelector('input[name="search"]');
const btn = document.querySelector(".sendBtn");
const search = document.querySelector(".search");
const window = document.querySelector(".window");
const error = document.querySelector(".error");
const reset = document.querySelector(".reset");
async function fetchUrl(user) {
  try {
    if (typeof user === "string" && user) {
      const userData = await fetch(`https://api.github.com/users/${user}`);
      const response = await userData.json();
      if (!userData.ok) throw new Error("Ошибка запроса");
      displayUser(response);
      getRepos(user);
      search.classList.add("inactive-card");
      window.classList.add("active-card");
    }
  } catch (e) {
    error.style.display = "flex";
  }
}
async function getRepos(user) {
  const repos = await fetch(`https://api.github.com/users/${user}/repos`);
  const response = await repos.json();
  const arr = Array.from(response).sort((a, b) => a.forks - b.forks);
  arr.forEach(element => {
    const { name, description, language, forks } = element;
    const html = `
      <div class="repo">
          <div class="title">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                  data-view-component="true" class="svg-2">
                  <path fill-rule="evenodd"
                      d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
              </svg>
              <a href="https://github.com/${user}/${name}" class="repo__title">${name}</a>
          </div>
          <div class="repo__descr">${
            description ? description : "</br></br>"
          }</div>
          <div class="repo__things">
              <div class="repo__lang">
                  <div class="repo__color" style="background-color: ${
                    colors[language ? language.toLowerCase() : "black"]
                  };"></div>
                  <div class="repo__language">${language}</div>
              </div>
              <div class="repo__forks">
                  <svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1"
                      width="16" data-view-component="true" class="svg">
                      <path fill-rule="evenodd"
                          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
                      </path>
                  </svg>
                  <span class="repo__forksN">${forks}</span>
              </div>
          </div>
      </div>`;
    document.querySelector(".reposits").insertAdjacentHTML("afterbegin", html);
  });
  document.querySelector(".repos").textContent =
    response.length >= 30 ? "30+" : response.length;
}
function displayUser(data) {
  const subs = data.following;
  const followers = data.followers;
  let subscrubies;
  if (subs && followers) {
    subscrubies = `<div class="subs"><span class="followers">${followers}</span> followers &bull; <span class="followed">${subs}</span> followed</div>`;
  } else if (subs && !followers) {
    subscrubies = `<div class="subs"><span class="followed">${subs}</span> followed</div>`;
  } else if (!subs && followers) {
    subscrubies = `<div class="subs"><span class="followers">${followers}</span> followers</div>`;
  } else subscrubies = "";
  const company = data.company
    ? `<div class="company">
  <svg class="svg" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
  ${data.company}
  </div>`
    : "";
  const location = data.location
    ? `<div class="location">
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
    ${data.location}
    </div>`
    : "";
  const mail = data.email
    ? `<div class="mail">
  <svg class="svg" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
  ${data.email}
</div>`
    : "";
  const website = data.blog
    ? `<div class="website">
<svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
${data.blog}
</div>`
    : "";
  const twitter = data.twitter_username
    ? `<div class="twitter">
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img" aria-labelledby="pg81ml6gmuvqumgfs3t8owrnh5jzk3q" class="octicon"><title id="pg81ml6gmuvqumgfs3t8owrnh5jzk3q">Twitter</title><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>
<a href="twitter.com/${data.twitter_username}" class="twitter-l">${data.twitter_username}</a>
</div>`
    : "";
  const html = `
<img src="${data.avatar_url}" alt="" class="img">
<div class="name">${data.name ? data.name : ""}</div>
<div class="nickname">${data.login}</div>
${subscrubies}
  <div class="bio">${data.bio ? data.bio : ""}</div>
  ${company}
  ${location}
  ${mail}
  ${website}
  ${twitter}
  `;
  document.querySelector(".overview").insertAdjacentHTML("afterbegin", html);
}

reset.addEventListener("click", function () {
  input.value = "";
});

input.addEventListener("focus", function (e) {
  if (getComputedStyle(error).display == "flex") error.style.display = "none";
});

btn.addEventListener("click", function () {
  fetchUrl(input.value);
});
