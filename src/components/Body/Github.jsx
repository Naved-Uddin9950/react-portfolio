import React from 'react';
import { Repo } from '../../components';
import { useLoaderData } from 'react-router-dom';

async function getGithub() {
    const dataBlob = await fetch('https://api.github.com/users/naved-uddin9950');
    const data = await dataBlob.json();

    const reposBlob = await fetch('https://api.github.com/users/naved-uddin9950/repos');
    const repos = await reposBlob.json();

    return [data, repos];
}

function Github() {

    const [data, repos] = useLoaderData();
    console.log(data);
    console.log(repos);

    return (
        <div className='p-4'>
            <h1 className='font-bold text-2xl border rounded text-center py-2 mb-6 bg-slate-800 text-white border-transparent'>Github</h1>

            {/* GitHub Profile */}
            <div>
                {/* Personal Data */}
                <div className='flex flex-row flex-wrap items-center gap-8'>
                    <img
                        src={data.avatar_url}
                        alt="profile_image"
                        className='w-60 border rounded-full border-transparent'
                    />

                    <ul>
                        <li className='font-bold text-2xl'>{data.login}</li>
                        <li className='font-semibold text-md'>Public Repos : {data.public_repos}</li>
                        <li>{data.bio}</li>
                        <li className='font-semibold text-md'>{data.location}</li>
                        <li className='font-semibold text-md'>{data.twitter_username}</li>
                    </ul>
                </div>

                {/* Repositories */}
                <div className='grid grid-cols-3 pt-9 gap-8'>
                    {
                        repos.map((item) => (
                            <Repo
                                key={item.name}
                                name={item.name}
                                desc={item.description ? item.description : 'NO DESCRIPTION HERE'}
                                topics={item.topics && item.topics.length > 0 ? item.topics : item.language}
                            />
                        ))
                    }
                </div>

            </div>

        </div>
    )
}

export default Github;
export { getGithub };