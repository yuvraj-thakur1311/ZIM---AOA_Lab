
import React, { useEffect, useRef, useState } from 'react';
import type { LabSpecialty } from '../types/types';

interface Props {
  options: string[];         // e.g. ['Hematology', 'Microbiology']
  selected: LabSpecialty[];  // your union/string list
  onChange: (selected: LabSpecialty[]) => void;
}

export const MultiSelect: React.FC<Props> = ({ options, selected, onChange }) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const toggle = (opt: string) => {
    // Cast to LabSpecialty (your state holds LabSpecialty union)
    const val = opt as LabSpecialty;
    if (selected.includes(val)) onChange(selected.filter((x) => x !== val));
    else onChange([...selected, val]);
  };

  const label = selected.length ? selected.join(', ') : 'Select specialties...';

  return (
    <div className="multi-select" ref={containerRef}>
      <div className={`multi-select-display ${open ? 'open' : ''}`} onClick={() => setOpen((s) => !s)}>
        {label}
      </div>

      {open && (
        <div className="multi-select-dropdown">
          {options.map((opt) => (
            <label key={opt} className="multi-select-option">
              <input
                type="checkbox"
                checked={selected.includes(opt as LabSpecialty)}
                onChange={() => toggle(opt)}
              />
              {opt}
            </label>
          ))}
        </div>
      )}
    </div>
  );
};
