import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


class Button extends Component {
    render() {
        const { label, action } = this.props;
        return (
<           TouchableOpacity style={styles.btn} onPress={action}>
        <Text style={styles.btnTxt}>{label}</Text>
            </TouchableOpacity>
        );
    }
}

//Manejo de estados a través de un componente función

// function Button(props) {
//     const { label, action } = props;
//         return (
// <           TouchableOpacity style={styles.btn} onPress={action}>
//         <Text style={styles.btnTxt}>{label}</Text>
//             </TouchableOpacity>
//         );
// }

const styles = StyleSheet.create({
    btn: {
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FCFAF1',
        borderRadius: 100,
        shadowColor: 'rgba(0, 0, 0, 0.1)',
        shadowOpacity: 0.8,
        elevation: 6,
        shadowRadius: 15 ,
        shadowOffset : { width: 1, height: 13},
    },
    btnTxt: {
        fontSize: 25,
        color: '#B2BBAD',
        fontWeight: 'bold',
    },
});

export default Button;