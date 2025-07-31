"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";

type FollowContextType = {
  followedUsers: Set<string>;
  isFollowing: (userId: string) => boolean;
  setFollowStatus: (userId: string, status: boolean) => void;
};

const FollowContext = createContext<FollowContextType | undefined>(undefined);

export const FollowProvider = ({ children }: { children: ReactNode }) => {
  const [followedUsers, setFollowedUsers] = useState<Set<string>>(new Set());

  const isFollowing = (userId: string) => {
    return followedUsers.has(userId);
  };

  const setFollowStatus = (userId: string, status: boolean) => {
    setFollowedUsers((prev) => {
      const newSet = new Set(prev);
      if (status) {
        newSet.add(userId);
      } else {
        newSet.delete(userId);
      }
      return newSet;
    });
  };

  return (
    <FollowContext.Provider
      value={{ followedUsers, isFollowing, setFollowStatus }}
    >
      {children}
    </FollowContext.Provider>
  );
};

export const useFollow = () => {
  const context = useContext(FollowContext);
  if (context === undefined) {
    throw new Error("useFollow must be used within a FollowProvider");
  }
  return context;
};
