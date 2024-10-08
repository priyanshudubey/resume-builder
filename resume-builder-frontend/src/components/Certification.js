import React from "react";
import { PiCertificateFill } from "react-icons/pi";

const Certification = ({
  certifications,
  updateCertification,
  setCertification,
}) => {
  const handleInputChange = (index, field, value) => {
    const updateCertification = [...certifications];
    updateCertification[index][field] = value;
    setCertification(updateCertification);
  };

  return (
    <div>
      <h2 className="text-2xl font-semibold text-purple-700 mb-4 flex items-center">
        <PiCertificateFill className="mr-2" /> Certification
      </h2>
      {certifications.map((cert, index) => {
        <div
          key={index}
          className="bg-purple-50 p-4 rounded-lg mb-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-2">
            <div>
              <label
                htmlFor={`certificate-${index}`}
                className="block text-sm font-medium text-gray-700">
                Certificate Name
              </label>
              <input
                type="text"
                id={`certificate-${index}`}
                className="mt-1 block w-full rounded-md bg-white border border-gray-400 text-gray-900 shadow-sm focus:border-purple-500 focus:ring-purple-500 focus:outline-none focus:bg-white px-3 py-2"
                placeholder="Certificate Name"
                value={cert.certificate}
                onChange={(e) =>
                  handleInputChange(index, "certificate", e.target.value)
                }
              />
            </div>
          </div>
        </div>;
      })}
    </div>
  );
};

export default Certification;
