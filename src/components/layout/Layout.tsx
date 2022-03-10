import React, { FC } from 'react'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'

const Layout:FC = ({children}) => {
  return (
      <>
        <Header />
        <div>
            <Sidebar />
            { children }
        </div>
        
      </>
  )
}

export default Layout