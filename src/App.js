import './App.css';
import Sidebar from './components/sidebar';
import GreetingHeader from './components/greetingHeader';
function App() {
  return (
    <div className='background-wrapper'>
      <div className="content">
        <Sidebar />
        <GreetingHeader />
      </div>
    </div>
    
  );
}

export default App;
