import React, { useEffect, useState } from "react";
import {FlatList, View} from "react-native";
import { refServices } from "../../Services/firebase";
import BoxServiceHair from "../../components/BoxServiceHair/BoxServiceHair";
import {  getDocs } from 'firebase/firestore';
import {useDocs} from "../../hooks/useDocs";

export default function ServiceHair() {
    const [services, setServices] = useDocs(refServices);
    console.log("foi");

    return (
        <View>
            {services.length !== 0 && (
                <FlatList
                    Vertical
                    data={services}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <BoxServiceHair data={item} />}
                />
            )}
        </View>
    );
}
