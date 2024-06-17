import {Dimensions, PixelRatio, Platform} from "react-native";

export const win = Dimensions.get('window')
export const h = win.height
export const w = win.width
export const dp = (px: number) => {
   console.log(PixelRatio.getFontScale())
    console.log(PixelRatio.get())
    return px /  PixelRatio.get()
};
export const sp = (px: number) => {
    if (Platform.OS === 'ios') {
        return (px / (PixelRatio.getFontScale() * PixelRatio.get()));
    } else {
        return px / (PixelRatio.getFontScale() * PixelRatio.get());
    }
};

export const dpHeight = (h: number,px: number) => {
    return h/ (2532/px)
}

export const dpWeight = (w: number,px: number) => {
    return w/ (1170/px)
}