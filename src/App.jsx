import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useDarkMode } from "./hooks/useDarkMode";

const App = () => {
  const { theme, toggleTheme } = useDarkMode();

  return (
    <>
      <Header theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
