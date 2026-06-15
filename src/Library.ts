// ============================================================
// MANAGER CLASS — src/Library.ts
// ============================================================
// 📘 LEARN: Library is NOT a LibraryItem — it doesn't extend it.
// Instead it CONTAINS a collection of LibraryItem objects.
// This is called COMPOSITION ("has-a" relationship).
//
// Contrast with inheritance ("is-a"):
//   Book IS-A LibraryItem  → use extends
//   Library HAS-A list of LibraryItems → use composition
//
// Notice the items array type: LibraryItem[]
// It can hold Books, Magazines, AND DVDs all in one array,
// because they all extend LibraryItem. When we call
// item.getDetails(), TypeScript picks the right version
// at runtime. This is RUNTIME POLYMORPHISM.
// ============================================================

import { LibraryItem } from "./LibraryItem";

export class Library {
  // 📘 LEARN: `private` — only methods inside this class can
  // touch `items`. External code must go through our methods.
  // This is ENCAPSULATION — hiding internal state.

  private items: LibraryItem[] = [];
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  addItem(item: LibraryItem): void {
    this.items.push(item);
    console.log(`Added: "${item.title}" [${item.id}]`);
  }

  // 📘 LEARN: We iterate over LibraryItem[], but item.getDetails()
  // calls each class's OWN version. This is polymorphism in action.

  listAll(): void {
    console.log(`\n${"=".repeat(50)}`);
    console.log(`${this.name} - ${this.items.length} item(s)`);
    console.log(`${"=".repeat(50)}`);

    if (this.items.length === 0) {
      console.log("   (No items in library)");
      return;
    }

    this.items.forEach((item, index) => {
      console.log(`\n [${index + 1}] ${item.getDetails()}`);
    });
  }

  checkoutItem(id: string): void {
    const item = this.findById(id);

    if (item) {
      item.checkout();
    } else {
      console.log(`Item with "${id}" not found`);
    }
  }

  returnItem(id: string): void {
    const item = this.findById(id);

    if(item) {
        item.returnItem();
    } else {
        console.log(`Item with ID "${id}" not found.`);
        
    }
  }

  // 📘 LEARN: TypeScript's type system lets us search across
  // ALL item types with one method. No need for separate
  // searchBooks(), searchMagazines(), searchDVDs() methods.

  search(keyword: string): void {
    const lower = keyword.toLowerCase();
    const results = this.items.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.id.toLowerCase().includes(lower),
    );

    console.log(`\n Search "${keyword}" - ${results.length} result(s):`);
    if (results.length === 0) {
      console.log("No items matched.");
    } else {
      results.forEach((item) => console.log(`\n ${item.getDetails()}`));
    }
  }

  showAvailable(): void {
    const available = this.items.filter((item) => !item.isCheckedOut);
    console.log(`\n Available items: ${available.length}`);
    available.forEach((item) =>
      console.log(`    • [${item.id}] ${item.title}`),
    );
  }

  // ── PRIVATE HELPER ───────────────────────────────────────
  // 📘 LEARN: Private helper — internal use only.
  // The `| undefined` return type means it might not find anything.

  private findById(id: string): LibraryItem | undefined {
    return this.items.find((item) => item.id === id);
  }
}
