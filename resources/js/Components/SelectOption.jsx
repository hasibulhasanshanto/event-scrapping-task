import { forwardRef, useRef } from 'react';

export default forwardRef(function SelectOption({ options = [], selectLabel = 'Select One', className = '', ...props }, ref) {
    const input = ref ? ref : useRef();

    return (
        <select {...props}
        className={
            'border-gray-300 focus:border-gray-900 focus:ring-gray-900 rounded-md shadow-sm ' +
            className
        }
            ref={input}>
            <option value="">{selectLabel}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    );
});
