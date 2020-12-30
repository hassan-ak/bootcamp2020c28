import React from 'react'
import { Link } from 'react-router-dom'

export const ErrorPage = () => {
    return (
        <div className="errorPage">
            <div className="err404">404</div>
            <div className="errorMsg">
                Maybe this page moved. 
                Got deleted. 
                Is hiding out in quarantine.
                Never existed in the first place.
                <p>Let's go <Link to ="/" className="link"><strong>Home</strong></Link> and try from there.</p>
            </div>
      </div>
    )
}
