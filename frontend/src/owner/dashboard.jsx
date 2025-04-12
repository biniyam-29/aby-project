import React from "react";
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Switch } from "../components/ui/switch";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";
import { Home, Settings, Camera, DollarSign, User, Mail } from "lucide-react";

const data = [
  { name: '0', value: 20 },
  { name: '20', value: 40 },
  { name: '40', value: 50 },
  { name: '60', value: 30 },
  { name: '80', value: 70 },
  { name: '100', value: 60 },
  { name: '120', value: 90 },
];

export const Dashboard = () => {
  return (
    <div className="min-h-screen w-screen bg-slate-500 text-white grid grid-cols-5 gap-4">
      <aside className="col-span-1 flex p-5 flex-col gap-4 bg-slate-900 border-white lg:mr-5">
        <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
        <nav className="flex flex-col gap-2">
          <Button variant="ghost" className="justify-start "><Home className="mr-2" />Tool Used</Button>
          <Button variant="ghost" className="justify-start"><User className="mr-2" />Tool Users</Button>
          <Button variant="ghost" className="justify-start"><Camera className="mr-2" />Tool Listings</Button>
          <Button variant="ghost" className="justify-start"><Settings className="mr-2" />Settings</Button>
        </nav>
        <div className="mt-auto">
          <Button variant="ghost" className="justify-start"><Mail className="mr-2" />Contact</Button>
        </div>
      </aside>

      <main className="col-span-4 grid grid-cols-3 p-8 gap-4">
        <Card className=" sm:col-span-1">
          <CardContent className="p-4">Total Users
            <p className="flex items-center justify-center text-lg font-semibold mt-4">1,230</p>
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center col-span-1 sm:col-span-1">
          <CardContent className="p-4">New Users
            <p className="text-lg font-semibold">320</p>
          </CardContent>
        </Card>
        <Card className="flex items-center justify-center col-span-1 sm:col-span-1">
          <CardContent className="p-4">Revenue
            <p className="text-lg font-semibold">$2001</p>
          </CardContent>
        </Card>

        <Card className="flex items-center justify-center col-span-3">
          <CardContent className="flex flex-col items-center justify-center p-4">
            <h2 className="text-xl mb-2 text-center">User Visit Chart</h2>
            <AreaChart width={700} height={400} data={data}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#14b8a6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#14b8a6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" stroke="#ccc" />
              <YAxis stroke="#ccc" />
              <CartesianGrid strokeDasharray="3 3" stroke="#444" />
              <Tooltip />
              <Area type="monotone" dataKey="value" stroke="#14b8a6" fillOpacity={1} fill="url(#colorValue)" />
            </AreaChart>
          </CardContent>
        </Card>

      </main>
    </div>
  );
};

