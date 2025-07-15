import { useStoreGlobal } from '@/store/useStoreGlobal'
import React, { FC } from 'react'

interface Props {
    handlePrev: () => void
    handleNext: () => void
    containerID: 'character1' | 'character2'
}

const FooterCharacter: FC<Props> = ({ handlePrev, handleNext, containerID }) => {
    const { pages, containerCharacter } = useStoreGlobal()
    const page = containerCharacter[containerID]?.page
    return (
        <div className="flex items-center justify-center gap-4 mt-4 text-white">
            <span>Página</span>
            <button onClick={handlePrev} className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                {`<`}
            </button>
            <span>
                {page} / {pages}
            </span>
            <button onClick={handleNext} className="px-2 py-1 bg-gray-700 rounded hover:bg-gray-600">
                {`>`}
            </button>
        </div>
    )
}

export default FooterCharacter
