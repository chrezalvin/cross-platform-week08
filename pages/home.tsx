import { ScrollView, View } from "react-native";
import { routeList, RouteStackParamList } from "../shared";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { PageIndex } from "../libs";
import { useState, useEffect } from "react";
import Card from "../components/Card";
import { Post } from "../models/Posts";
import { getPosts } from "../services/axios";
import styles from "../styles";

const pageName = routeList.home;
type HomeProps = NativeStackScreenProps<RouteStackParamList, typeof pageName>;

export function Home(props: HomeProps) {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
      getPosts()
        .then((posts) => setPosts(posts))
        .catch(console.log);
    }, [])
  
    return (
      <ScrollView 
        contentContainerStyle={[
          styles.gap4,
        ]}
        style={[
          styles.containerFill, 
          styles.flexVertical,
          styles.gap3,
          styles.p2,
        ]}
      >
        {
          posts
            .map((post) => (
              <Card
                key={post.id}
                title={post.title}
                description={post.body}
                onPress={() => props.navigation.navigate(routeList.edit, {
                    title: post.title,
                    body: post.body,
                    id: post.id,
                    editPost: (id: number, title: string, body: string) => {
                      const editedPosts = posts.map(post => {
                        if(post.id === id)
                          return {
                            ...post,
                            title,
                            body,
                          };
                        return post;
                      });

                      setPosts(editedPosts);
                    }
                })}
              />
            ))
        }
      </ScrollView>
    );
}

export default {
    name: pageName,
    component: Home,
} as PageIndex<typeof pageName>;