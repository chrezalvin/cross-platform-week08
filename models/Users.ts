export interface User{
    id: number
    name: string
    username: string
    email: string
    address: {
      street: string
      suite: string
      city: string
      zipcode: string
      geo: {
        lat: string
        lng: string
      }
    }
    phone: string
    website: string
    company: {
      name: string
      catchPhrase: string
      bs: string
    }
}

export function isUser(value: unknown): value is User{
    if(typeof value !== "object" || value === null)
        return false;

    if(!("id" in value) || typeof value.id !== "number")
        return false;

    if(!("name" in value) || typeof value.name !== "string")
        return false;

    if(!("username" in value) || typeof value.username !== "string")
        return false;

    if(!("email" in value) || typeof value.email !== "string")
        return false;

    if(!("address" in value) || typeof value.address !== "object")
        return false;

    if(!("phone" in value) || typeof value.phone !== "string")
        return false;

    if(!("website" in value) || typeof value.website !== "string")
        return false;

    if(!("company" in value) || typeof value.company !== "object")
        return false;

    return true;
}