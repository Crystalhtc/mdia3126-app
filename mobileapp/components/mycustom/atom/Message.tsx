import { View, Text } from "react-native";

export default function Message({
    messageText
}) {

    return (
        <View>
            <Text style={{
                fontSize: 20
            }}>
                {messageText}
            </Text>
        </View>
    )
        
}