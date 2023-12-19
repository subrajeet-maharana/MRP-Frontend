import React from "react";
import mainlogo from "../logo.ico";
export const Footer = () => {
    return (
        <footer class="bg-gray-800">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between pt-24">
                    <a href="" class="flex items-center sm:mb-0 space-x-3 rtl:space-x-reverse">
                        <img src={mainlogo} class="h-10" alt="MRP Logo" />
                        <span class="self-center text-xl font-bold whitespace-nowrap text-white">MRP{' '}
                            <span className='text-red-600 -ml-1'>.</span>{' '}</span>
                    </a>
                    <ul class="flex flex-wrap items-center text-sm text-gray-500 sm:mb-0">
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">About</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline me-4 md:me-6">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-gray-500 text-center">© 2023 <a href="" class="hover:underline">MRP</a>. All Rights Reserved.</span>
            </div>
        </footer>


    );
};