// Função chamada debounceScroll responsável por garantir que o código seja disparado apenas uma vez a cada certo tempo.
// O export é usado para permitir que o código seja usado em outro arquivo JS. O default é geralmente usado para quando tem que exportar somente uma função do mesmo arquivo.
export default function debounceScroll(callback, delay) {
  let timer; // Variável que armazena o timer.

  // Ao executar a função debounce retorna e executa uma função anônima. Essa função anônima recebe os parâmetros passados na função debounce.
  return (...args) => {
    // Verifica se o timer existe se existir executa o if.
    if (timer) {
      clearTimeout(timer); // Limpa o timer.
    }
    timer = setTimeout(() => {
      callback(...args); // Executa a função callback passando os parâmetros recebidos.
      timer = null; // Atribui null a variável timer.
    }, delay); // Atribui o timer a função setTimeout que recebe como parâmetro o callback e o delay.
  };
}
