import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    head: {
        color: colors.black,
        alignSelf: 'center',
        fontSize: fontSize.fontSize6,
        fontWeight: '500',
        paddingVertical: hp(5),
        textAlign: 'center',
    },
    labels: {
        fontSize: fontSize.fontSize3point7,
        color: colors.black,
        marginVertical: hp(0.5),
        paddingHorizontal: wp(5),
        marginTop: hp(2),
        marginBottom:hp(1),
        fontWeight: '500'
    },
    btnTextCreate: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    },
    btnCreate: {
        paddingVertical: hp(1.5),
        alignItems: 'center',
        alignSelf: 'center',
        backgroundColor: colors.purple,
        width: wp(90),
        borderRadius: radius.radius1,
        marginVertical: hp(2)
    },
    descpField:{
        justifyContent: 'center',
        textAlign: 'left',
        textAlignVertical: 'top',
        borderWidth: wp(0.2),
        width: wp(90),
        alignSelf: 'center',
        paddingHorizontal: wp(4),
        borderRadius: radius.radius1,
        fontSize: fontSize.fontSize4,
        height: hp(15),
        paddingVertical: hp(1.5),
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
