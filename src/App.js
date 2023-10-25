import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addButton from './assets/add-30.png';
import message from './assets/message.svg';
import homeIcon from './assets/home.svg';
import saveIcon from './assets/bookmark.svg';
import rocketIcon from './assets/rocket.svg';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        <div className='upperSide'>
          <div className='upperSideTop'> <img src={gptLogo} alt='Logo' className='logo'/> <span className='brand'>cloneGPT</span></div>
          <button className='midBtn'> <img src={addButton} alt='new chat' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'> <img src={message} alt='query' />What is Programming?</button>
            <button className='query'> <img src={message} alt='query' />How to use an API?</button>
          </div>
        </div>

        <div className='lowerSide'>
          <div className='listItems'>
            <img src={homeIcon} alt='home' className='listitemsImg'/>
            Home
          </div>
          <div className='listItems'>
            <img src={saveIcon} alt='save' className='listitemsImg'/>
            Save
          </div>
          <div className='listItems'>
            <img src={rocketIcon} alt='upgrade' className='listitemsImg'/>
            Upgrade to Pro
          </div>
        </div>
      </div>
      <div className='main'>
        Main
      </div>
    </div>
  );
}

export default App;
