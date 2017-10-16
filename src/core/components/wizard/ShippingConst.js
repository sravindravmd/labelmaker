export const ShippingOptions = {
    ground: 1,
    priority: 2
};

export const ShippingValue = (weight,shippingOption ) => {
   const shippingRate = 0.40;
 let shippingCost = weight * shippingRate * (shippingOption === shippingOption.ground? 1:1.5);
 return shippingCost;
};
