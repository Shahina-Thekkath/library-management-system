// ============================================================
// CHILD CLASS 3 — src/DVD.ts
// ============================================================
// 📘 LEARN: A third child class showing the same inheritance
// pattern. DVD has its own unique properties (director, duration).
// All three classes (Book, Magazine, DVD) can be stored together
// in a `LibraryItem[]` array — because they all extend LibraryItem.
// When you call .getDetails() on any of them, TypeScript knows
// which version to run. That array of mixed types working
// through a shared interface is the REAL power of polymorphism.
// ============================================================

import { LibraryItem } from "./LibraryItem";

export class DVD extends LibraryItem {

    constructor(
        id: string,
        title: string,
        year: number,
        public readonly director: string,
        public readonly durationMins: number,
        public readonly rating: string
    ) {
        super(id, title, year);
    }

    override getDetails(): string {
        const status = this._isCheckedOut ? "Checked Out" : "Available";
        const hours = Math.floor(this.durationMins / 60);
        const mins = this.durationMins % 60;
        return (
            ` DVD\n`  +
            ` Title     :  ${this.title}\n`  +
            ` Director  :  ${this.director}\n`   +
            ` Duration  :  ${hours}h ${mins}m\n`  +
            ` Rating    :  ${this.rating}\n`   +
            ` Year      :  ${this.year}\n`    +
            ` Status    :  ${status}`
        );
    }
}