"use client"
import CardCharacter from '@/container/components/CardCharacter'
import React, { FC } from 'react'
import withDashBoard from './components/withDashBoard'
import FooterCharacter from './components/FooterCharacter'
import { IProps } from './type'

const DashBoard: FC<IProps> = ({ handlePrev, handleNext }) => {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800">
                {/* Columna izquierda: Character #1 */}
                <div className="border-r-8 p-4 shadow-sm">
                    <h2 className="text-xl text-white font-semibold text-center mb-4">Character #1</h2>

                    {/* Contenedor con scroll vertical */}
                    <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                        <CardCharacter />
                    </div>
                    <FooterCharacter handlePrev={handlePrev} handleNext={handleNext} />
                </div>

                {/* Columna derecha: Character #2 */}
                <div className="border-l-8 p-4 shadow-sm">
                    <h2 className="text-xl text-white font-semibold text-center mb-4">Character #2</h2>

                    {/* Contenedor con scroll vertical */}
                    <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                        <CardCharacter />
                    </div>
                </div>
            </div>

        </>
    );
}

export default withDashBoard(DashBoard) 