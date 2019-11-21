import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import NewItem from './pages/NewItem';
import Login from './pages/Login';
import Signup from './pages/Signup';
import RegisterEvent from './pages/RegisterEvent';
import CreateProfile from './pages/CreateProfile';
import Event from './pages/Event';
import CreateEvent from './pages/CreateEvent';
import Profile from './pages/Profile';
import Attendees from './pages/Attendees';
import ProposeIdea from './pages/ProposeIdea';
import YourIdea from './pages/YourIdea';
import Ideas from './pages/Ideas';
import EditProfile from './pages/EditProfile';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';


const App: React.FC = () => (
  
  
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" component={Home} exact={true} />
        <Route path="/new" component={NewItem} exact={true} />
        <Route path="/login" component={Login} exact={true} /> 
        <Route path="/signup" component={Signup} exact={true} />
        <Route path="/create-profile" component={CreateProfile} exact={true} />
        <Route path="/profile" component={Profile} exact={true} />
        <Route path="/event" component={Event} exact={true} />
        <Route path="/create-event" component={CreateEvent} exact={true} />
        <Route path="/register" component={RegisterEvent} exact={true} />
        <Route path="/attendees" component={Attendees} exact={true} />
        <Route exact path="/" render={() => <Redirect to="/login" />} />
        <Route path="/propose-idea" component={ProposeIdea} exact={true} />
        <Route path="/your-idea" component={YourIdea} exact={true} />
        <Route path="/ideas" component={Ideas} exact={true} />
        <Route path="/edit-profile" component={EditProfile} exact={true} />
        
        <Route exact path="/" render={() => <Redirect to="/login" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
