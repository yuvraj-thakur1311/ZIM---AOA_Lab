
    export const orders = [
        {
            "order_id": "ORD-5001",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-301",
            "patient_id": "PAT-8891",
            "case_type": "Zirconia Crown",
            "shade": "A2",
            "tooth_numbers": [
                11
            ],
            "priority": "Standard",
            "status": "In Production",
            "order_date": "2026-01-18T09:30:00Z",
            "expected_delivery": "2026-01-25T10:00:00Z",
            "files": {
                "scans": [
                    "scan_upper_jaw.stl",
                    "scan_lower_jaw.stl"
                ],
                "photos": [
                    "patient_smile_front.jpg",
                    "shade_reference.jpg"
                ]
            },
            "materials": {
                "substructure": "Zirconia HT",
                "finish": "Glaze"
            },
            "design_notes": "Slight translucency requested. Maintain natural morphology.",
            "billing": {
                "payment_status": "Pending",
                "price": 4500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Smile Care Dental Clinic, Koregaon Park, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5002",
            "clinic_id": "CLIN-150",
            "doctor_id": "DOC-881",
            "patient_id": "PAT-9922",
            "case_type": "Clear Aligner Set",
            "shade": null,
            "tooth_numbers": [],
            "priority": "High",
            "status": "Scans Received",
            "order_date": "2026-01-19T11:12:00Z",
            "expected_delivery": "2026-01-29T12:00:00Z",
            "files": {
                "scans": [
                    "intraoral_scan.stl"
                ],
                "photos": [
                    "bite_registration.jpg"
                ]
            },
            "materials": {
                "aligner_material": "ThermoFlex Premium",
                "number_of_stages": 14
            },
            "design_notes": "Doctor requests IPR plan and midline correction.",
            "billing": {
                "payment_status": "Paid",
                "price": 18500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "OrthoSmile Clinic, Baner, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5003",
            "clinic_id": "CLIN-220",
            "doctor_id": "DOC-412",
            "patient_id": "PAT-7770",
            "case_type": "Surgical Implant Guide",
            "shade": null,
            "tooth_numbers": [
                36,
                37
            ],
            "priority": "Urgent",
            "status": "Completed",
            "order_date": "2026-01-10T15:45:00Z",
            "expected_delivery": "2026-01-17T16:00:00Z",
            "files": {
                "scans": [
                    "cbct_scan.dcm",
                    "jaw_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "guide_material": "Biocompatible Resin",
                "sleeve_type": "Metal Sleeves"
            },
            "design_notes": "Ensure precise fit. Offset drilling angle based on CBCT analysis.",
            "billing": {
                "payment_status": "Paid",
                "price": 7500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Dental Specialists Hub, Kalyani Nagar, Pune, MH",
                "tracking_number": "TRK123987654"
            }
        },
        {
            "order_id": "ORD-5004",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-302",
            "patient_id": "PAT-5501",
            "case_type": "PFM Crown",
            "shade": "A3",
            "tooth_numbers": [
                26
            ],
            "priority": "Standard",
            "status": "Design Approved",
            "order_date": "2026-01-17T08:20:00Z",
            "expected_delivery": "2026-01-24T10:00:00Z",
            "files": {
                "scans": [
                    "upper_arch.stl"
                ],
                "photos": [
                    "prep_photo.jpg"
                ]
            },
            "materials": {
                "framework": "Cobalt-Chromium",
                "veneer": "Porcelain",
                "finish": "Polish"
            },
            "design_notes": "Slight occlusal reduction. Contact tightness +1.",
            "billing": {
                "payment_status": "Pending",
                "price": 3800,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5005",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-905",
            "patient_id": "PAT-6602",
            "case_type": "Full Denture",
            "shade": "A1",
            "tooth_numbers": [],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-15T13:05:00Z",
            "expected_delivery": "2026-01-28T14:00:00Z",
            "files": {
                "scans": [
                    "edenture_maxilla.stl",
                    "edenture_mandible.stl"
                ],
                "photos": [
                    "vertical_dimension.jpg"
                ]
            },
            "materials": {
                "base_material": "PMMA",
                "teeth_set": "Ivostar",
                "try_in": true
            },
            "design_notes": "Emphasize esthetics; patient prefers lighter shade.",
            "billing": {
                "payment_status": "Pending",
                "price": 14500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5006",
            "clinic_id": "CLIN-150",
            "doctor_id": "DOC-882",
            "patient_id": "PAT-7713",
            "case_type": "Veneers",
            "shade": "BL2",
            "tooth_numbers": [
                12,
                11,
                21,
                22
            ],
            "priority": "Urgent",
            "status": "Scans Received",
            "order_date": "2026-01-20T07:55:00Z",
            "expected_delivery": "2026-01-27T09:00:00Z",
            "files": {
                "scans": [
                    "anterior_scan.stl"
                ],
                "photos": [
                    "smile_line.jpg",
                    "retracted_view.jpg"
                ]
            },
            "materials": {
                "material": "Lithium Disilicate",
                "thickness": "0.7mm",
                "finish": "High Polish"
            },
            "design_notes": "Edge lengthening 0.5mm on 11 and 21.",
            "billing": {
                "payment_status": "Paid",
                "price": 22000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "OrthoSmile Clinic, Baner, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5007",
            "clinic_id": "CLIN-402",
            "doctor_id": "DOC-120",
            "patient_id": "PAT-3390",
            "case_type": "Night Guard",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Completed",
            "order_date": "2026-01-08T10:10:00Z",
            "expected_delivery": "2026-01-15T12:00:00Z",
            "files": {
                "scans": [
                    "upper_guard_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "guard_material": "Hard/Soft Dual Laminate",
                "thickness": "3mm",
                "arch": "Maxillary"
            },
            "design_notes": "Cuspid guidance preserved.",
            "billing": {
                "payment_status": "Paid",
                "price": 3200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Healthy Smiles, Hadapsar, Pune, MH",
                "tracking_number": "TRK987650001"
            }
        },
        {
            "order_id": "ORD-5008",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-301",
            "patient_id": "PAT-4401",
            "case_type": "Inlay/Onlay",
            "shade": "A2",
            "tooth_numbers": [
                46
            ],
            "priority": "Standard",
            "status": "Design In Progress",
            "order_date": "2026-01-19T09:00:00Z",
            "expected_delivery": "2026-01-26T09:00:00Z",
            "files": {
                "scans": [
                    "lower_right_quadrant.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Composite CAD/CAM Block",
                "finish": "Polish",
                "margin_type": "Butt Joint"
            },
            "design_notes": "Ensure tight proximal contact.",
            "billing": {
                "payment_status": "Pending",
                "price": 5200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5009",
            "clinic_id": "CLIN-510",
            "doctor_id": "DOC-603",
            "patient_id": "PAT-1288",
            "case_type": "Temporary Crown",
            "shade": "A1",
            "tooth_numbers": [
                13
            ],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-16T16:30:00Z",
            "expected_delivery": "2026-01-21T10:00:00Z",
            "files": {
                "scans": [
                    "temp_crown_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "PMMA",
                "finish": "Polish",
                "duration_weeks": 4
            },
            "design_notes": "Slight over-contour to support gingiva.",
            "billing": {
                "payment_status": "Pending",
                "price": 1800,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Prime Dental, Camp, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5010",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-907",
            "patient_id": "PAT-9910",
            "case_type": "Clear Retainer",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Shipped",
            "order_date": "2026-01-09T12:00:00Z",
            "expected_delivery": "2026-01-18T12:00:00Z",
            "files": {
                "scans": [
                    "post_ortho_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "PETG",
                "thickness": "1.0mm",
                "arch": "Both"
            },
            "design_notes": "Trim just below gingival margin.",
            "billing": {
                "payment_status": "Paid",
                "price": 2500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": "TRK445566778"
            }
        },
        {
            "order_id": "ORD-5011",
            "clinic_id": "CLIN-220",
            "doctor_id": "DOC-413",
            "patient_id": "PAT-7712",
            "case_type": "Zirconia Bridge",
            "shade": "A3",
            "tooth_numbers": [
                14,
                15,
                16
            ],
            "priority": "Urgent",
            "status": "Design Approved",
            "order_date": "2026-01-18T14:20:00Z",
            "expected_delivery": "2026-01-26T15:00:00Z",
            "files": {
                "scans": [
                    "upper_right_bridge.stl"
                ],
                "photos": [
                    "prep_design.jpg"
                ]
            },
            "materials": {
                "framework": "Zirconia HT",
                "pontic_design": "Ridge Lap",
                "finish": "Glaze + Stain"
            },
            "design_notes": "High strength zirconia due to long span.",
            "billing": {
                "payment_status": "Pending",
                "price": 16500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Dental Specialists Hub, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5012",
            "clinic_id": "CLIN-640",
            "doctor_id": "DOC-200",
            "patient_id": "PAT-3400",
            "case_type": "Cast Partial Denture",
            "shade": "A2",
            "tooth_numbers": [
                33,
                34,
                35,
                36,
                37
            ],
            "priority": "Standard",
            "status": "Scans Received",
            "order_date": "2026-01-20T05:45:00Z",
            "expected_delivery": "2026-02-02T10:00:00Z",
            "files": {
                "scans": [
                    "mandibular_partial.stl"
                ],
                "photos": [
                    "rest_seat_design.jpg"
                ]
            },
            "materials": {
                "framework": "Cobalt-Chromium",
                "major_connector": "Lingual Bar",
                "clasps": "I-bar"
            },
            "design_notes": "Avoid tissue impingement on lingual frenum.",
            "billing": {
                "payment_status": "Pending",
                "price": 12000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "WhitePearl Dental, Pimpri, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5013",
            "clinic_id": "CLIN-150",
            "doctor_id": "DOC-883",
            "patient_id": "PAT-2345",
            "case_type": "Digital Wax Up",
            "shade": "BL1",
            "tooth_numbers": [
                13,
                12,
                11,
                21,
                22,
                23
            ],
            "priority": "High",
            "status": "Design In Progress",
            "order_date": "2026-01-19T18:40:00Z",
            "expected_delivery": "2026-01-23T11:00:00Z",
            "files": {
                "scans": [
                    "anterior_case_scan.stl"
                ],
                "photos": [
                    "smile_ref.jpg",
                    "lip_rest.jpg"
                ]
            },
            "materials": {
                "mockup": "Digital",
                "deliverable": "Smile Design + STL for Mockup"
            },
            "design_notes": "Follow reference smile curve. Close midline diastema.",
            "billing": {
                "payment_status": "Paid",
                "price": 6000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Digital",
                "address": "Email delivery",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5014",
            "clinic_id": "CLIN-402",
            "doctor_id": "DOC-121",
            "patient_id": "PAT-9088",
            "case_type": "E-max Crown",
            "shade": "A1",
            "tooth_numbers": [
                21
            ],
            "priority": "Standard",
            "status": "In Production",
            "order_date": "2026-01-13T10:25:00Z",
            "expected_delivery": "2026-01-21T13:00:00Z",
            "files": {
                "scans": [
                    "tooth_21_prep.stl"
                ],
                "photos": [
                    "shade_tab_match.jpg"
                ]
            },
            "materials": {
                "material": "Lithium Disilicate",
                "translucency": "HT",
                "finish": "Glaze"
            },
            "design_notes": "Thin margin. Avoid overbulking at cervical.",
            "billing": {
                "payment_status": "Pending",
                "price": 5200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Healthy Smiles, Hadapsar, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5015",
            "clinic_id": "CLIN-510",
            "doctor_id": "DOC-604",
            "patient_id": "PAT-8712",
            "case_type": "Metal Framework for Implant",
            "shade": null,
            "tooth_numbers": [
                16,
                15,
                14
            ],
            "priority": "Urgent",
            "status": "Design Approved",
            "order_date": "2026-01-18T07:10:00Z",
            "expected_delivery": "2026-01-25T16:30:00Z",
            "files": {
                "scans": [
                    "implant_positions.stl",
                    "scan_body_positions.stl"
                ],
                "photos": []
            },
            "materials": {
                "framework": "Titanium",
                "platform": "Multi-unit",
                "screw_retained": true
            },
            "design_notes": "Passive fit critical; verify contact points.",
            "billing": {
                "payment_status": "Pending",
                "price": 24500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Prime Dental, Camp, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5016",
            "clinic_id": "CLIN-640",
            "doctor_id": "DOC-201",
            "patient_id": "PAT-5520",
            "case_type": "Bite Splint",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Completed",
            "order_date": "2026-01-05T09:40:00Z",
            "expected_delivery": "2026-01-12T09:00:00Z",
            "files": {
                "scans": [
                    "maxillary_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Clear Hard Resin",
                "thickness": "2mm",
                "design": "Flat Plane"
            },
            "design_notes": "Shallow guidance ramps.",
            "billing": {
                "payment_status": "Paid",
                "price": 3000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "WhitePearl Dental, Pimpri, Pune, MH",
                "tracking_number": "TRK552233019"
            }
        },
        {
            "order_id": "ORD-5017",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-303",
            "patient_id": "PAT-1123",
            "case_type": "Zirconia Crown",
            "shade": "B1",
            "tooth_numbers": [
                36
            ],
            "priority": "Standard",
            "status": "Scans Received",
            "order_date": "2026-01-20T10:05:00Z",
            "expected_delivery": "2026-01-27T10:30:00Z",
            "files": {
                "scans": [
                    "mandibular_left.stl"
                ],
                "photos": []
            },
            "materials": {
                "substructure": "Zirconia ST",
                "finish": "Glaze"
            },
            "design_notes": "Avoid high occlusion. Patient bruxer.",
            "billing": {
                "payment_status": "Pending",
                "price": 4700,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5018",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-906",
            "patient_id": "PAT-7700",
            "case_type": "Clear Aligner Set",
            "shade": null,
            "tooth_numbers": [],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-14T17:15:00Z",
            "expected_delivery": "2026-01-31T12:30:00Z",
            "files": {
                "scans": [
                    "full_arch_scan.stl"
                ],
                "photos": [
                    "iprdoc.jpg"
                ]
            },
            "materials": {
                "aligner_material": "ThermoFlex Standard",
                "number_of_stages": 20,
                "attachments": true
            },
            "design_notes": "Expansion planned for upper arch.",
            "billing": {
                "payment_status": "Paid",
                "price": 29500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5019",
            "clinic_id": "CLIN-510",
            "doctor_id": "DOC-605",
            "patient_id": "PAT-6600",
            "case_type": "Diagnostic Model",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Shipped",
            "order_date": "2026-01-06T08:45:00Z",
            "expected_delivery": "2026-01-13T09:30:00Z",
            "files": {
                "scans": [
                    "upper_lower_models.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Model Resin",
                "color": "Gray",
                "scale": "1:1"
            },
            "design_notes": "Base plates included.",
            "billing": {
                "payment_status": "Paid",
                "price": 1500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Prime Dental, Camp, Pune, MH",
                "tracking_number": "TRK99001122"
            }
        },
        {
            "order_id": "ORD-5020",
            "clinic_id": "CLIN-402",
            "doctor_id": "DOC-122",
            "patient_id": "PAT-9981",
            "case_type": "Maryland Bridge",
            "shade": "A2",
            "tooth_numbers": [
                11,
                21
            ],
            "priority": "High",
            "status": "Design In Progress",
            "order_date": "2026-01-20T06:10:00Z",
            "expected_delivery": "2026-01-27T08:30:00Z",
            "files": {
                "scans": [
                    "anterior_bridge_prep.stl"
                ],
                "photos": [
                    "prep_wings.jpg"
                ]
            },
            "materials": {
                "framework": "Zirconia",
                "wing_design": "Double Wing",
                "finish": "Glaze"
            },
            "design_notes": "Minimal prep on lingual surfaces.",
            "billing": {
                "payment_status": "Pending",
                "price": 9800,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Healthy Smiles, Hadapsar, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5021",
            "clinic_id": "CLIN-640",
            "doctor_id": "DOC-202",
            "patient_id": "PAT-3344",
            "case_type": "Surgical Implant Guide",
            "shade": null,
            "tooth_numbers": [
                22
            ],
            "priority": "Urgent",
            "status": "In Production",
            "order_date": "2026-01-18T19:00:00Z",
            "expected_delivery": "2026-01-24T16:00:00Z",
            "files": {
                "scans": [
                    "cbct_upper.dcm",
                    "upper_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "guide_material": "Biocompatible Resin",
                "sleeve_type": "Metal Sleeves",
                "fixation": "Tooth-supported"
            },
            "design_notes": "Depth control key required.",
            "billing": {
                "payment_status": "Pending",
                "price": 8200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "WhitePearl Dental, Pimpri, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5022",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-304",
            "patient_id": "PAT-1010",
            "case_type": "Zirconia Crown",
            "shade": "A3",
            "tooth_numbers": [
                24
            ],
            "priority": "Standard",
            "status": "Design Approved",
            "order_date": "2026-01-16T09:30:00Z",
            "expected_delivery": "2026-01-23T10:30:00Z",
            "files": {
                "scans": [
                    "tooth_24_scan.stl"
                ],
                "photos": [
                    "gingival_margin.jpg"
                ]
            },
            "materials": {
                "substructure": "Zirconia HT",
                "finish": "Glaze + Stain"
            },
            "design_notes": "Slight cervical characterization.",
            "billing": {
                "payment_status": "Pending",
                "price": 4800,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5023",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-908",
            "patient_id": "PAT-2099",
            "case_type": "Clear Aligner Refinement",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Scans Received",
            "order_date": "2026-01-20T12:22:00Z",
            "expected_delivery": "2026-01-30T10:15:00Z",
            "files": {
                "scans": [
                    "refinement_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "aligner_material": "ThermoFlex Premium",
                "number_of_stages": 6,
                "attachments": false
            },
            "design_notes": "Finalize midline, minor rotations.",
            "billing": {
                "payment_status": "Pending",
                "price": 9500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5024",
            "clinic_id": "CLIN-220",
            "doctor_id": "DOC-414",
            "patient_id": "PAT-8008",
            "case_type": "E-max Veneer",
            "shade": "BL3",
            "tooth_numbers": [
                23
            ],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-15T11:45:00Z",
            "expected_delivery": "2026-01-22T12:30:00Z",
            "files": {
                "scans": [
                    "canine_prep.stl"
                ],
                "photos": [
                    "shade_map.jpg"
                ]
            },
            "materials": {
                "material": "Lithium Disilicate",
                "thickness": "0.5mm",
                "finish": "High Polish"
            },
            "design_notes": "Increase incisal translucency.",
            "billing": {
                "payment_status": "Paid",
                "price": 5600,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Dental Specialists Hub, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5025",
            "clinic_id": "CLIN-510",
            "doctor_id": "DOC-606",
            "patient_id": "PAT-6677",
            "case_type": "PMMA Long-Term Provisional",
            "shade": "A2",
            "tooth_numbers": [
                11,
                12,
                21,
                22
            ],
            "priority": "Urgent",
            "status": "Design Approved",
            "order_date": "2026-01-19T08:00:00Z",
            "expected_delivery": "2026-01-24T09:30:00Z",
            "files": {
                "scans": [
                    "anterior_bridge_temp.stl"
                ],
                "photos": [
                    "patient_smile.jpg"
                ]
            },
            "materials": {
                "material": "High-Impact PMMA",
                "reinforcement": "Fiber",
                "duration_weeks": 12
            },
            "design_notes": "Screw access to be palatal.",
            "billing": {
                "payment_status": "Pending",
                "price": 21000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Prime Dental, Camp, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5026",
            "clinic_id": "CLIN-402",
            "doctor_id": "DOC-123",
            "patient_id": "PAT-5555",
            "case_type": "Model with Die",
            "shade": null,
            "tooth_numbers": [
                26
            ],
            "priority": "Standard",
            "status": "Completed",
            "order_date": "2026-01-04T09:10:00Z",
            "expected_delivery": "2026-01-11T10:00:00Z",
            "files": {
                "scans": [
                    "prep_with_margins.stl"
                ],
                "photos": []
            },
            "materials": {
                "model_material": "Resin",
                "die_type": "Removable",
                "color": "Beige"
            },
            "design_notes": "Clear margin marking.",
            "billing": {
                "payment_status": "Paid",
                "price": 2200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Healthy Smiles, Hadapsar, Pune, MH",
                "tracking_number": "TRK661122334"
            }
        },
        {
            "order_id": "ORD-5027",
            "clinic_id": "CLIN-640",
            "doctor_id": "DOC-203",
            "patient_id": "PAT-2222",
            "case_type": "Custom Abutment",
            "shade": null,
            "tooth_numbers": [
                46
            ],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-17T13:30:00Z",
            "expected_delivery": "2026-01-24T14:30:00Z",
            "files": {
                "scans": [
                    "scan_body.stl",
                    "gingival_profile.stl"
                ],
                "photos": []
            },
            "materials": {
                "abutment_material": "Titanium",
                "connection": "Internal Hex",
                "emergence_profile": "Concave"
            },
            "design_notes": "Screw retained; ensure torque spec compliance.",
            "billing": {
                "payment_status": "Pending",
                "price": 9500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "WhitePearl Dental, Pimpri, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5028",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-305",
            "patient_id": "PAT-9099",
            "case_type": "Zirconia Crown",
            "shade": "A1",
            "tooth_numbers": [
                47
            ],
            "priority": "Standard",
            "status": "Scans Received",
            "order_date": "2026-01-20T13:10:00Z",
            "expected_delivery": "2026-01-27T13:45:00Z",
            "files": {
                "scans": [
                    "lower_right_molar.stl"
                ],
                "photos": []
            },
            "materials": {
                "substructure": "Monolithic Zirconia",
                "finish": "Polish"
            },
            "design_notes": "Reduce occlusal thickness to 1.0mm due to limited clearance.",
            "billing": {
                "payment_status": "Pending",
                "price": 4300,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5029",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-909",
            "patient_id": "PAT-3131",
            "case_type": "Orthodontic Study Model",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Shipped",
            "order_date": "2026-01-07T07:55:00Z",
            "expected_delivery": "2026-01-14T08:40:00Z",
            "files": {
                "scans": [
                    "ortho_full_arch.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Resin",
                "base_style": "ABO",
                "color": "White"
            },
            "design_notes": "Please label with patient ID and date.",
            "billing": {
                "payment_status": "Paid",
                "price": 1900,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": "TRK111222333"
            }
        },
        {
            "order_id": "ORD-5030",
            "clinic_id": "CLIN-220",
            "doctor_id": "DOC-415",
            "patient_id": "PAT-4545",
            "case_type": "Bleach Tray",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Completed",
            "order_date": "2026-01-03T10:05:00Z",
            "expected_delivery": "2026-01-10T11:00:00Z",
            "files": {
                "scans": [
                    "upper_lower_tray.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Soft EVA",
                "thickness": "1.5mm",
                "reservoirs": true
            },
            "design_notes": "Include reservoirs on anterior teeth.",
            "billing": {
                "payment_status": "Paid",
                "price": 2600,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Dental Specialists Hub, Pune, MH",
                "tracking_number": "TRK202020202"
            }
        },
        {
            "order_id": "ORD-5031",
            "clinic_id": "CLIN-510",
            "doctor_id": "DOC-607",
            "patient_id": "PAT-7878",
            "case_type": "Hybrid Denture",
            "shade": "A2",
            "tooth_numbers": [],
            "priority": "High",
            "status": "In Production",
            "order_date": "2026-01-12T14:35:00Z",
            "expected_delivery": "2026-01-29T15:30:00Z",
            "files": {
                "scans": [
                    "implant_positions_fullarch.stl"
                ],
                "photos": [
                    "smile_photo.jpg"
                ]
            },
            "materials": {
                "framework": "Titanium Bar",
                "teeth": "PMMA Milled",
                "gingiva": "Pink Composite"
            },
            "design_notes": "Speech space critical—verify VDO.",
            "billing": {
                "payment_status": "Pending",
                "price": 78000,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Prime Dental, Camp, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5032",
            "clinic_id": "CLIN-402",
            "doctor_id": "DOC-124",
            "patient_id": "PAT-1616",
            "case_type": "E-max Inlay",
            "shade": "A1",
            "tooth_numbers": [
                25
            ],
            "priority": "Standard",
            "status": "Design In Progress",
            "order_date": "2026-01-20T11:25:00Z",
            "expected_delivery": "2026-01-27T12:30:00Z",
            "files": {
                "scans": [
                    "upper_left_quadrant.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Lithium Disilicate",
                "finish": "Polish",
                "margin": "Butt Joint"
            },
            "design_notes": "Ensure tight marginal fit.",
            "billing": {
                "payment_status": "Pending",
                "price": 5100,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "Healthy Smiles, Hadapsar, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5033",
            "clinic_id": "CLIN-640",
            "doctor_id": "DOC-204",
            "patient_id": "PAT-2626",
            "case_type": "Surgical Stent",
            "shade": null,
            "tooth_numbers": [
                33,
                34
            ],
            "priority": "High",
            "status": "Completed",
            "order_date": "2026-01-09T09:15:00Z",
            "expected_delivery": "2026-01-16T10:00:00Z",
            "files": {
                "scans": [
                    "cbct_lower.dcm",
                    "lower_scan.stl"
                ],
                "photos": []
            },
            "materials": {
                "stent_material": "Biocompatible Resin",
                "support": "Mucosa-supported"
            },
            "design_notes": "Add lateral windows for irrigation.",
            "billing": {
                "payment_status": "Paid",
                "price": 7200,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "WhitePearl Dental, Pimpri, Pune, MH",
                "tracking_number": "TRK303030303"
            }
        },
        {
            "order_id": "ORD-5034",
            "clinic_id": "CLIN-101",
            "doctor_id": "DOC-306",
            "patient_id": "PAT-4747",
            "case_type": "Zirconia Bridge",
            "shade": "A2",
            "tooth_numbers": [
                45,
                46,
                47
            ],
            "priority": "Standard",
            "status": "Scans Received",
            "order_date": "2026-01-20T15:10:00Z",
            "expected_delivery": "2026-01-29T11:30:00Z",
            "files": {
                "scans": [
                    "lower_right_bridge.stl"
                ],
                "photos": []
            },
            "materials": {
                "framework": "Zirconia ST",
                "pontic_design": "Modified Ridge Lap",
                "finish": "Glaze"
            },
            "design_notes": "Check occlusal scheme—Group function.",
            "billing": {
                "payment_status": "Pending",
                "price": 17500,
                "currency": "INR"
            },
            "shipping": {
                "method": "Pickup",
                "address": "Smile Care Dental Clinic, Pune, MH",
                "tracking_number": null
            }
        },
        {
            "order_id": "ORD-5035",
            "clinic_id": "CLIN-305",
            "doctor_id": "DOC-910",
            "patient_id": "PAT-5858",
            "case_type": "Therapeutic Splint",
            "shade": null,
            "tooth_numbers": [],
            "priority": "Standard",
            "status": "Design Approved",
            "order_date": "2026-01-18T06:50:00Z",
            "expected_delivery": "2026-01-24T08:00:00Z",
            "files": {
                "scans": [
                    "maxillary_arch.stl"
                ],
                "photos": []
            },
            "materials": {
                "material": "Clear Hard Resin",
                "thickness": "2.5mm",
                "design": "Michigan Splint"
            },
            "design_notes": "Canine guidance, shallow anterior guidance.",
            "billing": {
                "payment_status": "Pending",
                "price": 3600,
                "currency": "INR"
            },
            "shipping": {
                "method": "Courier",
                "address": "City Dental Care, Aundh, Pune, MH",
                "tracking_number": null
            }
        }
    ]
