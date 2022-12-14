import React from 'react';

import {Link} from "react-router-dom";

export const HomePage = () => {
    return (
           <div className='jumbotron'>
               <h1>Random Text</h1>
               <p>React, Redux and React Router for powerful web apps</p>
               <Link to={'about'} className={'btn btn-primary btn-lg'}>
                   Learn More
               </Link>
           </div>
    );
};
