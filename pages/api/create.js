import prisma from "../../lib/prisma";

export default async function handle(request, response) {
  const { firstName, lastName, avatar, email } = request.body;

  const result = await prisma.contact.create({
    data: {
      firstName: firstName,
      lastName: lastName,
      avatar: avatar,
      email: email,
    },
  });
  response.json(result);
}
