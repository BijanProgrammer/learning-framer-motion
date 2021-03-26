import React from 'react';

import styles from './Step.module.scss';

function Step({index, title, children}) {
    return (
        <div className={'step ' + styles['step']}>
            <div className={styles['head']}>
                <div className={styles['head__index']}>{index}.</div>
                <div className={styles['head__title']}>{title}</div>
            </div>
            
            <div className={styles['body']}>
                {children}
            </div>
        </div>
    );
}

export default Step;
