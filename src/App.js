import Header from "./components/Header";
import Background from "./images/background.jpg"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="background"> <img src={Background}/></div>     
      
    </div>
  );
}

export default App;
