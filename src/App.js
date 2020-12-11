import "./App.css";
import Header from "./Header.js";
import Sidebar from "./Sidebar"
import Feed from "./Feed"
function App() {
  return (
    //BEM naming conventions
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        <Feed />
      </div>

      
      {/*feed */}
    </div>
  );
}

export default App;
