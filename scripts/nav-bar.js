export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML = `
    <ul class="nav_bar" style="list-style-type:none;" >
            <li class="nav_country"><a href="index.html">Home</a></li>
    </ul>
    `;
};
