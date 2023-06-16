// Classe responsável por abrir contar e animar os números.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default class AnimationNumbers {
  // O constructor é um método especial para criar e inicializar um objeto criado a partir de uma classe.
  constructor(numbers, observerTarget, observerClass) {
    this.numbers = document.querySelectorAll(numbers); // Está armazenando na propriedade numbers o valor do parâmetro numbers atribuido pelo usuário.
    this.observerTarget = document.querySelector(observerTarget); // Está armazenando na propriedade observerTarget o valor do parâmetro observerTarget atribuido pelo usuário.
    this.observerClass = observerClass; // Está armazenando na propriedade observerClass o valor do parâmetro observerClass atribuido pelo usuário.

    // O bind é usado para amarrar um objeto ao método que está sendo executado, ou seja, o this da função sempre será o objeto passado como parâmetro.
    this.handleMutation = this.handleMutation.bind(this);
  }

  // Uma função estática é um método de uma classe que não precisa ser instanciada para ser usada, ou seja, não precisa criar um objeto para usar. A função incrementNumbers é responsável por incrementar os números.
  static incrementNumbers(number) {
    const numberIndex = number; // Armazena na constante numberIndex o número presente no texto HTML.

    const total = +numberIndex.innerText; // Armazena na constante total o valor number presente no texto HTML.
    const increment = Math.floor(total / 100); // Armazena na constante increment o resultado arredondado do total dividido por 100.

    let i = 0; // Criado uma variável contadora para o setInterval.

    // Criado um setInterval que executa a cada 25 milissegundos multiplicado por um número aleatório.
    const timer = setInterval(() => {
      i += increment; // A cada loop acrescenta 1 número a mais no inicializador.
      numberIndex.innerText = i; // A cada loop vai alterando o número do texto.

      // Se o inicializador for maior que o número presente no total irá executar o if.
      if (i > total) {
        numberIndex.innerText = total; // Altera para o valor original do total ao fim da contagem.
        clearInterval(timer); // Para o setInterval.
      }
    }, 25 * Math.random()); // O Math.random() retorna um número aleatório entre 0 e 1, então o setInterval irá executar a cada 25 milissegundos multiplicado por um número aleatório.
  }

  // Função responsável por executar a função incrementNumbers para cada número.
  animationNumbers() {
    // O forEach passa por cada item do numbers e armazena no parâmetro chamada number, o item atual. O this.numbers é o mesmo que o numbers do constructor.
    this.numbers.forEach((number) => {
      this.constructor.incrementNumbers(number); // Executa a função incrementNumbers e passa como parâmetro o item atual do forEach e assim vai sendo até não tiver mais nada para o forEach percorrer.
    });
  }

  // Função responsável por verificar se a classe ativo está presente no elemento HTML.
  handleMutation(mutation) {
    // Como o MutationRecord é uma Array-like podemos filtrar e pegar a propriedade que queremos, no caso a mutação. Em seguida pegar o target(o elemento HTML) e verificar se ele possui uma classe chamada ativo.
    // Se retornar true executa o if.
    if (mutation[0].target.classList.contains(this.observerClass)) {
      this.observer.disconnect(); // Usado para fazer o observer parar de ficar observando.
      this.animationNumbers(); // Executa a função.
    }
  }

  // Função responsável por adicionar o MutationObserver.
  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation); // Criado uma nova mutação de observação que executa o callback(a função passada) toda vez que houver uma mudança.

    this.observer.observe(this.observerTarget, { attributes: true }); // O observe recebe dois parâmetros, o primeiro o elemento a ser observado e o segundo o que deve ser observado desse elemento, nesse caso atributos.
  }

  // O init é usado para iniciar o objeto criado.
  init() {
    // Se o numbers, observerTarget e observerClass existirem executa o if.
    if (this.numbers.length && this.observerTarget && this.observerClass) {
      this.addMutationObserver(); // Executa a função.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
