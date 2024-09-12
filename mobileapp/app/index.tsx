import { Text, View } from "react-native";

//time to make a branch to do some atmoic design

//may not need template for now
// import MyButton from "@/components/mycustom/atom/Button";
import LabelButton from "@/components/mycustom/molecule/LabelButton";
import FormSlider from "@/components/mycustom/organism/FormSlider";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5
      }}
    >
      <View>
        <Text style={{fontSize: 24}}>Welcome to my app!</Text>
      </View>
      <View>
        <FormSlider />
      </View>

      <View style={{
        flexDirection: "row",
        gap: 5
      }}>
        <LabelButton 
          label_text="previous"
          button_text="<-"
        />
        <LabelButton 
          label_text="next"
          button_text="->"
        />
              
      </View>

      
    </View>
  );
}
