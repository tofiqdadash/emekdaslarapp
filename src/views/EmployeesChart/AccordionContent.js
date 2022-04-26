import React from "react";

const AccordionContent = ({ user }) => {
  return (
    <div className="Accordion">
      <div className="accordion-item">
        <div className="accordion-statistics">
          <h5> Username : {user.username}</h5>
          <h5> Email: {user.email}</h5>
          <h5>Phone: {user.phone}</h5>
        </div>
      </div>
     
      <div className="accordion-item">
        <div className="accordion-statistics">
          <h5> Address : {user.address.city}</h5>
          <h5> Suite: {user.address.suite}</h5>
          <h5>Street: {user.address.street}</h5>
        </div>
      </div>
        

      <div className="accordion-item">
        <div className="accordion-statistics">
          <h5> Company : {user.company.name}</h5>
        </div>
      </div>

    </div>
  );
};

export default AccordionContent;
