import { StyleSheet } from "react-native";
import { colors, fontSize } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        justifyContent: "center"
    },
    splashText: {
        fontWeight: '700',
        textAlign: "center",
        fontSize: fontSize.fontSize9,
        color: colors.white,
    },
})