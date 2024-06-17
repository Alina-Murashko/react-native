import {Pressable, PressableProps, StyleProp, StyleSheet, Text, TextStyle, View, ViewStyle} from "react-native";
import {dp, dpHeight, h, sp} from "../../const/consts";


type ButtonProps = {
    onPress: () => void
    title: string
    disabled?: boolean
    buttonStyles?: StyleProp<ViewStyle>
    accessible?: boolean
    accessibilityLabel: string
    textStyles?:  StyleProp<TextStyle>
    color?: string
}


export const ButtonComponent = (props: ButtonProps) => {
    const {onPress,
        title,
        disabled,
        buttonStyles,
        accessible,
        accessibilityLabel,
        textStyles,
        color} = props
    return (
        <Pressable
            style={({ pressed }) => [
                {
                    backgroundColor: disabled
                        ? "#ccc"
                        : pressed
                            ? "#aa0000"
                            : color || "red",
                },
                styles.container,
               buttonStyles,
            ]}
            disabled={disabled}
            onPress={onPress}
            accessible={accessible}
            accessibilityLabel={accessibilityLabel || "A Button"}
        >
            <Text style={[styles.text, textStyles]}>{title || "Press Me"}</Text>
        </Pressable>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingVertical: dpHeight(h,52),
        width: '100%',
        alignItems: "center",
        borderRadius: dp(1000),
        backgroundColor: '#00A676',
        position: "relative"
    },
    text: {
        color: "#FFFFFF",
        fontSize: sp(65),
        fontFamily: 'SF-Bold',
    },

});


