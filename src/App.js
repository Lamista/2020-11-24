import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import Data from './Data.json';
import productsArr from './SetAndMap';

var styles = {
  imgSize: {
    width: '100px',
    height: '100%'
  }
};

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div className="container">
        <h1>Visi</h1>
        <div className="row">
          {productsArr.map((item, index) => {
            return (
              <div className="col-3" style={styles.imgSize}>
                <Card
                  key={index}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            )
          })}
        </div>
        <h1>Kaina mazesne nei 10</h1>
        <div className="row">
          {Data.filter(item => item.price < 10).map((item, index) => {
            return (
              <div className="col-3" style={styles.imgSize}>
                <Card
                  key={index}
                  title={item.title}
                  imageUrl={item.imageUrl}
                  description={item.description}
                  price={item.price}
                  quantity={item.quantity}
                />
              </div>
            )
          })}
        </div>
        <h1>Prekiu likucio verte: {Data.map(item => item.price * item.quantity).reduce((sum, itemsValue) => sum + itemsValue)}</h1>
        <h1>Prekiu likucio verte: {Data.reduce((sum, item) => {
          return sum + (item.price * item.quantity)
        }, 0)}
        </h1>
      </div>
    </div>
  );
}

export default App;
