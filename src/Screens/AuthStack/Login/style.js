import { StyleSheet } from "react-native";
import { colors, fontSize, radius } from "../../../Constants";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    customBottomTitleStyles:{
        color: colors.primaryColor,
        fontWeight:'600',
        fontSize: fontSize.fontSize4point5,
        textAlign: 'center',
        justifyContent: 'center'
    },
    labels: {
        fontSize: fontSize.small,
        color: colors.black,
        fontWeight:'500',
        marginVertical: hp(0.5),
        paddingHorizontal: wp(5),
        paddingVertical: hp(1)
    },
    loginText: {
        fontSize: fontSize.fontSize4,
        color: colors.white,
        textAlign: 'center',
        fontWeight:'500'
    },
    alreadyText: {
        fontSize: fontSize.fontSize3point5,
        alignSelf: 'center',
        marginVertical: hp(2)
    },
    signUpText: {
        color: colors.purple,
        fontWeight: '700',
        fontSize: fontSize.fontSize3point7,
    },
    error: {
        fontSize: fontSize.avgSmall,
        color: colors.red,
        marginTop: hp(1),
        paddingHorizontal: wp(5),
    },
    modalBackground: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    modalContainer: {
        justifyContent: "center",
        alignSelf: "center",
    },
})
