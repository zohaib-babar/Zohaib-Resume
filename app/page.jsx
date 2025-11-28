import Header from "./components/Header";
import Summary from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contect from "./components/Contect";
import Copyright from "./components/Copyright";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-800 flex p-6 justify-center">
      <div className="w-full max-w-4xl shadow-lg rounded-2xl p-6 space-y-8">
        <Header />
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Contect />
        <Copyright/>
      </div>
    </main>
  );
}
