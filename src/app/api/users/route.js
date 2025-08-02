// import { NextResponse } from "next/server";
// import connectToDB from "../../../../utils/database";
// import user from "../../../../models/user";

export const GET = async(request, res) => {
 
    const a ="hello world";
    return new Response(a);
  
    
}

// export const POST=async(req, res)=>{
 
    
//     try {
//       await connectToDB();
      
//       const {username}=await req.json();
        
//       // Create a new user document
//       const newUser = new User({ username });
//       await newUser.save();
//       return new Response(username);
//       // return res.status(201).json({ message: 'User created successfully', user: newUser });
//     } catch (error) {
//       console.error('Error creating user:', error);
//       return res.status(500).json({ message: 'Error creating user' });
//     }
  
  
// }

import connectToDB from '../../../../utils/database';
import User from '../../../../model/user';

export const POST = async (request, response) => {
    try {
        await connectToDB();
      
        // Extract username and address from the request body
        const { username, address } = await request.json();
        
        // Create a new user document with both username and address
        // const newUser = new User({ username, address });
        const userExists = await User.findOne({ address: address });

        // if not, create a new document and save user in MongoDB
        if (!userExists) {
          await User.create({
              username: username,
              address: address
          });
        }
        // await newUser.save();
        
        // Return a success response
        return new Response(JSON.stringify({ message: 'User created successfully'}), { status: 201 });
    } catch (error) {
        console.error('Error creating user:', error);
        // Return an error response
        return new Response(JSON.stringify({ message: 'Error creating user' }), { status: 500 });
    }
};


