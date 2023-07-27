import Image from "next/image";

interface ItemsCardProps {
    item1 : string;
    item2 : string;
    width : number;
}

const ItemsCard : React.FC<ItemsCardProps> = ({item1,item2,width}) => {
  return (
    <div className="cursor-pointer flex flex-col items-start w bg-gray-900 p-4 rounded-2xl">
        <div className="flex p-2">
            <Image src="/images/stack.png" width="30" height="30" alt="stack"/>
            <p className="text-white pl-4 font-light">{item1}</p>
        </div>
        <hr className={`border-1 border-neutral-700 w-${width} mt-2 mb-2`} />
        <div className="flex p-2">
            <Image src="/images/stack1.png" width="34" height="34" alt="stack"/>
            <p className="text-white pl-4 font-light">{item2}</p>
        </div>
    </div>
  )
}

export default ItemsCard