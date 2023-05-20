import { View, StyleSheet } from "react-native"
import DogtorTitle from "./DogtorTitle"

export default function DogtorView(props) {
    return (
        <View style={styles._container}>
            {
                props.should_show_title
                    ?
                    <View style={styles._dogtor_title}>
                        <DogtorTitle />
                    </View>

                    : null
            }

            <View style={
                props.container_style
                    ? props.container_style
                    : styles.common_container
            }>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    _container: {
        flex: 1,
        marginTop: 32,

        // DEBUG ONLY
        // borderColor: "yellow",
        // borderWidth: 2,
    },
    _dogtor_title: {

    },
    common_container: {
        flex: 1,
        margin: 16,
    },
})