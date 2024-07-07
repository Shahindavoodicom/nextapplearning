import { Users } from "@/models/users";

export async function GET(req: Request, res: Response) {
  try {
    const name = await Users.findOne({where:{id:1}})
    return Response.json({ hello: `hello from ${name?.dataValues.lastName}` });
  } catch (error) {
    console.log(error);
  }
}
