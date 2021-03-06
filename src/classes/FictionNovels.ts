/**
 * Child Class to demonsrate parent-child relationship using extend keyword
 */
class FictionNovels extends Novels {
  private bookType: string;
  private bookGenre: string;

  constructor(bookTitle: string, bookAuthor: string) {
    super(bookTitle, bookAuthor);
    this.bookType = "";
    this.bookGenre = "";
  }

  setBookDetails(bType: string, bGenre: string) {
    this.bookType = bType;
    this.bookGenre = bGenre;
  }

  /**
   * overiding parent class method and adding extra details
   */
  getBookInfo() {
    console.log(
      this.bookTitle +
        " " +
        this.bookAuthor +
        " " +
        this.bookSalesCount +
        " " +
        this.bookType +
        " " +
        this.bookGenre
    );
  }

  //static properties example
  static hardShellBookCoverPrice = "999";
  static softShellBookCoverPrice = "599";

  /**
   * static method example
   */
  static bookCover(type: string) {
    if (type === "hc") {
      return this.hardShellBookCoverPrice;
    } else if (type === "sc") {
      return this.softShellBookCoverPrice;
    } else {
      return "619";
    }
  }
}

const hpBooks = new FictionNovels("HP1", "JKRownling");
hpBooks.getBookInfo();

//calling getter method to check the sales count
console.log("The recent sales figure is " + hpBooks.recentBookSales);

hpBooks.bookSales(10000);
hpBooks.getBookInfo();

//calling set method to update the sales count
hpBooks.updateBookSales = 999;
console.log("The recent sales figure is " + hpBooks.recentBookSales);

hpBooks.setBookDetails("Fiction", "Fantansy");
hpBooks.getBookInfo();

//calling static methods and properties
console.log(FictionNovels.bookCover("sc"));
console.log(FictionNovels.hardShellBookCoverPrice);
