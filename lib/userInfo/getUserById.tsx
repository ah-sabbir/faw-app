import clientPrisma from '@/lib/prisma';

const GetUserById = async (id: string) => {
    if (!id) return null;
    const res = await clientPrisma.User.findUnique({
        where: {
            id: id
        }
    });

    return res;
}

export default GetUserById;
