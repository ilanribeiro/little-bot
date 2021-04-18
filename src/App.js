import { useState } from 'react';
import './App.css';

function App() {
  const [fullName, setFullName] = useState('');
  const [city, setCity] = useState('');
  const [birth, setBirth] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [conversation, setConversation] = useState({})

  const saveRating = () => {
    const ratingValue = document.getElementById('input5').value;
    setRating(ratingValue);
  }

  const saveInfo = () => {
    saveRating();
    const conversationInfo = {
      fullName,
      city,
      birth,
      email,
      rating
    }
    console.log(`conversationInfo`, conversationInfo)
    setConversation(conversationInfo)
    alert('Dados salvos e enviados')
  }

  const renderMessage2 = (fullName) => {
    if(!fullName) return null
  
    return (
      <div className="messages 2">
        <p>Que satisfação <span>{fullName}</span>! <br/> Agora que sei seu nome, qual a cidade e estado que você mora?</p>
        <input id="input2" type="text"/>
        <button onClick={clickMessage2}>seta</button>
      </div>
    );
  };

  const renderMessage3 = (city) => {
    if(!city) return null
  
    return (
      <div className="messages 3">
        <p>Legal, agora que sabemos sua cidade e estado. Quando foi que você nasceu?</p>
        <input id="input3" type="date" name="birth" />
        <button onClick={clickMessage3} >seta</button>
      </div>
    );
  };

  const renderMessage4 = (birth) => {
    if(!birth) return null
  
    return (
      <div className="messages 4">
        <p>Agora me fala teu e-mail, por gentileza.</p>
        <input type="email" name="email" id="input4"/>
        <button onClick={clickMessage4} >seta</button>
      </div>
    );
  };

  const renderMessage5 = (email) => {
    if(!email) return null
  
    return (
      <div>
        <div className="messages 5">
          <p>Você finalizou o teste Faça uma avaliação sobre o processo que realizou até chegar aqui. Nós agradecemos!</p>
          <input type="number" step="1" max="5" name="rating" id="input5"/>
        </div>
        <button onClick={saveInfo} >SALVAR</button>
      </div>
    );
  };
  
  const clickMessage1 = () => {
    const nameValue = document.getElementById('input1').value;
    setFullName(nameValue);
  }

  const clickMessage2 = () => {
    const cityValue = document.getElementById('input2').value;
    setCity(cityValue);
  }

  const clickMessage3 = () => {
    const birthValue = document.getElementById('input3').value;
    setBirth(birthValue);
    console.log(birth)
  }

  const clickMessage4 = () => {
    const emailValue = document.getElementById('input4').value;
    setEmail(emailValue);
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
          {renderMessage4(birth)}
          {renderMessage5(email)}
          
        </div>

      </main>
    </div>
  );
}

export default App;
