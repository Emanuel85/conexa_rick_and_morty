"use client"
import React, { useEffect } from 'react';
import { fetchCharacter } from '../Utils/servicePages';
import { useStoreGlobal } from '@/store/useStoreGlobal';
import { ContainerID } from '@/store/typeStore';


const withDashBoard = <P extends object>(
    Components: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {

        const { pages, containerCharacter, setCharacterContainer, setPageCharacterContainer, selectCharacters } = useStoreGlobal()
        const containerID: ContainerID[] = ['character1', 'character2']

        const getHandlePage = (id: "character1" | "character2") => ({
            handlePrev: () => {
                (containerCharacter[id].page > 1) && setPageCharacterContainer?.(id, containerCharacter[id].page - 1)
            },
            handleNext: () => {
                (containerCharacter[id].page < pages) && setPageCharacterContainer?.(id, containerCharacter[id].page + 1)
            }
        })

        useEffect(() => {
            containerID.forEach((id) => {
                fetchCharacter(containerCharacter[id].page.toString()).then((data) => setCharacterContainer?.(id, data))
            })
        }, [containerCharacter.character1.page, containerCharacter.character2.page])

        const action = {
            getHandlePage

        };
        return <Components {...action} {...props} />;
    };
};

export default withDashBoard;
