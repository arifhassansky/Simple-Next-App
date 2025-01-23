"use client";
import {
  LoginLink,
  LogoutLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavbarClient = ({ user }) => {
  const pathname = usePathname();
  return (
    <div className="bg-purple-400 py-3">
      <div className="md:w-10/12 mx-auto flex justify-between px-4 md:px-0">
        <div className="text-xl font-bold">
          Simple <span className="text-blue-700">Next App</span>
        </div>
        <div className="space-x-2 md:space-x-4 font-medium">
          <Link href="/" className={`${pathname == "/" && "text-blue-600"}`}>
            Home
          </Link>

          {user ? (
            <>
              <Link
                href="/profile"
                className={`${pathname == "/profile" && "text-blue-600"}`}
              >
                Profile
              </Link>
              <LogoutLink>Log out</LogoutLink>
            </>
          ) : (
            <>
              <LoginLink>Login</LoginLink>
              <RegisterLink>Sign up</RegisterLink>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavbarClient;
