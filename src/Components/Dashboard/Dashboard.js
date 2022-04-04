import React, { useEffect, useState } from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];

    return (
        <div className='grid grid-cols-2 gap-5 my-10 mx-5'>
            <div className='border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment, Sell & Revenue</h3>
                <AreaChart
                    width={600}
                    height={400}
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                    >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey={'month'} />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey={'investment'} stackId="1" stroke="#8884d8" fill="#8884d8" />
                    <Area type="monotone" dataKey={'sell'} stackId="1" stroke="#43a4e5" fill="#43a4e5" />
                    <Area type="monotone" dataKey={'revenue'} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                </AreaChart>
            </div>
            <div className='border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment Vs Revenue Vs Sell</h3>
                <LineChart width={600} height={400} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='mt-20 border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment Vs Revenue</h3>
                <BarChart width={600} height={400} data={data}>
                    <Bar dataKey="investment" fill='#43a4e5'></Bar>
                    <Bar dataKey="revenue" fill='#82ca9d'></Bar>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis dataKey="investment"></YAxis>
                </BarChart>
            </div>
            <div className='mt-20 border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment Vs Sell</h3>
                <PieChart width={700} height={400}>
                    <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={80} fill="#43a4e5" />
                    <Pie data={data} dataKey={'sell'} cx="50%" cy="50%" innerRadius={90} outerRadius={120} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
            
        </div>
    );
};

export default Dashboard;