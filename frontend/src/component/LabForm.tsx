
import React, { useEffect, useState } from 'react';
import '../index.css';
import type { UserType, LabSpecialty, Specialty, CreateStaffPayload } from '../types/types';
import { api } from '../api';
import { MultiSelect } from './MultiSelect';

// Keep your union list if you want, but we will actually show names from backend
const defaultUser: UserType = {
  first_name: '',
  middle_name: '',
  last_name: '',
  nationality: '',
  email: '',
  phone_number: '',
  alternate_phone_number: '',
  address_line_1: '',
  address_line_2: '',
  city: '',
  state: '',
  country: '',
  postal_code: '',
  lab_specialties: [], // strings
};

export const LabForm: React.FC = () => {
  const [formData, setFormData] = useState<UserType>(defaultUser);
  const [dbSpecialties, setDbSpecialties] = useState<Specialty[]>([]);
  const [options, setOptions] = useState<string[]>([]); // names from DB
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  useEffect(() => {
    api.getSpecialties()
      .then((list) => {
        setDbSpecialties(list);
        setOptions(list.map((s) => s.name)); // show actual DB names
      })
      .catch((e) => setMessage(`Failed to load specialties: ${e.message}`));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(null);
    setSubmitting(true);

    // Map selected string names -> ids using fetched dbSpecialties
    const selectedIds: number[] = formData.lab_specialties
      .map((name) => {
        const match = dbSpecialties.find((s) => s.name === name);
        return match?.id;
      })
      .filter((id): id is number => typeof id === 'number');

    const payload: CreateStaffPayload = {
      firstName: formData.first_name.trim(),
      middleName: formData.middle_name?.trim() || undefined,
      lastName: formData.last_name.trim(),
      email: formData.email.trim(),
      phoneNumber: formData.phone_number.trim(),
      alternatePhoneNumber: formData.alternate_phone_number?.trim() || undefined,
      addressLine1: formData.address_line_1.trim(),
      addressLine2: formData.address_line_2?.trim() || undefined,
      city: formData.city.trim(),
      countryState: formData.state.trim(),
      country: formData.country.trim(),
      postalCode: formData.postal_code.trim(),
      specialtyIds: selectedIds.length ? selectedIds : undefined, // prefer IDs
      // specialtyNames: formData.lab_specialties.length ? formData.lab_specialties : undefined, // uncomment if you want to send names instead
    };

    try {
      const created = await api.createStaff(payload);
      setMessage(`✅ Staff created: ${created.firstName} ${created.lastName} (id: ${created.id})`);
      setFormData(defaultUser);
    } catch (err: any) {
      setMessage(`❌ Failed to create staff: ${err.message}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="container">
      <h1>Lab Portal</h1>

      {message && <div className="alert">{message}</div>}

      <form onSubmit={handleSubmit} className="lab-form">
        {/* Personal Details */}
        <div className="form-section">
          <div className="section-title">Personal Details</div>
          <div className="form-grid three-col">
            <div className="form-group">
              <label htmlFor="first_name">First Name</label>
              <input id="first_name" name="first_name" value={formData.first_name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="middle_name">Middle Name</label>
              <input id="middle_name" name="middle_name" value={formData.middle_name || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">Last Name</label>
              <input id="last_name" name="last_name" value={formData.last_name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="nationality">Nationality</label>
              <input id="nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="phone_number">Phone Number</label>
              <input id="phone_number" name="phone_number" value={formData.phone_number} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="alternate_phone_number">Alternate Phone</label>
              <input id="alternate_phone_number" name="alternate_phone_number" value={formData.alternate_phone_number || ''} onChange={handleChange} />
            </div>
          </div>
        </div>

        {/* Address */}
        <div className="form-section">
          <div className="section-title">Address</div>
          <div className="form-grid two-col">
            <div className="form-group full-width">
              <label htmlFor="address_line_1">Address Line 1</label>
              <input id="address_line_1" name="address_line_1" value={formData.address_line_1} onChange={handleChange} required />
            </div>
            <div className="form-group full-width">
              <label htmlFor="address_line_2">Address Line 2</label>
              <input id="address_line_2" name="address_line_2" value={formData.address_line_2 || ''} onChange={handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input id="city" name="city" value={formData.city} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="state">State</label>
              <input id="state" name="state" value={formData.state} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="country">Country</label>
              <input id="country" name="country" value={formData.country} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label htmlFor="postal_code">Postal Code</label>
              <input id="postal_code" name="postal_code" value={formData.postal_code} onChange={handleChange} required />
            </div>
          </div>
        </div>

        {/* Lab Specialties */}
        <div className="form-section">
          <div className="section-title">Lab Specialties</div>
          <div className="form-group">
            <MultiSelect
              options={options}                                 // names from DB
              selected={formData.lab_specialties as LabSpecialty[]} // strings state
              onChange={(selected) => setFormData((p) => ({ ...p, lab_specialties: selected }))}
            />
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={submitting}>
          {submitting ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};
