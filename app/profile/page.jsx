"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const MyProfile = () => {

  const { data: session } = useSession()
  console.log(session);
  
  const [posts, setPosts] = useState([])

    const handleEdit = () => {

    }

    const handleDelete = () => {

    }

    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
      console.log(data);
      setPosts(data)
    }
  
    useEffect(() => {
      if (session?.user.id) fetchPosts()
    }, [session])
  

  return (
        <Profile
        name="My profile"   
        desc="Welcome to your personal account"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        />
  )
}

export default MyProfile