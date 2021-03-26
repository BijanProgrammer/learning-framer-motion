import React from 'react';

import styles from './Framework.module.scss';
import {TutorialContext} from '../../contexts/TutorialContext';
import Step from '../../components/Step/Step';
import {Link} from 'react-router-dom';

function Framework({toggleFramework}) {
    const frameworks = ['Bootstrap', 'SASS', 'LESS', 'Vue.js', 'React', 'Angular'];
    
    return (
        <TutorialContext.Consumer>
            {(tutorial) => (
                <div className={'container ' + styles['framework']}>
                    <Step index={2} title="Choose Your Favorite Frameworks">
                        <ul className={styles['children']}>
                            {
                                frameworks.map(framework => (
                                    <li key={framework} onClick={() => toggleFramework(framework)}>
                                        <span
                                            className={tutorial.frameworks.includes(framework) ? styles['active'] : ''}>
                                            {framework}
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </Step>
                    
                    {tutorial.frameworks.length > 0 && (
                        <div className={styles['call-to-action']}>
                            <Link to="/result">
                                <button>Confirm</button>
                            </Link>
                        </div>
                    )}
                </div>
            )}
        </TutorialContext.Consumer>
    );
}

export default Framework;
