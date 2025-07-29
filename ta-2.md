Here is your **Technical Assessment #2 (ta-02)**
Difficulty: **Easy**
Stack: **Node.js + Express (MongoDB optional)**
Language: **TypeScript**
Focus: **Data transformation and filtering with edge-case handling**

---

## 🧾 Real-World Scenario: **Order Total Calculation Service**

You are working on an e-commerce backend where orders are placed with multiple items. You need to implement a function that calculates the **total cost** of an order, **including taxes**, and applies **optional discounts**.

---

### 👨‍💻 Requirements:

* Accept an order object containing:

  * Customer info
  * List of items: each with price, quantity, and tax rate
  * Optional discount code
* Compute:

  * Subtotal (sum of item price × quantity)
  * Tax total
  * Discount total (only if valid code)
  * Final total = (subtotal + tax) − discount
* Return the breakdown as an object

---

## 📁 File: `calculateOrderTotal.ts`

```ts
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
```

---

## 🧪 File: `calculateOrderTotal.test.ts`

```ts
import { calculateOrderTotal } from './calculateOrderTotal';

describe('calculateOrderTotal', () => {
  it('calculates total without discount', () => {
    const order = {
      customerId: 'c1',
      items: [
        { name: 'Shirt', price: 500, quantity: 2, taxRate: 0.1 },
        { name: 'Jeans', price: 1200, quantity: 1, taxRate: 0.1 }
      ]
    };

    const result = calculateOrderTotal(order);
    expect(result).toEqual({
      subtotal: 2200,
      tax: 220,
      discount: 0,
      total: 2420
    });
  });

  it('applies valid discount code', () => {
    const order = {
      customerId: 'c2',
      items: [
        { name: 'Book', price: 300, quantity: 3, taxRate: 0.05 }
      ],
      discountCode: 'SAVE10'
    };

    const result = calculateOrderTotal(order);
    expect(result).toEqual({
      subtotal: 900,
      tax: 45,
      discount: 10,
      total: 935
    });
  });

  it('ignores invalid discount code', () => {
    const order = {
      customerId: 'c3',
      items: [
        { name: 'Pen', price: 50, quantity: 10, taxRate: 0.18 }
      ],
      discountCode: 'FAKECODE'
    };

    const result = calculateOrderTotal(order);
    expect(result).toEqual({
      subtotal: 500,
      tax: 90,
      discount: 0,
      total: 590
    });
  });

  it('handles empty item list', () => {
    const order = {
      customerId: 'c4',
      items: []
    };

    const result = calculateOrderTotal(order);
    expect(result).toEqual({
      subtotal: 0,
      tax: 0,
      discount: 0,
      total: 0
    });
  });
});
```

---

## ⚠️ Real-World Edge Cases to Handle

| Scenario                             | Required?  | Notes                                |
| ------------------------------------ | ---------- | ------------------------------------ |
| Order with no items                  | ✅ Yes      | Should return zeros                  |
| Item with 0 quantity                 | ✅ Yes      | Should not contribute to total       |
| Invalid discount code                | ✅ Yes      | Ignore it silently                   |
| Tax rate of 0                        | ✅ Yes      | Means tax-exempt                     |
| Subtotal < discount                  | ✅ Optional | Never let total go below 0           |
| Round everything to 2 decimal places | ✅ Yes      | Use `Number(x.toFixed(2))` or helper |

---

## 🧹 Best Practice Reminders

* Avoid mutating original input
* Use helper functions (e.g., for tax, discount, rounding)
* Favor `reduce()` for aggregate totals
* Add safe checks for price, quantity types

---

Would you like me to generate `ta-03` (medium difficulty) next after you finish this one?
