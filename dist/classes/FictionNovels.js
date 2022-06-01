"use strict";
class FictionNovels extends Novels {
    constructor(bookTitle, bookAuthor) {
        super(bookTitle, bookAuthor);
        this.bookType = "";
        this.bookGenre = "";
    }
    setBookDetails(bType, bGenre) {
        this.bookType = bType;
        this.bookGenre = bGenre;
    }
    getBookInfo() {
        console.log(this.bookTitle +
            " " +
            this.bookAuthor +
            " " +
            this.bookSalesCount +
            " " +
            this.bookType +
            " " +
            this.bookGenre);
    }
    static bookCover(type) {
        if (type === "hc") {
            return this.hardShellBookCoverPrice;
        }
        else if (type === "sc") {
            return this.softShellBookCoverPrice;
        }
        else {
            return "619";
        }
    }
}
FictionNovels.hardShellBookCoverPrice = "999";
FictionNovels.softShellBookCoverPrice = "599";
const hpBooks = new FictionNovels("HP1", "JKRownling");
hpBooks.getBookInfo();
console.log("The recent sales figure is " + hpBooks.recentBookSales);
hpBooks.bookSales(10000);
hpBooks.getBookInfo();
hpBooks.updateBookSales = 999;
console.log("The recent sales figure is " + hpBooks.recentBookSales);
hpBooks.setBookDetails("Fiction", "Fantansy");
hpBooks.getBookInfo();
console.log(FictionNovels.bookCover("sc"));
console.log(FictionNovels.hardShellBookCoverPrice);
