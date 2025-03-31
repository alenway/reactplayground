import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
// import TodoList from './components/TodoList';
import Home from './pages/Home/Home';
import About from './pages/About/About';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todos" element={<TodoList />} /> */}
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
};

export default App;
