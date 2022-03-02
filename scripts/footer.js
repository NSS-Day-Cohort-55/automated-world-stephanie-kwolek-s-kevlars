export const createFooterText = () => {
    const footerString = '&copy; SKK, All rights reserved.';
    const footerEl = document.getElementById("footer-el");

    footerEl.innerHTML = footerString;
}