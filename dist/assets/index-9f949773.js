(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) s(a);
  new MutationObserver(a => {
    for (const o of a)
      if (o.type === "childList")
        for (const i of o.addedNodes)
          i.tagName === "LINK" && i.rel === "modulepreload" && s(i);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(a) {
    const o = {};
    return (
      a.integrity && (o.integrity = a.integrity),
      a.referrerpolicy && (o.referrerPolicy = a.referrerpolicy),
      a.crossorigin === "use-credentials"
        ? (o.credentials = "include")
        : a.crossorigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function s(a) {
    if (a.ep) return;
    a.ep = !0;
    const o = c(a);
    fetch(a.href, o);
  }
})();
const v = document.querySelectorAll(".accordion-item__label"),
  p = document.querySelectorAll(".accordion-tab");
function h() {
  const e = this,
    t = e.classList.contains("accordion-tab") ? e : e.parentElement,
    c = t.dataset.actabGroup,
    s = t.dataset.actabId;
  p.forEach(function (a) {
    a.dataset.actabGroup === c &&
      (a.dataset.actabId === s
        ? a.classList.add("accordion-active")
        : a.classList.remove("accordion-active"));
  }),
    v.forEach(a => {
      const o = a.parentElement;
      o.dataset.actabGroup === c &&
        (o.dataset.actabId === s
          ? o.classList.add("accordion-active")
          : o.classList.remove("accordion-active"));
    });
}
v.forEach(function (e) {
  e.addEventListener("click", h);
});
p.forEach(function (e) {
  e.addEventListener("click", h);
});
const u = {
    Mercury: "#ff2b2b",
    TypeScript: "#2b7489",
    PureBasic: "#5a6986",
    "Objective-C++": "#6866fb",
    Self: "#0579aa",
    edn: "#db5855",
    NewLisp: "#87AED7",
    "Jupyter Notebook": "#DA5B0B",
    Rebol: "#358a5b",
    Frege: "#00cafe",
    Dart: "#00B4AB",
    AspectJ: "#a957b0",
    Shell: "#89e051",
    "Web Ontology Language": "#9cc9dd",
    xBase: "#403a40",
    Eiffel: "#946d57",
    Nix: "#7e7eff",
    RAML: "#77d9fb",
    MTML: "#b7e1f4",
    Racket: "#22228f",
    Elixir: "#6e4a7e",
    SAS: "#B34936",
    Agda: "#315665",
    wisp: "#7582D1",
    D: "#ba595e",
    Kotlin: "#F18E33",
    Opal: "#f7ede0",
    Crystal: "#776791",
    "Objective-C": "#438eff",
    "ColdFusion CFC": "#ed2cd6",
    Oz: "#fab738",
    Mirah: "#c7a938",
    "Objective-J": "#ff0c5a",
    Gosu: "#82937f",
    FreeMarker: "#0050b2",
    Ruby: "#701516",
    "Component Pascal": "#b0ce4e",
    Arc: "#aa2afe",
    Brainfuck: "#2F2530",
    Nit: "#009917",
    APL: "#5A8164",
    Go: "#375eab",
    "Visual Basic": "#945db7",
    PHP: "#4F5D95",
    Cirru: "#ccccff",
    SQF: "#3F3F3F",
    Glyph: "#e4cc98",
    Java: "#b07219",
    MAXScript: "#00a6a6",
    Scala: "#DC322F",
    Makefile: "#427819",
    ColdFusion: "#ed2cd6",
    Perl: "#0298c3",
    Lua: "#000080",
    Vue: "#2c3e50",
    Verilog: "#b2b7f8",
    Factor: "#636746",
    Haxe: "#df7900",
    "Pure Data": "#91de79",
    Forth: "#341708",
    Red: "#ee0000",
    Hy: "#7790B2",
    Volt: "#1F1F1F",
    LSL: "#3d9970",
    eC: "#913960",
    CoffeeScript: "#244776",
    HTML: "#e44b23",
    Lex: "#DBCA00",
    "API Blueprint": "#2ACCA8",
    Swift: "#ffac45",
    C: "#555555",
    AutoHotkey: "#6594b9",
    Isabelle: "#FEFE00",
    Metal: "#8f14e9",
    Clarion: "#db901e",
    JSONiq: "#40d47e",
    Boo: "#d4bec1",
    AutoIt: "#1C3552",
    Clojure: "#db5855",
    Rust: "#dea584",
    Prolog: "#74283c",
    SourcePawn: "#5c7611",
    AMPL: "#E6EFBB",
    FORTRAN: "#4d41b1",
    ANTLR: "#9DC3FF",
    Harbour: "#0e60e3",
    Tcl: "#e4cc98",
    BlitzMax: "#cd6400",
    PigLatin: "#fcd7de",
    Lasso: "#999999",
    ECL: "#8a1267",
    VHDL: "#adb2cb",
    Elm: "#60B5CC",
    "Propeller Spin": "#7fa2a7",
    X10: "#4B6BEF",
    IDL: "#a3522f",
    ATS: "#1ac620",
    Ada: "#02f88c",
    "Unity3D Asset": "#ab69a1",
    Nu: "#c9df40",
    LFE: "#004200",
    SuperCollider: "#46390b",
    Oxygene: "#cdd0e3",
    ASP: "#6a40fd",
    Assembly: "#6E4C13",
    Gnuplot: "#f0a9f0",
    JFlex: "#DBCA00",
    NetLinx: "#0aa0ff",
    Turing: "#45f715",
    Vala: "#fbe5cd",
    Processing: "#0096D8",
    Arduino: "#bd79d1",
    FLUX: "#88ccff",
    NetLogo: "#ff6375",
    "C Sharp": "#178600",
    CSS: "#563d7c",
    "Emacs Lisp": "#c065db",
    Stan: "#b2011d",
    SaltStack: "#646464",
    QML: "#44a51c",
    Pike: "#005390",
    LOLCODE: "#cc9900",
    ooc: "#b0b77e",
    Handlebars: "#01a9d6",
    J: "#9EEDFF",
    Mask: "#f97732",
    EmberScript: "#FFF4F3",
    TeX: "#3D6117",
    Nemerle: "#3d3c6e",
    KRL: "#28431f",
    "Ren'Py": "#ff7f7f",
    "Unified Parallel C": "#4e3617",
    Golo: "#88562A",
    Fancy: "#7b9db4",
    OCaml: "#3be133",
    Shen: "#120F14",
    Pascal: "#b0ce4e",
    "F#": "#b845fc",
    Puppet: "#302B6D",
    ActionScript: "#882B0F",
    Diff: "#88dddd",
    "Ragel in Ruby Host": "#9d5200",
    Fantom: "#dbded5",
    Zephir: "#118f9e",
    Click: "#E4E6F3",
    Smalltalk: "#596706",
    DM: "#447265",
    Ioke: "#078193",
    PogoScript: "#d80074",
    LiveScript: "#499886",
    JavaScript: "#f1e05a",
    VimL: "#199f4b",
    PureScript: "#1D222D",
    ABAP: "#E8274B",
    Matlab: "#bb92ac",
    Slash: "#007eff",
    R: "#198ce7",
    Erlang: "#B83998",
    Pan: "#cc0000",
    LookML: "#652B81",
    Eagle: "#814C05",
    Scheme: "#1e4aec",
    PLSQL: "#dad8d8",
    python: "#3572A5",
    Max: "#c4a79c",
    "Common Lisp": "#3fb68b",
    Latte: "#A8FF97",
    XQuery: "#5232e7",
    Omgrofl: "#cabbff",
    XC: "#99DA07",
    Nimrod: "#37775b",
    SystemVerilog: "#DAE1C2",
    Chapel: "#8dc63f",
    Groovy: "#e69f56",
    Dylan: "#6c616e",
    E: "#ccce35",
    Parrot: "#f3ca0a",
    "Grammatical Framework": "#79aa7a",
    "Game Maker Language": "#8fb200",
    Papyrus: "#6600cc",
    "NetLinx+ERB": "#747faa",
    Clean: "#3F85AF",
    Alloy: "#64C800",
    Squirrel: "#800000",
    PAWN: "#dbb284",
    UnrealScript: "#a54c4d",
    "Standard ML": "#dc566d",
    Slim: "#ff8f77",
    Perl6: "#0000fb",
    Julia: "#a270ba",
    Haskell: "#29b544",
    NCL: "#28431f",
    Io: "#a9188d",
    Rouge: "#cc0088",
    cpp: "#f34b7d",
    "AGS Script": "#B9D9FF",
    Dogescript: "#cca760",
    nesC: "#94B0C7",
    black: "#000",
  },
  b = {};
for (const e in u) b[e.toLowerCase()] = u[e];
const f = document.querySelector('input[name="search"]'),
  g = document.querySelector(".sendBtn"),
  m = document.querySelector(".search"),
  y = document.querySelector(".window"),
  d = document.querySelector(".error"),
  w = document.querySelector(".reset");
async function A(e) {
  try {
    if (typeof e == "string" && e) {
      const t = await fetch(`https://api.github.com/users/${e}`);
      const c = await t.json();
      if (!t.ok) throw new Error("Ошибка запроса");
      S(c),
        L(e),
        m.classList.add("inactive-card"),
        y.classList.add("active-card");
    }
  } catch (t) {
    d.style.display = "flex";
  }
}
async function L(e) {
  const c = await (
      await fetch(`https://api.github.com/users/${e}/repos`)
    ).json(),
    s = Array.from(c).sort((a, o) => a.forks - o.forks);
  (Array.isArray(s), Array.isArray(c)),
    s.forEach(a => {
      const { name: o, description: i, language: r, forks: l } = a,
        n = `
      <div class="repo">
          <div class="title">
              <svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16"
                  data-view-component="true" class="svg-2">
                  <path fill-rule="evenodd"
                      d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z">
                  </path>
              </svg>
              <a href="https://github.com/${e}/${o}" class="repo__title">${o}</a>
          </div>
          <div class="repo__descr">${i || "</br></br>"}</div>
          <div class="repo__things">
              <div class="repo__lang">
                  <div class="repo__color" style="background-color: ${
                    b[r ? r.toLowerCase() : "black"]
                  };"></div>
                  <div class="repo__language">${r}</div>
              </div>
              <div class="repo__forks">
                  <svg aria-label="forks" role="img" height="16" viewBox="0 0 16 16" version="1.1"
                      width="16" data-view-component="true" class="svg">
                      <path fill-rule="evenodd"
                          d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z">
                      </path>
                  </svg>
                  <span class="repo__forksN">${l}</span>
              </div>
          </div>
      </div>`;
      document.querySelector(".reposits").insertAdjacentHTML("afterbegin", n);
    }),
    (document.querySelector(".repos").textContent =
      c.length >= 30 ? "30+" : c.length);
}
function S(e) {
  const t = e.following,
    c = e.followers;
  let s;
  t && c
    ? (s = `<div class="subs"><span class="followers">${c}</span> followers &bull; <span class="followed">${t}</span> followed</div>`)
    : t && !c
    ? (s = `<div class="subs"><span class="followed">${t}</span> followed</div>`)
    : !t && c
    ? (s = `<div class="subs"><span class="followers">${c}</span> followers</div>`)
    : (s = "");
  const a = e.company
      ? `<div class="company">
  <svg class="svg" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.5 14.25c0 .138.112.25.25.25H4v-1.25a.75.75 0 01.75-.75h2.5a.75.75 0 01.75.75v1.25h2.25a.25.25 0 00.25-.25V1.75a.25.25 0 00-.25-.25h-8.5a.25.25 0 00-.25.25v12.5zM1.75 16A1.75 1.75 0 010 14.25V1.75C0 .784.784 0 1.75 0h8.5C11.216 0 12 .784 12 1.75v12.5c0 .085-.006.168-.018.25h2.268a.25.25 0 00.25-.25V8.285a.25.25 0 00-.111-.208l-1.055-.703a.75.75 0 11.832-1.248l1.055.703c.487.325.779.871.779 1.456v5.965A1.75 1.75 0 0114.25 16h-3.5a.75.75 0 01-.197-.026c-.099.017-.2.026-.303.026h-3a.75.75 0 01-.75-.75V14h-1v1.25a.75.75 0 01-.75.75h-3zM3 3.75A.75.75 0 013.75 3h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 3.75zM3.75 6a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM3 9.75A.75.75 0 013.75 9h.5a.75.75 0 010 1.5h-.5A.75.75 0 013 9.75zM7.75 9a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5zM7 6.75A.75.75 0 017.75 6h.5a.75.75 0 010 1.5h-.5A.75.75 0 017 6.75zM7.75 3a.75.75 0 000 1.5h.5a.75.75 0 000-1.5h-.5z"></path></svg>
  ${e.company}
  </div>`
      : "",
    o = e.location
      ? `<div class="location">
    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z"/></svg>
    ${e.location}
    </div>`
      : "",
    i = e.email
      ? `<div class="mail">
  <svg class="svg" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M1.75 2A1.75 1.75 0 000 3.75v.736a.75.75 0 000 .027v7.737C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0016 12.25v-8.5A1.75 1.75 0 0014.25 2H1.75zM14.5 4.07v-.32a.25.25 0 00-.25-.25H1.75a.25.25 0 00-.25.25v.32L8 7.88l6.5-3.81zm-13 1.74v6.441c0 .138.112.25.25.25h12.5a.25.25 0 00.25-.25V5.809L8.38 9.397a.75.75 0 01-.76 0L1.5 5.809z"></path></svg>
  ${e.email}
</div>`
      : "",
    r = e.blog
      ? `<div class="website">
<svg class="svg" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" class="octicon octicon-link"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg>
${e.blog}
</div>`
      : "",
    l = e.twitter_username
      ? `<div class="twitter">
<svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 273.5 222.3" role="img" aria-labelledby="pg81ml6gmuvqumgfs3t8owrnh5jzk3q" class="octicon"><title id="pg81ml6gmuvqumgfs3t8owrnh5jzk3q">Twitter</title><path d="M273.5 26.3a109.77 109.77 0 0 1-32.2 8.8 56.07 56.07 0 0 0 24.7-31 113.39 113.39 0 0 1-35.7 13.6 56.1 56.1 0 0 0-97 38.4 54 54 0 0 0 1.5 12.8A159.68 159.68 0 0 1 19.1 10.3a56.12 56.12 0 0 0 17.4 74.9 56.06 56.06 0 0 1-25.4-7v.7a56.11 56.11 0 0 0 45 55 55.65 55.65 0 0 1-14.8 2 62.39 62.39 0 0 1-10.6-1 56.24 56.24 0 0 0 52.4 39 112.87 112.87 0 0 1-69.7 24 119 119 0 0 1-13.4-.8 158.83 158.83 0 0 0 86 25.2c103.2 0 159.6-85.5 159.6-159.6 0-2.4-.1-4.9-.2-7.3a114.25 114.25 0 0 0 28.1-29.1" fill="currentColor"></path></svg>
<a href="twitter.com/${e.twitter_username}" class="twitter-l">${e.twitter_username}</a>
</div>`
      : "",
    n = `
<img src="${e.avatar_url}" alt="" class="img">
<div class="name">${e.name ? e.name : ""}</div>
<div class="nickname">${e.login}</div>
${s}
  <div class="bio">${e.bio ? e.bio : ""}</div>
  ${a}
  ${o}
  ${i}
  ${r}
  ${l}
  `;
  document.querySelector(".overview").insertAdjacentHTML("afterbegin", n);
}
w.addEventListener("click", function () {
  f.value = "";
});
f.addEventListener("focus", function (e) {
  getComputedStyle(d).display == "flex" && (d.style.display = "none");
});
g.addEventListener("click", function () {
  A(f.value);
});
