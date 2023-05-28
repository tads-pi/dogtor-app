import React, { useContext } from "react"
import { AppointmentContext } from "../../../context/appoiment"
import { DEFAULT_FLOW } from "../../../constants/appointment"
import { useNavigation } from "@react-navigation/native"
import routes from "../../routes"

export default function PetSecondStep() {
    const navigate = useNavigation().navigate
    const { appointment } = useContext(AppointmentContext)
    const { flow } = appointment

    function goNext() {
        if (flow == DEFAULT_FLOW) {
            navigate(routes.TELA_MENU)
        } else {
            navigate(routes.FLUXO_AGENDAMENTO_5)
        }
    }

    return (
        <>
        </>
    )
}