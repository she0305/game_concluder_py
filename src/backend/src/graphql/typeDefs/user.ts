//
// const typeDefs = `#graphql
//     type User {
//         id: String
//         name: String
//         email: String
//         emailVerified: Boolean
//         password: String
//
//     }
//
//     type Query {
//         searchUsers(name: String!): [User]
//
//     }
//
//     type Mutation {
//         createUser(name: String!, email: String!, password: String!): User
//         createUsername(username: String): CreateUsernameResponse
//     }
//
//     type CreateUsernameResponse {
//         success: Boolean
//         error: String
//     }
//
// `
//
// export default typeDefs