"use client";

import { useSession } from "@/lib/auth-client";
import Image from "next/image";

const UserCard = () => {
  const { data: session, isLoading } = useSession();
  const user = session?.user;

  if (isLoading) {
    return (
      <div className="p-4 border rounded-xl">
        Loading...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="p-4 border rounded-xl text-gray-500">
        No user logged in
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center items-center gap-4 p-4 border rounded-xl shadow-sm bg-white">

      {/* Avatar */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
        {user.image ? (
          <Image
            src={user.image}
            alt={user.name || "User"}
            width={48}
            height={48}
            className="object-cover"
          />
        ) : (
          <span className="font-bold text-gray-600">
            {user.name?.slice(0, 2).toUpperCase()}
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <h2 className="font-semibold text-lg text-gray-800">
          {user.name}
        </h2>

        <p className="text-sm text-gray-500">
          {user.email}
        </p>
      </div>
    </div>
  );
};

export default UserCard;