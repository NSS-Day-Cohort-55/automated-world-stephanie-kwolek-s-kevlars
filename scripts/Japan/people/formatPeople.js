export const formatPeople = (obj) => {
  return `
  <article class="data-card-container-new">
  <div class="card-sidebar"><p>${obj.name}</p></div>
  <div class="data-cards">
  <div class="data-card-content">
    <div class="card-header">${obj.name}</div>
    <div class="data-card-subinfo"> Profession: ${obj.occupation}</div>
    <div class="data-card-body">${obj.description}</div>
  </div>
  </div>
  <div class="img-hold" id="${obj.name}-image" style="background: url(${obj.image}) no-repeat; background-size: cover;""></div>
  <div class="data-card-footer"><a href="${obj.website}" target="_blank">More info</a></div>
</article>
    `;
};
