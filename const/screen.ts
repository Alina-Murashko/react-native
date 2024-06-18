import * as ImagePicker from 'expo-image-picker';

export const pickImage = async () => {
    try {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });
        if (!result.canceled) {
           return result.assets[0];
        }
    } catch (error) {
        console.error('Error picking image:', error);
    }
};
