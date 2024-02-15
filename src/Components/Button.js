import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, radius, fontSize } from "../Constants";
import Text from '../Components/Text'

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={props?.style ? props?.style : styles.btn}>
            {props?.loading ?
                <ActivityIndicator size={25} color={colors.primaryColor} animating={props?.loading} />
                :
                <Text
                    style={props?.btnTitleStyle ? props.btnTitleStyle: styles.btnText}>
            {props?.title} </Text>
            }
        </TouchableOpacity >
    );
};
const styles = StyleSheet.create({
    btn: {
        alignSelf: 'center',
        backgroundColor: colors.purple,
        paddingVertical: hp(1),
        marginTop: hp(3),
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.radius3
    },
    btnText: {
        fontWeight: '500',
        textAlign: "center",
        justifyContent: 'center',
        fontSize: fontSize.fontSize4,
        color: colors.white,
    }
});
export default CustomButton;
