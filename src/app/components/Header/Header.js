import React from 'react';
import {Link} from 'react-router-dom';

import styles from './Header.module.scss';

function Header() {
    return (
        <header className={styles['header']}>
            <nav>
                <Link to="/" className={styles['logo']}>
                    <h2>Tuts Plus</h2>
                </Link>
                
                <a className={styles['github']} href="https://github.com/BijanProgrammer/learning-framer-motion">
                    GitHub
                </a>
            </nav>
        </header>
    );
}

export default Header;
