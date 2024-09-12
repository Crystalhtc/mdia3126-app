import { View, Button as NativeButton } from "react-native";
//you can rename the import component by using "as" keyword --> so you can still name the button as Button

// View is just a container that can hold other components
export default function Button({
    buttonTitle //not error, just warning coz did not tell react that it is a string or not
}) {

    return <View>
        <NativeButton
            color="red"
            title={buttonTitle}
        />
    </View>
}