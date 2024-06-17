import {LinearGradient} from "expo-linear-gradient";
import {StyleProp, ViewStyle} from "react-native";

type BackgroundProps = {
    children?: React.ReactNode | null;
    styles: StyleProp<ViewStyle>
}

export const Background = (props: BackgroundProps) => {
    const {children, styles} = props
    return  <LinearGradient
        locations={[0,0.4]}
        colors={[ '#ED217C', '#040404']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.2, y: 0.8 }}
        style={styles}
    >{children}</LinearGradient>
}