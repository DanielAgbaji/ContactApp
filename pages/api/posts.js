import prisma from "../../lib/prisma";

export default async function handle(request, response) {
  const result = await prisma.contact.findMany();
  response.json(result);
}
