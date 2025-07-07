import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <section>
        <Weather />
      </section>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
