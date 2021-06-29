import * as React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import PrivateRouter from './components/PrivateRouter'
import Login from './routes/Login'
import Register from './routes/Register'
import Home from './routes/Home'

const router = () => {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path="/" exact component={Login} />
                    <Route path="/register" component={Register} />
                    <PrivateRouter path="/home" component={Home} />
                    <Route component={NotFoundScreen} />
                </Switch>
            </div>
        </BrowserRouter>
    )
}

const NotFoundScreen = () => {
    return (
        <div>page not found</div>
    )
}

export default router
