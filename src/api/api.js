require("dotenv").config();

const base_url = `https://api.rawg.io/api/`;

const getDate = (yearsDiff) => {
  let date = new Date().toISOString().slice(0, 10);
  if (yearsDiff !== 0) {
    date = date.split("-");
    date[0] = (parseInt(date[0]) + yearsDiff).toString();
    date = date.join("-");
  }
  return date;
};
const currentDate = getDate(0);
const lastYear = getDate(-1);
const nextYear = getDate(1);

const popularGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcomingGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?key=${process.env.REACT_APP_API_KEY}&dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popularGames}`;
export const upcomingGamesURL = () => `${base_url}${upcomingGames}`;
export const newGamesURL = () => `${base_url}${newGames}`;
export const gameDetailsURL = (game_id) =>
  `${base_url}games/${game_id}.json?&key=${process.env.REACT_APP_API_KEY}`;
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots?&.json?&key=${process.env.REACT_APP_API_KEY}`;
export const searchGameURL = (game_name) =>
  ` ${base_url}games?key=${process.env.REACT_APP_API_KEY}&search=${game_name}&page_size=10`;
