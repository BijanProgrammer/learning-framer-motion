import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Home.module.scss';

function Home() {
    return (
        <div className={'container ' + styles['home']}>
            <div className={styles['title']}>Welcome to Tuts Plus!</div>
            <Link to="/language">
                <button>Let's Go Get to it</button>
            </Link>
        </div>
    );
}

export default Home;
