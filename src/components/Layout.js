import React from 'react'
import Navbar from './Navbar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar/>
            <div className="content">
                { children }
            </div>
            <footer className="footer">
                <p>&copy; 2021 Rj21dart</p>
            </footer>
        </div>
    )
}
