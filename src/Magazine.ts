// ============================================================
// CHILD CLASS 2 — src/Magazine.ts
// ============================================================
// 📘 LEARN: Same pattern as Book — extends LibraryItem,
// adds its own unique properties, and overrides getDetails().
// Notice how getDetails() returns completely different output
// than Book.getDetails() — same method name, different behaviour.
// That's POLYMORPHISM at work.
// ============================================================

import { LibraryItem } from "./LibraryItem";

export type MagazineCategory = "Technology" | " Science" | "Arts" | "Sports" | "Business";

export class Magazine extends LibraryItem {
    constructor(
        id: string,
        title: string,
        year: number,
        public readonly issueNumber: number,       //Magazine specific
        public readonly category: MagazineCategory 
    ) {
        super(id, title, year);
    }

    override getDetails(): string {
        const status = this._isCheckedOut ? "Checked Out" : "Available";

        return (
            ` MAGAZINE\n`   +
            ` Title    :  ${this.title}\n`  +
            ` Issue    :  ${this.issueNumber}\n`  +
            ` Category :  ${this.category}\n`   +
            ` Year     :  ${this.year}\n`   +
            ` Status   :  ${status}` 
        );
    }
}