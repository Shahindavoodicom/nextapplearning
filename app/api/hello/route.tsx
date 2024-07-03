let name: string;

export async function POST(req: Request, res: Response) {
  try {
    const data = await req.json();
    name = data.name;
    if (name == "shahin") {
      return Response.json({ hello: "operation was ok" }, { status: 200 });
    }

    return Response.json({ hello: "operation  was ok" }, { status: 404 });
  } catch (error) {
    console.log(error);
  }
}

export function GET(req: Request, res: Response) {
  try {
    return Response.json({ hello: `hello from ${name}` });
  } catch (error) {
    console.log(error);
  }
}
