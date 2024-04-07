import Sidebar from "../../component/fixed/Sidebar";
import MainDash from "../../component/admin/Dashboard/MainDash/MainDash";

import OrderManage from "../../component/manage/order/OrderManage";
import ManageProductPage from "../ManageProduct/index";

import "./AdminPage.css";
import { useState } from "react";
import AddProduct from "./../../component/manage/products/AddProduct";
import StatisticProduct from "../../component/manage/statistic/StatisticProduct";

function AdminPage() {
  const [selectSideBarIndex, setSelectSideBarIndex] = useState(0);
  const [selectDropDownIndex, setSelectDropDownIndex] = useState(0);

  const handleSidebarIndex = (index, i) => {
    
    setSelectSideBarIndex(index);
    setSelectDropDownIndex(i);
  };
  let content = null;
  switch (selectSideBarIndex) {
    case 0:
      content = <MainDash />;
      break;
    case 1:
      content = <OrderManage />;
      break;
    case 2:
      content = <ManageProductPage />;
      break;
    case 3:
        content = < StatisticProduct/>;
        break;
    case 4:
      content = <AddProduct />;
      break;
   
    default:
      break;
  }

  return (
    <div className="AdminPage">
      <div className="sidebar-left">
        <Sidebar sendIndexToParent={handleSidebarIndex} />
      </div>
      
      {/* <OrderManage sendIndexToParent={selectSideBarIndex}/> */}

      <div className="content-right">
        {content}
      </div>
      

      {/* <ManageProductPage sendIndexToParent={selectSideBarIndex}/> */}
      {/* {<EditProduct/>}
            {<AddProduct/>}  */}
    </div>
  );
}

export default AdminPage;
