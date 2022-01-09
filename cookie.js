var cookieLib = document.createElement('script');
cookieLib.src = 'https://cdn.jsdelivr.net/npm/js-cookie@3.0.1/dist/js.cookie.min.js';
document.head.appendChild(cookieLib);


var cookieName = 'CM'
Cookies.set(cookieName, userData.cd_user_id, { sameSite: 'Lax', secure: true, expires: 7})  
