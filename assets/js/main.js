//window.onload = function () {
//	window.addEventListener('scroll', function (e) {
//		if (window.pageYOffset > 100) {
//			document.querySelector("header").classList.add('is-scrolling');
//		} else {
//			document.querySelector("header").classList.remove('is-scrolling');
//		}
//	});






let hamburger = document.querySelector(".hamburger"),
    menu_secs = document.querySelector(".menu-sec2");
    menu_ul = document.querySelector("#menu");
    bar1 = document.querySelector(".bar1");
    bar2 = document.querySelector(".bar2");
    bar3 = document.querySelector(".bar3");
console.log(hamburger,menu_secs,menu_ul);
  hamburger.addEventListener("click", () => bar1.classList.toggle("open"));
  hamburger.addEventListener("click", () => bar2.classList.toggle("open"));
  hamburger.addEventListener("click", () => bar3.classList.toggle("open"));
  hamburger.addEventListener("click", () => menu_ul.classList.toggle("active"));
//  hamburger.addEventListener("click", () => menu_secs.classList.add("open"));


/*	const hamburger = document.querySelector('.hamburger');
	const menu-sec2 = document.querySelector('.menu-sec2');

	hamburger.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		menu-sec2.classList.toggle('active');
	})
#F4D465
	*/
