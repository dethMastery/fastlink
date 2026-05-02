let spotify_tab = localStorage.getItem("spotify_tab") || 0;

const playlist_data = [
  "https://open.spotify.com/embed/playlist/6OU3yAdlEzonVyElOITmmV?utm_source=generator",
  "https://open.spotify.com/embed/playlist/3ttDIixnys0RsZW2wA18gv?utm_source=generator",
  "https://open.spotify.com/embed/playlist/0gsdfdYgCGXO3rGDLtBnlv?utm_source=generator",
];

const template = (data) => {
  let example = `<iframe
  data-testid="embed-iframe"
  style="border-radius: 12px"
  src="${data}"
  width="100%"
  height="352"
  frameborder="0"
  allowfullscreen=""
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
></iframe>`;

  return example;
};

const spt_change = (status) => {
  switch (status) {
    case "next":
      if (spotify_tab >= playlist_data.length - 1) {
        spotify_tab = length - 1;
      } else {
        spotify_tab += 1;
      }

      break;

    case "prev":
      if (spotify_tab <= 0) {
        spotify_tab = length - 1;
      } else {
        spotify_tab -= 1;
      }
      break;

    default:
      console.log("invalid method");
      break;
  }

  spotify_element.innerHTML = template(playlist_data[spotify_tab]);
};

const spotify_element = document.querySelector(".spotify-element");

spotify_element.innerHTML = template(playlist_data[spotify_tab]);

// Event Listener
document
  .querySelector("#spt-prev")
  .addEventListener("click", () => spt_change("prev"));
document
  .querySelector("#spt-next")
  .addEventListener("click", () => spt_change("next"));
