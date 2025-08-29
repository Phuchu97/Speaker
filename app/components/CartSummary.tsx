import type {CartApiQueryFragment} from 'storefrontapi.generated';
import type {CartLayout} from '~/components/CartMain';
import {CartForm, Money, type OptimisticCart} from '@shopify/hydrogen';
import {useRef} from 'react';
import {FetcherWithComponents} from 'react-router';

type CartSummaryProps = {
  cart: OptimisticCart<CartApiQueryFragment | null>;
  layout: CartLayout;
};

export function CartSummary({cart, layout}: CartSummaryProps) {
  return (
    <div className="bg-gray-50 p-6 space-y-6">
      {/* Summary Header */}
      <div className="border-b border-gray-200 pb-4">
        <h3 className="text-lg font-semibold text-gray-900">Order Summary</h3>
      </div>

      {/* Price Breakdown */}
      <div className="space-y-3">
        {/* Subtotal */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-medium text-gray-900">
            {cart.cost?.subtotalAmount?.amount ? (
              <Money data={cart.cost?.subtotalAmount} />
            ) : (
              '-'
            )}
          </span>
        </div>

        {/* Shipping */}
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-gray-900">
            {cart.cost?.subtotalAmount?.amount && 
             parseFloat(cart.cost.subtotalAmount.amount) >= 50 ? (
              <span className="text-green-600">Free</span>
            ) : (
              <span>$5.99</span>
            )}
          </span>
        </div>

        {/* Tax */}
        {cart.cost?.totalTaxAmount?.amount && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Tax</span>
            <span className="font-medium text-gray-900">
              <Money data={cart.cost.totalTaxAmount} />
            </span>
          </div>
        )}

        {/* Discounts */}
        <CartDiscounts discountCodes={cart.discountCodes} />
        
        {/* Gift Cards */}
        <CartGiftCard giftCardCodes={cart.appliedGiftCards} />

        {/* Total */}
        <div className="border-t border-gray-200 pt-3">
          <div className="flex justify-between text-lg font-semibold">
            <span className="text-gray-900">Total</span>
            <span className="text-gray-900">
              {cart.cost?.totalAmount?.amount ? (
                <Money data={cart.cost.totalAmount} />
              ) : (
                '-'
              )}
            </span>
          </div>
        </div>
      </div>

      {/* Checkout Actions */}
      <CartCheckoutActions checkoutUrl={cart.checkoutUrl} />
    </div>
  );
}

function CartCheckoutActions({checkoutUrl}: {checkoutUrl?: string}) {
  if (!checkoutUrl) return null;

  return (
    <div className="space-y-3">
      <a 
        href={checkoutUrl} 
        target="_self"
        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium text-center hover:bg-blue-700 transition-colors duration-200 block"
      >
        Continue to Checkout
      </a>
      
      <div className="text-center">
        <p className="text-xs text-gray-500">
          Secure checkout powered by Shopify
        </p>
      </div>
    </div>
  );
}

function CartDiscounts({
  discountCodes,
}: {
  discountCodes?: CartApiQueryFragment['discountCodes'];
}) {
  const codes: string[] =
    discountCodes
      ?.filter((discount) => discount.applicable)
      ?.map(({code}) => code) || [];

  return (
    <>
      {/* Applied Discounts */}
      {codes.length > 0 && (
        <div className="space-y-2">
          {codes.map((code) => (
            <div key={code} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Discount ({code})</span>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-medium">Applied</span>
                <UpdateDiscountForm discountCodes={codes}>
                  <button 
                    type="submit"
                    className="text-red-600 hover:text-red-800 text-xs underline"
                  >
                    Remove
                  </button>
                </UpdateDiscountForm>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Discount Form */}
      <UpdateDiscountForm discountCodes={codes}>
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Have a discount code?
          </label>
          <div className="flex space-x-2">
            <input 
              type="text" 
              name="discountCode" 
              placeholder="Enter code" 
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              Apply
            </button>
          </div>
        </div>
      </UpdateDiscountForm>
    </>
  );
}

function UpdateDiscountForm({
  discountCodes,
  children,
}: {
  discountCodes?: string[];
  children: React.ReactNode;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.DiscountCodesUpdate}
      inputs={{
        discountCodes: discountCodes || [],
      }}
    >
      {children}
    </CartForm>
  );
}

function CartGiftCard({
  giftCardCodes,
}: {
  giftCardCodes: CartApiQueryFragment['appliedGiftCards'] | undefined;
}) {
  const appliedGiftCardCodes = useRef<string[]>([]);
  const giftCardCodeInput = useRef<HTMLInputElement>(null);
  const codes: string[] =
    giftCardCodes?.map(({lastCharacters}) => `***${lastCharacters}`) || [];

  function saveAppliedCode(code: string) {
    const formattedCode = code.replace(/\s/g, ''); // Remove spaces
    if (!appliedGiftCardCodes.current.includes(formattedCode)) {
      appliedGiftCardCodes.current.push(formattedCode);
    }
    if (giftCardCodeInput.current) {
      giftCardCodeInput.current.value = '';
    }
  }

  function removeAppliedCode() {
    appliedGiftCardCodes.current = [];
  }

  return (
    <>
      {/* Applied Gift Cards */}
      {codes.length > 0 && (
        <div className="space-y-2">
          {codes.map((code) => (
            <div key={code} className="flex justify-between items-center text-sm">
              <span className="text-gray-600">Gift Card ({code})</span>
              <div className="flex items-center space-x-2">
                <span className="text-green-600 font-medium">Applied</span>
                <UpdateGiftCardForm>
                  <button 
                    type="submit"
                    onClick={removeAppliedCode}
                    className="text-red-600 hover:text-red-800 text-xs underline"
                  >
                    Remove
                  </button>
                </UpdateGiftCardForm>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Add Gift Card Form */}
      <UpdateGiftCardForm
        giftCardCodes={appliedGiftCardCodes.current}
        saveAppliedCode={saveAppliedCode}
      >
        <div className="space-y-2">
          <label className="block text-sm font-medium text-gray-700">
            Have a gift card?
          </label>
          <div className="flex space-x-2">
            <input
              type="text"
              name="giftCardCode"
              placeholder="Enter code"
              ref={giftCardCodeInput}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button 
              type="submit"
              className="px-4 py-2 bg-gray-600 text-white text-sm rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              Apply
            </button>
          </div>
        </div>
      </UpdateGiftCardForm>
    </>
  );
}

function UpdateGiftCardForm({
  giftCardCodes,
  saveAppliedCode,
  children,
}: {
  giftCardCodes?: string[];
  saveAppliedCode?: (code: string) => void;
  removeAppliedCode?: () => void;
  children: React.ReactNode;
}) {
  return (
    <CartForm
      route="/cart"
      action={CartForm.ACTIONS.GiftCardCodesUpdate}
      inputs={{
        giftCardCodes: giftCardCodes || [],
      }}
    >
      {(fetcher: FetcherWithComponents<any>) => {
        const code = fetcher.formData?.get('giftCardCode');
        if (code && saveAppliedCode) {
          saveAppliedCode(code as string);
        }
        return children;
      }}
    </CartForm>
  );
}
