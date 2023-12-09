import database from '@/lib/prisma';

const GetUserById = async (id: string) => {
    if (!id) return null;
    const {hashedPassword, ...res} = await database.User.findUnique({
        where: {
            id: id
        }
    });

    console.log("GetUserById: ",res);

    return res;
}

export default GetUserById;
