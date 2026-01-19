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
  state: string;
  country: string;
  postal_code: string;

  lab_specialties: LabSpecialty[];
}
