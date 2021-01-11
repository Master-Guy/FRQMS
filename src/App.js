import "./App.css"

import React from "react"
import { hot } from "react-hot-loader/root"

import { ReactComponent as BrandSvg } from "./brand.svg"
import ClientForm from "./ClientForm.js"

function app() {
    return (
        <div className='root'>
            <div className='menu'>
                <div className='menuLogo'>
                    <BrandSvg />
                </div>
                <div className='menuContent' id='menuContent'>
                    Please fill in the rescue form on the right
                </div>
            </div>
            <div className='mainContent'>
                <div>
                    <ClientForm />
                </div>
            </div>
        </div>
    )
}

export default hot(app)
