import { Text, View, Button } from "react-native";

export default function MyButton({
    text="Button"
}) {

    return <View>
        <Button
            title={text}
        />
    </View>
}