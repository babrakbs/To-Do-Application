import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white,
        justifyContent: "center",
    },
    headView: {
        flex: 1,
        justifyContent: 'center',
    },
    head: {
        fontSize: fontSize.fontSize7,
        paddingVertical: hp(1),
        fontWeight: 'bold',
        textAlign: "center",
        color: colors.primaryColor,
        width: wp(90),
        alignSelf: 'center'
    },
    welcomeText: {
        paddingVertical: hp(1),
        fontWeight: '600',
        textAlign: "center",
        fontSize: fontSize.fontSize5,
        color: colors.primaryColor,
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