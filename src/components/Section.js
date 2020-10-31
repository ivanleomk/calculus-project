import React from 'react'

const Section = ({header,subtitle}) => {
    return (
        <>
            <h3 class="mt-2 text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
                {header}
            </h3>
            <p class="mt-4 text-center text-base leading-6 text-indigo-600 font-semibold tracking-wide uppercase">{subtitle}</p>
            
        </>
    )
}

export default Section
