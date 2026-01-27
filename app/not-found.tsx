import Link from "next/link";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="text-center">
        <h1 className="text-9xl font-heading font-bold text-brown mb-4">404</h1>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-brown mb-4">
          Page Not Found
        </h2>
        <p className="text-white mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button href="/">Go Back Home</Button>
      </div>
    </div>
  );
}

