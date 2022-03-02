export const formatData = (obj) =>{
    return `
        <section class="city-cards">
            <h3>${obj.name}</h3>
            <p>${obj.population}</p>
            <article>${obj.description}</article>
        </section>
    `
}