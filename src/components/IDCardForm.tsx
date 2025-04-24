
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface IDCardFormProps {
  onSubmit: (data: FormData) => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
}

interface FormData {
  fullName: string;
  employeeId: string;
  designation: string;
  photo: string;
}

const IDCardForm = ({ onSubmit, formData, setFormData }: IDCardFormProps) => {
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({ ...prev, photo: reader.result as string }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-4">
        <div>
          <Label htmlFor="fullName" className="text-gray-700">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder="e.g., Mashaal Al Hammadi"
            className="mt-1 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            required
          />
        </div>

        <div>
          <Label htmlFor="employeeId" className="text-gray-700">Employee ID</Label>
          <Input
            id="employeeId"
            type="text"
            value={formData.employeeId}
            onChange={(e) => setFormData(prev => ({ ...prev, employeeId: e.target.value }))}
            placeholder="e.g., 2619"
            className="mt-1 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            required
          />
        </div>

        <div>
          <Label htmlFor="designation" className="text-gray-700">Designation</Label>
          <Input
            id="designation"
            type="text"
            value={formData.designation}
            onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
            placeholder="e.g., Administrative Staff"
            className="mt-1 focus:ring-[#1EAEDB] focus:border-[#1EAEDB]"
            required
          />
        </div>

        <div>
          <Label htmlFor="photo" className="text-gray-700">Photo (1:1 ratio, 300x300px recommended)</Label>
          <div className="mt-1 flex items-center">
            <Input
              id="photo"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-[#1EAEDB]/10 file:text-[#1EAEDB] hover:file:bg-[#1EAEDB]/20"
              required={!formData.photo}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Upload a square image for best results</p>
        </div>
      </div>
    </form>
  );
};

export default IDCardForm;
