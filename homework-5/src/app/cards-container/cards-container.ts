// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cards-container',
//   standalone: false,
//   styleUrl: './cards-container.css',
//   templateUrl: './cards-container.html',
// })
// export class CardsContainer {}


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-cards-container',
//   standalone: false, // <-- ДОДАЛИ ЦЕЙ РЯДОК (і прибрали imports: [...])
//   templateUrl: './cards-container.html',
//   styleUrl: './cards-container.css'
// })
// export class CardsContainer {
//   products = [
//     { id: 1, name: 'Ноутбук Asus', price: 110, description: 'Потужний ноутбук для роботи та навчання' },
//     { id: 2, name: 'Мишка Logitech', price: 120, description: 'Бездротова ергономічна мишка' },
//     { id: 3, name: 'Клавіатура Keychron', price: 130, description: 'Механічна клавіатура з підсвіткою' },
//   ];

//   selectedProduct: any = null;

//   onSelectProduct(productData: any): void {
//     this.selectedProduct = productData;
//   }
// }

import { Component, ViewChildren, QueryList } from '@angular/core';
import { CardBlock } from '../card-block/card-block';

@Component({
  selector: 'app-cards-container',
  standalone: false,
  templateUrl: './cards-container.html',
  styleUrl: './cards-container.css'
})
export class CardsContainer {
  products = [
    { id: 1, name: 'Ноутбук Asus', price: 110, description: 'Потужний ноутбук для роботи та навчання',
    color: 'lightblue' },
    { id: 2, name: 'Мишка Logitech', price: 120, description: 'Бездротова ергономічна мишка',
    color: 'lightgreen' },
    { id: 3, name: 'Клавіатура Keychron', price: 130, description: 'Механічна клавіатура з підсвіткою',
    color: 'lightpink' },
  ];

  selectedProduct: any = null;

  // ЗАВДАННЯ 2: Отримуємо посилання на всі дочірні компоненти CardBlock
  @ViewChildren(CardBlock) cardBlocks!: QueryList<CardBlock>;

  onSelectProduct(productData: any): void {
    this.selectedProduct = productData;
  }

  // ЗАВДАННЯ 2: Метод кнопки «Хочу знижку»
  giveDiscount(): void {
    // 1. Вмикаємо знижку 15 у кожному дочірньому компоненті
    this.cardBlocks.forEach((card) => {
      card.setDiscount();
    });

    // 2. Виводимо в консоль масив посилань на дочірні компоненти для перевірки
    console.log('Масив посилань на дочірні компоненти:', this.cardBlocks.toArray());
    console.log('Перевірка масиву products (price залишився незмінним):', this.products);
  }
}