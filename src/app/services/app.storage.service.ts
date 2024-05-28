// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class AppStorageService {

//   constructor() { }
// }
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppStorageService {

  private ngxSnake = 'ngx_snake';

  public store(score: number) {
    localStorage.setItem(this.ngxSnake, JSON.stringify({ 'best_score': score }));
  }

  public retrieve() {
    let storage = this.parse();
    if (!storage) {
      this.store(0);
      storage = this.parse();
    }

    return storage.best_score;
  }

  private parse() {
    const storedValue = localStorage.getItem(this.ngxSnake);
  if (storedValue) {
    try {
      return JSON.parse(storedValue);
    } catch (error) {
      console.error('Error parsing stored JSON:', error);
    }
  }
  return null;
  }
}