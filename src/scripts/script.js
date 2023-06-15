// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import ScrollSuave from "./modules/scroll-suave.js";
import Accordion from "./modules/accordion.js";

import initTabNav from "./modules/tab-nav.js";
import initModal from "./modules/modal.js";
import initTooltip from "./modules/tooltip.js";
import initDropdownMenu from "./modules/dropdown-menu.js";
import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/funcionamento.js";
import initFetchAnimais from "./modules/fetch-animais.js";
import initFetchBitcoin from "./modules/fetch-bitcoin.js";
import initAnimationScroll from "./modules/scroll-animacao.js";

// Está executando as funções.
const scrollSuave = new ScrollSuave("[data-menu='smooth'] a[href^='#']"); // Está criando um objeto e passando o link do menu como parâmetro.
scrollSuave.init(); // Está chamando o método init do objeto criado.

const accordion = new Accordion("[data-anime='accordion'] dt"); // Está criando um objeto e passando o DT do faq como parâmetro.
accordion.init(); // Está chamando o método init do objeto criado.

initTabNav();
initModal();
initTooltip();
initDropdownMenu();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initAnimationScroll();
