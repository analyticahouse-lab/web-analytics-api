var cookieLib = document.createElement('script');
cookieLib.src = 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js';
document.head.appendChild(cookieLib);


var cookieName = 'CMv2'
Cookies.set(cookieName, 111, { sameSite: 'Lax', secure: true, expires: 7})  
