import Header from "./components/Header";
import Summary from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Contect from "./components/Contect";

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-gray-800 p-6 flex justify-center">
      <div className="w-full max-w-4xl bg-gray-100 shadow-lg rounded-2xl p-6 space-y-8">
        <Header />
        <Summary />
        <Skills />
        <Projects />
        <Experience />
        <Contect />
      </div>
    </main>
  );
}
