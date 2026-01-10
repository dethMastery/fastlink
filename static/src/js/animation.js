const top_element = document.querySelector(".main-card");
const bot_element = document.querySelector(".text-box-container");

setTimeout(() => {
  top_element.classList.remove("top-start");
}, 1000);

setTimeout(() => {
  top_element.classList.add("top-end");
}, 1000);

setTimeout(() => {
  bot_element.classList.remove("bot-start");
}, 2500);

setTimeout(() => {
  bot_element.classList.add("bot-end");
}, 2500);
