import React from 'react';
import {Provider} from "react-redux";

import EntryScreen from './common/screens/EntryScreen';
import store from "./common/utilities/storage/store";
import Routing, {Router} from './common/utilities/routing/index';

const Route = Routing.Route;


class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route path='/' component={EntryScreen}/>
                </Router>
            </Provider>
        );
    }
}


export default App;
