import React from "react";

export default function Experience() {
  return (
    <section className="min-h-screen rounded-2xl bg-gray-300 text-white flex flex-col items-center py-20 px-4">
      <h2 className="text-4xl font-bold text-gray-800 mb-16">𝓜𝔂 𝓢𝓽𝓾𝓭𝔂 𝓐𝓫𝓸𝓾𝓽</h2>

      <div className="relative w-full max-w-5xl">
        <div className="absolute left-1/2 top-0 h-full w-1 bg-gray-600 transform -translate-x-1/2" />

        <div className="relative flex items-center mb-28">
          <div className="w-1/2 pr-10 flex justify-end">
            <div className="bg-[#121b28] shadow-xl p-6 rounded-xl w-80">
              <h3 className="font-semibold">Concept School Samundri</h3>
              <p className="text-sm text-gray-300">Faislabad</p>
              <p className="text-sm mt-2 text-gray-400">Done Matriculation from here in Biology</p>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#121b28] border-2 border-white text-white rounded-full w-14 h-14 flex items-center justify-center text-sm font-semibold">
            2022
          </div>
        </div>

        <div className="relative flex items-center mb-28">
          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#121b28] border-2 border-white text-white rounded-full w-14 h-14 flex items-center justify-center text-sm font-semibold z-10">
            2024
          </div>

          <div className="w-1/2 pl-10 flex justify-start ml-auto">
            <div className="bg-[#121b28] shadow-xl p-6 rounded-xl w-80">
              <h3 className="font-semibold">Punjab College Samundri</h3>
              <p className="text-sm text-gray-300">Faislabad</p>
              <p className="text-sm mt-2 text-gray-400">I have completed FSc Pre-Engineering from Punjab College.</p>
            </div>
          </div>
        </div>
        
        <div className="relative flex items-center">
          <div className="w-1/2 pr-10 flex justify-end">
            <div className="bg-[#121b28] shadow-xl p-6 rounded-xl w-80">
              <h3 className="font-semibold">Front-End Developer</h3>
              <p className="text-sm text-gray-300">Lahore</p>
              <p className="text-sm mt-2 text-gray-400">
                I'm now a front-end developer working as a freelancer. My stack includes
                HTML, CSS, React, Next.js, Tailwind. I'm open to full-time opportunities.
              </p>
            </div>
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 bg-[#121b28] border-2 border-white text-white rounded-full w-14 h-14 flex items-center justify-center text-sm font-semibold">
            2025
          </div>
        </div>
      </div>
    </section>
  );
}
