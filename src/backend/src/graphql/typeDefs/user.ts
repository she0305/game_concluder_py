
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

#type Mutation {
#    createUser(name: String!, email: String!, password: String!): User
#    createUsername(username: String): CreateUsernameResponse
#}
#
#type CreateUsernameResponse {
#    success: Boolean
#    error: String
#}

`

export default userTypeDefs