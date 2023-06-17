// Classe responsável por fazer o scroll suave para as section funcionar.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe o do mesmo arquivo.
export default class ScrollSmooth {
  // O construtor é usado para criar um objeto e definir suas propriedades e métodos.
  constructor(links, options) {
    this.internsLinks = document.querySelectorAll(links); // Atribui ao this.internsLinks os links do menu passado pelo usuário.
    // Se o options não for definido, então irá executar o if.
    if (options !== true) {
      // Está definindo o valor padrão para o options.
      this.options = { behavior: "smooth", block: "start" };
    } else {
      this.options = options; // Atribui ao this.options o options passado pelo usuário.
    }

    this.scrollToSection = this.scrollToSection.bind(this); // Está associando o this do objeto criado ao this do método scrollToSection.
  }

  // O método scrollToSection está sendo usado para fazer o scroll suave funcionar.
  scrollToSection(e) {
    e.preventDefault(); // Usado para impedir que ao clicar no menu seja levado até a sessão correspondente.

    const href = e.currentTarget.getAttribute("href"); // Está pegando o atributo(valor) presente dentro do href clicado.
    const section = document.querySelector(href); // Está associando o HREF extraindo com a section que possui o mesmo HREF.
    section.scrollIntoView(this.options); // O scrollIntoView é usado para fazer o scroll suave.
  }

  // O método addEventLink está adicionando o evento de click ao link do menu.
  addEventLink() {
    // O this está sendo usado para referenciar o objeto que está sendo criado, sendo assim, o this.internsLinks está se referindo ao link do menu.
    this.internsLinks.forEach((link) => {
      link.addEventListener("click", this.scrollToSection); // Adiciona o evento de click ao link do menu e se houver click aciona o método scrollToSection.
    });
  }

  // O método init está sendo usado para iniciar o objeto criado.
  init() {
    // Se o this.internsLinks.length for maior que 0, então irá executar o if.
    if (this.internsLinks.length) {
      this.addEventLink(); // Está chamando o método addEventLink.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
