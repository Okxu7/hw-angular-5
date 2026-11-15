// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-unordered-list',
//   standalone: false,
//   styleUrl: './unordered-list.css',
//   templateUrl: './unordered-list.html',
// })
// export class UnorderedList {}


import { Component } from '@angular/core';

@Component({
  selector: 'app-unordered-list',
  standalone: false, // <-- Важливо для роботи через AppModule!
  templateUrl: './unordered-list.html', // перевірте, як саме називається ваш .html файл
  styleUrls: ['./unordered-list.css']   // перевірте назву вашого .css файлу
})
export class UnorderedList { // <-- Назва класу без слова Component, як у вашому app-module.ts
  listItems: string[] = [
    'Вивчити основи роботи з компонентами Angular',
    'Розібратися з передачею даних через @Input та @Output',
    'Опанувати роботу з @ViewChildren та @ContentChild',
    'Навчитися проектувати контент через ng-content'
  ];
}
