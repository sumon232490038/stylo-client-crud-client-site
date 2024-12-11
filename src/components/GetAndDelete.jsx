import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const GetAndDelete = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  //   console.log(users);
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/users/${id}`, {
      method: "delete",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Deleted successfull");
          const newUser = users.filter((user) => user._id !== id);
          setUsers(newUser);
        }
      });
  };
  return (
    <div className="mx-auto text-center">
      <h1 className="font-bold  text-5xl mb-10">
        Stylo Data Was showing--{users.length}
      </h1>

      <div>
        {users.map((user) => (
          <p key={user._id} className="mb-5">
            {user.name}--{user.email}--{" "}
            <span>
              <Link
                to={`/getanddelete/${user._id}`}
                className="btn btn-neutral"
              >
                Update
              </Link>
            </span>
            --
            <span>
              <button
                onClick={() => handleDelete(user._id)}
                className="btn btn-neutral"
              >
                X
              </button>
            </span>
          </p>
        ))}
      </div>
    </div>
  );
};

export default GetAndDelete;
