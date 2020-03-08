
import React from 'react';
import { Link } from 'react-router-dom'


const NotFoundPage = () => (
    <div>
        404 - <Link to="/">Go to Home Page</Link> {/*Just like <a href="" /> but uses client side routing to prevent full page refresh. Use <a href if linking to external site aka outside of app*/}
    </div>
);


export default NotFoundPage;

