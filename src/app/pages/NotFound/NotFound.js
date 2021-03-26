import React from 'react';

import styles from './NotFound.module.scss';

function NotFound() {
    return (
        <div className={styles['not-found']}>
            <span className={styles['status-code']}>404</span>
            <span className={styles['splitter']}/>
            <span className={styles['text']}>Not Found</span>
        </div>
    );
}

export default NotFound;
