"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const MyProfile = () => {

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

  return (
        <Profile
        name="My profile"   
        desc="Welcome to your personal account"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
  )
}

export default MyProfile