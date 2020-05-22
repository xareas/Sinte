namespace Sinte.Northwind {
    export enum OrderShippingState {
        NotShipped = 0,
        Shipped = 1
    }
    Serenity.Decorators.registerEnumType(OrderShippingState, 'Sinte.Northwind.OrderShippingState', 'Northwind.OrderShippingState');
}
