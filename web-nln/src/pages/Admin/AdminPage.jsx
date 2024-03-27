import Sidebar from "../../component/fixed/Sidebar";
import MainDash from "../../component/admin/Dashboard/MainDash/MainDash";
// import RightSide from "../../component/admin/Dashboard/RigtSide/RightSide";
// import AddProduct from "./component/manage/products/AddProduct";
// import EditProduct from "./component/manage/products/EditProduct";
import OrderManage from "../../component/manage/order/OrderManage";
// import ManageProductPage from "../ManageProduct/index";

import './AdminPage.css'

function AdminPage() {
  return (
    <div className="AdminPage">
      <Sidebar />
      {<OrderManage />}
      {/* <MainDash/> */}
      {/* {<ManageProductPage />}  */}

      {/* {<EditProduct/>}
            {<AddProduct/>}  */}
    </div>
  );
}

export default AdminPage;
