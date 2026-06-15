// ============================================================
// INTERFACES — src/ILibraryItem.ts
// ============================================================
// 📘 LEARN: An interface is a "contract".
// Any class that says `implements ILibraryItem` MUST have
// all the properties and methods listed here — or TypeScript
// will give you a compile error. This ensures consistency
// across ALL item types (Book, Magazine, DVD, etc.)
// ============================================================

export interface ILibraryItem {
    id: string;
    title: string;
    isCheckedOut: boolean;

    getDetails(): string;  //Each class will implement this differently thru polymorphism
    checkout(): void;
    returnItem(): void;
}