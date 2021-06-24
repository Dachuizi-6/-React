import React, { memo } from 'react'

import { ThemeProvider } from "styled-components"


import Home from './pages/home'
import Profile from './pages/profile'
import Main from "./pages/app"

export default memo(function App() {
    return (
        <ThemeProvider theme={{ fontSize: '50px', color: "yellow" }}>
            <Home />
            <hr />
            <Profile />
            <Main />
        </ThemeProvider>
    )
})
