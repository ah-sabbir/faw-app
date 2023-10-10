import prisma from '@/lib/prisma';

const GetUserById = async (id: string) => {
    
    const res = await prisma.User.findUnique({
        where: {
            id: id
        }
    });

    return res;
}

export default GetUserById;
