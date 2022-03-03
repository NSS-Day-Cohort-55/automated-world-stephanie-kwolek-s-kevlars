export const formatData = (obj) => {
  return `
        <article class="city-data">
            <h3>${obj.name}</h3>
            <p>Population: ${obj.population}</p>
            <article>${obj.description}</article>
        </article>
    `;
};

export const getCities = () => {
  return notableCities;
};
