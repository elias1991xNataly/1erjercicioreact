import './App.css';
import MyButton from './components/Button';
function App() {
  return (
    <div className="App">
    <nav class="Navbar">
      <div>React Exercises</div>
      <div class="numbers">
        <p>#1</p>
        <p>#2</p>
        <p>#3</p>
        <p>#4</p>
      </div></nav>
    <header className="header">

      Exercise 1
    </header>
    <p class="enunciate">
      Increment the number of like when you click on it.
    </p>
    <MyButton/> 
    </div>
  );
}

export default App;
