import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { ref } from "../../Services/firebase";
import BoxServiceHair from "../../components/BoxServiceHair/BoxServiceHair";
import {  getDocs } from 'firebase/firestore';

export default function ServiceHair() {
    const [services, setServices] = useState([]);

    useEffect( () => {
        const getServices = async () => {
            const querySnapshot = await getDocs(ref);

            const servicesData = [];
            querySnapshot.forEach((doc) => {
                servicesData.push({
                    id: doc.id,
                    ...doc.data(),
                });
            });
            console.log(servicesData);
            setServices(servicesData);
        };

        // Call getServices only once when the component mounts
        if (services.length === 0) {
            getServices().then(res=>console.log(res));
        }

    }, []);

    return (
        <View>
            {services.length !== 0 && (services.map((obj)=><BoxServiceHair data={obj}/>))}
        </View>
    );
}
