export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML = `
    <ul class="nav_bar" style="list-style-type:none;" >
            <li class="nav_country"><a href="index.html"><img src="/images/logo/Blue Travel Blog Business logo (1).gif" alt="Home"></a></li>
            <li class="nav_country"><a href="japan.html">Japan</a></li>
            <li class="nav_country"><a href="boilerplate.html">Boilerplate</a></li>
    </ul>
    `;
};
