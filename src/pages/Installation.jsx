import { useEffect, useState } from "react";
import { getStoreApps } from "../Hook/Add";
import icon from '../assets/icon-downloads.png'
import reatin from '../assets/icon-ratings.png'


import { toast } from "react-toastify";

const Installation = () => {
    const [apps, setapps] = useState([])
    const [sortApps, setSortapps] = useState(`none`)

    useEffect(() => {

        const data = getStoreApps()
        setapps(data)
    }, [])


    const rempveHandaler = (app) => {

        toast('Apps id unsiall')



        const filtered = apps.filter((a) => a.id !== app.id);

        localStorage.setItem('install', JSON.stringify(filtered));
        setapps(filtered)

    }

    const sortItem = () => {

        if (sortApps === 'downloads-asc') {
            return [...apps].sort((a, b) => a.downloads - b.downloads);
        } else if (sortApps === 'size-dsc') {
            return [...apps].sort((a, b) => b.size - a.size)
        } else {
            return apps
        }
    }


    return (
        <div className=" container mx-auto">
            <div className="text-center mt-10 mb-9   ">
                <h1 className="text-3xl font-bold">Your Installed Apps</h1>
                <p className="text-gray-400">Explore All Trending Apps on the Market developed by us</p>
            </div>
            <div className="flex justify-between"><h1>{apps.length} <span className="font-bold">Apps Found</span></h1>
                <div>


                    <select value={sortApps} onChange={e => setSortapps(e.target.value)}>
                        <option value="none">Sort size</option>
                        <option value="downloads-asc"> Low-&gt;High</option>
                        <option value="size-dsc"> High-&gt;Low</option>
                    </select>

                </div>
            </div>
            <div className=" space-y-3 mt-10 mb-6">
                {
                    sortItem().map(apps => <div className="flex gap-3.5 bg-white justify-between">

                        <div className="flex gap-3">

                            <div> <img src={apps.image} className="h-10" alt="" /></div>
                            <div>

                                <h1>{apps.title}</h1>
                                <div className="flex gap-5">
                                    <span className="flex items-center gap-1.5 text-green-400"> <p><img src={icon} className="h-3" alt="" /></p>
                                        <span className="text-sm">{apps.downloads}</span></span>
                                    <span className="flex items-center gap-1.5 text-amber-500"> <p><img src={reatin} className="h-3" alt="" /></p>
                                        <span className="text-sm">{apps.ratingAvg
                                        }</span></span>
                                    <span className="text-gray-400">{apps.size
                                    }MB</span>


                                </div>
                            </div>

                        </div>
                        <button onClick={() => rempveHandaler(apps)} className="p-2.5 bg-green-400 rounded-sm text-white">Uninstall</button>
                    </div>)
                }
            </div>
        </div>
    );
};

export default Installation;
