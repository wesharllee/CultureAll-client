import { Navigate, Route, Routes } from "react-router-dom"
import { Login } from "../components/auth/Login"
import { Register } from "../components/auth/Register"
import { Authorized } from "./Authorized"
import { Users } from "../components/staff/users/UserList.js"
import { HomePage } from "../components/auth/Home"
import { ImpactPage } from "../components/auth/Impact"
import { ContactForm } from "../components/auth/contact/ContactForm"
import { AboutUsPage } from "../components/auth/Us"
import { ContactConfirmationPage } from "../components/auth/contact/ContactConfirmation.js"
import { Dashboard } from "../components/client/Dashboard"
import { ConsultForm } from "../components/client/consultation/ConsultationForm"
import { ConsultConfirm } from "../components/client/consultation/ConsultationConfirmation"
import { ConsultEdit } from "../components/client/consultation/ConsultationEdit"
import { StaffDash } from "../components/staff/Dashboard"
import { ConsultList } from "../components/staff/ConsultationRequestsList"
import { ContactList } from "../components/staff/ContactRequestsList"
import { DataSetList } from "../components/staff/data/DataSetList"
import { GetData } from "../components/client/data/GetData"
import { MyData } from "../components/client/data/MyData"
import { DataDetails } from "../components/staff/data/DataDetails"
import { GeneralForm } from "../components/client/GeneralForm"
import { Checkout } from "../components/client/data/Checkout"
import { Confirmation } from "../components/client/data/Confirmation"





export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
  return <Routes>

    <Route path="/home" element={<HomePage />} />
    <Route path="/impact" element={<ImpactPage />} />
    <Route path="/us" element={<AboutUsPage />} />
    <Route path="/contactus" element={<ContactForm />} />
    {token ? '' : <Route path="/dashboard/:userId" element={<Navigate to="/home" replace />} />}
    
    <Route path="/form/:userId/generaldata/fKn32iGHJb9b33xm@rKztH3sP0t/map/" element={<GeneralForm />} />
    <Route path="/contactus/confirmation" element={<ContactConfirmationPage />} />
    <Route path="/login" element={<Login setToken={setToken} setUserId={setUserId} />} />
    <Route path="/register" element={<Register setToken={setToken} setUserId={setUserId} />} />
    <Route element={<Authorized token={token} isActive={isActive} />}>
      {/* Add Routes here */}
      {/* <Route path="/users/:userId" element={<UserDetail />} /> */}

      {
        isStaff === true
          ? <>
            <Route path="/users">
              <Route index element={<Users />} />
              {/* <Route path=":userId" element={<UserDetail />} />
                <Route path=":userId/edit" element={<UserEdit />} /> */}
            </Route>
            <Route path="/dashboard/:userId" element={<StaffDash />} />
            <Route path="/consultations/:userId" element={<ConsultList />} />
            <Route path="/contacts/:userId" element={<ContactList />} />
            <Route path="/datasets/:userId" element={<DataSetList />} />
            <Route path="/datadetails/:userId" element={<DataDetails />} />

          </>
          : <>
            <Route path="/users" element={<Navigate to="/home" replace />} />
            <Route path="/dashboard/:userId" element={<Dashboard />} />

            <Route path="/consultation">
              {/* <Route index element={<ConsultForm />} /> */}
              <Route path=":userId" element={<ConsultForm />} />
              <Route path=":requestId/confirmation" element={<ConsultConfirm />} />
              <Route path=":requestId/edit" element={<ConsultEdit />} />
            </Route>

            <Route path="/getdata">
              <Route path=":userId" element={<GetData />} />
              <Route path=":userId/checkout" element={<Checkout />} />
              <Route path=":userId/confirmation" element={<Confirmation />} />
            </Route>

            <Route path="/mydata/:userId" element={<MyData />} />
          </>

      }
    </Route>
  </Routes>
}
