import { getCookie } from "https://jscroot.github.io/cookie/croot.js";

const checkTokenAndRedirect = () => {
    const token = "Authorization";
    const tokenValue = getCookie(token);

    if (!tokenValue) {
        window.location.href = "https://ksi-billboard.github.io/login.html";
    }
}

window.onload = checkTokenAndRedirect;