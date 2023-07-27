'use client'

import Image from "next/image";
import Button from "../Button";
import { Heading } from "../Heading";

interface FeatureCardProps {
  title : string;
  body : string;
}

const FeatureCard1 : React.FC<FeatureCardProps> = ({title, body}) => {
  return (
    <div className={`cursor-pointer flex flex-col items-start w-auto bg-gray-900 p-8 rounded-3xl`}>
      <div>
        <div className="pl-1 pb-3">
          <Heading title={title} combination='bg-gradient-to-r from-indigo-600 to-fuchsia-500' gradient/>
        </div>
        <div className={`pl-1 `}>
          <Heading subtitle={body} /> 
        </div>
      </div>
      <div className="hidden lg:flex flex-row w-full -mb-7 ml-8 justify-end">
        <Image src="/images/grid.png" className="" alt="grid" width={240} height={200} />
      </div>
    </div>
  )
}

export default FeatureCard1

// ${!center ? 'pb-3' : 'h-auto pt-4'}