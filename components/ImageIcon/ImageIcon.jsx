import React from 'react';
import { Image } from 'react-native';

const ImageIcon = ({ imagePath, focused }) => {
    return (
        <Image
            source={{uri:'https://img.icons8.com/search'}} // Use require com a variável imagePath
            style={{
                width: 26,
                height: 26,
                tintColor: focused ? 'blue' : 'gray',
            }}
        />
    );
};

export default ImageIcon;
