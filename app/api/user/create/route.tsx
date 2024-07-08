import { Users } from "@/models/users";
import { NextRequest } from "next/server";
export async function POST(req: Request, res: Response) {
  const data = await req.json();
  const name = data.name;
  const lastName = data.lastName;
  const email = data.email;

  await Users.create({ name, lastName, email });

  return Response.json({ operation: "done" });
}

export async function GET(req: Request, res: Response) {
  const users = await Users.findAll();
  return Response.json(users);
}

export async function DELETE(req: NextRequest, res: Response) {
  const id = req.nextUrl.searchParams.get("id");
  console.log(id);

  Users.destroy({ where: { id } });
  return Response.json({ operation: "done" });
}
