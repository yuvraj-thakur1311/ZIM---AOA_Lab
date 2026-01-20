
export type LabSpecialty =
  | 'CROWN_BRIDGE'
  | 'DENTAL_IMPLANTS'
  | 'ORTHODONTIC_APPLIANCES'
  | 'DENTURES'
  | 'VENEERS'
  | 'ALIGNERS'
  | 'THREE_D_PRINTING'
  | 'CAD_CAM_MILLING'
  | 'CERAMIC_RESTORATIONS'
  | 'PROSTHODONTICS'
  | 'ENDODONTIC_RESTORATIONS'
  | 'CUSTOM_TRAYS_SPLINTS'
  | 'SURGICAL_GUIDES';

/** DB entities from backend */
export interface Specialty {
  id: number;
  name: string;
}
export interface Staff {
  id: number;
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  countryState: string;
  country: string;
  postalCode: string;
  specialties: Specialty[];
}

/** Backend payload */
export interface CreateStaffPayload {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  alternatePhoneNumber?: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  countryState: string;
  country: string;
  postalCode: string;
  specialtyIds?: number[];     // preferred
  specialtyNames?: string[];   // fallback if you want to send names
}

/** Your form state (keep snake_case as you wrote) */
export interface UserType {
  first_name: string;
  middle_name?: string;
  last_name: string;
  nationality: string;

  email: string;
  phone_number: string;
  alternate_phone_number?: string;

  address_line_1: string;
  address_line_2?: string;
  city: string;
  state: string; // maps to countryState
  country: string;
  postal_code: string;

  // You want to keep strings in the MultiSelect
  lab_specialties: LabSpecialty[]; // will map to IDs on submit
}
