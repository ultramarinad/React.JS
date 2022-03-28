import logo from './logo.svg';
import './App.css';
import {Massage} from'./components'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Massage>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis eveniet enim quaerat a, necessitatibus odio sequi sint quia adipisci quo dicta suscipit beatae asperiores ad ipsa voluptas. Quidem, soluta consequatur!
          Nobis beatae commodi veniam consectetur magnam temporibus molestiae tempora expedita ut veritatis labore, unde praesentium reprehenderit consequuntur, rem omnis. Animi voluptatibus, in ratione consequuntur unde quas aspernatur praesentium iste veniam.
          Libero eveniet, voluptas corporis numquam hic esse iusto voluptatum vitae beatae nesciunt aperiam, ullam nemo autem quaerat cumque iste fugiat soluta ducimus repellendus, dolore placeat deserunt! Reiciendis vel reprehenderit possimus.
        </Massage>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
