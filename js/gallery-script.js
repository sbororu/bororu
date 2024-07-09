/*Horizontal scroll*/
const stickySections = [...document.querySelectorAll('.sticky_wrap')]

window.addEventListener('scroll', (e) => {
  for(let i = 0; i < stickySections.length; i++){
    transform(stickySections[i])
  }
})

function transform(section) {

  const offsetTop = section.parentElement.offsetTop;

  const scrollSection = section.querySelector('.horizontal_scroll')

  let percentage = ((window.scrollY - offsetTop) / window.innerHeight) * 100;

  percentage = percentage < 0 ? 0 : percentage > 200 ? 200 : percentage;

  scrollSection.style.transform = `translate3d(${-(percentage)}vw, 0, 0)`
}

/*Hamburger menu*/
function menuOnClick(){
	document.getElementById("menu_checkbox").classList.toggle("change");
	
	document.getElementById("nav").classList.toggle("change");
	document.getElementById("menu-bg").classList.toggle("change-bg");
}