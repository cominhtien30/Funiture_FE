import React from 'react'
// csss base line
import { ThemeProvider } from '@material-ui/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
// router
import { BrowserRouter } from 'react-router-dom'
import Router from './routes/routes'
// ---------------------
// redux
import { Provider } from 'react-redux'
import store from './redux/store'
// component
import ScrollToTop from './component/scrollToTop'
import theme from './commons/theming/theme'
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <ScrollToTop />
                    <Router />
                </ThemeProvider>
            </BrowserRouter>
        </Provider>
    )
}

export default App
