// ============================================================
// CHILD CLASS 1 — src/Book.ts
// ============================================================
// 📘 LEARN: `extends LibraryItem` means Book INHERITS everything
// from LibraryItem — all its properties and methods.
// Book only needs to define what makes it UNIQUE (author, isbn, pages)
// and override getDetails() with its own implementation.
//
// This is INHERITANCE: Book IS-A LibraryItem.
// This is POLYMORPHISM: Book has its own getDetails() that returns
// book-specific info, different from Magazine or DVD.
// ===========================================================

import { LibraryItem } from "./LibraryItem";

export class Book extends LibraryItem {
  constructor(
    id: string,
    title: string,
    year: number,
    public readonly author: string, // Book-specific property
    public readonly isbn: string,
    public readonly pages: number,
  ) {
    // 📘 LEARN: `super(...)` calls the PARENT class constructor.
    // You MUST call super() before accessing `this` in a child class.
    super(id, title, year);
  }

  // 📘 LEARN: `override` keyword (TypeScript 4.3+) makes it explicit
  // that we're intentionally replacing the parent's abstract method.
  // It's good practice — TypeScript will warn you if you typo the name.

  override getDetails(): string {
    const status = this._isCheckedOut ? " Checked Out" : "Available";
    return (
      ` BOOK\n` +
      ` Title  :  ${this.title}\n` +
      ` Author :  ${this.author}\n` +
      ` Year   :  ${this.year}\n` +
      ` Pages  :  ${this.pages}\n` +
      ` ISBN   :  ${this.isbn}\n` +
      ` Status :  ${status}`
    );
  }
}
