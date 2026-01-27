import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-white mb-2">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "w-full px-4 py-3 border border-gray-600 rounded-md",
          "bg-black text-white",
          "focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent",
          "transition-colors duration-200 resize-none",
          error && "border-white focus:ring-gray-500",
          className
        )}
        rows={5}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-white">{error}</p>
      )}
    </div>
  );
}

