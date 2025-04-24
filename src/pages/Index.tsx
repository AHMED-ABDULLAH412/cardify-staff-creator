
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import IDCardForm from '@/components/IDCardForm';
import IDCardPreview from '@/components/IDCardPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Printer } from 'lucide-react';

interface FormData {
  fullName: string;
  employeeId: string;
  designation: string;
  photo: string;
}

const Index = () => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    employeeId: '',
    designation: '',
    photo: '',
  });

  const handleDownloadPDF = async () => {
    const card = document.getElementById('idCard');
    if (card) {
      const canvas = await html2canvas(card);
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: [86, 54]  // Standard ID card size
      });
      pdf.addImage(imgData, 'PNG', 0, 0, 86, 54);
      pdf.save('id-card.pdf');
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-center mb-8">Staff ID Card Generator</h1>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <div className="space-y-4">
            <IDCardForm
              onSubmit={() => {}}
              formData={formData}
              setFormData={setFormData}
            />
            
            <div className="flex gap-4 justify-center mt-6">
              <Button
                onClick={handleDownloadPDF}
                className="flex items-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download PDF
              </Button>
              <Button
                onClick={handlePrint}
                variant="outline"
                className="flex items-center gap-2"
              >
                <Printer className="w-4 h-4" />
                Print
              </Button>
            </div>
          </div>

          {/* Preview Section */}
          <div className="flex justify-center">
            <div className="sticky top-8">
              <h2 className="text-xl font-semibold mb-4 text-center">Preview</h2>
              <IDCardPreview formData={formData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
