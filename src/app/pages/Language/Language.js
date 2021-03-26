import React from 'react';

import Step from '../../components/Step/Step';

import styles from './Language.module.scss';
import {TutorialContext} from '../../contexts/TutorialContext';
import {Link} from 'react-router-dom';

function Language({setLanguage}) {
    const languages = ['C', 'C++', 'C#', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript', 'TypeScript'];
    
    return (
        <TutorialContext.Consumer>
            {(tutorial) => (
                <div className={'container ' + styles['language']}>
                    <Step index={1} title="Choose Your Favorite Language">
                        <ul className={styles['children']}>
                            {
                                languages.map(language => (
                                    <li key={language} onClick={() => setLanguage(language)}>
                                        <span className={tutorial.language === language ? styles['active'] : ''}>
                                            {language}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Step>
                    
                    {tutorial.language && (
                        <div className={styles['call-to-action']}>
                            <Link to="/framework">
                                <button>Next</button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </TutorialContext.Consumer>
    );
}

export default Language;
