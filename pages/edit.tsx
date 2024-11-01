import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { routeList, RouteStackParamList } from "../shared";
import { Button, TextInput, View } from "react-native";
import { PageIndex } from "../libs";
import styles from "../styles";
import { useState } from "react";

const pageName = routeList.edit;
type EditProps = NativeStackScreenProps<RouteStackParamList, typeof pageName>;

export function Edit(props: EditProps) {
    const [title, setTitle] = useState(props.route.params.title);
    const [body, setBody] = useState(props.route.params.body);

    return (
        <View style={[
            styles.containerFill,
            styles.gap2,
            styles.alignItemsCenter,
            styles.py3,
        ]}>
            <TextInput 
                style={[
                    {
                        width: "75%",
                    },
                    styles.p2,
                    styles.rounded2,
                    styles.fwBold,
                ]}
                value={title}
                placeholder="Title"
                onChange={(e) => setTitle(e.nativeEvent.text)}
            />

            <TextInput 
                style={[
                    {
                        width: "75%",
                    },
                    styles.p2,
                    styles.rounded2,
                ]}
                numberOfLines={5}
                multiline
                value={body}
                placeholder="body"
                onChange={(e) => setBody(e.nativeEvent.text)}
            />

            <Button 
                title="Update Post"
                onPress={() => {
                    props.route.params.editPost(props.route.params.id, title, body);
                    props.navigation.goBack()
                }}
            />

            <Button 
                title="Go Back"
                onPress={() => props.navigation.goBack()}
            />
        </View>
    );

}

export default {
    name: pageName,
    component: Edit,
} as PageIndex<typeof pageName>;