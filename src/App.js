import React from 'react';
import {Provider} from "react-redux";
import { Platform } from 'react-native'

import store from "./common/utilities/storage/store";
import {Navigation} from './common/utilities/routing/index';


class App extends React.Component {
    render() {
        console.log(Platform.OS)
        return (
            <Provider store={store}>
                <Navigation/>
            </Provider>
        );
    }
}

export default App;
