import { ContainerID } from '@/store/typeStore'
import { useStoreGlobal } from '@/store/useStoreGlobal'
import React from 'react'

interface Props {
  containerID: ContainerID;
}

const CardCharacter: React.FC<Props> = ({ containerID }) => {
  const { containerCharacter, selectCharacters, setSelectCharacter } = useStoreGlobal()
  const items = containerCharacter[containerID].items
  const selected = selectCharacters[containerID];

  return (
    <>
      {items.map(item => {
        const isSelected = selected?.id === item.id;
        return (
          <div
            key={item.id}
            onClick={() => setSelectCharacter?.(containerID, item)}
            className={`flex cursor-pointer flex-col items-center bg-white/10 rounded-lg shadow-sm md:flex-row md:max-w-sm 
              ${isSelected ? 'border-2 border-white' : 'border border-transparent'} 
              hover:bg-slate-600 hover:border-white transition-colors`}
          >
            <img
              className="object-cover w-[160px] h-[160px] rounded-t-lg md:rounded-none md:rounded-s-lg"
              src={item.image}
              alt={item.name}
            />
            <div className="flex flex-col justify-between p-4 leading-normal">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{item.name}</h5>
              <h3 className={`text-gray-800 px-3 py-1 rounded-md min-w-[80px] text-center self-start ${item.status === 'Alive' ? 'bg-green-300' :
                item.status === 'Dead' ? 'bg-red-300' :
                  'bg-gray-300'
                }`}>
                {item.status}
              </h3>
            </div>
          </div>
        );
      })}
    </>
  );
}





export default CardCharacter