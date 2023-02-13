// El styles lo importamos aquí, ya se carga después al compilar todo




import '../scss/styles.scss';
const toggleMenuElement = document.getElementById("toggle-menu");
const menuElement = document.getElementById("menu");
const headerElement = document.getElementById("header");
const headerTitleElement = document.getElementById("header-title");

function toggleMenu() {
	console.log("click click");
	menuElement.classList.toggle("hidden");
	headerTitleElement.classList.toggle("hidden");
  headerElement.classList.toggle("bg-black");
  toggleMenuElement.src = "../assets/images/icon-close.svg";

}

toggleMenuElement.addEventListener("click", toggleMenu);




// añadir y eliminar la clase hidden segun tamaño pantalla

const resizeWindow = () => {
	if (window.matchMedia("(min-width: 1024px)").matches) {
		menuElement.classList.remove("hidden");
	} else {
		menuElement.classList.add("hidden");
	}
};

resizeWindow();

window.addEventListener("resize", resizeWindow);



//carga hasta el fin de la pagina

// window.scroll({
// 		top:99999999999,	
// 		behavior:"smooth",
// 	});
		