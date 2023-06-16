import { useState } from "react";
import { Listbox } from "@headlessui/react";
import clsx from "clsx";

/**
 * UiSelect component. It renders a dropdown select component.
 * @component
 * @param {{
 *   className: string,
 *   options: Array.<{value: (string|number), label: string}>,
 *   isError?: boolean,
 * }} props
 */
export function UiSelect({ className, options, isError }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelect = (option) => {
    setSelectedOption(option);
  };

  return (
    <Listbox
      className={className}
      value={selectedOption}
      onChange={handleSelect}
    >
      {({ open }) => (
        <>
          <div className="relative">
            <Listbox.Button className={buttonClasses(isError)}>
              {selectedOption ? selectedOption.label : "Select an option"}
              <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                <DropDownIcon isOpen={open} />
              </span>
            </Listbox.Button>
            <Listbox.Options className="absolute z-10 mt-1 w-full bg-white rounded-md shadow-lg max-h-60 overflow-auto text-base sm:text-sm focus:outline-none">
              {renderOptions(options)}
            </Listbox.Options>
          </div>
        </>
      )}
    </Listbox>
  );
}

function DropDownIcon({ isOpen }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={clsx(isOpen && "rotate-180", "h-5 w-5 text-teal-600")}
    >
      <path d="M7 10l5 5 5-5" />
    </svg>
  );
}

function buttonClasses(isError) {
  return clsx(
    "px-2 py-2 pr-8 leading-tight outline-0 border block w-full rounded-md shadow-sm focus:ring-opacity-50",
    isError
      ? "border-teal-600 focus:border-teal-600 focus:ring focus:ring-teal-600/20"
      : "border-slate-200 focus:border-teal-600 focus:ring focus:ring-teal-600/20"
  );
}

function optionClasses(active) {
  return clsx(
    "cursor-pointer select-none relative py-2 pl-3 pr-9",
    active ? "text-white bg-teal-600" : "text-gray-900"
  );
}

function renderOptions(options) {
  return options.map((option) => (
    <Listbox.Option
      key={option.value}
      value={option}
      className={({ active }) => optionClasses(active)}
    >
      {({ selected }) => (
        <>
          <span
            className={clsx(
              selected ? "font-semibold" : "font-normal",
              "block truncate"
            )}
          >
            {option.label}
          </span>
        </>
      )}
    </Listbox.Option>
  ));
}
