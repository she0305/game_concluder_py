import { useMutation, gql } from "@apollo/client";


const createUserMutation = gql`
    mutation CreateUser($data: CreateUserInput!) {
        createUser(data: $data) {
            id
        }
    }
`
// const query = gql`query Now {
//     books {
//         title
//     }
// }`;