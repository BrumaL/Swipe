import React, { Component } from 'react';
import { View, Animated } from 'react-native';

// Animation
// Ask these three different questions:
// 1. Where is the item right now? Exact X, Y position on the screen.
// 2. Where is the element moving to? What is the end goal? How should it "animate"?
// 3. Which element are we moving?

class Ball extends Component {
    componentWillMount() {
        this.position = new Animated.ValueXY(0, 0);
        Animated.spring(this.position, {
            toValue: { x: 200, y: 500 }
        }).start();
    }

    render() {
        return (
            <Animated.View style={this.position.getLayout()}>
                <View style={styles.ball}/>
            </Animated.View>
        );
    }
}

const styles = {
    ball: {
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 30,
        borderColor: 'black'
    }
};

export default Ball;
