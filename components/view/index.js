import React from 'react';
import { View, Stylesheet } from 'react-native';

function Viewer () {
    return <View style={styles.container} />;
}

const styles = Stylesheet.create({
    container: {
        height: 45,
        width: '100%',
    },
})

export default Viewer;