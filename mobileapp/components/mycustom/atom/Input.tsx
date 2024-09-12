import { TextInput, View, Button } from "react-native";

export default function MyInput({
    text="Button"
}) {

    return <View style={{borderWidth: 5, borderColor:"#666666"}}>
        <TextInput />
    </View>
}