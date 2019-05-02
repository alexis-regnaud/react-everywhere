import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Platform
} from 'react-native';
import NavBar from '../components/NavBar'



export default class AnotherScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                {Platform.OS === 'web' &&
                    <NavBar/>
                }
                <Text>
                    Encore une autre page
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
