//USER CRUD OPERATION
/* GET ALL USER */
http://localhost:3000/users

/* CREATE USERS */
http://localhost:3000/users
body:
    {
        username:"venkatesh"
    }

/* Edit USER */
http://localhost:3000/users/:userId
body:
    {
        username:new user
    }

/* DELETE USER */
http://localhost:3000/users/:userId
NOTE:-
    Due to Foreign Key constraint the delete operation was not performed

/////////////////////////////////////////
//BOOK CRUD OPERATION

/* GET ALL BOOKS */
http://localhost:3000/books

/* CREATE BOOKS */
http://localhost:3000/books
{
    "title": "The Great Gatsby",
    "author": {
        "id": 1
    }
}

/* EDIT BOOKS */
http://localhost:3000/books/:booksId
{
    username:new user
}

///////////////////////////
AUTHOR CRUD OPERATION

/* GET AUTHORS */
http://localhost:3000/authors

/* CREATE AUTHORS */
http://localhost:3000/authors
{
  "name": "Thomas edison"

}

/* UPDATE AUTHORS */
http://localhost:3000/authors/:authorId

//////////////
AUDIT LOGS

/* GET AUDIT LOGS */
http://localhost:3000/auditlogs

////////////////
/* CREATE BORROWINGS */

http://localhost:3000/borrow/borrow
{
  "userId":5,
  "bookId":334
}

/*RETURN BORROWINGS */
http://localhost:3000/borrow/return/:borrowId
{
  "userId":4,
  "bookId":334
}