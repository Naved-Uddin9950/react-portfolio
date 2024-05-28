import React from 'react'

function Repo({
    name,
    desc,
    topics
}) {
    return (
        <div className='border rounded-xl py-2 px-4 shadow-lg'>
            <h1 className='font-bold text-2xl text-center'>{name}</h1>
            <p>{desc}</p>
            <ul className='flex flex-row flex-wrap gap-2 pt-3'>
                {
                    // Check if topics is a string
                    typeof topics === 'string' ? (
                        <li className='border rounded py-1 px-3 shadow-md'>{topics}</li>
                    ) : (
                        // Check if topics is null
                        topics == null ? (
                            <li className='font-semibold text-md'>No Tags</li>
                        ) : (
                            // Check if topics is an array
                            Array.isArray(topics) && topics.length > 0 ? (
                                topics.map((item, index) => (
                                    <li key={index} className='border rounded py-1 px-3 shadow-md'>{item}</li>
                                ))
                            ) : (
                                <li>NULL</li>
                            )
                        )
                    )
                }
            </ul>
        </div>
    );
}

export default Repo;