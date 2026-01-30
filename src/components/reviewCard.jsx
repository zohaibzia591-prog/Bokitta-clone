import React from 'react';
import { StarIcon } from '@heroicons/react/24/solid';


function ReviewCard({ title, text, product }) {
  return (
    <>
        <div className="max-w-xs space-y-5">

            {/* stars */}
            <div className="flex gap-1 text-[#c53b6b] text-lg">
                <div className='flex'>
                    <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                    <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                    <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                    <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                    <span><StarIcon className="w-5 h-6 size-4 text-[#c53b6b]"/></span>
                </div>
            </div>

            {/* title */}
            {title && (
                <h4 className="font-semibold text-lg">
                {title}
                </h4>
            )}

            {/* review text */}
            <p className="text-gray-800 leading-relaxed text-base">
                {text}
            </p>

            {/* user info */}
            <div className="pt-6">
                <p className="font-semibold">Anonymous</p>
                <p className="text-gray-600 text-sm truncate">
                {product}
                </p>
            </div>

            </div>
    </>
  )
}

export default ReviewCard