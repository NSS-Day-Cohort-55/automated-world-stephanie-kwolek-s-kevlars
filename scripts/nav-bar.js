export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML = `
    <ul class="nav_bar" style="list-style-type:none;" >
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/logo-temp.png" alt="Home"></a></li>
            <li class="nav_country"><a href="japan.html"><img src="/images/navbar-images/JapanFlag.png" alt="Japan"></a></li>
    </ul>
    `;
};
