import { View, StyleSheet } from "react-native"
import DogtorTitle from "./DogtorTitle"
import GoNext from "./GoNext"

export default function DogtorView(props) {
    const { goNext, goNextTitle, disableGoNext, hide_go_next, should_show_title, container_style, children } = props

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
    footer: {
        paddingBottom: 16
    }
})