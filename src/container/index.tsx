import CardPage from '@/container/components/CardPage'
import React from 'react'
import withDashBoard from './components/withDashBoard'

const DashBoard = () => {
    return (
        <div>

            <CardPage />
        </div>
    )
}

export default withDashBoard(DashBoard) 