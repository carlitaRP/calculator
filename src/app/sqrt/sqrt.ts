
export function sqrt(oper1: number): number {
    if (oper1 < 0) {
        throw new Error("Cannot calculate square root of a negative number");
    }
    
    return Math.sqrt(oper1);
}

