import React from "react";
import { useForm } from "react-hook-form";

interface FormData {
    name: string;
    email: string;
}

const LogInForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

    const customSubmit = (data: FormData) => {
        console.log(data);
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form onSubmit={handleSubmit(customSubmit)} className="bg-white p-8 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-semibold text-center mb-6">Contact Form</h2>
                
                {/* Name Input */}
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        {...register('name', { required: true })}
                        type="text"
                        id="name"
                        className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.name && errors.name.type === "required" && (
                        <p className="text-red-600 font-bold">Name is Required.</p>
                    )}
                </div>

                {/* Email Input */}
                <div className="mb-6">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                    <input
                        {...register('email', { required: true })}
                        type="email"
                        id="email"
                        className="mt-2 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && errors.email.type === "required" && (
                        <p className="text-red-600 font-bold">Email is Required.</p>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default LogInForm;