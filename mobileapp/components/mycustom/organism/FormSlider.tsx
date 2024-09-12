import {View} from "react-native";
import LabelButton from "@/components/mycustom/molecule/LabelButton";
import LabelInput from "@/components/mycustom/molecule/LabelInput";

export default function FormSlider() {

    return <View style={{
        flexDirection: "column",
        gap: 10
    }}>
        <View style={{flexDirection: "row", gap:5}}>
            <LabelInput label_text="First Name"/>
            <LabelInput label_text="Last Name"/>
        </View>
       

        <LabelButton label_text="Ready to go to the next step?" button_text="Submit my Name"/>
    </View>
}