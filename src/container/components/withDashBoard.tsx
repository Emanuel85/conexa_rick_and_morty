"use client"
import React, {useEffect } from 'react';
import { fetchPageData } from '../Utils/servicePages';
import { useStoreGlobal } from '@/store/useStoreGlobal';


const withDashBoard = <P extends object>(
    Components: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {

        const { page, pages, setItems, setPage } = useStoreGlobal()

        const handlePrev = () => {
            if (page > 1) {
                setPage(page - 1)
            }
        }

        const handleNext = () => {
            if (page < pages) {
                setPage(page + 1)
            }
        }

        useEffect(() => {
            fetchPageData(page.toString()).then(setItems)
        }, [page])

        const action = { handlePrev, handleNext };
        return <Components {...action} {...props} />;
    };
};

export default withDashBoard;
