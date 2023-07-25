export type Discount = {
    code: string,
    value: number
}

export const ValidDiscounts: Discount[] = [
    {
        code: "DTO10",
        value: 0.1
    },
    {
        code: "DTO50",
        value: 0.5
    }
]