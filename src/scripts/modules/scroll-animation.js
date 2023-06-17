// Classe responsável por fazer conteúdo aparecer animado ao rolar o scroll e abrir o site.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class AnimationScroll {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections); // Atribui ao this.sections os elementos passados pelo usuário.
    this.windowHalf = window.innerHeight * 0.6; // Está pegando 60% da altura da tela do usuário.
    this.activeClass = "ativo"; // Está definindo o valor padrão para o activeClass.

    this.animaScroll = this.animaScroll.bind(this); // Está associando o this do objeto criado ao this do método animaScroll.
  }

  // Função responsável por fazer os elementos aparecerem na tela ao scrollar para cima.
  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top; // o getBoundingClientRect é um método usado para retornar valores em relação ao posicionamento do elemento na tela.

      const isSectionVisible = sectionTop - this.windowHalf < 0; // Está pegando a altura da section e subtraindo com a altura da tela do usuário e se for menor que 0 irá retornar true.

      // Se isSectionVisible for menor que 0 irá executar o escopo do if que é responsável por fazer os elementos aparecerem na tela ao scrollar para cima.
      if (isSectionVisible) {
        section.classList.add(this.activeClass); // Adiciona a classe ativo a section que tiver sua altura negativada(de cima para baixo).
      }
      // Se não, se a section conter a classe ativo irá executar o escopo do else if que é responsável por fazer os elementos sumirem da tela ao scrollar para cima.
      else if (section.classList.contains(this.activeClass)) {
        section.classList.remove(this.activeClass); // Remove a classe ativo a section que tiver sua altura positiva(de baixo para cima).
      }
    });
  }

  // O init está sendo usado para iniciar o objeto criado.
  init() {
    // Se o this.sections.length for maior que 0, então irá executar o if.
    if (this.sections.length) {
      this.animaScroll(); // Está executando a função para que assim que o site carregue não fique tudo em branco.

      window.addEventListener("scroll", this.animaScroll); // Está adicionando o evento de scroll ao site e se houver scroll aciona a função animaScroll.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
