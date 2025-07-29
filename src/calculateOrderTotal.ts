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
  'SAVE10': 10,  // 10 flat off
  'SAVE20': 20,  // 20 flat off
};

// ✅ FUNCTION TO IMPLEMENT
export function calculateOrderTotal(order: Order): OrderSummary {
  // ✅ TODO:
  // 1. Validate the order and items
  // 2. Calculate subtotal (price * quantity)
  // 3. Calculate total tax (based on each item's taxRate)
  // 4. Apply discount only if the code is valid
  // 5. Return the full breakdown rounded to 2 decimal places

  // TBD

  return {
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0
  };
}
