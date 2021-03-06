export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML =
    // add your country link here corresponding to your logo to replace the other 2 indexes
    `
    <ul class="nav_bar" style="list-style-type:none;" >
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/logo-temp.png" alt="Home"></a></li>
            <li class="nav_country"><a href="japan.html"><img src="/images/navbar-images/JapanFlag.png" alt="Japan"></a></li>
            <li class="nav_country"><a href="france.html"><img src="/images/navbar-images/franceflag.png" alt="France"></a></li>
            <li class="nav_country"><a href="ireland.html"><img src="/images/navbar-images/irelandflag.png" alt="Ireland"></a></li>
            <li class="nav_country"><a href="Iceland.html"><img src="/images/navbar-images/icelandflag.png" alt="Finland"></a></li>
    </ul>
    `;
};
