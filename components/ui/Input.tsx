import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({ label, error, className, ...props }: InputProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <input
        className={cn(
          "w-full px-4 py-3 border border-gray-600 rounded-md",
          "bg-black text-white",
          "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent",
          "transition-colors duration-200",
          error && "border-white focus:ring-gray-500",
          className
        )}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-white">{error}</p>
      )}
    </div>
  );
}

