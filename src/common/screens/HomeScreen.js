import React, {Component} from 'react';

import TopLevelComponent from '../components/TopLevelComponent'
import {Platform, View} from "react-native";
import NavBar from "../components/NavBar";


export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                {Platform.OS === 'web' &&
                    <NavBar/>
                }
                <TopLevelComponent/>
            </View>
        );
    }
}
