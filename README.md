# Library Management System

A command-line application built with **TypeScript** demonstrating core OOP principles.

## Concepts Covered
- **Inheritance** — `Book`, `Magazine`, and `DVD` extend a shared `LibraryItem` base class
- **Polymorphism** — `getDetails()` behaves differently per class
- **Encapsulation** — private/protected access modifiers control data access
- **Interfaces** — `ILibraryItem` enforces a contract across all item types
- **Composition** — `Library` class manages a collection of `LibraryItem` objects

## Project Structure
src/

├── ILibraryItem.ts   # Interface

├── LibraryItem.ts    # Abstract base class

├── Book.ts           # Child class

├── Magazine.ts       # Child class

├── DVD.ts            # Child class

├── Library.ts        # Manager class

└── main.ts           # Entry point


## How to Run
```bash
npm install
npm run dev
```

## Stage and commit everything
git add .
git commit -m "Initial Commit"

## Push to GitHub
git remote add origin https://github.com/Shahina-Thekkath/library-management-system.git
git branch -M main
git push -u origin main

