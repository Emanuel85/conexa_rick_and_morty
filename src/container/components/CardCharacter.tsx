import { useStoreGlobal } from '@/store/useStoreGlobal'
import React from 'react'

const CardCharacter = () => {
  const { items } = useStoreGlobal()

  return (
    <>
      {items?.map(item => (
       <div className="flex flex-col items-center bg-white/10 border backdrop-blur border-gray-200 rounded-lg shadow-sm md:flex-row md:max-w-sm hover:bg-slate-600 dark:hover:bg-gray-700 hover:border-slate-600">
         <img className="object-cover w-[160px] h-[160px] rounded-t-lg md:rounded-none md:rounded-s-lg" src={item.image} alt="" />
          <div className="flex flex-col justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">{item.name} </h5>
            <h3 className={`text-gray-800 px-3 py-1 rounded-md min-w-[80px] text-center self-start ${item.status === 'Alive'
              ? 'bg-green-300'
              : item.status === 'Dead'
                ? 'bg-red-300'
                : 'bg-gray-300'
              }`}>{item.status}</h3>
          </div>
        </div>
      ))}
    </>
  )
}





export default CardCharacter