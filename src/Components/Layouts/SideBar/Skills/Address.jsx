import React from "react";

function Address() {
  return (
    <div className="border-b-[1px] border-[#656566] pb-5 flex flex-col gap-2 text-xs">
      <div className="flex justify-between">
        <h3 className="titleText font-thin">
          Residence:
        </h3>
        <span className="subTitleText">Bangladesh</span>
      </div>
      <div className="flex justify-between">
        <h3 className="titleText font-thin">
          City:
        </h3>
        <span className="subTitleText">Dhaka</span>
      </div>
      <div className="flex justify-between">
        <h3 className="titleText font-thin">
          District:
        </h3>
        <span className="subTitleText">Narayanganj</span>
      </div>
    </div>
  );
}

export default Address;
