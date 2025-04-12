import { Home, Settings, User, Mail } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { Link } from "react-router-dom";
import { ProfileCard } from '../../../components/ProfileCard';

export const SideBar = () => {
  return (
    <aside className="col-span-1 flex p-5 flex-col gap-4 bg-slate-900 border-white lg:mr-5">
      <h1 className="text-2xl font-bold mb-6">Admin</h1>
      <nav className="flex flex-col gap-2">
       
        <Link to="/owner">
          <Button variant="ghost" className="justify-start"><Home className="mr-2" />Dashboard</Button>
        </Link>

        <Link to="/">
          <Button variant="ghost" className="justify-start"><Home className="mr-2" />Houses</Button>
        </Link>

        <Link to="/">
          <Button variant="ghost" className="justify-start"><Mail className="mr-2" />Requests</Button>
        </Link>

        <Link to="/">
          <Button variant="ghost" className="justify-start"><User className="mr-2" />Tenants</Button>
        </Link>

        <Link to="/">
          <Button variant="ghost" className="justify-start"><Settings className="mr-2" />Settings</Button>
        </Link>

      </nav>
      <div className="mt-auto">
        {/* <ProfileCard user={user} /> */}
      </div>
    </aside>
  );
};
