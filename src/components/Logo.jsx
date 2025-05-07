
import React from 'react';
import { Aperture } from 'lucide-react';

export function Logo({ className = '' }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Aperture className="h-8 w-8 text-primary" />
      <span className="text-2xl font-bold text-foreground">SoftSell</span>
    </div>
  );
}
  