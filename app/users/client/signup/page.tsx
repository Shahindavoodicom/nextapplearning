"use client";

import { useState, useEffect } from "react";
import axios from "axios";

export default function Page() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false)

  const [data, setData] = useState([]);

  function createUser() {
    setLoading(true)
    if (!name || !lastName || !email) {
      setError("you have to fill all inputs ");
    } else {
      axios
        .post("/api/user/create", {
          name,
          lastName,
          email,
        })
        .then((res) => {
          if (res.data.operation === "done") {
            axios.get("/api/user/create").then((res) => {
              setData(res.data);
            });
            setLoading(false)
          }
          setName("");
          setLastName("");
          setEmail("");
          setError('')
        });
    }
  }

  function deleteUser(id: any) {
    setLoading(true)
    axios.delete(`/api/user/create?id=${id}`).then((res) => {
      if (res.data.operation === "done") {
        axios.get("/api/user/create").then((res) => {
          setData(res.data);
        });
        setLoading(false)
      }
    });
  }

  useEffect(() => {
    axios.get("/api/user/create").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div>
      <div className="flex justify-center items-center gap-2">
        <div className="flex flex-col gap-2">
          <input
            className="border-2 p-2"
            placeholder="name"
            name="name"
            id="name"
            onChange={(e) => {
              setName(e.target.value);
            }}
            value={name}
          />
          <input
            className="border-2 p-2"
            placeholder="lastName"
            name="lastName"
            id="lastName"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
          <input
            className="border-2 p-2"
            placeholder="email"
            name="email"
            id="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
          <button
            className="border-2 p-2 bg-green-700 p-2 rounded-lg text-white cursor-pointer"
            onClick={createUser}
          >
            {loading ? 'loading' :'create user'}
          </button>
        </div>
      </div>
      <div className="flex justify-center text-red-700">{error}</div>
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
            {data.map((user: any, index) => {
              return (
                <tr key={index}>
                  <td>{user.name}</td>
                  <td>{user.lastName}</td>
                  <td>{user.email}</td>
                  <td>
                    <button
                      type="submit"
                      className="bg-red-600 text-white p-2 rounded-lg cursor-pointer"
                      value="delete user"
                      onClick={() => {
                        deleteUser(user.id);
                      }}
                    >
                      delete user
                    </button>
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
