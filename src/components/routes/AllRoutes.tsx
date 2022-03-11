import React, { FC } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { routes } from './list'

const AllRoutes:FC = () => {
    const isAuth = true
  return (
    <div>
        <Router>
            <Routes>
                { routes.map(route => {
                    if (route.auth && !isAuth) {
                        return false
                    }

                    return (
                        <Route path={route.path}
                            key={`route ${route.path}`}
                            element={<route.element />}> 
                        </Route>
                    )
                }) }
                {/* <Route path={<Error404 />} /> */}
            </Routes>
        </Router>
    </div>
  )
}

export default AllRoutes