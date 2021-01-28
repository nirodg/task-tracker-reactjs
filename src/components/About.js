import { Link } from 'react-router-dom'

function About() {
    return (
        <div>
            <h3>React.js Crash Course</h3>
            <h4>V1.0.0</h4>
            <p>Written by Dorin Brage based on the react.js crash course</p>
            <Link to='/'>Go back </Link>
        </div>
    )
}

export default About
