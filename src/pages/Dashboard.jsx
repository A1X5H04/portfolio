import React from "react";

const aboutArray = [
    "👋 Hi I am Alish.",
    "🖥️  See my portfolio at A1X5H04.github.com",
    "👨‍💻  I'm currently working on contributing to Open Source projects.",
    "✉️  You can reach me at alishbaig2004@gmail.com",
    "🧠  I'm currently learning Android Development",
    "🤝 I'm open to collaborating on anything?",
    "⚡ Fun fact: I like phonk music"

]

function Dashboard() {
  return (
    <>
      <h1 className="text-3xl font-extrabold mt-8 mb-4">Dashboard</h1>
      <div className="grid grid-cols-2 gap-4">
        <div className="my-10 border rounded-md border-gray-800">
          <div className="flex p-5 items-center justify-between border-b border-gray-900">
            <div>
              <h1 className="font-bold text-xl">About Me</h1>
              <p className="text-sm">A1X5H04</p>
            </div>
            <img
              src="https://avatars.githubusercontent.com/u/78891448?v=4"
              alt="Github Profile"
              className="w-10 h-10 rounded-full"
            />
          </div>
          <div className="p-5">
            <ul className="list-disc ml-3">
                {
                    aboutArray.map((item) => (
                        <li className="my-2 font-medium">
                            <p className="text-sm">{item}</p>
                        </li>
                    ))
                }
            </ul>
          </div>
        </div>
        <div className=" my-10 p-5 border rounded-md border-gray-800">
          <div className="flex">
            <div>
              <h1 className="font-bold text-xl">Skill Set</h1>
              <p></p>
            </div>
          </div>
          fas
        </div>
      </div>
    </>
  );
}

export default Dashboard;
