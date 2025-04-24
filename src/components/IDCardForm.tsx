
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
    <form onSubmit={handleSubmit} className="space-y-6 p-6 bg-white rounded-lg shadow-md">
      <div className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            id="fullName"
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData(prev => ({ ...prev, fullName: e.target.value }))}
            placeholder="e.g., Mashaal Al Hammadi"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="employeeId">Employee ID</Label>
          <Input
            id="employeeId"
            type="text"
            value={formData.employeeId}
            onChange={(e) => setFormData(prev => ({ ...prev, employeeId: e.target.value }))}
            placeholder="e.g., 2619"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="designation">Designation</Label>
          <Input
            id="designation"
            type="text"
            value={formData.designation}
            onChange={(e) => setFormData(prev => ({ ...prev, designation: e.target.value }))}
            placeholder="e.g., Administrative Staff"
            required
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="photo">Photo</Label>
          <Input
            id="photo"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="cursor-pointer"
            required={!formData.photo}
          />
        </div>
      </div>
    </form>
  );
};

export default IDCardForm;
