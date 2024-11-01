import axios from "axios";
import { User, isUser } from "../models/Users";
import { isPost } from "../models/Posts";

const ENV = process.env.EXPO_PUBLIC_API_URL;

export async function getUsers(): Promise<User[]>{
    const res = await axios.get(`${ENV}/users`);

    if(res.status !== 200)
        throw new Error("Failed to fetch users");

    const user = res.data as unknown;

    if(!Array.isArray(user) || !user.every(isUser))
        throw new Error("Invalid user data");

    return res.data;
}

export async function getUserById(id: number): Promise<User>{
    const res = await axios.get(`${ENV}/users/${id}`);

    if(res.status !== 200)
        throw new Error("Failed to fetch user");

    const user = res.data as unknown;

    if(!isUser(user))
        throw new Error("Invalid user data");

    return res.data;
}

export async function getPosts(){
    const res = await axios.get(`${ENV}/posts`);

    if(res.status !== 200)
        throw new Error("Failed to fetch posts");

    const post = res.data as unknown;

    if(!Array.isArray(post) || !post.every(isPost))
        throw new Error("Invalid post data");

    return res.data;
}

export default getUsers;