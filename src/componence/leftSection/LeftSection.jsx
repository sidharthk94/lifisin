import React from "react";
import "./LeftSection.css";

const LeftSection = () => {
  const itemsArray = [
    "Sales Order Management",
    "Finance Management",
    "HR Management",
    "Procurement ",
    "Asset Management",
    "Inventory Management",
    "Project Management",
    "Helpdesk Management",
    "Business Intelligencee",
    "Control Panel",
    "Application Settings",
    "Solutions Builder",
    "Product & Services",
    "Suppliers & Customers",
    "Organization",
  ];
  return (
    <>
      <div className="leftSection_main">
        <div className="cmpny_logo_container">
          <img src="./cmpntLogo.png" alt="" className="cmpnt_logo" style={{paddingTop:"5px"}}/>
        </div>
        <div className="create_container">
          <p className="create_text">Create</p>
        </div>
        <div className="crm_container">
          <img src="./payment.png" alt="" className="crm_payent" />
          <p className="crm_text">CRM Management</p>
        </div>

        {itemsArray.map((items, index) => (
          <div
            className="array_container"
            style={{
              backgroundColor:
                items == "Business Intelligencee" ? "#6186BD" : "white",
              color: items == "Business Intelligencee" ? "white" : "#585859",
            }}
          >
            <p className="array_text">{items}</p>
          </div>
        ))}
        <div className="more_items_container">
          <img src="./Vector.png" alt="" className="more_items_icon" />
          <p className="more_items_text">More Items</p>
        </div>
        <div className="cmpny_logo_container">
          <img
            src="./cmpntLogo.png"
            alt=""
            className="cmpnt_logo"
            style={{ marginTop: "2px" }}
          />
        </div>
      </div>
    </>
  );
};

export default LeftSection;
