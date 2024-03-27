import Sidebar from "../../component/fixed/Sidebar";
import MainDash from "../../component/admin/Dashboard/MainDash/MainDash";
// import RightSide from "../../component/admin/Dashboard/RigtSide/RightSide";
// import AddProduct from "./component/manage/products/AddProduct";
// import EditProduct from "./component/manage/products/EditProduct";
import OrderManage from "../../component/manage/order/OrderManage";
import ManageProductPage from "../ManageProduct/index";

import './AdminPage.css'
import { SidebarData } from "../../component/admin/Data/Data";
import { useState } from "react";

function AdminPage() {

  const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);

  const handleSidebarIndex = (index) => {
          setSelectSideBarIndex(index);
  };
  let content = null
  switch (selectSideBarIndex) {
    case 0:
      content= <MainDash />;
      break;
    case 1:
      content = <OrderManage/>;
      break;
      case 2:
        content = <ManageProductPage/>;
        break;
      // case 4:
      //   content =
      //   break;
    default:
      break;
  }

  return (
    <div className="AdminPage">
      <Sidebar sendIndexToParent={handleSidebarIndex}/>
      
      {/* <OrderManage sendIndexToParent={selectSideBarIndex}/> */}
      {content} = {selectSideBarIndex}
      
       {/* <ManageProductPage sendIndexToParent={selectSideBarIndex}/> */}

      {/* {<EditProduct/>}
            {<AddProduct/>}  */}
    </div>
  );
}

export default AdminPage;
