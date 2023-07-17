import {prisma} from "../../../backend/db"

type OAuthUser = {
    id: string
    name: string
    email: string
    emailVerified?: string
    image?: string | null
    createdAt?: string
    updatedAt?: string
}

export async function addUser(user: OAuthUser) {
    return prisma.user.create(
        {
            data: {
                email: user.email,
                name: user.name,
                image: user.image,
                id: user.id,
                password: 'test',
            }
        }
    )
}