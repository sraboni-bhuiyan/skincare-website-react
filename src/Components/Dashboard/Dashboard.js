import React, { useEffect, useState } from 'react';
import { Bar, BarChart, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

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
                <h3 className='text-center text-xl font-semibold'>Investment Vs Revenue</h3>
                <BarChart width={500} height={400} data={data}>
                    <Bar dataKey="investment" fill='#43a4e5'></Bar>
                    <Bar dataKey="revenue" fill='#82ca9d'></Bar>
                    <XAxis dataKey="month"></XAxis>
                    <Tooltip></Tooltip>
                    <YAxis dataKey="investment"></YAxis>
                </BarChart>
            </div>
            <div className='border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment Vs Revenue Vs Sell</h3>
                <LineChart width={500} height={400} data={data}>
                <Line dataKey={'investment'}></Line>
                <Line dataKey={'sell'}></Line>
                <Line dataKey={'revenue'}></Line>
                <XAxis dataKey="month"></XAxis>
                <Tooltip></Tooltip>
                <YAxis></YAxis>
                </LineChart>
            </div>
            <div className='mt-20 border py-5'>
                <h3 className='text-center text-xl font-semibold'>Investment Vs Sell</h3>
                <PieChart width={800} height={300}>
                    <Pie data={data} dataKey={'investment'} cx="50%" cy="50%" outerRadius={60} fill="#43a4e5" />
                    <Pie data={data} dataKey={'sell'} cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                    <Tooltip></Tooltip>
                </PieChart>
            </div>
        </div>
    );
};

export default Dashboard;