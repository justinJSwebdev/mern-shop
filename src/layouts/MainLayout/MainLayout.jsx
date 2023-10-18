import React, { Fragment } from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'

export default function MainLayout({ children }) {
    return (
        <div className='font-body'>
            <Header></Header>
            <div>{children}</div>
            <Footer></Footer>
        </div>
    )
}
