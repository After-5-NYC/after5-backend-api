import prisma from "@/utils/prisma"

export const listEvents = async (page: number, pageSize: number) => {
    const skip = (page - 1) * pageSize;
    const events = await prisma.event.findMany({
        skip,
        take: pageSize,
        orderBy: { createdAt: "desc" }
    });
    return events
}