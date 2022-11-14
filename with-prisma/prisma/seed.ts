import { Prisma, PrismaClient } from "../generated/client/deno/edge.ts";
import { config } from "https://deno.land/std@0.163.0/dotenv/mod.ts";

const envVars = await config();

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: envVars.DATABASE_URL,
    },
  },
});

const dinosaurData: Prisma.DinosaurCreateInput[] = [
  {
    name: "Aardonyx",
    description: "An early stage in the evolution of sauropods.",
  },
  {
    name: "Abelisaurus",
    description: "Abel's lizard has been reconstructed from a single skull.",
  },
  {
    name: "Acanthopholis",
    description: "No, it's not a city in Greece.",
  },
];

/**
 * Seed the database.
 */

for (const u of dinosaurData) {
  const dinosaur = await prisma.dinosaur.create({
    data: u,
  });
  console.log(`Created dinosaur with id: ${dinosaur.id}`);
}
console.log(`Seeding finished.`);

await prisma.$disconnect();
