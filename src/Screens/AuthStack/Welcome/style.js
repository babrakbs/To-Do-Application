import { StyleSheet } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../../../Constants";

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: colors.primaryColor,
        justifyContent: "center",
        alignItems:'center'
    },
    welcomeText: {
        paddingVertical:hp(2),
        fontWeight: '500',
        textAlign: "center",
        fontSize: fontSize.fontSize6,
        color: colors.white,
    },

    btnText: {
        fontWeight: '500',
        textAlign: "center",
        fontSize: fontSize.fontSize5,
        color: colors.white,
    },
    btn:{
        alignSelf: 'center',
        backgroundColor: colors.purple,
        paddingVertical: hp(1.5),
        marginTop:hp(2),
        width: wp(30),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.radius3
    },

})