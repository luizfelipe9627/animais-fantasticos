import AnimationNumbers from "./animation-numbers"; // O import é usado para chamar uma função por exemplo para importar dinamicamente um módulo que utiliza export.

// Função responsável por adicionar os nomes das espécies e total delas.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função/classe do mesmo arquivo.
export default function fetchAnimals(url, target) {
  // Função responsável por criar as divs que contém as espécies e o total delas.
  function createAnimal(animal) {
    const div = document.createElement("div"); // Criado um elemento div e armazena na constante div.
    div.classList.add("numero-animal"); // Adiciona uma classe chamada numero-animal na div criada.
    // Está inserindo um código HTML no elemento div, que é passado cada especie no h3 e o total dela no span de cada uma das divs.
    div.innerHTML = `
      <h3>${animal.specie}</h3>
      <span data-numero>${animal.total}</span>
    `;

    return div; // Retorna a div.
  }

  // Função responsável por preencher as divs com as espécies e o total delas.
  function fillAnimals(animal) {
    const numbersGrid = document.querySelector(target); // Armazena na constante numbersGrid o elemento que contém a classe numeros-grid.

    const divAnimal = createAnimal(animal); // Executa a função várias vezes e passa como parâmetro o item atual do forEach e assim vai sendo até não tiver mais nada para o forEach percorrer.

    numbersGrid.appendChild(divAnimal); // Adiciona as divs como filhos do elemento numbersGrid.
  }

  // Função responsável por animar os números.
  function animateAnimalsNumbers() {
    // Está criando um objeto e passando o elemento que contém a classe numero-animal, a classe ativo e o data-numero como parâmetro.
    const animationNumbers = new AnimationNumbers(
      "[data-numero]",
      ".numeros",
      "ativo"
    );

    animationNumbers.init(); // Está chamando o método init do objeto criado.
  }

  // A palavra chave async indica que a função possui partes assíncronas e que você pretende esperar a resolução da mesma antes de continuar.
  // Função responsável por fazer a requisição do arquivo JSON.
  async function createAnimals() {
    // O try é literalmente "tentar", caso tenha sucesso executa o seu bloco de comando.
    try {
      // O fetch faz a requisição do arquivo JSON(definido no parâmetro url) e quando tiver o status de ok(carregado com sucesso) armazena a Response nas constante animaisResponse.
      const animaisResponse = await fetch(url); // Armazena na constante animaisResponse a resposta do fetch somente quando a promise for resolvida(cumprida).
      const animaisJSON = await animaisResponse.json(); // O await está retornando na constante animaisJSON o resultado em formato JSON da promessa anterior cumprida.

      // O forEach passa por cada item do animaisJSON e armazena no parâmetro chamada animal, o item atual.
      animaisJSON.forEach((animal) => {
        fillAnimals(animal); // Está chamando a função fillAnimals e passando o item atual do forEach como parâmetro.
      });

      animateAnimalsNumbers(); // Está chamando a função animateAnimalsNumbers.
    } catch (erro) {
      // Caso ocorra qualquer erro no código acima o bloco do catch é executado.
      console.log(Error(erro)); // Retorna um erro no console.
    }
  }

  return createAnimals(); // Retorna a função fetchAnimals.
}
