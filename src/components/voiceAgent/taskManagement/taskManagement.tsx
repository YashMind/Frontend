import React from "react";

const TaskManagement = () => {
  return (
    <div className="container">
      <div className="flex flex-col md:flex-row gap-[25px] mt-[60px]">
        <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">Task Management</h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            pretium libero. Nullam varius, enim placerat molestie viverra, arcu
            elit euismod mauris, non rutrum massa sapien eget ante.
          </p>
          <div className="flex justify-between">
            <img src="/images/both-circle.png" />
            <img src="/images/effective.png" />
          </div>
        </div>
        <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">Instant Response</h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            pretium libero. Nullam varius, enim placerat molestie viverra, arcu
            elit euismod mauris, non rutrum massa sapien eget ante.
          </p>
          <img className="m-auto" src="/images/instant.png" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-[25px] mt-[25px]">
        <div className="w-full md:w-[40%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">Instant Response</h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            pretium libero. Nullam varius, enim placerat molestie viverra, arcu
            elit euismod mauris, non rutrum massa sapien eget ante.
          </p>
          <img className="m-auto" src="/images/instant.png" />
        </div>

        <div className="w-full md:w-[60%] bg-[#0C0A30] p-6 md:p-[40px] rounded-[16px]">
          <h3 className="text-white text-2xl font-bold">Task Management</h3>
          <p className="text-[#6F6C90] text-[16px] md:text-[17px] py-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at
            pretium libero. Nullam varius, enim placerat molestie viverra, arcu
            elit euismod mauris, non rutrum massa sapien eget ante.
          </p>
          <div className="flex justify-between">
            <img src="/images/both-circle.png" />
            <img src="/images/effective.png" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskManagement;
