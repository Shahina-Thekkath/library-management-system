// ============================================================
// BASE CLASS — src/LibraryItem.ts
// ============================================================
// 📘 LEARN: This is the PARENT class. It holds shared logic
// that ALL item types (Book, Magazine, DVD) will inherit.
// You write this logic ONCE here, and every child class
// gets it for free — that's the power of Inheritance.
//
// The keyword `abstract` means:
//  - You can NEVER do: new LibraryItem(...)
//  - It's ONLY meant to be extended by child classes
//  - `abstract getDetails()` FORCES every child class
//    to provide its own version of getDetails()
// ============================================================

import { ILibraryItem } from "./ILibraryItem";

export abstract class LibraryItem implements ILibraryItem {
    // 📘 LEARN: `protected` means this property is accessible
  // inside this class AND any child class, but NOT from outside.
  // Compare: `private` = only this class. `public` = anyone.

  protected _isCheckedOut: boolean = false;

  constructor(
    public readonly id: string,  // public readonly - visible everywhere, but can't be changed after creation
    public readonly title: string,
    public readonly year: number
     ) {}

      // Getter — a clean way to expose a private/protected value

      get isCheckedOut(): boolean {
        return this._isCheckedOut;
      }

       // SHARED LOGIC (Inheritance in action)
        // Both checkout() and returnItem() live here once.
        // Book, Magazine, and DVD all inherit these automatically.

        checkout(): void {
            if (this._isCheckedOut) {
                console.log(`"${this.title}" is already checked out.`);
            } else {
                this._isCheckedOut = true;
                console.log(` "${this.title}" checked out successfully`);
            }
        }

        returnItem(): void {
            if(!this._isCheckedOut) {
                console.log(`${this.title} is not checked out`);
            } else {
                this._isCheckedOut = false;
                console.log(`${this.title} returned successfully.`);
            }
        }

          // 📘 LEARN: `abstract` method — no body here.
          // Every child class MUST override this with its own version.
          // This is what enables POLYMORPHISM (same call, different result).

          abstract getDetails(): string;
}