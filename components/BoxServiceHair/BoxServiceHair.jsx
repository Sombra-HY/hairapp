import React, { useState } from "react";
import { Text, TouchableOpacity, View, Button } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export default function BoxServiceHair({ data }) {
    const { name, price, description, id } = data;
    const [sinal, set] = useState(false);
    const navigation = useNavigation();

    return (
        <TouchableOpacity
            key={id}
            style={styles.container}
            onPress={() => set((state) => !state)}
        >
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.price}>{price}</Text>
            {sinal &&
                <>
                    <Text style={styles.description}>{description}</Text>
                    <Button
                        title={"Agendar"}
                        onPress={() => navigation.navigate("Appointment", { serviceName: name })}
                    />
                </>

            }
        </TouchableOpacity>
    );
}
