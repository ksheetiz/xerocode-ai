'use client'

import Image from "next/image";
import Button from "../Button";
import { Heading } from "../Heading";

interface FeatureCardProps {
  title : string;
  body : string;
  label : string;
  center ?: boolean;
}

const FeatureCard : React.FC<FeatureCardProps> = ({title, body, label,center}) => {
  return (
    <div className={`cursor-pointer flex flex-col items-start w-auto bg-gray-900 p-8 m-16 rounded-3xl`}>
      <div>
        <div className="pl-1 pb-3">
          <Heading title={title} combination='bg-gradient-to-r from-indigo-600 to-fuchsia-500' gradient/>
        </div>
        <div className={`pl-1 ${!center ? 'pb-3' : 'h-auto pt-4'}`}>
          <Heading subtitle={body} /> 
        </div>
      </div>
      {!center ? (<div className="p-3 mt-20">
        <Button label={label} onClick={()=>{}} />
      </div>) : <></>}
      <div className="flex flex-row w-full -mt-32 -mb-7 ml-8 justify-end">
        <Image src="/images/grid.png" className="" alt="grid" width={240} height={200} />
      </div>
    </div>
  )
}

export default FeatureCard