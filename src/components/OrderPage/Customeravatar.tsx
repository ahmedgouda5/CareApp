import React from "react";

interface CustomerAvatarProps {
  initials: string;
  avatarColor: string;
  name: string;
}

const CustomerAvatar: React.FC<CustomerAvatarProps> = ({
  initials,
  avatarColor,
  name,
}) => {
  return (
    <div className="flex items-center gap-3 min-w-0">
      <div
        className={`w-9 h-9 shrink-0 rounded-full flex items-center justify-center text-sm font-bold ${avatarColor}`}
      >
        {initials}
      </div>
      <span className="text-sm font-medium text-gray-800 dark:text-gray-100 truncate">
        {name}
      </span>
    </div>
  );
};

export default CustomerAvatar;
