import { Users } from "@/models/users";
import { revalidatePath } from "next/cache";

export default async function Page() {
  async function createUserAction(FormData: FormData) {
    "use server";
    const name = FormData.get("name");
    const lastName = FormData.get("lastName");
    const email = FormData.get("email");

    if (!name || !lastName || !email) {
      return;
    }

    await Users.create({
      name,
      lastName,
      email,
    });
    revalidatePath("/users/signup");
  }

  async function deleteUserAction(FormData: FormData) {
    "use server";
    const id = FormData.get("id");
    console.log(id);
    
    if (!id) {
      return;
    }

    Users.destroy({ where: { id } });
    revalidatePath("/users/signup")
  }

  const users = await Users.findAll();
  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <form className="flex flex-col gap-2" action={createUserAction}>
          <input
            className="border-2 p-2"
            placeholder="name"
            name="name"
            id="name"
          />
          <input
            className="border-2 p-2"
            placeholder="lastName"
            name="lastName"
            id="lastName"
          />
          <input
            className="border-2 p-2"
            placeholder="email"
            name="email"
            id="email"
          />
          <input
            className="border-2 p-2 bg-green-700 p-2 rounded-lg text-white cursor-pointer"
            type="submit"
          />
        </form>
      </div>
      <div className="flex justify-center">
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>last name</th>
              <th>email</th>
              <th>action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: any, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <form action={deleteUserAction}>
                      <input name='id' value={user.id} className="hidden" />
                      <input type="submit"  className="bg-red-600 text-white p-2 rounded-lg cursor-pointer" value='delete user'/>
                    </form>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
