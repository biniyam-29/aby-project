
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Layout from './layout/Layout';
import ForgetPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';
import Profile from './pages/Profile';
import EditProfile from './pages/EditProfile';
import StepperForm from './owner/CreateHouses';
import UpgradeToOwner from './pages/UpgradeToOwner';
import { ProtectedRoutes } from './components/ProtectedRoutes';
import EditOwner from './pages/EditOwner';
import { Dashboard } from './pages/admin/dashboard';
import { SingleHouse } from './owner/House';
import AllHouses from './pages/Showmore';
import DetailsHouses from './pages/DetailsHouses';
import CreateTenants from './owner/CreateTenants';
import ShowTenant from './owner/ShowTenant';
import { EditHouse } from './owner/EditHouse';
import { EditImages } from './owner/EditImages';
import { EditHouseAddress } from './owner/EditAddress';
import { EditBankAccounts } from './owner/EditBankAccount';
import { TenantProfile } from './tenant/TenantProfile';
import { Maintenance } from './tenant/Maintenance';
import { useMediaQuery } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { useMemo } from 'react';
import { OwnerMaintenance } from './owner/Maintenance';
import Tenant from './owner/Tenant';
import { DetailHouse2 } from './pages/DetailPage2';
import OwnerProfile from './tenant/OwnerProfile';
import MyRequests from './pages/MyRequests';
import { VisitorRequests } from './owner/VisitorRequests';
import PayRent from './tenant/PayRent'
import PaymentHistory from './tenant/PaymentHistory';
import OwnerPaymentHistory from './owner/PaymentHistory'
import Contact from './pages/static-pages/Contact';
import Service from './pages/static-pages/Service';
import About from './pages/static-pages/About';


function App() {
  const queryClient = new QueryClient();
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <>
      <ToastContainer className='top-[75px]' />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              {/* Authentication Routes */}
              <Route path="/signup" element={<Signup />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forget" element={<ForgetPassword />} />
              <Route path="/resetpassword/:token" element={<ResetPassword />} />

              {/* Owner Routes */}
              <Route path='/owner/' element={<Dashboard />}>
                <Route index element={<Dashboard />} />
                <Route path="create-house" element={<StepperForm />} />
                <Route path="show-tenant" element={<ShowTenant />} />
                <Route path='edit' element={<EditOwner />} />
                <Route path='maintenance' element={<OwnerMaintenance />} />
                <Route path='visitors' element={<VisitorRequests />} />
                <Route path='payments' element={<OwnerPaymentHistory />} />
                <Route path=':houseid' element={<SingleHouse />} />
                <Route path=':houseid/create-tenants' element={<CreateTenants />} />
                <Route path=':houseid/edit/general' element={<EditHouse />} />
                <Route path=':houseid/edit/images' element={<EditImages />} />
                <Route path=':houseid/edit/address' element={<EditHouseAddress />} />
                <Route path=':houseid/edit/bank' element={<EditBankAccounts />} />
                <Route path='tenant/:tenantid' element={<Tenant />} />
              </Route>

              {/* Main Layout Routes */}
              <Route path="/" element={<Layout />}>
                {/* Default Home Route */}
                <Route index element={<Home />} />

                {/* Static Pages */}
                <Route path="/contact" element={<Contact />} />
                <Route path="/service" element={<Service />} />
                <Route path="/about" element={<About/>} />

                {/* Houses */}
                <Route path="/houses" element={<AllHouses />} />
                <Route path="/houses/:houseid" element={<DetailHouse2 />} />
                <Route path="/details" element={<DetailsHouses />} />

                {/* User Profile */}
                <Route path='user/:id' element={<Profile />} />

                {/* Protected Profile Routes */}
                <Route path='profile/' element={<ProtectedRoutes />}>
                  <Route index element={<Profile />} />
                  <Route path='edit' element={<EditProfile />} />
                  <Route path='upgrade' element={<UpgradeToOwner />} />
                  <Route path='requests' element={<MyRequests />} />
                </Route>

                {/* Tenant Routes */}
                <Route path='tenant/' element={<ProtectedRoutes role='tenant'/>}>
                  <Route index element={<TenantProfile />}/>
                  <Route path='edit' element={<CreateTenants edit={true} />}/>
                  <Route path='maintenance' element={<Maintenance />}/>
                  <Route path='owner' element={<OwnerProfile />}/>
                  <Route path='payrent' element={<PayRent />}/>
                  <Route path='history' element={<PaymentHistory />}/>
                </Route>
              </Route>

              {/* Catch-All Route */}
              <Route path="*" element={<h1>404: Page Not Found</h1>} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;

