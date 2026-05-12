const links_data = [
  // {
  //   title: "Donate ค่าข้าวให้เจ้าเด็ทซ์",
  //   links: "https://donate.mastery.my.id",
  //   icon: "/src/img/icons/globe.svg",
  //   tag: "link",
  // },
  {
    title: "Discord Server",
    links: "https://discord.gg/Mv7KXXrZgw",
    icon: "/src/img/icons/discord.svg",
    tag: "discord",
  },
  {
    title: "Discord Profile",
    links: "https://discord.gg/Mv7KXXrZgw",
    icon: "/src/img/icons/discord.svg",
    tag: "discord",
  },
  {
    title: "Tiktok",
    links: "https://tiktok.com/@solomonz_star",
    icon: '/src/img/icons/tiktok.svg',
    tag: "tiktok" 
  },
  {
    title: "Github",
    links: "https://github.com/dethMastery",
    icon: "/src/img/icons/github.svg",
    tag: "github",
  },
  {
    title: "Instagram",
    links: "https://instagram.com/katsuragi.wav",
    icon: "/src/img/icons/instagram.svg",
    tag: "ig",
  }
];

const link_template = (data) => {
  return `<a href="${data.links}" target="_blank" class="link-btn btn-${data.tag}">
  <img src="${data.icon}" alt="icon" /> ${data.title}
</a>`;
};

(() => {
  let link_data = "";

  for (let i = 0; i < links_data.length; i++) {
    link_data += link_template(links_data[i]);
  }

  document.querySelector(".links").innerHTML = link_data;
})();
