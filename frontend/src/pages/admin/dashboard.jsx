import { Card, CardContent } from "../../components/ui/card";
import { SideBar } from "./common/side-bar";
import { XAxis, YAxis, CartesianGrid, Tooltip, Area, AreaChart } from "recharts";


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
      <SideBar />

      <main className="col-span-4 grid grid-cols-3 p-8 gap-4">
        <Card className=" sm:col-span-1">
          <CardContent className="p-4">Total Users
            <p className="flex items-center justify-center font-semibold mt-4 text-4xl">1,230</p>
          </CardContent>
        </Card>
        <Card className="col-span-1 sm:col-span-1">
          <CardContent className="p-4">New Users
            <p className="font-semibold flex items-center justify-center mt-4 text-4xl">320</p>
          </CardContent>
        </Card>
        <Card className="col-span-1 sm:col-span-1">
          <CardContent className="p-4">Revenue
            <p className="text-4xl font-semibold flex items-center justify-center mt-4">$2001</p>
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

