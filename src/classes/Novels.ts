/**
 * Sample Base Class to demonsrate parent-child relationship
 */
class Novels {
  //using protected keyword for childclass to access the variable
  protected bookSalesCount: number;
  constructor(protected bookTitle: string, protected bookAuthor: string) {
    this.bookSalesCount = 0;
  }

  bookSales(salesCount: number) {
    this.bookSalesCount = salesCount;
  }

  getBookInfo() {
    console.log(
      this.bookTitle + " " + this.bookAuthor + " " + this.bookSalesCount
    );
  }

  /**
   * getter method to get the instance variables
   */
  get recentBookSales() {
    return this.bookSalesCount;
  }

  /**
   * setter method to set the instance variables
   */
  set updateBookSales(sales: number) {
    this.bookSalesCount += sales;
  }
}

const sampleBook = new Novels("The Philosophical Book", "Author X");
sampleBook.bookSales(100);
sampleBook.getBookInfo();
