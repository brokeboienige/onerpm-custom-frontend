// ==UserScript==
// @name         ONErpm custom frontend
// @namespace    http://github.com/brokeboienige/onerpm-custom-frontend
// @version      0.1
// @description  A custom, non-official frontend for the ONErpm music distributor.
// @author       You
// @match        https://dashboard.onerpm.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=onerpm.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    const rawLink = "https://raw.githubusercontent.com/brokeboienige/onerpm-custom-frontend/main/frontend-files/"
    const customPage = rawLink+document.location.pathname.slice(1)+".html"
    var html = httpGet(customPage)
    console.log(html)
    //document.querySelector('html').innerText = 
})();
function httpGet(theUrl)
{
    let xmlhttp;
    
    if (window.XMLHttpRequest) { // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    } else { // code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    
    xmlhttp.onreadystatechange=function() {
        if (xmlhttp.readyState==4 && xmlhttp.status==200) {
            return xmlhttp.responseText;
        }
    }
    xmlhttp.open("GET", theUrl, false);
    xmlhttp.send();
    
    return xmlhttp.response;
}
