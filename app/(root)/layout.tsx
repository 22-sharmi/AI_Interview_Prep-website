import UserDropdown from "@/components/UserDropdown";
import { getCurrentUser, isAuthenticated} from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

const RootLayout = async({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  const isUserAuthenticated = await isAuthenticated()

  if(!isUserAuthenticated) redirect('/sign-in')
  return (
    <div className="root-layout">
      <nav className="flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.svg" alt="logo" width={38} height={32}/>
        <h2 className="text-primary-100">MockMate</h2>
        </Link>
        {user && <UserDropdown userName={user.name} />}
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
