import React from 'react';
import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { MessageCircle, Tag, Check, DollarSign, Coins, PiggyBank, TrendingUp, TrendingDown } from "lucide-react";

export default function Dashboard() {
    const data = [
        {
            title: "Consultations",
            value: 24,
            trend: "15% increase",
            trendColor: "text-green-500",
            icon: <MessageCircle size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingUp size={18} className="text-green-500" /> // Icon for trend
        },
        {
            title: "Orders Placed",
            value: 12,
            trend: "15% decrease",
            trendColor: "text-red-500",
            icon: <Tag size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingDown size={18} className="text-red-500" /> // Icon for trend
        },
        {
            title: "Conversion",
            value: "50%",
            trend: "15% decrease",
            trendColor: "text-red-500",
            icon: <Check size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingDown size={18} className="text-red-500" /> // Icon for trend
        },
        {
            title: "Total Sales Value",
            value: "$2,400",
            trend: "15% increase",
            trendColor: "text-green-500",
            icon: <DollarSign size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingUp size={18} className="text-green-500" /> // Icon for trend
        },
        {
            title: "Avg Order Value",
            value: "$240",
            trend: "15% increase",
            trendColor: "text-green-500",
            icon: <Coins size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingUp size={18} className="text-green-500" /> // Icon for trend
        },
        {
            title: "Commission Paid",
            value: "$240",
            trend: "15% increase",
            trendColor: "text-green-500",
            icon: <PiggyBank size={16} className="text-[#667085]" />, // Icon for title
            trendIcon: <TrendingUp size={18} className="text-green-500" /> // Icon for trend
        },
    ];

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold mb-4">At a Glance</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {data.map((item, index) => (
                    <Card key={index} className="shadow-lg">
                        <CardHeader className="pb-2">
                            <div className="flex items-center space-x-2">
                                {item.icon}
                                <CardTitle className="uppercase font-semibold text-[#667085] text-sm">{item.title}</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="text-3xl font-bold pb-1">{item.value}</div>
                            <div className={`text-sm flex items-center space-x-2 ${item.trendColor}`}>
                                {item.trendIcon}
                                <span>{item.trend}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
}
