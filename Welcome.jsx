const Welcome = function (props) {
  console.log("PROPS DELK COMPONENTE", props);
  //props è un parametro del nostro componente e funzione
  return <h4>Ciao, {props.myName}!</h4>;
};
export default Welcome;
