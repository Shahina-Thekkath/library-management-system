// ============================================================
// ENTRY POINT — src/main.ts
// ============================================================
// 📘 LEARN: This file is the "demo script" — it creates objects,
// calls methods, and shows all OOP concepts working together.
// Run this file after compiling to see the output.
// ============================================================

import { Library } from "./Library";
import { Book } from "./Book";
import { Magazine } from "./Magazine";
import { DVD } from "./DVD";
import { LibraryItem } from "./LibraryItem"; //used to demonstrate polymorphism explicitly

const library = new Library("City Central Library");

console.log("\n  Welcome to the Library Management System");
console.log("━".repeat(50));

// ── STEP 2: Create items (each a different class) ────────────
// 📘 LEARN: Even though these are Book, Magazine, DVD objects,
// they can all be assigned to `LibraryItem` typed variables.
// TypeScript allows this because of inheritance.

const book1 = new Book(
  "B001",
  "Clean Code",
  2008,
  "Robert C. Martin",
  "978-013250884",
  431,
);
const book2 = new Book(
  "B002",
  "The Pragmatic Programmer",
  2019,
  "Andrew Hunt",
  "978-0135957059",
  352,
);
const mag1 = new Magazine(
  "M001",
  "MIT Technology Review",
  2024,
  112,
  "Technology",
);
const mag2 = new Magazine("M002", "National Geographic", 2023, 208, " Science");
const dvd1 = new DVD(
  "D001",
  "Inception",
  2010,
  "Christopher Nolan",
  148,
  "PG-13",
);
const dvd2 = new DVD("D002", "The Matrix", 1999, "The Wachowskis", 136, "R");

console.log("\n Adding items to the library......");
library.addItem(book1);
library.addItem(book2);
library.addItem(mag1);
library.addItem(mag2);
library.addItem(dvd1);
library.addItem(dvd2);

// 📘 POLYMORPHISM DEMO:
// The next call loops over a `LibraryItem[]` array containing
// Books, Magazines, and DVDs. When it calls item.getDetails(),
// TypeScript automatically picks the right version per class.
// ONE method call → THREE different outputs. That's polymorphism.

library.listAll();

console.log("\n\n Checkout operations:");
library.checkoutItem("B001");
library.checkoutItem("D001");
library.checkoutItem("B001"); // try checking out again (should warn)

console.log("\n Return operations:");
library.returnItem("B001");
library.returnItem("M001"); //not checked out (should warn)

library.search("code");
library.search("2010");

library.showAvailable();

// 📘 LEARN: This section shows polymorphism most clearly.
// We put different types into ONE array typed as `LibraryItem[]`.
// Calling getDetails() on each gives different output per class.

console.log("\n\n" + "=".repeat(50));
console.log("  Explicit Polymorphism Demo");
console.log("  Same method call -> different output per class");
console.log("=".repeat(50));

const mixedItems: LibraryItem[] = [book1, mag1, dvd1];
mixedItems.forEach((item) => {
  console.log("\n  -> Calling item.getDetails() in a", item.constructor.name);
  console.log(" " + item.getDetails().split("\n").join("\n "));
});

console.log("\n\n Program Complete.\n");
