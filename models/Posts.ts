export interface Post{
    userId: number
    id: number
    title: string
    body: string
}

export function isPost(value: unknown): value is Post{
    if(typeof value !== "object" || value === null)
        return false;

    if(!("userId" in value) || typeof value.userId !== "number")
        return false;

    if(!("id" in value) || typeof value.id !== "number")
        return false;

    if(!("title" in value) || typeof value.title !== "string")
        return false;

    if(!("body" in value) || typeof value.body !== "string")
        return false;

    return true;
}