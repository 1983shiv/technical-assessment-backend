import { calculateOrderTotal } from '../calculateOrderTotal';

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
