import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatDate(data:number) {
  return new Intl.DateTimeFormat("en", { dateStyle: "long" }).format(data);
}

