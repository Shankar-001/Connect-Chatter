import { Route, Routes } from 'react-router-dom';
import './App.css';
import Chat from './Pages/Chat';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/chats" element={<Chat />} />
      </Routes>
    </div>
  );
}

export default App;
