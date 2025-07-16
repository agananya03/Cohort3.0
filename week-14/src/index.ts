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

//readonly
type user1 = {
    name: string
}