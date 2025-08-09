import {type ClassValue, clsx} from "clsx";
import {twMerge} from "tailwind-merge";



// Step 1: Takes unlimited arguments (inputs).

// Step 2: Passes them to clsx to flatten and clean them into a single string.

// Step 3: Passes that string to twMerge to resolve Tailwind class conflicts.

// Step 4: Returns the merged class string.

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatSize(bytes: number): string {
  if (bytes === 0) return '0 Bytes';

  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];

  // Determine the appropriate unit by calculating the log
  const i = Math.floor(Math.log(bytes) / Math.log(k));

  // Format with 2 decimal places and round
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

export const generateUUID = () => crypto.randomUUID();