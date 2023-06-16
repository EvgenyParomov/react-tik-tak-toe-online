import clsx from "clsx";

/**
 * Message component for UiTextField.
 *
 * @param {{
 *   helperText: string,    // The helper text.
 *   errorText: string,     // The error text.
 * }} props
 * @returns {JSX.Element|null} The message component.
 */
export function UiFieldMessage({ helperText, errorText }) {
  const isError = !!errorText;
  const messageText = errorText || helperText;

  return (
    <p
      className={clsx(
        "mt-1 text-sm",
        isError ? "text-orange-600" : "text-slate-400"
      )}
    >
      {messageText}
    </p>
  );
}
