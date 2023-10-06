"use client";

import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen justify-center items-center bg-purple-200">
      <div className="flex flex-col items-center space-y-12">
        <div className="w-60 ">
          <img
            src="https://cdn.vox-cdn.com/thumbor/VZc0_YczSLgrUzvWjWznqz0ys9M=/0x0:2000x1500/1400x1400/filters:focal(1218x255:1538x575):format(jpeg)/cdn.vox-cdn.com/uploads/chorus_image/image/55607313/ghoststorycover.0.jpg"
            alt=""
            className="rounded-full"
          />
        </div>
        <h1 className="text-5xl text-white font-bold">Join the ghost gang!</h1>
        <button onClick={() => alert("hello")}>click me!</button>

        <div className="text-center">
          {" "}
          <p>A note from the authors:</p>
          <p>to be or not to be a ghost! woowwwwwwwww :)))) </p>
          <p>- Sophia, Gideon, Alexandra</p>
        </div>
      </div>
    </div>
  );
}
