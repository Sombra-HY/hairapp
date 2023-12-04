import React, { useState } from "react";
import { Text, TouchableOpacity, View, Button, Image, Dimensions, StyleSheet } from "react-native";
import { styles } from './styles';
import { useNavigation } from "@react-navigation/native";

export default function BoxServiceHair({ data }) {
    const { name, price, description, id, image } = data;
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
                    <View style={style.container}>
                        <Image
                            source={{ uri: image }}
                            style={style.image} // Use o estilo do componente específico para a imagem
                            resizeMode="contain"
                        />
                    </View>
                    <Button
                        title={"Agendar"}
                        color={"#cd50ef"}
                        onPress={() => navigation.navigate("Appointment", { serviceName: name })}
                    />

                </>
            }
        </TouchableOpacity>
    );
}

const { width, height } = Dimensions.get('window');

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    image: {
        width: width*0.9 - 40, // Ajuste conforme necessário, subtraindo uma margem
        height: height*0.9 / 3, // Ajuste conforme necessário, definindo uma altura fixa
        borderRadius:30,
        margin: 20

    },
});
