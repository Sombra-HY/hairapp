import {getDocs} from "firebase/firestore";
import {useEffect, useState} from "react";

export const useDocs = (ref, update = false) => {
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
        if (services.length === 0) {
            getServices().then(res=>console.log(res));
            return
        }
        if(update){
            getServices().then(res=>console.log(res));
        }

    }, []);

    return [services, setServices];
}