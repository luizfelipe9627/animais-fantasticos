// Função responsável por aplicar o horário e dias de funcionamento.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default class Operation {
  // O constructor é usado para definir os parâmetros que serão usados na classe.
  constructor(operation, activeClass) {
    this.operation = document.querySelector(operation); // Está pegando todos os elementos que contém o dataset passado pelo usuário.
    this.activeClass = activeClass; // Está armazenando o valor do activeClass passado pelo usuário.
  }

  // Função responsável por pegar os dados definidos pelo usuário no dataset.
  operatingData() {
    this.daysWeek = this.operation.dataset.semana.split(",").map(Number); // Pega os valores definidos no dataset semana e transforma em uma array, em seguida o map transforma os valores em number e armazena na variável daysWeek do objeto.
    this.timeWeek = this.operation.dataset.horario.split(",").map(Number); // Pega os valores definidos no dataset horario e transforma em uma array, em seguida o map transforma os valores em number e armazena na variável timeWeek do objeto.
  }

  // Função responsável por pegar a data atual e filtrar o dia e horário.
  nowData() {
    this.dateNow = new Date(); // Criado uma nova data que é baseada no horário interno do computador e armazena na variável timeWeek do objeto.
    this.dayNow = this.dateNow.getDay(); // Pega a data atual e filtra o dia e armazena na variável timeWeek do objeto.
    this.timeNow = this.dateNow.getUTCHours() - 3; // Pega a data atual e filtra o horário pelo de São Paulo e armazena na variável timeNow do objeto.
  }

  // Função responsável por verificar se o horário e dia estão dentro do que foi definido.
  isOpen() {
    this.openWeek = this.daysWeek.indexOf(this.dayNow) !== -1; // Verifica se na array daysWeek existe o número da semana presente dentro do dayNow, se existir ele retorna o número(true), se não ele irá retornar -1(false) e armazena na variável openWeek do objeto.
    this.openHours =
      this.timeNow >= this.timeWeek[0] && this.timeNow < this.timeWeek[1]; // Verifica se o horário do computador for maior ou igual ao primeiro horario(8) da array timeWeek e se o hórario do computador for menor que segundo horario(18) e armazena na variável openHours do objeto.

    return this.openWeek && this.openHours; // Retorna o valor de openWeek e openHours.
  }

  // Função responsável por adicionar a classe ativo caso o horário e dia estejam dentro do que foi definido.
  activeOpen() {
    // Verifica se o valor retornado da função isOpen é true, se for executa o if se não o else.
    if (this.isOpen()) {
      this.operation.classList.add(this.activeClass); // Adiciona a classe passada pelo usuário no elemento que contém o dataset passado pelo usuário.
    }
  }

  // Função responsável por iniciar as funções.
  init() {
    // Verifica se existe o elemento que contém o dataset passado pelo usuário.
    if (this.operation) {
      this.operatingData(); // Executa a função operatingData.
      this.nowData(); // Executa a função nowData.
      this.activeOpen(); // Executa a função activeOpen.
    }
    return this; // Está retornando o objeto criado para permitir a que o init possa usar ou acessar outros métodos da classe.
  }
}
