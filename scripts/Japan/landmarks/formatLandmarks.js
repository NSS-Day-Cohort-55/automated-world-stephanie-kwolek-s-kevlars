export const formatLandmarks = (obj) => {
  return `
    <article class="landmark-data">
        <h3>${obj.name}</h3>
        <p>${obj.year}</p>
        <article>${obj.description}</article>
        <a href="${obj.website}">${obj.name}</a>
    </article>
    `;
};
