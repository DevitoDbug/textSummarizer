import React from "react";

const Comment = ({ tweet }) => {
  return (
    <div className="relative  bg-slate-50 rounded-lg p-6 ">
      <div className="pb-5 flex flex-row gap-2">
        <img
          src={tweet.profilePic}
          alt="profile"
          className="bg-black w-14 h-14 rounded-full object-cover"
        />

        <div className="flex flex-col gap-1">
          <h2 className="text-base text-slate-900 font-semibold">
            {tweet.name}
          </h2>
          <h3>{tweet.handle}</h3>
        </div>
      </div>
      <span>{tweet.message}</span>
    </div>
  );
};

export default Comment;
