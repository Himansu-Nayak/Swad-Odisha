import React, { useState } from 'react';
import { useCheckout, Address } from './useCheckout';

export const AddressForm: React.FC = () => {
  const { address, setAddress, goToPayment } = useCheckout();
  const [formData, setFormData] = useState<Address>(address);
  const [errors, setErrors] = useState<Partial<Record<keyof Address, string>>>({});

  const validate = () => {
    const newErrors: Partial<Record<keyof Address, string>> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!/^[6-9]\d{9}$/.test(formData.phone)) newErrors.phone = 'Enter a valid 10-digit mobile number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Enter a valid email address';
    if (!formData.line1.trim()) newErrors.line1 = 'Address line 1 is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!/^\d{6}$/.test(formData.pincode)) newErrors.pincode = 'Enter a valid 6-digit pincode';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setAddress(formData);
      goToPayment();
    }
  };

  const handleChange = (field: keyof Address, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Field 
          label="Full Name" 
          value={formData.name} 
          error={errors.name} 
          onChange={v => handleChange('name', v)} 
          placeholder="e.g. Rahul Sharma"
        />
        <Field 
          label="Phone Number" 
          value={formData.phone} 
          error={errors.phone} 
          onChange={v => handleChange('phone', v)} 
          placeholder="e.g. 9876543210"
          type="tel"
        />
      </div>

      <Field 
        label="Email Address" 
        value={formData.email} 
        error={errors.email} 
        onChange={v => handleChange('email', v)} 
        placeholder="rahul@example.com"
        type="email"
      />

      <Field 
        label="Address Line 1" 
        value={formData.line1} 
        error={errors.line1} 
        onChange={v => handleChange('line1', v)} 
        placeholder="House No, Street Name"
      />

      <Field 
        label="Address Line 2 (Optional)" 
        value={formData.line2} 
        onChange={v => handleChange('line2', v)} 
        placeholder="Landmark / Flat No."
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
        <Field 
          label="City" 
          value={formData.city} 
          error={errors.city} 
          onChange={v => handleChange('city', v)} 
          placeholder="e.g. Bhubaneswar"
        />
        <Field 
          label="Pincode" 
          value={formData.pincode} 
          error={errors.pincode} 
          onChange={v => handleChange('pincode', v)} 
          placeholder="e.g. 751001"
          type="number"
        />
      </div>

      <button 
        type="submit"
        style={{
          width: '100%',
          padding: '14px',
          background: 'transparent',
          border: '1px solid #c8a96e',
          color: '#c8a96e',
          fontFamily: 'Courier New, monospace',
          textTransform: 'uppercase',
          letterSpacing: '0.4em',
          fontSize: '11px',
          cursor: 'pointer',
          marginTop: '10px',
          transition: 'all 0.2s ease'
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(200,169,110,0.1)')}
        onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
      >
        Continue to Payment →
      </button>
    </form>
  );
};

const Field: React.FC<{
  label: string;
  value: string;
  error?: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
}> = ({ label, value, error, onChange, placeholder, type = 'text' }) => (
  <div style={{ display: 'flex', flexDirection: 'column' }}>
    <label style={{
      fontFamily: 'Courier New, monospace',
      textTransform: 'uppercase',
      letterSpacing: '0.4em',
      fontSize: '10px',
      color: '#c8a96e',
      marginBottom: '4px'
    }}>
      {label}
    </label>
    <input 
      type={type}
      value={value}
      onChange={e => onChange(e.target.value)}
      placeholder={placeholder}
      style={{
        background: '#1a1a1a',
        border: `1px solid ${error ? '#f87171' : 'rgba(255,255,255,0.1)'}`,
        borderRadius: '4px',
        padding: '10px 12px',
        color: 'rgba(255,255,255,0.85)',
        fontSize: '14px',
        width: '100%',
        outline: 'none',
        transition: 'border-color 0.2s'
      }}
      onFocus={e => !error && (e.target.style.borderColor = '#c8a96e')}
      onBlur={e => !error && (e.target.style.borderColor = 'rgba(255,255,255,0.1)')}
    />
    {error && <span style={{ color: '#f87171', fontSize: '11px', marginTop: '3px', fontFamily: 'Outfit, sans-serif' }}>{error}</span>}
  </div>
);
