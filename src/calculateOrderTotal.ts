type OrderItem = {
    name: string;
    price: number;
    quantity: number;
    taxRate: number; // e.g., 0.18 for 18%
};

type Order = {
    customerId: string;
    items: OrderItem[];
    discountCode?: string;
};

type OrderSummary = {
    subtotal: number;
    tax: number;
    discount: number;
    total: number;
};

const VALID_DISCOUNT_CODES: Record<string, number> = {
    SAVE10: 10, // 10 flat off
    SAVE20: 20, // 20 flat off
};

function calculateSubTotal(items: OrderItem[]): number {
    return items.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity;
    }, 0);
}

function calculateTotalTax(items: OrderItem[]): number {
    return items.reduce((acc, curr) => {
        return acc + curr.price * curr.quantity * curr.taxRate;
    }, 0);
}

// function calculateDiscount(code: string, subtotal: number): number {
//     // if (code === 'SAVE10') return subtotal * 0.1;
//     // if (code === 'SAVE20') return subtotal * 0.2;
//     // return 0;
//     const discountPercentage = VALID_DISCOUNT_CODES[code];
//     return discountPercentage ? subtotal * (discountPercentage / 100) : 0;
// }
function calculateDiscount(code: string | undefined, subtotal: number): number {
    const percentage = VALID_DISCOUNT_CODES[code ?? ''];
    return percentage ? subtotal * (percentage / 100) : 0;
}

function round(value: number): number {
    return Number(value.toFixed(2));
}


// ✅ FUNCTION TO IMPLEMENT
export function calculateOrderTotal(order: Order): OrderSummary {
    // ✅ TODO:
    const validItems = order.items.filter(item =>
        item.price >= 0 && item.quantity > 0 && item.taxRate >= 0
    );


    // 1. Validate the order and items
        if (validItems.length === 0) {
        return { subtotal: 0, tax: 0, discount: 0, total: 0 };
    }
    // 2. Calculate subtotal (price * quantity)
    const subtotal = calculateSubTotal(validItems);
    // 3. Calculate total tax (based on each item's taxRate)
    const totalTax = calculateTotalTax(validItems);
    // 4. Apply discount only if the code is valid
    // const totalDiscount = order?.discountCode
    //     ? calculateDiscount(order?.discountCode, subtotal)
    //     : 0;
    const totalDiscount = calculateDiscount(order.discountCode, subtotal);
    // 5. Return the full breakdown rounded to 2 decimal places
    const total = subtotal - totalDiscount + totalTax;
    // TBD

    return {
        subtotal: round(subtotal),
        tax: round(totalTax),
        discount: round(totalDiscount),
        total: round(total),
    };
}
