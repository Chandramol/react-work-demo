import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageCircle, SignalHigh, TrendingUp } from "lucide-react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "This Week", desktop: 186, mobile: 80 },
  { month: "Last Week", desktop: 305, mobile: 200 }
];

const chartDataConsultations = [
  { month: "Mon", desktop: 186, mobile: 80 },
  { month: "Tue", desktop: 305, mobile: 200 },
  { month: "Wed", desktop: 237, mobile: 120 },
  { month: "Thu", desktop: 73, mobile: 190 },
  { month: "Fri", desktop: 209, mobile: 130 },
  { month: "Sat", desktop: 214, mobile: 140 },
  { month: "Sun", desktop: 214, mobile: 140 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#2563eb",
  },
  mobile: {
    label: "Mobile",
    color: "#60a5fa",
  },
};

export default function Insights() {
  return (
    <div className="container mx-auto p-4 md:p-6">
      <h1 className="text-2xl font-bold mb-6">Insights</h1>
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Consultations Section */}
        <Card className="w-full lg:w-7/12 xl:w-3/5 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 uppercase text-sm font-semibold text-[#667085]">
              <MessageCircle size={16} className="text-[#667085]" /> Consultations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer>
                <BarChart data={chartDataConsultations}>
                  <CartesianGrid vertical={false} />
                  <XAxis
                    dataKey="month"
                    tickLine={false}
                    tickMargin={10}
                    axisLine={false}
                    tickFormatter={(value) => value.slice(0, 3)}
                  />
                  <Tooltip />
                  <Legend />
                  <Bar
                    dataKey="desktop"
                    fill={chartConfig.desktop.color}
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="mobile"
                    fill={chartConfig.mobile.color}
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* VS Past Period Section */}
        <Card className="w-full lg:w-3/12 xl:w-1/5 ">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 uppercase text-sm font-semibold text-[#667085]">
              <SignalHigh /> Vs Past Period
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-64">
              <ResponsiveContainer>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <Tooltip />
                  <Bar dataKey="desktop" fill={chartConfig.desktop.color} />
                  <Bar dataKey="mobile" fill={chartConfig.mobile.color} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Forecasts Section */}
        <Card className="w-full lg:w-3/12 xl:w-1/5  bg-gradient-to-br from-green-400 to-teal-500 text-white shadow">
          <CardContent className="p-4 md:p-6">
            <h2 className="flex items-center gap-2 uppercase text-sm font-semibold">
              <MessageCircle size={16} className="text-[#ffffff]" />
              Forecasts
            </h2>
            <div className="mt-4 space-y-8">
              <div className="flex items-center space-x-2">
                <p className="font-normal text-sm md:text-base lg:text-lg">
                  <span className="pb-4 font-medium text-2xl md:text-5xl lg:text-3xl flex justify-start lg:justify-between items-start gap-4">
                    +15% <TrendingUp size={30} />
                  </span>
                  forecasted increase in your sales closed by the end of the current month
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <p className="font-normal text-sm md:text-base lg:text-lg">
                  <span className="pb-4 font-medium text-2xl md:text-5xl lg:text-3xl flex justify-start lg:justify-between items-start gap-4">
                    +20% <TrendingUp size={30} />
                  </span>
                  forecasted increase in consultations by the end of the current month
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  );
}
