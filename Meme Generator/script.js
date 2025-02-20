const btn = document.querySelector("button");
const titleMeme = document.querySelector(".title");
const creator = document.querySelector(".author");
const img = document.querySelector("img");

const memes = () => {
  fetch("https://meme-api.com/gimme")
    .then((res) => res.json())
    .then((data) => {
      const { author, url, title } = data;

      creator.innerText = ` Memes By : ${author}`;
      img.src = url;
      titleMeme.innerText = title;
      console.log(author, url, title);
    });
};

memes()

btn.addEventListener("click", () => memes());
