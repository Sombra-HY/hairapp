import React, { useEffect, useState } from 'react';
import {View, Text, FlatList, StyleSheet, ScrollView, TouchableOpacity, Button} from 'react-native';

import {Db, refAppointment, refOperation} from "../../Services/firebase";
import { useDocs } from "../../hooks/useDocs";
import {useNavigation} from "@react-navigation/native";
import {collection, doc, setDoc} from 'firebase/firestore'
import {addToArray} from "../../Services/utils/dbFirebase";

const SectionAppointment = ({route}) => {
    const [dat,setdat] = useDocs(refAppointment, true);
    const [dat2,] = useDocs(refOperation, true);
    const [horafiltrada, sethorafiltrada] = useState([]);
    const [vef,] = useState(dat !== undefined && dat2 !== undefined);

    const array = [0, 1, 2, 3, 4, 5, 6];

    const[presData,setpresData] = useState(Number);
    const[presHOur,setpresHOur] = useState(Number);

    const[Listadayon,setListadayon] = useState({});
    const nav =useNavigation();


    const hors = ["0:00", "1:00", "2:00", "3:00", "4:00", "5:00", "6:00", "7:00", "8:00", "9:00", "10:00",
        "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "24:00"];

    useEffect(() => {
        if (dat[0] !== undefined && dat2[0] !== undefined) {
            const { interval, workSchedule } = dat2[0].data;
            const [h, m] = interval.timeInit.split(":").map(Number);
            const [hi, mi] = interval.duration.split(":").map(Number);
            const hora = hi + h;
            const minuto = mi + m;
            const endTime = hora + ":" + minuto;

            const { from, until } = workSchedule;
            const [ho, mp] = from.split(":").map(Number);
            const [hio, mio] = until.split(":").map(Number);

            const horafilt = hors.filter((value, index, array) => {
                const [valueH,] = value.split(":").map(Number);
                if ((valueH === h || valueH === hora) || (valueH < ho || valueH > hio)) {
                    return false;
                }
                return true;
            });
            sethorafiltrada(horafilt);

            console.log("aaaa",dat[0].data)

            function sameDay(dayc,horasDisponivel) {
                for (const apointment of dat[0].data) {
                    const {day} = apointment.date;
                    const hour = apointment.date["hour "];
                    const [hora,] = horasDisponivel.split(":").map(Number);
                    if (day===dayc){
                        console.log("hor",hora,hour,day)
                        if(hora===hour){
                            return false
                        }

                    }

                }
                return true
            }

            for (let i = new Date().getDate(); i <new Date().getDate()+7 ; i++) {
                Listadayon[i+""] =  horafilt.filter((value)=>{
                    return sameDay(i,value);
                    }
                )
            }
        }
    }, [dat, dat2]);

    const updatedoc = () => {
        const [hor, ] = presHOur.toString().split(":").map(Number);
        console.log(dat[0].data)
        console.log(route.params)
        const docRef = doc(Db, "Appointment", "8FmquPg71vrLfgRTEGFl");
        // const doca = dat[0].data.push({"date": {"day": presData, "hour ":hor , "minutes": 0, "month": new Date().getMonth(), "year": new Date().getFullYear()}, "service":route.params.service })
        const doca = {"date": {"day": presData, "hour ":hor , "minutes": 0, "month": new Date().getMonth(), "year": new Date().getFullYear()}, "service":route.params.serviceName };
        addToArray("8FmquPg71vrLfgRTEGFl","Appointment","data",doca);
        nav.navigate("Services",);
    }


    return (
        <>
            <View>
                <View style={styles.main}>
                    {vef &&
                        <>
                            <View style={styles.dia}>
                                <Text style={styles.text}>Dias Disponiveis</Text>
                                <FlatList
                                    horizontal
                                    data={array}
                                    keyExtractor={(item) => item.toString()}
                                    renderItem={({ item }) => (
                                        <Data key={item} hora={item + new Date().getDate()} act = {setpresData}/>
                                    )}
                                    contentContainerStyle={styles.container}
                                />
                            </View>




                                {presData ===0?"":
                                    <View style={styles.hora}>
                                        <Text style={styles.text}>Horario Disponiveis</Text>

                                        <FlatList

                                            data={Listadayon[""+presData]}
                                            keyExtractor={(item) => item.toString()}
                                            renderItem={({ item }) => (
                                                <Hour hora={item} act={setpresHOur}/>
                                            )}
                                            contentContainerStyle={styles.container2}
                                        />
                                    </View>

                                }



                        </>

                    }
                    <Text>{presHOur + " horas no dia "+presData}</Text>
                    {presHOur!==0 && <Button title={"agendar"} onPress={updatedoc}/>}
                </View>
            </View>
        </>


    );
};
const styles = StyleSheet.create({
    container: {
        overflow:'hidden'

    },container2: {
        overflow:'hidden',
    },
    miniBox: {
        backgroundColor: '#e0e0e0',
        padding: 0,
        borderRadius: 10,
        width: '100%',
        marginBottom: 10,
    },
    box:{
        width:120,
        backgroundColor: '#e0e0e0',
        margin: 10,
        marginBottom: 10,
        borderRadius: 10,
        flexDirection:"row",
        gap: 2
    }
    ,text:{
        margin:10
    },
    main:{
        padding:10,
        height:450
    },
    hora:{

    },
    dia:{

    }
});
export const Data = ({ hora,act }) => {
    const dayName = (hora) => {
        const a = new Date();
        a.setDate(hora);
        const val = a.getDay();

        const daysOfWeek = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        return daysOfWeek[val];
    };

    return (
        <TouchableOpacity onPress={()=>act(hora)} >
            <View style={styles.box}>
                <Text style={styles.text}>{hora}</Text>
                <Text style={styles.text}>{dayName(hora)}</Text>
            </View>
        </TouchableOpacity>

    );
};

export const Hour = ({hora,act}) => {
  return(
      <TouchableOpacity  style={styles.box} onPress={()=> act(hora)}>
          <Text style={styles.text}> {hora} </Text>
      </TouchableOpacity>
  )
}



export default SectionAppointment;
