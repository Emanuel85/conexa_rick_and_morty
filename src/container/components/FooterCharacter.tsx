import { useStoreGlobal } from '@/store/useStoreGlobal'
import React, { FC } from 'react'
import { IProps } from '../type'

const FooterCharacter: FC<IProps> = ({ handlePrev, handleNext }) => {
    const { pages, page } = useStoreGlobal()

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
