import {
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import { colors,radius } from "../Constants";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";

const CustomButton = (props) => {
    return (
        <TouchableOpacity
            onPress={props?.onPress}
            style={props?.styles ? props?.styles : styles.btn}>

            {props?.children}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({

    btn: {
        alignSelf: 'center',
        backgroundColor: colors.purple,
        paddingVertical: hp(2),
        marginTop:hp(3),
        width: wp(20),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: radius.radius3
    },

});
export default CustomButton;
