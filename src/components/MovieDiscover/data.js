import genreList from "../../helpers/genresList";
export const genreOptions = genreList.map((genre) => ({
  value: genre.id,
  label: genre.name,
}));

const yearlist = [];
const max = new Date().getFullYear();
let min = 2000;
while (max >= min) {
  yearlist.unshift(min);
  ++min;
}

export const yearOptions = yearlist.map((year) => ({
  label: year,
  value: year,
}));
