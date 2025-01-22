import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Image from "next/image";

const ProfilePage = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return (
    <div className="h-[80vh]">
      <h3 className="text-green-600 font-bold text-center mt-8 text-2xl">
        Welcome {user?.given_name} {user?.family_name}!
      </h3>
      <div className="w-3/4 mx-auto rounded-md flex justify-around mt-12 items-center bg-gray-100 py-12">
        <div className="space-y-2">
          <h2 className="text-lg">
            <span className="font-bold"> Name:</span> {user?.given_name} {""}
            {user?.family_name}
          </h2>
          <h3 className="text-lg">
            <span className="font-bold"> Email:</span> {user?.email}
          </h3>
        </div>
        <div>
          <img
            className="w-48 rounded-lg"
            src={user?.picture}
            alt="User Image"
          />
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
