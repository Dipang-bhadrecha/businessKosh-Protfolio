import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse, faTruckMedical, faTooth } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Prevent Employee Fraud: Stop Advance Scams by Tracking Verified Employee Networks.
        Our secure platform empowers business owners to build trust with their
        workforce and eliminate the risk of fraudulent advances.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Prevent Employee Fraud"
          description="Stop Advance Scams by Tracking Verified Employee Networks. 
          Our secure platform empowers business owners to build trust with
          their workforce and eliminate the risk of fraudulent advances."
          // icon={faTruckMedical}
        />

        <InformationCard
          title="Employee management"
          description="Our comprehensive solution streamlines the entire employee lifecycle,
          from onboarding and leave management to performance tracking and payroll integration. 
          This user-friendly feature simplifies administrative tasks, improves data accuracy, 
          and empowers managers to focus on strategic initiatives."
          // icon={faHeartPulse}
        />

        <InformationCard
          title="Business Sales Insight"
          description="Uncover hidden growth opportunities with our Business Sales Insights.  
          This powerful tool empowers you to gain deep insights into your sales data, identify trends, 
          and make data-driven decisions to optimize your sales strategy. Analyze key metrics like sales pipeline health, 
          conversion rates, and customer behavior to understand what's driving sales and where there's room for improvement."
          // icon={faTooth}
        />
      </div>
    </div>
  );
}

export default Info;
