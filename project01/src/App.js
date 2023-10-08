import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
      <header>
        <div id='logo'>
          <a href='#'>
            <img src='logo.png'></img>
          </a>
        </div>
        <nav>
          <ul class='nav_container'>
            <li class='nav_item'><a href='#'>소개</a></li>
            <li class='nav_item'><a href='#'>제품</a></li>
            <li class='nav_item'><a href='#'>서비스</a></li>
            <li class='nav_item'><a href='#'>고객지원</a></li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
