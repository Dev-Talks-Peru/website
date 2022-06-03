module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      orange: {
        100: "#F46530",
        80: "#F67E51",
        60: "#F9976D",
        40: "#FF9E7A",
        20: "#FFB48F",
        10: "#FFF3EE",
      },
      blue: {
        100: "#335C72",
        80: "#79B5C8",
        60: "#9FD6E7",
        40: "#D4EDF4",
        20: "#F0FCFF",
        10: "#F5FDFF",
      },
      gray: {
        100: "#2A2E30",
        80: "#565E5F",
        60: "#696F70",
        40: "#7A7A7A",
        20: "#E9E9E9",
        10: "#F7F7F7",
      },
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
