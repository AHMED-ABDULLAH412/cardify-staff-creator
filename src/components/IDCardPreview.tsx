import React from 'react';
import { AspectRatio } from "@/components/ui/aspect-ratio";
interface IDCardPreviewProps {
  formData: {
    fullName: string;
    employeeId: string;
    designation: string;
    photo: string;
  };
}
const IDCardPreview = ({
  formData
}: IDCardPreviewProps) => {
  return <div id="idCard" className="w-[340px] bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
      {/* Blue header section */}
      <div className="bg-[#1EAEDB] p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/lovable-uploads/6a764e94-9f71-43d2-b383-4eb9aa3828d2.png" alt="School Logo" className="w-12 h-12 object-cover" />
          <div className="text-white">
            <h2 className="text-lg font-bold">Royal American School</h2>
            <p className="text-xs">Tel: 025591000</p>
          </div>
        </div>
        <div className="bg-white text-[#1EAEDB] text-xs font-bold py-1 px-3 rounded-full">
          Staff ID
        </div>
      </div>
      
      {/* White content section */}
      <div className="p-6 flex flex-col items-center space-y-4">
        {/* Photo section */}
        {formData.photo && <div className="w-[150px] h-[150px] rounded-full overflow-hidden border-4 border-[#1EAEDB]">
            <AspectRatio ratio={1}>
              <img src={formData.photo} alt="Staff photo" className="w-full h-full object-cover" />
            </AspectRatio>
          </div>}
        
        {/* Details section */}
        <div className="text-center space-y-2 w-full">
          <h3 className="font-bold text-xl text-gray-800">{formData.fullName || "Full Name"}</h3>
          <div className="bg-gray-100 rounded-md py-1 px-2 inline-block">
            <p className="text-sm text-gray-600">ID: <span className="font-semibold">{formData.employeeId || "Employee ID"}</span></p>
          </div>
          <p className="text-blue-600 font-medium">{formData.designation || "Designation"}</p>
        </div>
        
        {/* Footer */}
        <div className="w-full pt-3 mt-2 border-t border-gray-200 text-center">
          <p className="text-xs text-gray-500">Valid until December 2025</p>
        </div>
      </div>
    </div>;
};
export default IDCardPreview;