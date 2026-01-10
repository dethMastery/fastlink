const tab_menu = ["Links", "Spotify"];

let tab_id = 0;

const tab_template = (tabID) => {
  return `<button id="${tabID}" ${
    tab_id === tabID ? `class="active"` : `onclick="nav_switch(${tabID})"`
  }>
  ${tab_menu[tabID]}
  </button>`;
};

const nav_switch = (tabId) => {
  tab_id = tabId;
  nav_create();
  item_switch(tabId);
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

const item_switch = (tabId) => {
  const link_element = document.querySelector(".links");
  const spt_element = document.querySelector(".spotify");

  switch (tabId) {
    case 0:
      if (link_element.classList.contains("hidden")) {
        link_element.classList.toggle("hidden");
      }

      if (!spt_element.classList.contains("hidden")) {
        spt_element.classList.toggle("hidden");
      }
      break;

    case 1:
      if (!link_element.classList.contains("hidden")) {
        link_element.classList.toggle("hidden");
      }

      if (spt_element.classList.contains("hidden")) {
        spt_element.classList.toggle("hidden");
      }
      break;

    default:
      break;
  }
};

(() => {
  nav_create();

  // Item Setup
  document.querySelector(".links").classList.remove("hidden");
})();
