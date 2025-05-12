import prisma from "../src/utils/prisma"

async function main() {
    // Seed Venues
    const venue1 = await prisma.venue.create({
        data: {
            name: "Convention Center",
            address: "123 Main St",
            city: "New York",
            state: "NY",
            zip: "10001",
            googlePlaceId: "place1"
        }
    });

    const venue2 = await prisma.venue.create({
        data: {
            name: "Music Hall",
            address: "456 Broadway",
            city: "New York",
            state: "NY",
            zip: "10002",
            googlePlaceId: "place2"
        }
    });

    // Seed Events
    const event1 = await prisma.event.create({
        data: {
            title: "Tech Conference",
            description: "Annual tech conference",
            startDate: new Date("2024-07-01T09:00:00Z"),
            endDate: new Date("2024-07-03T17:00:00Z"),
            EventVenue: {
                create: {
                    venueId: venue1.id
                }
            }
        }
    });

    const event2 = await prisma.event.create({
        data: {
            title: "Music Festival",
            description: "Summer music festival",
            startDate: new Date("2024-08-01T12:00:00Z"),
            endDate: new Date("2024-08-03T22:00:00Z"),
            EventVenue: {
                create: {
                    venueId: venue2.id
                }
            }
        }
    });

    console.log("Database seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    }); 