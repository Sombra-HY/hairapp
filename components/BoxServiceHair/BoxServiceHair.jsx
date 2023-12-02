import React, { useState } from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export default function BoxServiceHair({ data }) {
    const { name, price, description } = data;
    const [sinal, set] = useState(false);

    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => set((state) => !state)}
        >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            {sinal && <Text style={styles.description}>{description}</Text>}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: "#fff",
        borderRadius: 8,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ddd",
    },
    name: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 5,
    },
    price: {
        fontSize: 16,
        color: "#666",
        marginBottom: 5,
    },
    description: {
        fontSize: 14,
        color: "#333",
    },
});
