import { Listbox, ListboxButton, ListboxOptions, ListboxOption } from "@headlessui/react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const  CurrencyDropdown = () => {

    const currencies = [
  { code: "IDR", country: "ID" },
  { code: "USD", country: "US" },
  { code: "EUR", country: "EU" },
  { code: "GBP", country: "GB" },
  { code: "IQD", country: "IQ" },
  { code: "JOD", country: "GB" },
  { code: "KWD", country: "GB" },
  { code: "MYR", country: "GB" },
  { code: "MAD", country: "GB" },
  { code: "NZD", country: "GB" },
  { code: "OMR", country: "GB" },
  { code: "PHP", country: "GB" },
  { code: "SAR", country: "GB" },
  { code: "SGD", country: "GB" },
  { code: "ZAR", country: "GB" },
  { code: "CHF", country: "GB" },
  { code: "TRY", country: "GB" },
  { code: "AED", country: "GB" },
  { code: "DZD", country: "GB" },
  { code: "DKK", country: "GB" },
  { code: "HKD", country: "GB" },
  { code: "MVR", country: "GB" },
  { code: "CAD", country: "GB" },
  { code: "TWD", country: "GB" },
  { code: "AUD", country: "GB" },
  { code: "NOK", country: "GB" },
  { code: "BHD", country: "GB" },
  { code: "TND", country: "GB" },
  { code: "CNY", country: "GB" },
];

  const [selected, setSelected] = useState(currencies[0]);

  return (
    <div className="w-28">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">

          {/* Button */}
          <ListboxButton className="flex w-full items-center justify-between gap-2
           rounded-md border border-gray-300 bg-white px-3 py-2
            text-sm shadow-sm hover:border-gray-400 focus:outline-none">
            <div className="flex items-center gap-2">
              <span
                className={`fi fi-${selected.country.toLowerCase()} rounded-sm`}
              />
              <span className="font-medium">{selected.code}</span>
            </div>
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          </ListboxButton>

          {/* Dropdown */}
          <ListboxOptions className="absolute z-10 mt-1 w-full rounded-md border bg-white shadow-lg">
            {currencies.map((item) => (
              <ListboxOption
                key={item.code}
                value={item}
                className={({ active }) =>
                  `cursor-pointer px-3 py-2 text-sm ${
                    active ? "bg-gray-100" : ""
                  }`
                }
              >
                <div className="flex items-center gap-2">
                  <span className={`fi fi-${item.country.toLowerCase()}`} />
                  <span>{item.code}</span>
                </div>
              </ListboxOption>
            ))}
          </ListboxOptions>

        </div>
      </Listbox>
    </div>
  );
}

export default CurrencyDropdown
