import "./App.css"

import React from "react"
import { hot } from "react-hot-loader/root"
import {
    Text,
} from "react-native"
import {
    BrowserRouter,
    Route,
    Switch,
} from "react-router-dom"

import { ReactComponent as BrandSvg } from "./brand.svg"
import Welcome from "./Welcome.js"
import ClientForm from "./ClientForm.js"
import CreateRequest from "./CreateRequest.js"

function NonActive() {
    return (
        <Text>Please complete the form on the right</Text>
    )
}

function App() {
    return (
        <BrowserRouter>
            <div className='root'>
                <div className='menu'>
                    <div className='menuLogo'>
                        <BrandSvg />
                    </div>
                    <div className='menuContent' id='menuContent'>
                        <NonActive />
                    </div>
                </div>
                <div className='mainContent'>
                    <Switch>
                        <Route exact path="/" component={Welcome} />
                        <Route path="/client" component={ClientForm} />
                    </Switch>
                    <CreateRequest />
                </div>
            </div>
        </BrowserRouter>
    )
}

export default hot(App)
