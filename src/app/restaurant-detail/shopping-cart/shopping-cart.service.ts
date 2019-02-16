import { MenuItem } from './../menu-item.model';
import { CartItem } from './cart-item.model';
export class ShoppingCartService {
  items: CartItem[]= [];

  clear() {
    this.items = [];
   }

  add(item: MenuItem) {
    let foundItem = this.items.find((mItem) => mItem.menuItem.id === item.id);
    if (foundItem) {
      console.log('Encontrou o ITEM >>> ', item);
      foundItem.quantity += 1;
    } else {
      console.log('Item não encontrado, adicionando o novo ITEM >> ', item);
      this.items.push(new CartItem(item, 1));
    }
  }

  removeItem(item: CartItem) {
    this.items.splice(this.items.indexOf(item), 1);
  }

  total(): number {
    return this.items.map(item => item.value()).reduce((previous, value) => previous + value, 0);
   }

}
