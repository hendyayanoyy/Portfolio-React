import React from 'react'
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "../components/tech-card";
  

function Technology() {
  return (
    <>
    <div className='text-2xl mb-20'>Here are a few technologies
        that I've been used recently :
        </div>
        
        {/* Card Javascript */}
        <div className='flex justify-center mx-10'>
        <div className='flex flex-row justify-items-center items-center mx-2'>
            <HoverCard>
                <HoverCardTrigger className='border border-rounded border-gray-50 p-2 cursor-pointer hover:bg-gray-600'>Javascript</HoverCardTrigger>
                    <HoverCardContent className='border border-gray-50 bg-slate-700'>
                        JavaScript is a programming language that allows developers to create interactive 
                        and dynamic web pages. 
                        It is a core technology of the World Wide Web, alongside HTML and CSS.
                </HoverCardContent>
            </HoverCard>
        </div>

        {/* Card PHP */}
        <div className='flex justify-items-center items-center mx-2'>
            <HoverCard>
                <HoverCardTrigger className='border border-rounded border-gray-50 p-2 cursor-pointer hover:bg-gray-600'>PHP</HoverCardTrigger>
                    <HoverCardContent className='border border-gray-50 bg-slate-700'>
                    PHP, Hypertext Preprocessor, is a widely-used open-source scripting language suited for web development 
                    and back-end development. It is used to create dynamic websites and embedded within HTML.
                </HoverCardContent>
            </HoverCard>
        </div>

        {/* Card React */}
        <div className='flex justify-items-center items-center mx-2'>
            <HoverCard>
                <HoverCardTrigger className='border border-rounded border-gray-50 p-2 cursor-pointer hover:bg-gray-600'>React</HoverCardTrigger>
                    <HoverCardContent className='border border-gray-50 bg-slate-700'>
                    React was developed by Facebook and released as an open-source project. It allows developers to create interactive UI components efficiently, 
                    and it is using a declarative syntax that enhances code readability and maintainability.
                </HoverCardContent>
            </HoverCard>
        </div>

                {/* Card Mysql */}
                <div className='flex justify-items-center items-center mx-2'>
            <HoverCard>
                <HoverCardTrigger className='border border-rounded border-gray-50 p-2 cursor-pointer hover:bg-gray-600'>Mysql</HoverCardTrigger>
                    <HoverCardContent className='border border-gray-50 bg-slate-700'>
                    MySQL is one of the most popular database systems in the world, known for its reliability, performance, and ease of use. 
                    It is commonly used in web applications to store and manage data.
                </HoverCardContent>
            </HoverCard>
        </div>
        </div>

    </>
  )
}

export default Technology