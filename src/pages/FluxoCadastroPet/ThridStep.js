import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import DogtorView from "../../components/DogtorView";
import * as colors from "../../constants/colors";
import { useNavigation } from "@react-navigation/native";
import routes from "../../routes";
import { useContext } from "react";
import { AuthContext } from "../../../context/auth";
import { AppointmentContext } from "../../../context/appoiment"
import { DEFAULT_FLOW } from "../../../constants/appointment"

export default function PetThirdStep() {
    const { appointment } = useContext(AppointmentContext)
    const { flow } = appointment

    const { addPet } = useContext(AuthContext)
    const navigate = useNavigation().navigate

    function goNext() {
        addPet(
            () => require("../../assets/images/pets/thor_pp.png"),
            () => require("../../assets/images/pets/thor_banner.png"),
        )

        if (flow == DEFAULT_FLOW) {
            navigate(routes.TELA_MENU)
        } else {
            navigate(routes.FLUXO_AGENDAMENTO_4)
        }
    }

    return (
        <DogtorView goNext={goNext} goNextTitle="Adicionar">
            <View style={styles.header}>
                <Text style={styles.title}>
                    Foto do Pet
                </Text>

                <Text style={styles.subTitle}>
                    Vamos criar uma linda montagem para o seu pet, não se preocupe!
                </Text>
            </View>

            <TouchableOpacity
                style={styles.imageWrapper}
                onPress={() => {
                    //TODO show camera
                }}
            >
                <Image style={styles.image} source={require("../../assets/images/adicionar.png")} />
            </TouchableOpacity>

        </DogtorView>
    );
};
const styles = StyleSheet.create({
    header: {
        width: "100%",
        alignItems: "center",
        padding: 16,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        // marginTop: 30,
    },
    subTitle: {
        color: colors.DOGTOR_DARK_GRAY,
        fontSize: 16,
        marginTop: 10,
        justifyContent: "center",
        textAlign: 'center'
    },
    imageWrapper: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    image: {
        resizeMode: "contain",
    },
})

