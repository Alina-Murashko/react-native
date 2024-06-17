import {StyleProp, StyleSheet, Text, TextStyle} from "react-native";
import {dp, sp} from "../../const/consts";

type PropsTitle = {
    style?: StyleProp<TextStyle>
    text?: string
}
export const Title = ({style, text}:PropsTitle) => {

    return  <Text style={[styles.title, style]}>{text ? text :'RIZZGPT'}</Text>
}

const styles = StyleSheet.create({
        title: {
            fontSize: sp(100),
            textAlign: "center",
            fontFamily: 'Syncopate-Bold',
            color: '#FFFFFF',

            textShadowColor: '#ED217C80',
            textShadowOffset: {width: 0, height: 0},
            textShadowRadius: 15,
        }
})