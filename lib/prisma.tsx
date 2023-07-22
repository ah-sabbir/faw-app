import { PrismaClient } from "@prisma/client";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
}

const prisma:any =
  global.prisma ??
  new PrismaClient({
    // log: ["query"],
  });

if (process.env.NODE_ENV !== "production") global.prisma = prisma;

export default prisma;



// import { PrismaClient } from "@prisma/client"

// declare global {
//   // eslint-disable-next-line no-var
//   var cachedPrisma: PrismaClient
// }

// let prisma: PrismaClient
// if (process.env.NODE_ENV === "production") {
//   prisma = new PrismaClient()
// } else {
//   if (!global.cachedPrisma) {
//     global.cachedPrisma = new PrismaClient()
//   }
//   prisma = global.cachedPrisma
// }

// export const db = prisma