import { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);

  const renderMessage2 = (fullName) => {
    if(!fullName) return null
  
    return (
      <div className="messages 2">
        <p>Que satisfação <span>{fullName}</span>! <br/> Agora que sei seu nome, qual a cidade e estado que você mora?</p>
        <input type="text"/>
        <button>seta</button>
      </div>
    );
  };

  const renderMessage3 = (city) => {
    if(!city) return null
  
    return (
      <div className="messages 3">
        <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</p>
        <input type="text"/>
        <button>seta</button>
      </div>
    );
  };
  
  const clickMessage1 = () => {
    const nameValue = document.getElementById('input1').value;
    setFullName(nameValue);
  }

  const clickMessage2 = () => {
    setCity(target.value);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Chat bot Project</h1>
      </header>
      <main className="main-container">
        <div className="chat-container">
          <div id="1" className="messages">
            <p>Olá, eu sou Chatnilson, tudo bem? Para começarmos, preciso saber seu nome.</p>
            <input id="input1" type="text"/>
            <button onClick={clickMessage1} >seta</button>
          </div>
          {renderMessage2(fullName)}
          {renderMessage3(city)}
          <div className="messages 2" hidden>
            <p>Que satisfação {fullName} Agora que sei seu nome, qual a cidade e estado que você mora?</p>
            <input type="text"/>
            <button>seta</button>
          </div>

          <div className="messages 3" hidden>
            <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</p>
            <input type="text"/>
            <button>seta</button>
          </div>

          <div className="messages 4" hidden>
            <p>Agora me fala teu e-mail, por gentileza.</p>
            <input type="text"/>
            <button>seta</button>
          </div>

          <div className="messages 5" hidden>
            <p>Você finalizou o teste Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!</p>
            <button>seta</button>
          </div>
        </div>

      </main>
    </div>
  );
}

export default App;
