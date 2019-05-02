import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Link} from '../utilities/routing/index';



export default class NavBar extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                  Test nav bat
                </Text>
                <Link to="/">
                    <Text>Home</Text>
                </Link>
                <Link to="/other">
                    <Text>
                        Other
                    </Text>
                </Link>
                <Link to="/another">
                    <Text>
                        Another
                    </Text>
                </Link>
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
