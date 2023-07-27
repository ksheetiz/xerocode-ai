"use client";

import Button from "./Button";
import axios from 'axios';
import {toast} from 'react-hot-toast';
import { useState } from "react";

export const Input = () => {

  const [email, setEmail] = useState("");

  const onSubmit = async() => {

    const data = {email}

    axios
    .post("/api/register",data)
    .then(() => {
      toast.success("Joined the Waitlist !");
      setEmail("");
    })
    .catch((error) => {
      toast.error("Something went wrong !");
    })
  }

  return (
    <div className="mx-auto mt-5 flex flex-row max-w-screen-sm items-center justify-center">
        <div className="h-15 w-auto rounded-full bg-gradient-to-r from-fuchsia-500 via-fuchsia-100 to-indigo-600 p-1">
            <input
            type="email"
            className="h-14 w-96 pl-10 pr-20 bg-black text-white rounded-full z-0 focus:shadow focus:outline-none"
            placeholder="Your Email"
            value={email}
            onChange={(e)=>{setEmail(e.target.value)}}
            />
            <div className="absolute -mt-12 ml-64">
                <Button label="JOIN WAITLIST" onClick={onSubmit} outline/>
            </div>
        </div>
    </div>
  );
};
