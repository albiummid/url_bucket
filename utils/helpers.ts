import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export const everyRequired = async (dataObject: Record<string, unknown>) => {
    const errs: string[] = [];
    Object.entries(dataObject).forEach(([key, value]) => {
        if (!value) {
            errs.push(key);
        }
    });
    if (errs.length) {
        throw new Error(
            errs.join(",") + ` ${errs.length > 1 ? "are" : "is"} required !`
        );
    }
};
