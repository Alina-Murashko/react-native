import {Dimensions, Image, StyleProp, StyleSheet, Text, TextStyle, View, ViewProps, ViewStyle} from "react-native";
import {dp, dpHeight, dpWeight, h, sp, w} from "../../const/consts";

type Props = {
    style?: StyleProp<ViewStyle>
    text?: string
    styleText?: StyleProp<TextStyle>
    screenUri?: string
}

type CardProps = Omit< ViewProps, keyof Props> & Props
export const Card = ({style, text, styleText,children, screenUri}: CardProps) => {

    return (
        <View style={[styles.container, style]}>
            {children}
            {screenUri ? <Image
                source={{uri: screenUri}}
                style={styles.cover}
            /> :
                <Text style={[styles.text, styleText]}>{text ? text : 'User’s screenshot'}</Text>}
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
    },
    cover: {
        borderRadius: dp(40),
        width: '100%',
        height: '100%'
    }
});