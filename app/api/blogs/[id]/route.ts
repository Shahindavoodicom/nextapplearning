import { deleteBlogAPI } from "@/lib/api";

export async function DELETE(request: Request, { params }: { params: any }) {
  const { id } = params;
  deleteBlogAPI(Number(id));
  return new Response(null, { status: 204 });
}
