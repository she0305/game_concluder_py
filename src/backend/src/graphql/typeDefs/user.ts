
const userTypeDefs = `#graphql

type User {
    id: String
    name: String
    username: String
    email: String
    emailVerified: Boolean
    password: String
    image: String
    createdAt: String
    updatedAt: String
    
}

type Query {
    user(id: String): User
    users: [User]

}
#
#type CreateUsernameResponse {
#    success: Boolean
#    error: String
#}

input CreateUserInput {
    name: String
    username: String
    email: String!
    password: String
}

type CreateUser {
    id: String
    name: String
    username: String
    email: String
    emailVerified: Boolean
    password: String
    image: String
    createdAt: String
    updatedAt: String
}
type Mutation {
    createUser(data:CreateUserInput): User
#    createUsername(username: String): CreateUsernameResponse
}
#

`

export default userTypeDefs