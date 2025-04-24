
import React from 'react';

interface IDCardPreviewProps {
  formData: {
    fullName: string;
    employeeId: string;
    designation: string;
    photo: string;
  };
}

const IDCardPreview = ({ formData }: IDCardPreviewProps) => {
  return (
    <div id="idCard" className="w-[340px] h-[212px] bg-white rounded-lg shadow-lg overflow-hidden flex">
      {/* Left side - White section */}
      <div className="w-2/3 p-4 flex flex-col items-center justify-center space-y-2">
        {formData.photo && (
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-gray-200">
            <img
              src={formData.photo}
              alt="Staff photo"
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="text-center space-y-1">
          <h3 className="font-semibold text-gray-800">{formData.fullName || "Full Name"}</h3>
          <p className="text-sm text-gray-600">ID: {formData.employeeId || "Employee ID"}</p>
          <p className="text-sm text-gray-600">{formData.designation || "Designation"}</p>
        </div>
      </div>

      {/* Right side - Blue section */}
      <div className="w-1/3 bg-[#1EAEDB] p-4 flex flex-col items-center justify-between">
        <img
          src="/lovable-uploads/6a764e94-9f71-43d2-b383-4eb9aa3828d2.png"
          alt="School Logo"
          className="w-20 mb-2"
        />
        <div className="text-center text-white space-y-2">
          <p className="text-xs font-semibold">Royal American School</p>
          <p className="text-xs">Tel: 025591000</p>
        </div>
      </div>
    </div>
  );
};

export default IDCardPreview;
