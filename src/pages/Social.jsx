import { PaperPlaneRight } from "@phosphor-icons/react";
import React from "react";

 function Social() {
  return (
    <div className="mt-10 mb-5">
      <div>
        <h1 className="text-3xl font-extrabold my-1">Social</h1>
        <p className="text-gray-500">I don't know what to put here</p>
      </div>
      <div className="my-10">
        <form className="w-96 flex flex-col justify-start gap-5">
          <input type="text" placeholder="Name" className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white" />
          <input type="email" placeholder="Email" className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white" />
          <textarea placeholder="Message" className="bg-transparent border p-1 indent-2 rounded-md border-gray-800 placeholder:text-gray-600 focus:outline-none focus:ring-1 ring-white"></textarea>
          <button className="flex items-center justify-center gap-2 hover:shadow-md shadow-white cursor-pointer w-32 bg-white text-black font-bold py-1 px-2 rounded-md">
          <p>Send</p>
          <PaperPlaneRight size={16} weight="bold" />
          </button>
        </form>
      </div>
    </div>
  );
}


export default Social;