import React from 'react';
import './ErrorPage.css';

const ErrorPage = () => {
    return (
        <div className="error">
            <div className="error__body">
				<div className="error__img">
					<img src="../../Layer 2404.svg" alt="Error image" />
				</div>
				<div className="error__text">
					<h2><span>404</span></h2>
					<h2>Page Not Found</h2>
                    <p>Sorry Darling, the page that you are looking for is not here, we are still in the works, please bear with us.We will figure it out and make it worth your while!</p>
				</div>
			</div>
        </div>
    )
}

export default ErrorPage
