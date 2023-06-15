// Classe responsável por fazer o accordion list do faq funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Accordion {
  // O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(list) {
    // O this está referenciando o valor presente dentro do objeto Accordion, atráves do constructor.
    this.accordionList = document.querySelectorAll(list); // O querySelectorAll está pegando todos os elementos que estão dentro do list.
    this.activeClass = "ativo"; // Atribuindo o valor ativo para a variável activeClass. //
  }

  // Função responsável por adicionar a classe ativo ao elemento clicado.
  toggleAccordion(item) {
    // O this está referenciando o valor presente dentro do objeto Accordion, atráves do constructor.
    item.classList.toggle(this.activeClass); // Adiciona uma classe ao elemento clicado e se já existir remove a classe.
    item.nextElementSibling.classList.toggle(this.activeClass); // O nextElementSibling está pegando o elemento abaixo do item(dt).
  }

  // Função responsável por adicionar o evento de click em cada item do accordionList.
  addAccordionEvent() {
    // O forEach está percorrendo cada item do accordionList e para cada item está adicionando um evento de click.
    this.accordionList.forEach((item) => {
      item.addEventListener("click", () => this.toggleAccordion(item)); // Ao clicar em qualquer elemento do accordionList executa a função toggleAccordion e passa como parãmetro da função o item clicado.
    });
  }

  // Função responsável por iniciar o accordion.
  init() {
    if (this.accordionList.length) {
      this.toggleAccordion(this.accordionList[0]); // Ativa o primeiro item do accordionList.
      this.addAccordionEvent(); // Adiciona o evento de click em cada item do accordionList.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
