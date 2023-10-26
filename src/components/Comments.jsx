import React from "react";
import Comment from "./Comment";

const Comments = () => {
  const tweets = [
    {
      id: 1,
      profilePic:
        "data:image/jpeg;base64,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",
      name: "John Doe",
      handle: "@johndoe",
      message: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 1,
      profilePic:
        "https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg",
      name: "John Doe",
      handle: "@johndoe",
      message: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 1,
      profilePic:
        "https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg",
      name: "John Doe",
      handle: "@johndoe",
      message: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 1,
      profilePic:
        "https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg",
      name: "John Doe",
      handle: "@johndoe",
      message: "Lorem ipsum dolor sit amet ",
    },
    {
      id: 1,
      profilePic:
        "https://tailwindcss.com/_next/static/media/ryan-florence.3af9c9d9.jpg",
      name: "John Doe",
      handle: "@johndoe",
      message: "Lorem ipsum dolor sit amet ",
    },
  ];
  return (
    <div className="p-2 pt-6 pb-32 flex flex-col gap-2">
      <h1 className="text-gray-800 text-xl text-center p-2 font-bold leading-tight">
        What Out fans are Saying about Us?
      </h1>
      <p className="p-2 text-C_TextBlack text-sm text-center self-center md:w-[40%]">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.Dolores
        voluptatibus aspernatur consequuntur aut blanditiis solu
      </p>
      <section className="relative mt-10 grid grid-cols-1 gap-6 lg:gap-8 sm:grid-cols-2 lg:grid-cols-3 max-h-[33rem] overflow-hidden">
        {tweets.map((tweet) => (
          <Comment tweet={tweet} key={tweet.id} />
        ))}
        <div className="inset-x-0 bottom-0 flex justify-center bg-gradient-to-t from-white pt-32 pb-8 pointer-events-none absolute">
          <button className="relative bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 text-sm text-white font-semibold h-12 px-6 rounded-lg flex items-center ">
            Show More...
          </button>
        </div>
      </section>
    </div>
  );
};

export default Comments;
