function menuburg() {
	display = document.getElementById('blockburgmenu').style.display;
	if (display === "none") {
		document.getElementById('blockburgmenu').style.display = "block";
	} else {
		document.getElementById('blockburgmenu').style.display = "none";
	}
}

setInterval(function () {  
 date = new Date(),  
 h = date.getHours(),  
 m = date.getMinutes(),  
 s = date.getSeconds(),  
 h = (h < 10) ? '0' + h : h,  
 m = (m < 10) ? '0' + m : m,  
 s = (s < 10) ? '0' + s : s,  
 document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
}, 1000);
