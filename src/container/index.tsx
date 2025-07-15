"use client"
import CardCharacter from '@/container/components/CardCharacter'
import React, { FC } from 'react'
import withDashBoard from './components/withDashBoard'
import FooterCharacter from './components/FooterCharacter'
import { ContainerID } from '@/store/typeStore'
import PanelEpisodes from './components/PanelEpisodes'

interface Props {
    getHandlePage: (id: ContainerID) => {
        handlePrev: () => void,
        handleNext: () => void
    }
}

const DashBoard: FC<Props> = ({ getHandlePage }) => {
    const { handlePrev: prevLeft, handleNext: nextLeft } = getHandlePage("character1");
    const { handlePrev: prevRight, handleNext: nextRight } = getHandlePage("character2");
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-gray-800">
                {/* Columna izquierda: Character #1 */}
                <div className="border-r-8 p-4 shadow-sm">
                    <h2 className="text-xl text-white font-semibold text-center mb-4">Character #1</h2>

                    {/* Contenedor con scroll vertical */}
                    <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                        <CardCharacter containerID='character1' />
                    </div>
                    <FooterCharacter handlePrev={prevLeft} handleNext={nextLeft} containerID='character1' />
                </div>

                {/* Columna derecha: Character #2 */}
                <div className="border-l-8 p-4 shadow-sm">
                    <h2 className="text-xl text-white font-semibold text-center mb-4">Character #2</h2>

                    {/* Contenedor con scroll vertical */}
                    <div className="grid grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                        <CardCharacter containerID='character2' />
                    </div>
                    <FooterCharacter handlePrev={prevRight} handleNext={nextRight} containerID='character2' />
                </div>
            </div>
            <PanelEpisodes />
        </>
    );
}

export default withDashBoard(DashBoard) 