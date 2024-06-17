import {Dimensions, StyleProp, StyleSheet, Text, TextStyle, View, ViewProps, ViewStyle} from "react-native";
import {dp, dpHeight, dpWeight, h, sp, w} from "../../const/consts";

type Props = {
    style?: StyleProp<ViewStyle>
    text?: string
    styleText?: StyleProp<TextStyle>
}

type CardProps = Omit< ViewProps, keyof Props> & Props
export const Card = ({style, text, styleText,children}: CardProps) => {

    return (
        <View style={[styles.container, style]}>
            {children}
            <Text style={[styles.text, styleText]}>{text ? text : 'User’s screenshot'}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: 'center',
        borderRadius: dp(40),
        backgroundColor: '#FFFFFF',
        borderColor: '#FFFFFF',
        borderWidth: dp(2),
        width: '100%',
        height: dpHeight(h,1648),
    },
    text: {
        fontSize: sp(100),
        fontFamily: 'SF-Regular',
        color: '#000000',
    }
});