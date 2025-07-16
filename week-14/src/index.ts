interface user {
    id: string,
    name: string,
    age: string,
    password: string,
    email: string
}
type updateProps = Pick<user, 'name' | 'age' | 'email'>

type updatePropsOptional = Partial<updateProps> //optionally passing
function updateUser(updatedProps: updatePropsOptional) {
//hit the database to update the user
}

//readonly => you are not allowed to change internal value
type user1 = {
     readonly name: string
}
//records => ts concept
type Users = Record<string, {age: number, name: string}>;
const users: Users = {
    "asbc": {age: 23, name: "ananya"},
    "bcds": {age: 21, name: "nana"}
}

//map=> js concept
// users.set = {key, {key-value}}  