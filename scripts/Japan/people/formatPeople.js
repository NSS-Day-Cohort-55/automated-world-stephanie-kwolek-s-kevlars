export const formatPeople = (obj) => {
  return `
    <article class="people-data">
        <h3>${obj.name}</h3>
        <p>${obj.occupation}</p>
        <article>${obj.description}</article>
        <a href="${obj.website}">${obj.name}</a>
    </article>
    `;
};
