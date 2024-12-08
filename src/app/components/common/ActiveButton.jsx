'use client'
import React from 'react'
import axios from "@/axios/axiosInstance";



function ActiveButton({id , status}) {
    const handleChange = async() => {
        try {
            const formDataObject = new FormData();
            // formDataObject.append("is_active", courseData.name);
            const application_type = {
                name:''
            }
          /*  formDataObject.append("name_bn", courseData.name_bn);*/
            axios
                .post("dos/application_types", formDataObject, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    if (response.status === 200) {
                        toast.success("category Created Successfully");
                        router.push("/user/dos/admin/questionbank/category");
                        router.refresh();
                    }
                })
                .catch((err) => {
                    console.log(err);
                    toast.error("Something went wrong");
                });

        } catch (error) {
            console.log(error)
        }
    }
  return (
    <label class="inline-flex items-center mb-5 cursor-pointer">
    <input type="checkbox" value="true" class="sr-only peer" onChange={handleChange} />
    <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    <span class="ms-3 text-sm font-medium text-gray-900">{status}</span>
  </label>
  )
}

export default ActiveButton