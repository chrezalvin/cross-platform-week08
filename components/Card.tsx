import { Image, Pressable, Text, View } from "react-native";
import styles from "../styles";

interface CardInterface{
    title: string;
    description: string;
    image?: string;
    onPress?: () => void;
}

export function Card(props: CardInterface){
    return(
        <Pressable 
            onPress={props.onPress}
            style={[
                {
                    borderWidth: 1,
                    borderColor: "#000",
                },
                styles.p2,
                styles.flexHorizontal,
                styles.gap2,
                styles.justifyBetween,
            ]}
        >
            <View style={[
                styles.containerFill,
            ]}>
                <Text style={[styles.fwBold]}>{props.title}</Text>
                <Text>{props.description}</Text>
            </View>
            {
                props.image && (
                    <Image
                        source={{uri: props.image}}
                        style={[
                            {
                                width: 150,
                                height: 150,
                            },
                            styles.rounded2,
                        ]}
                    />
                )
            }
        </Pressable>
    );
}

export default Card;