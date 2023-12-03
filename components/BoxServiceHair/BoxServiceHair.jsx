import React, { useState } from "react";
import {Text, TouchableOpacity, StyleSheet, View} from "react-native";
import {styles} from './styles'
export default function BoxServiceHair({ data }) {
    const { name, price, description, id} = data;
    const [sinal, set] = useState(false);

    return (
        <TouchableOpacity key={id}
            style={styles.container}
            onPress={() => set((state) => !state)}
        >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            {sinal && <Text style={styles.description}>{description}</Text>}
        </TouchableOpacity>
    );
}
