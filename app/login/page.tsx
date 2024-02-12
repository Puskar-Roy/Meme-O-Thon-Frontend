"use client";
import React from "react";
import { signIn, useSession } from "next-auth/react";

const Page = () => {
  const session = useSession();
  console.log(session);
  return (
    <div className=" w-[300px] flex justify-center item-center flex-col gap-4">
      <div className="text-2xl mt-5">Login With Google</div>
      <button
        onClick={() => signIn("google")}
        className="bg-white pl-3 pr-3 pt-1 pb-1 rounded-xl text-center font-bold text-black"
      >
        Login Here
      </button>
    </div>
  );
};

export default Page;
