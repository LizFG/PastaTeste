
import './App.css';


function Welcome(props) {
  return <h1>Olá, {props.nome}</h1>;
}

function App() {
  const handleClick = () => {
    alert('Botão Clicado!');
  };


  return (
    
    <div className="App">
      <Welcome nome="Alice" />
      <Welcome nome="Bob" />
      <Welcome nome="Charlie" />
      <button onClick={handleClick}>Clique em Mim</button>  
    </div>
    
  );
}

export default App;

