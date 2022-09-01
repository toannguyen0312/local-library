function findAccountById(accounts, id) {
  let result = accounts.find((account) => account.id === id);
  return result;
}

function sortAccountsByLastName(accounts) {
  accounts.sort((accountA, accountB) =>
  accountA.name.last.toLowerCase() > accountB.name.last.toLowerCase() ? 1 : -1
 );
 return accounts;
}

function getTotalNumberOfBorrows(account, books) {
   let totalBorrows = 0;
   for (let i = 0; i < books.length; i++) {
    for (let j = 0; j < books[i].borrows.length; j++) {
     if (account.id === books[i].borrows[j].id) {
      totalBorrows += 1;
     }
    }
   }
 return totalBorrows;
}

function getBooksPossessedByAccount(account, books, authors) {
   let result = [];
   let borrowMatch = [];
   books.forEach((element) => {
    const borrowedBook = element.borrows;
    const newObj = {id: element.id, title: element.title, genre: element.genre, authorId: element.authorId, author: {}, borrows: {} };
     const { id, title, genre, authorId, author, borrows } = newObj;
     
     borrowedBook.forEach((element) => {
       if(element.id === account.id && element.returned === false) {
         result.push(newObj);
         borrowMatch.push[element];
         newObj.borrows = borrowMatch;
         newObj.author = authors.filter((auth) => auth.id === newObj.authorId)[0];
       }
     })
  })
  return result;
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
