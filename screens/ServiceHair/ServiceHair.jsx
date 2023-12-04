import React, { useEffect, useState } from "react";
import { FlatList, ScrollView, View, StyleSheet } from "react-native";
import { refServices } from "../../Services/firebase";
import BoxServiceHair from "../../components/BoxServiceHair/BoxServiceHair";
import { getDocs } from 'firebase/firestore';
import { useDocs } from "../../hooks/useDocs";
import EmptyHeader from "../../components/EmptyHeader/EmptyHeader";

export default function ServiceHair() {
    const [services, setServices] = useDocs(refServices);
    console.log("foi");

    return (
        <>
            <EmptyHeader />
            <EmptyHeader />
            {services.length !== 0 && (
                <View style={styles.container}>
                    <FlatList
                        Vertical
                        data={services}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({ item }) => <BoxServiceHair data={item} />}
                    />
                </View>
            )}
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1e1f8', // Cor de fundo
        paddingHorizontal: 16, // Espaçamento horizontal
        paddingTop: 16, // Espaçamento superior
    },
});
