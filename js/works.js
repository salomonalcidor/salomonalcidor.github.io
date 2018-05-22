// JavaScript Document
	var works = document.getElementById("anv");
	works.addEventListener("mouseover", func, false);
	works.addEventListener("mouseout", func1, false);
	
	function func(){
		var works = document.getElementById("works");
		works.setAttribute("style", "background:url(img/work/Anslin&Vava.jpg);")
	}

	function func1(){
		var works = document.getElementById("works");
		works.setAttribute("style", "background-color:#947dd4;")
	}