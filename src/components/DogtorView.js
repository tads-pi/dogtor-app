import React from "react"
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import DogtorTitle from "./DogtorTitle";
import GoNext from "./GoNext";
import { useNavigation } from "@react-navigation/native";
import routes from "../routes";

export default function DogtorView(props) {
    const { goNext, goNextTitle, disableGoNext, hide_go_next, should_show_title, should_show_navigators, absolute_navigators, container_style, children, in_register } = props
    const navigation = useNavigation()

    return (
        <View style={styles._container}>
            {
                should_show_title
                    ?
                    <View style={styles._dogtor_title}>
                        <DogtorTitle />
                    </View>

                    : null
            }
            {
                should_show_navigators
                    ? null
                    : <View style={{
                        flexDirection: "row",
                        justifyContent: "space-between",
                        padding: 16,
                        width: "100%",
                        position: absolute_navigators ? "absolute" : "",
                        zIndex: 999,

                        marginTop: absolute_navigators ? 32 : 0,

                        // DEBUG ONLY
                        // borderColor: "red",
                        // borderWidth: 1
                    }}>
                        <TouchableOpacity onPress={() => { navigation.goBack() }}><Image source={require('../assets/images/voltar.png')} /></TouchableOpacity>
                        <TouchableOpacity onPress={() => { in_register ? navigation.navigate(routes.TELA_LOGIN) : navigation.navigate(routes.TELA_MENU) }}><Image source={require('../assets/images/cancel.png')} /></TouchableOpacity>
                    </View>
            }

            <View style={
                container_style
                    ? container_style
                    : styles.common_container
            }>
                {children}
            </View>
            {
                hide_go_next
                    ? null
                    : <View style={styles.footer}>
                        <GoNext onPress={goNext} title={goNextTitle} disabled={disableGoNext} />
                    </View>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    _container: {
        flex: 1,
        // marginTop: 32,

        // DEBUG ONLY
        // borderColor: "red",
        // borderWidth: 1,
    },
    _dogtor_title: {

    },
    common_container: {
        flex: 1,
        margin: 16,
    },
    footer: {
        paddingBottom: 16
    }
})