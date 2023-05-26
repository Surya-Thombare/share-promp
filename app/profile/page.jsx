"use client"

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react"
import { useRouter } from "next/navigation";

import Profile from "@components/profile";

const MyProfile = () => {

  const { data: session } = useSession()
  const router = useRouter()
  const [posts, setPosts] = useState([])

    const handleEdit = (post) => {
      router.push(`/update-prompt?id=${post._id}`)
    }

    const handleDelete = (post) => {

    }

    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();
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