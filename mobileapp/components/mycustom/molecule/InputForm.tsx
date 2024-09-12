import {View, TextInput} from "react-native";
import Button from "@/components/mycustom/atom/Button";
import Label from "@/components/mycustom/atom/Label";

export default function myLabel({
    labelText, titleForButton, placeholderText, placeholderTextColor //name it same as the property, but it can be different for differentiation
}) {
    
    return (
        <View style={{
            flexDirection: "row",
            gap: 5
        }}>
            <Label labelText={labelText}/>
            <TextInput
            style= {{
                border:"1px solid #000",
                padding: '5px'
            }}
                placeholder={placeholderText}
                placeholderTextColor={placeholderTextColor}
            />
            <Button buttonTitle={titleForButton}/>
        </View>
    )
    
}

//placeholder
//the string that will be rendered before text input has been entered