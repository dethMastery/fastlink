const tab_menu = ["Links", "Spotify"];

let tab_id = 0;

const tab_template = (tabID) => {
  return `<button id="${tabID}" ${
    tab_id === tabID
      ? `class="active" onclick="nav_switch(${tabID})"`
      : `onclick="nav_switch(${tabID})"`
  }>
  ${tab_menu[tabID]}
  </button>`;
};

const nav_switch = (tabId) => {
  tab_id = tabId;
  nav_create();
};

// create navigation
const nav_create = () => {
  let menuItem = "";
  for (let i = 0; i < tab_menu.length; i++) {
    if (i === 0) {
      menuItem = "";
    }

    menuItem += tab_template(i);
  }

  document.querySelector(".nav").innerHTML = menuItem;
};

nav_create();
