import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
    },
    welcomeText: {
        paddingVertical: hp(2),
        fontWeight: '500',
        textAlign: "center",
        fontSize: fontSize.fontSize6,
        color: colors.white,
        width: wp(90),
        alignSelf: 'center'
    },
    btnText: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btn: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.purple,
        width: wp(90),
        borderRadius: radius.radius1,
        marginVertical: hp(2)
    },
})