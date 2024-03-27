import React, { useState } from "react";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../admin/Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import './Sidebar.css'

const Sidebar = ({sendIndexToParent}) => {
  const [selected, setSelected] = useState(0);
  const [expanded, setExpanded] = useState(true);

  const sidebarVariants = {
    true: {
      left : '0'
    },
    false:{
      left : '-60%'
    }
  };

  const handleDropdownToggle = (index) => {
    setSelected(index === selected ? -1 : index);
    sendIndexToParent(index);
  };

  return (
    <>
      <div className="bars" style={expanded ? { left: '60%' } : { left: '5%' }} onClick={() => setExpanded(!expanded)}>
        <UilBars />
      </div>
      <motion.div className='sidebar'
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ''}
      >
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/fixed/image 29.png"} alt="logo" />
        </div>
        <div className="menu">
          {SidebarData.map((item, index) => (
            <div
              className={selected === index ? "menuItem active" : "menuItem"}
              key={index}
              onClick={() => handleDropdownToggle(index)} // Sử dụng handleDropdownToggle khi click vào mục menu
            >
              <item.icon />
              <span>{item.heading}</span>
              {/* Hiển thị dropdown nếu được chọn */}
              {index === selected && item.dropdown && (
                <div className="dropdown">
                  {item.dropdown.map((option, i) => (
                    <div className="dropdownOption" key={i}>
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="menuItem">
            <UilSignOutAlt />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
