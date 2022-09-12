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





export const ApplicationViews = ({ isStaff, token, setToken, setUserId, userId, isActive }) => {
  return <Routes>
    
    <Route path="/home" element={<HomePage />} />
    <Route path="/impact" element={<ImpactPage />} />
    <Route path="/us" element={<AboutUsPage />} />
    <Route path="/contactus" element={<ContactForm />} />
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
              <Route path="/consultations" element={<ConsultList />} />
              <Route path="/contacts" element={<ContactList />} />
              
              </>
            : <>
              <Route path="/users" element={<Navigate to="/home" replace />} />
              <Route path="/dashboard/:userId" element={<Dashboard />} />
              {/* <Route path="/dashboard" element={<Navigate to="/dashboard/{userId}" replace />} /> */}
              <Route path="/consultation" element={<ConsultForm />} />
              <Route path="/consultation/:userId" element={<ConsultForm />} />
              <Route path="/consultation/:requestId/confirmation" element={<ConsultConfirm />} />
              <Route path="/consultation/:requestId/edit" element={<ConsultEdit />} />
            </>

        }
    </Route>
  </Routes>
}
