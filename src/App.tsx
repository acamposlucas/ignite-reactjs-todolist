import { Header } from "./components/Header";
import { NewTaskContainer } from "./components/NewTaskContainer";
import "./global.css";

function App() {
  return (
    <>
      <Header />
      <main>
        <NewTaskContainer />
      </main>
    </>
  );
}

export default App;
