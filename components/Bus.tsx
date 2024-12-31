import React from "react"

interface BusType{
    item:any
}
const Bus:React.FC<BusType> = ({item}) => {
  return (
    <div  className=" py-3 px-2 rounded-lg cursor-pointer  flex items-center justify-center flex-col shadow-lg gap-2"> 
        <img height={250} width={250} src={item?.busImages[0]} className=" rounded-md" alt="" />
        <h1 className=" font-bold">{item?.from} to {item?.end}</h1>
    </div>
  )
}

export default Bus