import React from "react";

export default function SectionFields({ children }) {
  return <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-10">{children}</div>;
}
