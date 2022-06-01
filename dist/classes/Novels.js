"use strict";
class Novels {
    constructor(bookTitle, bookAuthor) {
        this.bookTitle = bookTitle;
        this.bookAuthor = bookAuthor;
        this.bookSalesCount = 0;
    }
    bookSales(salesCount) {
        this.bookSalesCount = salesCount;
    }
    getBookInfo() {
        console.log(this.bookTitle + " " + this.bookAuthor + " " + this.bookSalesCount);
    }
    get recentBookSales() {
        return this.bookSalesCount;
    }
    set updateBookSales(sales) {
        this.bookSalesCount += sales;
    }
}
const sampleBook = new Novels("The Philosophical Book", "Author X");
sampleBook.bookSales(100);
sampleBook.getBookInfo();
