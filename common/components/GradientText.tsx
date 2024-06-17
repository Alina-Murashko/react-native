import React from 'react';
import {
    StyleProp,
    StyleSheet,
    Text, TextStyle,
    View,
} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

type axes = {x: number,y:number}

type GradientTextProps = {
    text: string
    textStyle: StyleProp<TextStyle>
    gradient: string[]
    start: axes
    end: axes
}

export function GradientText(props: GradientTextProps) {
    const {text, textStyle,gradient, start,end} = props
    return (
        <MaskedView maskElement={<Text style={[textStyle, { backgroundColor: 'transparent' }]}>{text}</Text>}>
                <LinearGradient
                    colors={gradient}
                    start={start}
                    end={end}
                >
                    <Text style={[textStyle, { opacity: 0 }]}>{text}</Text>
                </LinearGradient>
        </MaskedView>
    )
}

