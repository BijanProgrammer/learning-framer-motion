import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import {TutorialContext, tutorialDefaultValue} from './contexts/TutorialContext';

import Home from './pages/Home/Home';
import Language from './pages/Language/Language';
import Framework from './pages/Framework/Framework';
import Result from './pages/Result/Result';
import NotFound from './pages/NotFound/NotFound';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import './App.scss';

function App() {
    const [tutorial, setTutorial] = useState(tutorialDefaultValue);
    
    const setLanguage = (language) => {
        setTutorial({...tutorial, language});
    };
    
    const toggleFramework = (framework) => {
        let frameworks;
        if (tutorial.frameworks.includes(framework))
            frameworks = tutorial.frameworks.filter(f => f !== framework);
        else
            frameworks = [...tutorial.frameworks, framework];
        
        setTutorial({...tutorial, frameworks});
    };
    
    return (
        <Router>
            <div className="app">
                <Header/>
                
                <main>
                    <TutorialContext.Provider value={tutorial}>
                        <Switch>
                            <Route exact path="/" component={Home}/>
                            <Route path="/language">
                                <Language setLanguage={setLanguage}/>
                            </Route>
                            <Route path="/framework">
                                <Framework toggleFramework={toggleFramework}/>
                            </Route>
                            <Route path="/result" component={Result}/>
                            <Route component={NotFound}/>
                        </Switch>
                    </TutorialContext.Provider>
                </main>
                
                <Footer/>
            </div>
        </Router>
    );
}

export default App;
