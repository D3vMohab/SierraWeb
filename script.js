// scripts.js

document.addEventListener('DOMContentLoaded', () => {
	const installCountElement = document.getElementById('install-count');
	let installCount = 0;

	function updateInstallCount() {
		installCount += Math.floor(Math.random() * 10) + 1;
		installCountElement.textContent = installCount.toLocaleString();
	}

	setInterval(updateInstallCount, 1000);
});


function showNav() {

	const nav = document.getElementById("nav-content");

	if (nav.style.display == 'none' || nav.style.display == '') {

		nav.style.display = 'grid';
	} else {

		nav.style.display = 'none';
	}


}

function soon() {

	alert("Comming soon!");
}









function download_popup() {
	// Show Blacklist popup
	var popup = document.getElementById("myPopup");
	popup.classList.toggle("show");
}




function show_slider() {
	document.getElementById('slider').style.animation = "slideIn 0.3s";
	document.getElementById('s-con').style.animation = "fadeIn 1s";


	setTimeout(() => {

		document.getElementById('slider').style.width = "100%";

	}, 300);




}

function dismiss() {
	document.getElementById('slider').style.animation = "slideOut 0.3s";
	document.getElementById('s-con').style.animation = "fadeOut 0.5s";

	setTimeout(() => {

		document.getElementById('slider').style.width = "0%";



	}, 300)
}


function setCookie(name,value,days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days*24*60*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function eraseCookie(name) {   
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}


document.addEventListener("touchstart", function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}, false);

document.addEventListener("wheel", function(event) {
  if (event.ctrlKey) {
    event.preventDefault();
  }
}, false);



var x = getCookie('twitter');
if (!x) {
if (confirm('[SIERRA] Follow our Twitter for exciting giveaways and to stay tuned with the latest news!')) {
	// Save it!
	window.open('https://x.com/SierraSigned');
	setCookie('twitter','seen',30);
} else {
	// Do nothing!

}
}
