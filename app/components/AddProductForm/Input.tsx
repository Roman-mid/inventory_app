interface InputProps {
  type: 'number' | 'text';
  name: string;
  label: string;
  required?: boolean;
  placeholder: string;
  min?: string;
  step?: string;
}

const Input = ({
  label,
  name,
  type,
  required,
  placeholder,
  step,
  min,
}: InputProps) => {
  return (
    <div>
      <label
        htmlFor={name}
        className='block text-sm font-medium text-gray-500 mb-2'
      >
        {label}{' '}
        {required ? <span className='text-red-400'>*</span> : '(optional)'}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        required={required}
        className='w-full px-4 py-2 border border-gray-300 rounded-lg focus:border-transparent'
        placeholder={placeholder}
        min={min}
        step={step}
      />
    </div>
  );
};

export default Input;
