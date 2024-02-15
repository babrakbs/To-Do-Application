import {
    StyleSheet,
    Text,
} from "react-native";
import { colors, fontSize } from "../Constants";

const CustomText = (props) => {
    return (
        <Text
            onPress={props?.onPress}
            allowFontScaling={false}
            numberOfLines={props?.numberOfLines}
            style={props?.customStyle ? props.customStyle : styles.title}
        >
            {props?.value}
            {props?.children}
        </Text>
    );
};

const styles = StyleSheet.create({

    title: {
        color: colors.midBlue,
        fontSize: fontSize.fontSize5,
        textAlign: 'center',
        alignItems: "center",
        alignSelf: 'center',
        justifyContent: 'center',
    },


});
export default CustomText;
