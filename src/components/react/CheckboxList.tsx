import { useState } from "react";

export interface CheckboxItem {
  id: string;
  label: string;
  checked?: boolean;
}

export default function CheckboxList({
  items,
}: {
  items: CheckboxItem[];
}) {
  const [state, setState] = useState(
    items.map((i) => ({ ...i, checked: i.checked ?? false }))
  );

  const toggle = (id: string) => {
    setState((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  return (
    <ul className="space-y-2">
      {state.map((item) => (
        <li key={item.id} className="flex gap-2">
          <input
            type="checkbox"
            checked={item.checked}
            onChange={() => toggle(item.id)}
          />
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}