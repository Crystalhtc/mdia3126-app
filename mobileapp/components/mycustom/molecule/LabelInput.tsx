import { Text, View, Button } from "react-native";
// import MyButton from "../atom/Button";
import MyLabel from "../atom/Label";
import MyInput from "../atom/Input";

export default function LabelButton({
    label_text="label",
}) {

    return <View style={{
        gap: 5
    }}>
        <MyLabel text={label_text}/>
        <MyInput />
    </View>
}