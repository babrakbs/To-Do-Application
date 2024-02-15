import {
    StyleSheet,
    Text,
    TextInput,
} from "react-native";
import { colors, fontSize, radius } from "../Constants";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";

const InputField = (props) => {
    return (
        <TextInput
            multiline={props?.multiline}
            numberOfLines={props?.numberOfLines}
            style={props?.styles ? props.styles : styles.textInput}
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
        paddingHorizontal: wp(5),
        borderRadius: radius.radius2,
        fontSize: fontSize.fontSize3point5

    },

    placeholderTextColor: colors.black


});
export default InputField;
