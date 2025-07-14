"use client"
import React, { useState, useEffect } from 'react';
import { fetchPageData } from '../Utils/servicePages';
import { IPages } from '@/service/type';

const withDashBoard = <P extends object>(
    Components: React.ComponentType<P>
): React.FC<P> => {
    return (props: P) => {
        let page = '2'
        const [data, setData] = useState<IPages | null>(null)

        useEffect(() => {
            fetchPageData(page).then(setData)
        }, [])

        console.log('DESDE EL DASHBOARD', data)

        const action = {};
        return <Components {...action} {...props} />;
    };
};

export default withDashBoard;
