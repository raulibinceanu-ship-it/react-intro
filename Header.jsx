//1 file === 1 componente react
//Un componente react può benissimo essere anche solamente una funzione JS
//che ritorna un pò diJSX
const FirstPart = function () {
  //nome funzione === nome file
  return (
    <div>
      <h2>TITOLO PAGINA</h2>
    </div>
  );
};

//una volta dichiarata la funzione del componente react
//lo bisogna esportare

export default FirstPart;
//la esportiamo come default
//significa che sarà la cosa PRINCIPALE
//esportata da questo file
