// Classe responsável por fazer o menu  de animais em conjunto com a descrição funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class TabNav {
  // O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(menu, content) {
    this.tabMenu = document.querySelectorAll(menu); // Está armazenando todos os elementos li do menu passado pelo usuário.
    this.tabContent = document.querySelectorAll(content); // Está armazenando todos os elementos section do conteúdo passado pelo usuário.
    this.activeClass = "ativo"; // Está armazenando a classe ativo.
  }

  // Método responsável por adicionar a classe ativo ao elemento passado no index.
  activeTab(index) {
    // O forEach está fazendo um loop para cada section, tendo dois argumentos, o que passa por cada item e o segundo que armazena o index/posição do elemento.
    this.tabContent.forEach((section) => {
      section.classList.remove(this.activeClass); // Está removendo a classe ativo de todos os elementos section.
    });
    const directionAnime = this.tabContent[index].dataset.anime; // Está armazenando o dataset anime do número da posição do elemento passado no index.
    this.tabContent[index].classList.add(this.activeClass, directionAnime); // Está adicionando a classe ativo e o dataset anime do número da posição do elemento passado no index.
  }

  // Método responsável por adicionar o evento de click no menu.
  addTabNavEvent() {
    // O forEach está fazendo um loop para cada LI , tendo dois argumentos, o que passa por cada item e o segundo que armazena o index/posição do elemento.
    this.tabMenu.forEach((itemMenu, itemIndex) => {
      // O addEventListener está adicionando um evento de click em cada item do menu.
      itemMenu.addEventListener("click", () => {
        this.activeTab(itemIndex); // Está chamando a função activeTab e passando o index do item do menu.
      });
    });
  }

  // O init é um método que é executado toda vez que a classe é instanciada.
  init() {
    // O if está verificando se o menu e o conteúdo existem.
    if (this.tabMenu.length && this.tabContent.length) {
      this.activeTab(0); // Está chamando a função activeTab e passando o index 0.
      this.addTabNavEvent(); // Está chamando a função addTabNavEvent.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
