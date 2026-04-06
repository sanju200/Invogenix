import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {
  // Save data: Convert objects to strings using JSON.stringify
  setItem(key: string, value: any): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  // Retrieve data: Parse strings back into objects using JSON.parse
  getItem(key: string): any {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : null;
  }

  // Remove a specific item
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  // Clear all local storage for the domain
  clear(): void {
    localStorage.clear();
  }
}
