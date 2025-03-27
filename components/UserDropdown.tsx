"use client";

import { signOut } from "@/lib/actions/auth.action";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const UserHoverCard = ({ userName }: { userName: string }) => {
  const handleSignOut = async () => {
    await signOut();
    window.location.href = "/sign-in";
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="px-4 py-2">
          {userName}
        </Button>
      </HoverCardTrigger>

      <HoverCardContent
        side="right"
        align="center"
        className="p-0 m-0 bg-transparent border-none shadow-none"
      >
        <Button
          variant="link"
          className="text-red-500 hover:text-red-700 w-96 h-auto p-0 m-0"
          onClick={handleSignOut}
        >
          Sign Out
        </Button>
      </HoverCardContent>
    </HoverCard>
  );
};

export default UserHoverCard;
