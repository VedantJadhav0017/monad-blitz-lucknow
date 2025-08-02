"use client"

import React, { useState, useEffect} from 'react';
import Profile from '../../../../components/Profile';
import { FaPencilAlt } from "react-icons/fa";
import { useRouter } from 'next/router';

const UserProfile = () => {
    const router = useRouter();
    const { id } = router.query;

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch(`/api/users/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch user data');
                }
                const data = await response.json();
                setUserData(data);
            } catch (error) {
                console.error("Error fetching user data:", error);
            }
        };

        if (id) {
            fetchUserData();
        }
    }, [id]);

    return (
        <div className='w-full h-screen bg-zinc-900'>
            <div className='w-full h-[35%] bg-zinc-800 hover:bg-zinc-700 flex justify-center items-center'>
                <div className='text-white opacity-70'><FaPencilAlt /></div>
            </div>
            {userData && (
                <Profile username={userData.username} address={userData.address} />
            )}
        </div>
    );
};

export default UserProfile;


