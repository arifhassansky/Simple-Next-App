import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import NavbarClient from "./NavbarClient";
import { redirect } from "next/navigation";

const Navbar = async () => {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  return <NavbarClient user={user} />;
};

export default Navbar;
