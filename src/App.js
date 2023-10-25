import './App.css';

function App() {
  return (
    <div className="App">
      <div className='sidebar'>
        cloneGPT
        <div className='upperSide'>
          <div className='upperSideTop'> <img src='' alt='' className='logo'/> <span className='brand'>cloneGPT</span></div>
          <button className='midBtn'> <img src='' alt='' className='addBtn' />New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'> <img src='' alt='' />What is Programming?</button>
            <button className='query'> <img src='' alt='' />What is Programming?</button>
          </div>
        </div>
        <div className='lowerSide'>
          lower
        </div>
      </div>
      <div className='main'>
        Main
      </div>
    </div>
  );
}

export default App;
