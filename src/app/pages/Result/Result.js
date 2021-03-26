import React from 'react';

import {TutorialContext} from '../../contexts/TutorialContext';
import styles from './Result.module.scss';

function Result() {
    return (
        <TutorialContext.Consumer>
            {(tutorial) => (
                <div className={'container ' + styles['result']}>
                    <h2 className={styles['title']}>You're a Great Developer!</h2>
                    
                    <div className={styles['content']}>
                        <div className={styles['text']}>
                            Gotta love coding with <span className={styles['language']}>{tutorial.language}</span> and
                            using:
                        </div>
                        
                        <ul className={styles['frameworks']}>
                            {
                                tutorial.frameworks.map(framework => (
                                    <li key={framework}>{framework}</li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            )}
        </TutorialContext.Consumer>
    );
}

export default Result;
