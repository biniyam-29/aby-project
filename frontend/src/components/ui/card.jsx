// src/components/ui/card.jsx
export function Card({ children, className }) {
  return <div className={`rounded-xl bg-slate-800 p-4 shadow ${className}`}>{children}</div>;
}

export function CardContent({ children, className }) {
  return <div className={`text-white ${className}`}>{children}</div>;
}
