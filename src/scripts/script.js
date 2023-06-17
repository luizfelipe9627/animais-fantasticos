// O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.
import ScrollSmooth from "./modules/scroll-smooth.js";
import Accordion from "./modules/accordion.js";
import TabNav from "./modules/tab-nav.js";
import Modal from "./modules/modal.js";
import Tooltip from "./modules/tooltip.js";
import fetchAnimals from "./modules/fetch-animals.js";
import fetchBitcoin from "./modules/fetch-bitcoin.js";
import AnimationScroll from "./modules/scroll-animation.js";
import DropdownMenu from "./modules/dropdown-menu.js";

import initMenuMobile from "./modules/menu-mobile.js";
import initFuncionamento from "./modules/operation.js";

// Está executando as funções.
const scrollSuave = new ScrollSmooth("[data-menu='smooth'] a[href^='#']"); // Está criando um objeto e passando o link do menu como parâmetro.
scrollSuave.init(); // Está chamando o método init do objeto criado.

const accordion = new Accordion("[data-anime='accordion'] dt"); // Está criando um objeto e passando o DT do faq como parâmetro.
accordion.init(); // Está chamando o método init do objeto criado.

const tabNav = new TabNav(
  "[data-tab='menu'] li",
  "[data-tab='content'] section"
); // Está criando um objeto e passando o menu e o conteúdo como parâmetro.
tabNav.init(); // Está chamando o método init do objeto criado.

const modal = new Modal(
  "[data-modal='open']",
  "[data-modal='close']",
  "[data-modal='container']"
); // Está criando um objeto e passando o botão abrir, fechar e o container como parâmetro.
modal.init(); // Está chamando o método init do objeto criado.

const tooltip = new Tooltip("[data-tooltip]"); // Está criando um objeto e passando o tooltip como parâmetro.
tooltip.init(); // Está chamando o método init do objeto criado.

fetchAnimals("../../src/api/animais.json", ".numeros-grid"); // Está chamando a função fetchAnimals e passando o arquivo JSON e o elemento que contém a classe numeros-grid como parâmetro.

fetchBitcoin("https://blockchain.info/ticker", ".btc-preco"); // Está chamando a função fetchBitcoin e passando a URL da API e o elemento que contém a classe btc-preco como parâmetro.

const animationScroll = new AnimationScroll("[data-anime='scroll']"); // Está criando um objeto e passando o dataset anime="scroll" como parâmetro.
animationScroll.init(); // Está chamando o método init do objeto criado.

const dropdownMenu = new DropdownMenu("[data-dropdown]"); // Está criando um objeto e passando o dataset dropdown como parâmetro.
dropdownMenu.init(); // Está chamando o método init do objeto criado.

initMenuMobile();
initFuncionamento();
