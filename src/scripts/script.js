// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import ScrollSuave from "./modules/scroll-suave.js";
import initAnimationScroll from "./modules/scroll-animacao.js";
import initAccordion from "./modules/accordion.js";
import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";


// Está executando as funções.
const scrollSuave = new ScrollSuave("[data-menu='smooth'] a[href^='#']"); // Está criando um objeto e passando o link do menu como parâmetro.
scrollSuave.init(); // Está chamando o método init do objeto criado.

initAnimationScroll();
initAccordion();
initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
