import React from 'react'
import Card from '../components/shared/Card'
import {Link} from 'react-router-dom'

function About() {
    return (
        <Card>
            <div className="about">
                <h1>About This Project</h1>
                <p>This is a react app to leave feedback</p>
                <p>
                    <Link to='/'>Back To Home</Link>
                </p>
            </div>
        </Card>
    )
}

export default About
