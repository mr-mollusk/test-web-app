import logo from './logo.svg';
import './App.scss';
import Header from './components/header/header';
import Profile from './pages/profile/profile';

function App() {
  return (
    <div className="App">
        <Header />
        <Profile />
    </div>
  );
}

export default App;
