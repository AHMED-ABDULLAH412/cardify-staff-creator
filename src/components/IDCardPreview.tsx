
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
  return (
    <div className="max-w-[400px] w-full mx-auto">
      <AspectRatio ratio={1.586}>
        <div id="idCard" className="w-full h-full bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200 flex">
          {/* Left section (65%) - White content area */}
          <div className="w-[65%] p-4 flex flex-col items-center">
            {/* Photo container with fixed aspect ratio */}
            {formData.photo && (
              <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-[#1EAEDB] mb-4">
                <AspectRatio ratio={1}>
                  <img 
                    src={formData.photo} 
                    alt="Staff photo" 
                    className="w-full h-full object-cover"
                  />
                </AspectRatio>
              </div>
            )}
            
            {/* Details section */}
            <div className="text-center space-y-2 w-full mt-2">
              <h3 className="font-bold text-lg text-gray-800">{formData.fullName || "Full Name"}</h3>
              <div className="bg-gray-100 rounded-md py-1 px-2 inline-block">
                <p className="text-sm text-gray-600">ID: <span className="font-semibold">{formData.employeeId || "Employee ID"}</span></p>
              </div>
              <p className="text-blue-600 font-medium">{formData.designation || "Designation"}</p>
            </div>
            
            {/* Footer */}
            <div className="mt-auto pt-3 text-center w-full">
              <p className="text-xs text-gray-500">Valid until December 2025</p>
            </div>
          </div>
          
          {/* Right section (35%) - Blue vertical band */}
          <div className="w-[35%] bg-[#1EAEDB] p-4 flex flex-col items-center justify-between">
            <div className="flex flex-col items-center space-y-2">
              <img 
                src="/lovable-uploads/6a764e94-9f71-43d2-b383-4eb9aa3828d2.png" 
                alt="School Logo" 
                className="w-16 h-16 object-contain"
              />
              <div className="text-center">
                <h2 className="text-sm font-bold text-white">Royal American School</h2>
                <p className="text-xs text-white/90">Tel: 025591000</p>
              </div>
            </div>
            <div className="bg-white/90 text-[#1EAEDB] text-xs font-bold py-1 px-3 rounded-full">
              Staff ID
            </div>
          </div>
        </div>
      </AspectRatio>
    </div>
  );
};

export default IDCardPreview;
