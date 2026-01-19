import React, { useState, useRef, useEffect } from "react";
import type { UserType, LabSpecialty } from "../types/types";
import "../index.css";

const LAB_SPECIALTIES: LabSpecialty[] = [
  "CROWN_BRIDGE",
  "DENTAL_IMPLANTS",
  "ORTHODONTIC_APPLIANCES",
  "DENTURES",
  "VENEERS",
  "ALIGNERS",
  "THREE_D_PRINTING",
  "CAD_CAM_MILLING",
  "CERAMIC_RESTORATIONS",
  "PROSTHODONTICS",
  "ENDODONTIC_RESTORATIONS",
  "CUSTOM_TRAYS_SPLINTS",
  "SURGICAL_GUIDES",
];

const defaultUser: UserType = {
  first_name: "",
  middle_name: "",
  last_name: "",
  nationality: "",
  email: "",
  phone_number: "",
  alternate_phone_number: "",
  address_line_1: "",
  address_line_2: "",
  city: "",
  state: "",
  country: "",
  postal_code: "",
  lab_specialties: [],
};

// Multi-select component
interface MultiSelectProps {
  selected: LabSpecialty[];
  onChange: (selected: LabSpecialty[]) => void;
}

const MultiSelect: React.FC<MultiSelectProps> = ({ selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleOption = (option: LabSpecialty) => {
    if (selected.includes(option)) {
      onChange(selected.filter((o) => o !== option));
    } else {
      onChange([...selected, option]);
    }
  };

  return (
    <div className="multi-select" ref={containerRef}>
      <div
        className={`multi-select-display ${open ? "open" : ""}`}
        onClick={() => setOpen(!open)}
      >
        {selected.length === 0 ? "Select specialties..." : selected.join(", ")}
      </div>

      {open && (
        <div className="multi-select-dropdown">
          {LAB_SPECIALTIES.map((option) => (
            <label key={option} className="multi-select-option">
              <input
                type="checkbox"
                checked={selected.includes(option)}
                onChange={() => toggleOption(option)}
              />
              {option.replace(/_/g, " ")}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};

// LabForm component
export const LabForm: React.FC = () => {
  const [formData, setFormData] = useState<UserType>(defaultUser);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div>
      <h1>Lab Portal</h1>
      <form onSubmit={handleSubmit} className="lab-form">
        {/* Personal Details Section */}
        <div className="form-section">
          <div className="section-title">Personal Details</div>
          <div className="form-grid three-col">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input
                id="first_name"
                type="text"
                name="first_name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="middle_name">Middle Name</label>
              <input
                id="middle_name"
                type="text"
                name="middle_name"
                value={formData.middle_name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input
                id="last_name"
                type="text"
                name="last_name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input
                id="nationality"
                type="text"
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input
                id="phone_number"
                type="tel"
                name="phone_number"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="alternate_phone_number">Alternate Phone</label>
              <input
                id="alternate_phone_number"
                type="tel"
                name="alternate_phone_number"
                value={formData.alternate_phone_number}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>

        {/* Address Section */}
        <div className="form-section">
          <div className="section-title">Address</div>
          <div className="form-grid two-col">
            <div className="form-group full-width">
              <label htmlFor="address_line_1">Address Line 1</label>
              <input
                id="address_line_1"
                type="text"
                name="address_line_1"
                value={formData.address_line_1}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address_line_2">Address Line 2</label>
              <input
                id="address_line_2"
                type="text"
                name="address_line_2"
                value={formData.address_line_2}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                id="city"
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input
                id="state"
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input
                id="country"
                type="text"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="postal_code">Postal Code</label>
              <input
                id="postal_code"
                type="text"
                name="postal_code"
                value={formData.postal_code}
                onChange={handleChange}
                required
              />
            </div>
          </div>
        </div>

        {/* Lab Specialties Section */}
        <div className="form-section">
          <div className="section-title">Lab Specialties</div>
          <div className="form-group">
            <MultiSelect
              selected={formData.lab_specialties}
              onChange={(selected) =>
                setFormData((prev) => ({ ...prev, lab_specialties: selected }))
              }
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};
