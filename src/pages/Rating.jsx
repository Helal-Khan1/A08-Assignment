


import { Layout } from 'lucide-react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const Rating = ({ newData }) => {
    const data = newData?.ratings || [];

    return (
        <div>
            <div className='mb-7'>
                <ResponsiveContainer width="100%" height={350}>
                    <BarChart width={500} height={500} data={data}
                        layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="count"
                            type='number'></XAxis>
                        <YAxis
                            dataKey="name"
                            type='category' ></YAxis>
                        <Tooltip
                            cursor={{ fill: 'rgba(0, 0, 0, 0.1)' }} // Optional: adds a slight background to the hovered bar
                        />
                        <Legend />
                        <Bar
                            dataKey="count"
                            fill='#ff8c00'
                            name="Reviews"  ></Bar>


                    </BarChart>
                </ResponsiveContainer>
            </div>
            <p className='border-1 w-full border-gray-400'></p>
            <div className='mb-7'>
                <h1 className='mt-10 font-bold'>discription</h1>

                <p>{newData.description}</p>
            </div>

        </div>
    );
};

export default Rating;