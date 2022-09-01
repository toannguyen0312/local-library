function getTotalBooksCount(books) {
  return books.reduce((sum, a) => sum + 1, 0);
}

function getTotalAccountsCount(accounts) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  let bookBorrowed = books.filter((book) => book.borrows.filter((borrow) => borrow.returned === false).length > 0);
  return bookBorrowed.length;
}

function genreBookHelper(books) {
  return books.map((book) => book.genre);
}

function getMostCommonGenres(books) {
  let result = [];
  let genreBook = genreBookHelper(books);
  
  genreBook.forEach((genre) => {
    const existGenre = result.find((r) => r.name === genre);
    if(existGenre) {
      existGenre.count++;
    } else {
      result.push({name: genre, count: 1});
    }
  });
  return result.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
  
}

function getMostPopularBooks(books) {
  
  return books.map((book) => {
    return {name: book.title, count: book.borrows.length}
  })
  .sort((a, b) => (a.count < b.count ? 1 : -1))
  .slice(0, 5);
}

function getMostPopularAuthors(books, authors) {
  // 1. .map to create an array of object that looks like
  const temp = books.map(book => {
    const author = authors.find(author => author.id === book.authorId ); 
    return { name: `${author.name.first} ${author.name.last}`, count: book.borrows.length}
  });
  
  let result = [];
  temp.forEach(obj => {
    const bookExists = result.find((r) => r.name === obj.name)
    if (bookExists) {
      // sum
      bookExists.count += obj.count;
    } else {
      result.push(obj)
    }
  });
  return result.sort((a, b) => (a.count < b.count ? 1 : -1)).slice(0, 5);
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
