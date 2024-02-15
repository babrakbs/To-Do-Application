import { StyleSheet, TextInput } from "react-native";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { colors, fontSize, radius } from "../Constants";

const InputField = (props) => {
    return (
        <TextInput
            multiline={props?.multiline}
            numberOfLines={props?.numberOfLines}
            style={props?.style ? props.style : styles.textInput}
            allowFontScaling={false}
            secureTextEntry={props?.secureTextEntry}
            placeholder={props?.placeholder}
            placeholderTextColor={styles.placeholderTextColor}
            value={props?.value}
            keyboardType={props?.keyboardType}
            onChangeText={props?.onChangeText}
            onBlur={props?.onBlur}
        >
        </TextInput>
    );
};

const styles = StyleSheet.create({
    textInput: {
        justifyContent: 'center',
        textAlign: 'left',
        borderWidth: wp(0.2),
        width: wp(90),
        alignSelf: 'center',
        paddingHorizontal: wp(4),
        borderRadius: radius.radius1,
        fontSize: fontSize.fontSize4,
        paddingVertical: hp(1),
        marginVertical: hp(0.5)
    },
    placeholderTextColor: colors.black
});
export default InputField;
