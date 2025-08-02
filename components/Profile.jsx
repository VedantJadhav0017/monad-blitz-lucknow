import React from 'react'
import { FaEthereum } from "react-icons/fa";
import { FiAlignCenter } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Profile = ({username, address}) => {
    return (
        <div className='w-full'>
            <div className='w-44 h-44 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% rounded-full translate-x-24 -translate-y-36 absolute border-[6px] border-black'></div>
            <div className='w-full flex-col justify-start items-center pt-8'>
                <h1 className='text-white text-4xl font-satoshi px-24 py-8'>{username}</h1>
                <div className='flex px-24 items-center justify-start gap-2'>
                    <FaEthereum className='text-white w-5 h-5 opacity-60' />
                    <p className='text-white text-md'>{address}</p>
                    <p className='text-white opacity-70 px-4 text-sm'>Joined March 2024</p>
                </div>
                <div className='w-full flex justify-start items-center gap-6 pl-20 pt-10 text-white'>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Collected</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Offersmade</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Deals</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Created</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Favorited</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>Activity</p></div>
                    <div className='w-fit cursor-pointer hover:opacity-100 rounded-lg pl-4 pr-4 opacity-70 text-lg'><p className='logo_text'>More</p></div>
                </div>
            </div>
            <div className='w-full flex justify-center items-center pt-8'>
                <div className='w-[91%] h-[2px] bg-zinc-800 align-center'></div>
            </div>
            <div className='w-full flex justify-start items-center py-4 px-24 gap-8'>
                <div className=''>
                <FiAlignCenter className='text-white w-7 h-7 cursor-pointer' />
                </div>
                <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>
                    Status < MdOutlineKeyboardArrowDown className='w-6 h-6 cursor-pointer' />
                </div>
                <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>
                    Chains < MdOutlineKeyboardArrowDown className='w-6 h-6 cursor-pointer' />
                </div>
                <input type="text" placeholder="Search..." required className="search_input_zinc peer mr-24" />
                <div className='px-4 py-2 w-fit border-[2px] border-zinc-700 hover:border-zinc-500 text-white rounded-xl flex items-center gap-2 text-lg'>
                    Recently received < MdOutlineKeyboardArrowDown className='w-6 h-6' />
                </div>
            </div>
        </div>
    )
}

export default Profile;