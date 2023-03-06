import axios from 'axios';

const random = () => {
  return Math.floor(Math.random() * 994) + 2;
};
// 2 - 995

const getData = async () => {
  const req = await axios.get(
    `https://api.themoviedb.org/3/movie/${random()}?api_key=5010cc3127266e87b68ed72b697ecdd3&language=pt-BR`
  );

  const data = req.data;
  return data;
};

export default getData;
