// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-card-block',
//   standalone: false,
//   styleUrl: './card-block.css',
//   templateUrl: './card-block.html',
// })
// export class CardBlock {}


// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-card-block',
//   imports: [],
//   templateUrl: './card-block.html',
//   styleUrl: './card-block.css'
// })
// export class CardBlock {
//   // 1. Вхідні дані: отримуємо один товар від батька
//   @Input() product: any;

//   // 2. Вихідна подія: створюємо "передавач" даних назад батькові
//   @Output() selectProduct = new EventEmitter<any>();

//   // 3. Метод кнопки «Ознайомитися»: відправляє товар батькові
//   showInfo(): void {
//     this.selectProduct.emit(this.product);
//   }
// }

// import { Component, Input, Output, EventEmitter } from '@angular/core';

// @Component({
//   selector: 'app-card-block',
//   standalone: false, // <-- ДОДАЛИ ЦЕЙ РЯДОК ДЛЯ СТАРОЇ ВЕРСІЇ (NgModule)
//   templateUrl: './card-block.html',
//   styleUrl: './card-block.css'
// })
// export class CardBlock {
//   @Input() product: any;
//   @Output() selectProduct = new EventEmitter<any>();

//   showInfo(): void {
//     this.selectProduct.emit(this.product);
//   }
// }

import {
  Component,
  Input,
  Output,
  EventEmitter,
  ContentChild,
  ElementRef,
  AfterContentInit
} from '@angular/core';

@Component({
  selector: 'app-card-block',
  standalone: false,
  templateUrl: './card-block.html',
  styleUrl: './card-block.css'
})
export class CardBlock implements AfterContentInit {

  // Завдання 1
  @Input() product: any;
  @Output() selectProduct = new EventEmitter<any>();

  showInfo(): void {
    this.selectProduct.emit(this.product);
  }

  // Завдання 2
  discount: number = 0;

  setDiscount(): void {
    this.discount = 15;
  }

  // Завдання 3
  @ContentChild('colorTag', { read: ElementRef })
  colorElement!: ElementRef;

  // ngAfterContentInit(): void {
  //   const color = this.colorElement.nativeElement.textContent.trim();

  //   this.colorElement.nativeElement.style.backgroundColor = color;
  // }
 

// Словник перекладу кольорів
colorTranslations: { [key: string]: string } = {
  lightblue: 'Світло-блакитний',
  lightgreen: 'Світло-зелений',
  lightpink: 'Світло-рожевий'
};

ngAfterContentInit(): void {
  if (this.colorElement) {
    const nativeEl = this.colorElement.nativeElement;
    const colorValue = nativeEl.textContent?.trim(); // наприклад, 'lightpink'

    if (colorValue) {
      // 1. Встановлюємо фон англійською назвою та розширюємо його
      nativeEl.style.backgroundColor = colorValue;
      nativeEl.style.padding = '6px 14px';
      nativeEl.style.display = 'inline-block';
      nativeEl.style.borderRadius = '4px';

      // 2. Змінюємо сам текст у тегу <b> на український
      if (this.colorTranslations[colorValue]) {
        nativeEl.textContent = this.colorTranslations[colorValue];
      }
    }
  }
}
  
}
