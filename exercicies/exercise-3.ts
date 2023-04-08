async function getRickAndMortyCharacters() {
  const characterNames = [
    "Rick Sanchez",
    "Morty Smith",
    "Summer Smith",
    "Beth Smith",
    "Jerry Smith",
  ];

  const genresFormat = {
    Male: "Homem",
    Female: "Mulher",
  };

  const speciesFormat = {
    Human: "Humano",
    Alien: "Alienígena",
  };

  const characterPromises = characterNames.map(async (name) => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/?name=${name}`
    );
    const { results } = await response.json();

    const { gender, species, image } = results[0];

    return {
      nome: name,
      genero: genresFormat[gender],
      avatar: image,
      especie: speciesFormat[species],
    };
  });

  const characters = await Promise.all(characterPromises);

  return characters;
}

module.exports = getRickAndMortyCharacters;
