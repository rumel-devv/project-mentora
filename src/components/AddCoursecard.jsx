'use client'
import { useSession } from '@/lib/auth-client';
import React from 'react';
import toast from 'react-hot-toast';

const AddCoursecard = ({course}) => {
      const { data: session, isLoading } = useSession();
      const user = session?.user;
    // console.log(user);
    const {_id,title,description,thumbnail,duration,instructor,
category,price} = course 
console.log(price);
    const handleAddCourse = async () => {
         const addedData = {
             userId : user?.id,
             userName: user?.name,
             userEmail: user?.email,
             userImage:user?.image,
             title,
             description,
             title,
             thumbnail,category,instructor,duration,price
         }
        //  console.log(addedData);
        const res = await fetch(`http://localhost:5000/booking`,{
            method:"POST",
            headers:{
                "content-type": 'application/json'
            },
            body: JSON.stringify(addedData)
        }
        )
        const data = await res.json()
        toast.success(`You Booked a course on ${title}`)
        // console.log('aded data',data);
    }

    return (
        <div>
             <div className="h-fit sticky top-24 self-start">

          <div className="bg-white rounded-3xl shadow-xl p-6 border border-slate-100">

            {/* PRICE */}
            {course?.price && (
              <>
                <h2 className="text-4xl font-bold text-slate-800">
                  ${course?.price}
                </h2>

                <p className="text-slate-500 mt-2 text-md">
             Lifetime access included
                </p>
              </>
            )}

            {/* BUTTONS */}
            <div className="mt-5 flex flex-col gap-3">

              <button onClick={handleAddCourse} className="w-full bg-blue-600 hover:bg-blue-700 transition-all cursor-pointer duration-300 text-white py-3.5 rounded-2xl font-semibold shadow-md">
                Book a Sit
              </button>

              <button className="w-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all duration-300 py-3.5 rounded-2xl font-semibold">
                Add to Wishlist
              </button>

            </div>

            {/* DETAILS */}
            <div className="mt-6 border-t pt-5 space-y-4 text-sm text-slate-700">

              {course?.instructor && (
                <div className="flex justify-between gap-4">
                  <span>Instructor</span>

                  <span className="font-semibold text-right">
                    {course?.instructor}
                  </span>
                </div>
              )}

              {course?.duration && (
                <div className="flex justify-between gap-4">
                  <span>Duration</span>

                  <span className="font-semibold">
                    {course?.duration}
                  </span>
                </div>
              )}

              {course?.category && (
                <div className="flex justify-between gap-4">
                  <span>Category</span>

                  <span className="font-semibold">
                    {course?.category}
                  </span>
                </div>
              )}

            </div>

          </div>
        </div>
        </div>
    );
};

export default AddCoursecard;