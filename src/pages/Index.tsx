
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import IDCardForm from '@/components/IDCardForm';
import IDCardPreview from '@/components/IDCardPreview';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Download, Printer, FileText } from 'lucide-react';

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
    if (!card) return;
    
    try {
      // Add a temporary class for better PDF rendering
      card.classList.add('pdf-rendering');
      
      const canvas = await html2canvas(card, {
        scale: 3, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: '#ffffff'
      });
      
      // Remove temporary class
      card.classList.remove('pdf-rendering');
      
      // Calculate dimensions for PDF (standard ID card size)
      const imgWidth = 86; // mm (standard ID card width)
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [imgWidth, imgHeight + 2] // Add small margin
      });
      
      pdf.addImage(
        canvas.toDataURL('image/jpeg', 1.0), 
        'JPEG', 
        0, 
        1, // small top margin
        imgWidth, 
        imgHeight
      );
      
      pdf.save(`ID_Card_${formData.fullName.replace(/\s+/g, '_') || 'Staff'}.pdf`);
    } catch (error) {
      console.error('Error generating PDF:', error);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-center text-[#1EAEDB]">Staff ID Card Generator</h1>
          <p className="text-center text-gray-600 mt-2">Create professional ID cards for your staff members</p>
        </header>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center gap-2">
                <FileText className="h-5 w-5 text-[#1EAEDB]" />
                Staff Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <IDCardForm
                onSubmit={() => {}}
                formData={formData}
                setFormData={setFormData}
              />
              
              <div className="flex gap-4 justify-center mt-8">
                <Button
                  onClick={handleDownloadPDF}
                  className="bg-[#1EAEDB] hover:bg-[#1890B3] flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Download PDF
                </Button>
                <Button
                  onClick={handlePrint}
                  variant="outline"
                  className="flex items-center gap-2 border-[#1EAEDB] text-[#1EAEDB]"
                >
                  <Printer className="w-4 h-4" />
                  Print
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Preview Section */}
          <div className="flex flex-col items-center">
            <Card className="w-full">
              <CardHeader>
                <CardTitle className="text-xl text-center">Preview</CardTitle>
              </CardHeader>
              <CardContent className="flex justify-center p-8 bg-gray-100">
                <div className="sticky top-8">
                  <IDCardPreview formData={formData} />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
