import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiFieldInput } from "./ui-field-input";

/**
 * Text field component with label and error/helper message.
 *
 * @param {{
 *   label: string,             // The label text.
 *   required: boolean,         // Indicates if the field is required.
 *   helperText: string,        // The helper text.
 *   errorText: string,         // The error text.
 *   className: string,         // The additional CSS classes for the component.
 * } & import('react').HTMLAttributes<HTMLInputElement>  } props
 * @returns {JSX.Element} The text field component.
 */
export function UiTextField({
  label,
  required,
  helperText,
  errorText,
  className,
  ...inputProps
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiFieldInput required={required} errorText={errorText} {...inputProps} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
