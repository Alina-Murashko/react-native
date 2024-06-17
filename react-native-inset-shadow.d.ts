// react-native-inset-shadow.d.ts

declare type RNComponent<P = {}, S = {}, SS = any> = import('react').Component<P, S, SS>;
declare type RNConstructor<T> = import('react-native').Constructor<T>;
declare type RNViewProps = import('react-native').ViewProps;
declare type RNViewStyle = import('react-native').ViewStyle;

declare module 'react-native-inset-shadow' {
    interface InsetShadowProps {
        left?: boolean,
        top?: boolean,
        right?: boolean,
        bottom?: boolean,
        shadowColor?: string;
        shadowOpacity?: number;
        shadowRadius?: number;
        shadowOffset?: number;
        shadowInset?: boolean;
        elevation?: number;
        containerStyle?: RNViewStyle
        children?: React.ReactNode | null;
    }

    export const InsetShadow:  RNConstructor<RNComponent<RNViewProps & {setting?: InsetShadowProps}>>;
}
// Хотела использовать эту библиотеку но т.к. TS у пакета нет, даже с этим файлом не вышло , expo?
{/*<InsetShadow  containerStyle={styles.shadow}*/}
{/*              shadowRadius={dp(50)}*/}
{/*              shadowOffset={25}*/}
{/*              elevation={25}*/}
{/*              shadowOpacity={dp(10)}*/}
{/*              shadowColor={'rgba(255, 255, 255, 1)'}>*/}
{/*</InsetShadow>*/}
