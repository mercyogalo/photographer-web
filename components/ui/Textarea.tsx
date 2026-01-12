import { cn } from "@/lib/utils";

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({ label, error, className, ...props }: TextareaProps) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      <textarea
        className={cn(
          "w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-md",
          "bg-white dark:bg-dark-bgSecondary text-gray-900 dark:text-gray-100",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent",
          "transition-colors duration-200 resize-none",
          error && "border-red-500 focus:ring-red-500",
          className
        )}
        rows={5}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

