import React from 'react'
import {
    BrowserRouter as Router,
    Route, Switch
} from 'react-router-dom'
import './App.css'
import Navigation from './components/Navigation'
import Homepage from './pages/Homepage/Homepage'
import TodoCreate from './pages/Homepage/TodoCreate'
import Login from './pages/Login/Login'

const App = () => {

    return (
        <div className="container">
            <Router>
                <Navigation />
                <Switch>
                    <Route path="/" exact>
                        <Homepage />
                    </Route>
                    <Route path="/homepage">
                        <Homepage />
                    </Route>
                    <Route path="/todo">
                        <TodoCreate />
                    </Route>
                    <Route path="/todo/:id" children={<TodoCreate />}>
                    </Route>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </Router>
            {/* <Footer /> */}
        </div>
    )
}

export default App