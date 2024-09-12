import {View, Text} from "react-native";

export default function myLabel({
    labelText
}) {
    
    return <View>
        <Text
            style={{
                color: "purple"}}
        >{labelText}</Text>
    </View>
    
}