export default function Skills() {
  return (
    <section className="py-16 bg-gray-300 rounded-2xl text-white flex flex-col items-center">
      <h2 className="text-4xl text-gray-800 font-bold mb-10">My Skills</h2>

      <div className="flex flex-wrap justify-center gap-10 max-w-3xl">
        {[
          "HTML",
          "CSS",
          "JavaScript",
          "TypeScript",
          "BootStrap",
          "React",
          "Next.js",
          "Node.js",
          "Git",
          "Tailwind",
        ].map((skill, index) => (
          <span
            key={index}
            className="px-4 py-2 bg-[#1a2533] text-sm rounded-lg shadow hover:bg-[#223042] transition-all"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}