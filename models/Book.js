export class Book {
  constructor(title, author, pages) {
    this.title = title
    this.author = author
    this.numberOfPages = pages
    this.sales = 0
  }

  get pages() {
    return this.number0fPages
  }

  get copiesSold() {
    return this.sales
  }

  set copiesSold(value) {
    if (value < 0)
      throw new Error('Value can\'t be negative')

    this.sales = value
  }
}

const book = new Book('Who Moved My Cheese?', 'Spencer Johnson', 96)
console.log(book.title) // Who Moved My Cheese console. log (book. pages); 1/96

try {
  book.pages = 96
}
catch (error) {
  console.log(error.message)
  // Cannot set property pages of #<Book> which has only a getter
}

console.log(book.copiesSold) // 0
book.copiesSold = 1
console.log(book.copiesSold) // 1

try {
  book.copiesSold = -2
}
catch (error) {
  console.log(error.message)// Value can't be negative
}

console.log(book.copiesSold) // 1
