import { create } from "zustand";
import { Product } from "../types";
import {persist,createJSONStorage} from 'zustand/middleware'

import { toast } from "react-hot-toast";
interface CartStore {
    items:Product[]
    addItem: (data: Product, quantity: number) => void;
    removeItem : (id:string ) => void
    removeAll : ()=>void
    editQuantity: (id: string, quantity: number) => void;
    incrementQuantity: (id: string) => void;
    decrementQuantity: (id: string) => void;
}


const useCart = create(persist<CartStore>((set,get)=> ({
    items : [],
    addItem: (data: Product, quantity: number) => {
        const currentItems = get().items;
        const existingItemIndex = currentItems.findIndex((item) => item.id === data.id);
    
        if (existingItemIndex !== -1) {
            // If the item exists, update its quantity
            const updatedItems = [...currentItems];
            updatedItems[existingItemIndex] = {
                ...updatedItems[existingItemIndex],
                quantity: updatedItems[existingItemIndex].quantity + quantity,
            };
            set({ items: updatedItems });
            toast.success('Item quantity updated in the cart.');
        } else {
            // If the item is not in the cart, add it with the specified quantity
            set({ items: [...currentItems, { ...data, quantity }] });
            toast.success(`${quantity} ${data.name} added to cart.`);
        }
    },
    removeItem : (id:string) => {
        set({items: [...get().items.filter((item)=>item.id !== id)]})
        toast.success('Item remove form the cart .')
    },
    removeAll : () => set({items:[]}),
    editQuantity: (id: string, quantity: number) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
            item.id === id ? { ...item, quantity: quantity } : item
        );
        set({ items: updatedItems });
       
    },
    incrementQuantity: (id: string) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
            item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        );
        set({ items: updatedItems });
     
    },
    decrementQuantity: (id: string) => {
        const currentItems = get().items;
        const updatedItems = currentItems.map((item) =>
            item.id === id && item.quantity > 1
                ? { ...item, quantity: item.quantity - 1 }
                : item
        );
        set({ items: updatedItems });
       
    },




}),{
    name:'cart-storage',
    storage:createJSONStorage(()=>localStorage)
}


))

export default useCart

  
    


