import { UiFieldLabel } from "./ui-field-label";
import { UiFieldMessage } from "./ui-field-message";
import { UiSelect } from "./ui-select";

/**
 * Select field component with label and error/helper message.
 *
 * @param {Object} props - The props object.
 * @param {string} props.label - The label text.
 * @param {boolean} props.required - Indicates if the field is required.
 * @param {string} props.helperText - The helper text.
 * @param {string} props.errorText - The error text.
 * @param {string} props.className - The additional CSS classes for the component.
 * @param {string[]} props.options - The array of select options.
 * @returns {JSX.Element} The select field component.
 */
export function UiSelectField({
  label,
  required,
  helperText,
  errorText,
  className,
  options,
}) {
  return (
    <div className={className}>
      <UiFieldLabel label={label} required={required} />
      <UiSelect className="mt-1" options={options} />
      <UiFieldMessage helperText={helperText} errorText={errorText} />
    </div>
  );
}
