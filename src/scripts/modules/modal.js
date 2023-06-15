// Classe responsável por fazer o modal de login aparecer e sumir da tela.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Modal {
  constructor(openButton, closeButton, containerModal) {
    this.openButton = document.querySelector(openButton);
    this.closeButton = document.querySelector(closeButton);
    this.containerModal = document.querySelector(containerModal);

    // O bind(this) é usado para manter o this do objeto criado, sem ele o this iria referenciar o elemento que está sendo clicado.
    this.eventToggleModal = this.eventToggleModal.bind(this);
    this.clickOutsideModal = this.clickOutsideModal.bind(this);
  }

  // Criado uma função responsável por abrir o modal.
  toggleModal() {
    this.containerModal.classList.toggle("ativo"); // Adiciona(se não tiver) a classe chamada ativo e remove(caso já tenha) a classe no elemento containerModal.
  }

  // Criado uma função responsável por abrir o modal quando for clicado no botão, a função contém um parâmetro chamado event.
  eventToggleModal(event) {
    event.preventDefault(); // Evita que ao clicar ele saia da página.
    this.toggleModal(event); // Executa a função abrirModal.
  }

  // Criado uma função responsável fechar o modal quando for clicado fora dele, a função contém um parâmetro chamado event.
  clickOutsideModal(event) {
    // Verifica se o elemento clicado é o mesmo que está sendo referenciado pelo this, no caso o containerModal, se for executa o bloco de comando.
    if (event.target === this.containerModal) {
      this.toggleModal(); // Executa a função fecharModal.
    }
  }

  addModalEvents() {
    this.openButton.addEventListener("click", this.eventToggleModal); // Adiciona o evento de click ao botão de abrir o modal.
    this.closeButton.addEventListener("click", this.eventToggleModal); // Adiciona o evento de click ao botão de fechar o modal.
    this.containerModal.addEventListener("click", this.clickOutsideModal); // Adiciona o evento de click ao container do modal.
  }

  init() {
    if (this.openButton && this.closeButton && this.containerModal) {
      this.addModalEvents(); // Adiciona os eventos ao elemento.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
