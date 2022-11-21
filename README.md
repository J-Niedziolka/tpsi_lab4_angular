# Lab4

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.0.0.

## Required tasks (finished)
1. Utwórz nowy projekt zawierający routing.
2. Utwórz cztery podstrony (za pomocą komponentów), pomiędzy którymi
można będzie się przenosić za pomocą modułu routingu.
○ Stwórz podstrony: strona startowa, kontakt, lista zadań, prywatne
dane.
○ Strona powinna zawierać menu oraz część główną (treść strony).
3. Dodaj formularz logowania, który będzie blokował dostęp do części z danymi
w aplikacji.
○ Wykorzystaj serwis do zweryfikowania użytkownika.
○ Dodaj przekierowanie do strony głównej przy poprawnym zalogowaniu
oraz komunikat błędu przy nieprawidłowych danych.
4. Po wejściu na prywatną część strony, niezalogowany użytkownik powinien
zostać przeniesiony na stronę logowania.
5. Wykorzystaj dyrektywę warunkową *ngIf oraz metodę subscribe() RxJS w celu
dostosowania menu głównego do aktualnego stanu zalogowania:
○ przycisk Zaloguj się, gdy użytkownik nie będzie zalogowany
○ przycisk Wyloguj się, gdy użytkownik jest aktualnie zalogowany

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
