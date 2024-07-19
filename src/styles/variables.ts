export const COLORS = {
  MainColor: "#49403C",
  littleText: "#BEB7A5",
  cardBg: "#FAF9F7",
  white: "#FFFFFF",
  blackOpacity: "rgba(0, 0, 0, 0.20)",
  black: "#000000",
  textActive: "#ABA189",
};

const breakpoints = {
  laptopBP: "1400px",
  mobileBP: "480px",
};

export const BREAKPOINTS = {
  laptop: `(max-width: ${breakpoints.laptopBP})`,
  mobile: `(max-width: ${breakpoints.mobileBP})`,
};

export const SOCIAL_LINKS = [
  { icon: "TgLogo", href: "" },
  { icon: "VkLogo", href: "" },
  { icon: "InstLogo", href: "" },
];

export const NAV_LINKS = [
  { name: "о художнике", address: "#artist" },
  { name: "о выставке", address: "#exhibition" },
  { name: "работы", address: "#works" },
];

export const CONTACTS_LINKS = [
  { name: "goosegoose.ru", address: "https://goosegoose.ru/" },
  { name: "vk.com/goosegoose", address: "https://vk.com/goosegoose" },
];
