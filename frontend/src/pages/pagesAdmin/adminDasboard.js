import NavbarAdmin from "../../components/adminComponents/layouts/navbarAdmin";
import MainDashboard from "../../components/adminComponents/mainAdmin/mainDashboard";
import "./style/adminDasboard.css"

const AdminDasboard = () => {
  return (
    <div className="adminDashboard">
      <NavbarAdmin />
      <MainDashboard />
    </div>
  )
}

export default AdminDasboard;
