// Classe responsável por fazer o tooltips funcionar, que são textos informativos exibidos em pequenas caixas flutuantes junto aos elementos (inputs, labels, menus, etc.) quando o usuário para o cursor do mouse sobre eles.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class Tooltip {
  // O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(tooltips) {
    this.tooltips = document.querySelectorAll(tooltips); // Está pegando todos os elementos tooltips e armazenando na propriedade tooltips.
    this.onMouseOver = this.onMouseOver.bind(this); // O this está referenciando a função pai(onMouseOver) dentro da classe e está passando o this para a função bind.
    this.onMouseMove = this.onMouseMove.bind(this); // O this está referenciando a função pai(onMouseMove) dentro da classe e está passando o this para a função bind.
    this.onMouseLeave = this.onMouseLeave.bind(this); // O this está referenciando a função pai(onMouseLeave) dentro da classe e está passando o this para a função bind.
  }

  // Função onMouseMove responsável pelo o que ocorre quando o mouse se move em cima do elemento tooltipBox. Recebe como seu parâmetro o evento.
  onMouseMove(event) {
    // O this referencia a função pai(onMouseOver) e pega o elemento tooltipBox é adiciona 20px ao left(absoluto) e adiciona 20px ao top(absoluto) conforme a posição do mouse no elemento.
    this.tooltipBox.style.top = `${event.pageY + 20}px`;

    // Se a posição do mouse no eixo X for maior que a largura da janela do navegador então executa o escopo definido.
    if (event.pageX + 240 > window.innerWidth) {
      this.tooltipBox.style.left = `${event.pageX - 190}px`; // O this referencia a função pai(onMouseOver) e pega o elemento tooltipBox é subtrai 190px do left(absoluto) conforme a posição do mouse no elemento.
    } else {
      this.tooltipBox.style.left = `${event.pageX + 20}px`; // O this referencia a função pai(onMouseOver) e pega o elemento tooltipBox é adiciona 20px ao left(absoluto) conforme a posição do mouse no elemento.
    }
  }

  // Função onMouseLeave responsável pelo o que ocorre quando o mouse sair de cima do elemento tooltipBox. Recebe como seu parâmetro o evento currentTarget.
  onMouseLeave({ currentTarget }) {
    this.tooltipBox.remove(); // O this está referenciando a função pai(onMousLeave) dentro da classe e está removendo o elemento tooltipBox.

    currentTarget.removeEventListener("mouseleave", this.onMouseLeave); // O event.currentTarget está referenciando o elemento que está com o mouse em cima e está removendo o evento de escuta do mouseleave.
    currentTarget.removeEventListener("mousemove", this.onMouseMove); // O event.currentTarget está referenciando o elemento que está com o mouse em cima e está removendo o evento de escuta do mousemove.
  }

  // Função criarTooltipBox responsável pela criação do tooltipBox, que recebe como seu parâmetro uma propriedade chamada element.
  criarTooltipBox(element) {
    const tooltipBox = document.createElement("div"); // Cria um elemento div que é armazena na constante tooltipBox.
    const text = element.getAttribute("aria-label"); // Obtém o texto criado no elemento aria-label no HTML e armazena na constante text.

    tooltipBox.classList.add("tooltip"); // Adiciona a classe tooltip na div criada.
    tooltipBox.innerText = text; // Adiciona a div tooltipBox o texto criado no aria-label no HTML.

    document.body.appendChild(tooltipBox); // No final do body adiciona(torna filho) o elemento tooltipBox passado.

    this.tooltipBox = tooltipBox; // O this referencia a função pai(onMouseOver) dentro da classe e pega o elemento tooltipBox e armazena na propriedade tooltipBox.
  }

  // Função onMouseOver responsável pelo o que ocorre quando o mouse for passado por cima do elemento tooltipBox.
  onMouseOver({ currentTarget }) {
    this.criarTooltipBox(currentTarget); // O this referencia a função pai(onMouseOver) dentro da classe e executa a função criarTooltipBox passando o elemento que está com o mouse em cima.

    currentTarget.addEventListener("mouseleave", this.onMouseLeave); // O currentTarget referencia o elemento que está com o mouse em cima e adiciona um evento de escuta do mouseleave.
    currentTarget.addEventListener("mousemove", this.onMouseMove); // O currentTarget referencia o elemento que está com o mouse em cima e adiciona um evento de escuta do mousemove.
  }

  // Função addTooltipsEvent responsável por adicionar o evento de mouseover em cada elemento tooltips.
  addTooltipsEvent() {
    // O forEach passa por cada elemento tooltips e executa o escopo definido.
    this.tooltips.forEach((item) => {
      item.addEventListener("mouseover", this.onMouseOver); // A cada tooltip adiciona um evento de mouse quando for passado o mouse por cima do elemento que executa a função onMouseOver.
    });
  }

  // Função init responsável por iniciar a função addTooltipsEvent.
  init() {
    // Se existir tooltips então executa o escopo definido.
    if (this.tooltips) {
      this.addTooltipsEvent(); // Executa a função addTooltipsEvent.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
