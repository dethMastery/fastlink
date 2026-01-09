const top_element = document.querySelector(".main-card");

setTimeout(() => {
  top_element.classList.remove("top-start");
}, 1000);

setTimeout(() => {
  top_element.classList.add("top-end");
}, 1000);
