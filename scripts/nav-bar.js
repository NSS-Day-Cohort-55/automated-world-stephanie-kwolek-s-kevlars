export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML = `
    <ul class="nav_bar">
            <li class="nav_country">
                <a href="index.html">
    </a>
    </li>
    </ul>
    `;
};
