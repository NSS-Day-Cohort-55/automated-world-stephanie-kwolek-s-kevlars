export const insertNavBar = (elementId) => {
  const elementLocation = document.getElementById(elementId);

  elementLocation.innerHTML =
    // add your country link here corresponding to your logo to replace the other 2 indexes
    `
    <ul class="nav_bar" style="list-style-type:none;" >
<<<<<<< HEAD
            <li class="nav_country"><a href="index.html"><img src="/images/logo/Blue Travel Blog Business logo (1).gif" alt="Home"></a></li>
            <li class="nav_country"><a href="japan.html">Japan</a></li>
            <li class="nav_country"><a href="ireland.html">Ireland</a></li>
            <li class="nav_country"><a href="boilerplate.html">Boilerplate</a></li>
=======
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/logo-temp.png" alt="Home"></a></li>
            <li class="nav_country"><a href="japan.html"><img src="/images/navbar-images/JapanFlag.png" alt="Japan"></a></li>
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/franceflag.png" alt="France"></a></li>
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/irelandflag.png" alt="Ireland"></a></li>
            <li class="nav_country"><a href="index.html"><img src="/images/navbar-images/finlandflag.png" alt="Finland"></a></li>
>>>>>>> main
    </ul>
    `;
};
