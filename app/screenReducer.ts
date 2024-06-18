import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import {ImagePickerAsset} from "expo-image-picker";
import uuid from "react-native-uuid";

const dataScreens : ImagePickerAsset[] =Array.from({ length: 20 }, (_, i) => ({
    uri: undefined,
    assetId: uuid.v4().toString(),
    width: 20,
    height: 20
}));

const initialState: InitialState   = {assets: [...dataScreens], assetProcessedId: ''}

const slice = createSlice({
    initialState,
    name: 'app',
    reducers: {
        setProcessedIdScreen:(state, action: PayloadAction<{ assetId: string }>) => {
            state.assetProcessedId = action.payload.assetId
        },
        setScreen: (state, action: PayloadAction<{ screen: ImagePickerAsset }>) => {
            state.assets.unshift(action.payload.screen)
        },
        deleteScreen: (state, action: PayloadAction<{ assetId: string }>) => {

            const index = state.assets.findIndex(cover =>  cover.assetId === action.payload.assetId )
            if (index !== -1) {
                state.assets.splice(index, 1)
            }
        },
    }
})

export const screenReducer = slice.reducer
export const screenActions = slice.actions

type Cover = {
 [key: string] : ImagePickerAsset
}

type InitialState = {
    assets :ImagePickerAsset[],
    assetProcessedId: string,
}