require("dotenv").config();

const base_url = `https://api.rawg.io/api/`;

const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);
  if (yearsDiff != 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }
  return date;
};
const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

const popular_games = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
