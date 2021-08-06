/*
1. DOM Selection
2. AddEvent listner
3. Basic Validation
4. Creating Element
5. Append
*/

const bookName = document.querySelector('#bookname')
const author = document.querySelector('#author')
const year = document.querySelector('#year')
const btn = document.querySelector('.btn')
const bookList = document.querySelector('#book-list')

btn.addEventListener('click', function(e){
    e.preventDefault();

    if(bookName.value == "" && author.value == "" && year.value == "") {
        alert('Please given a value.');
    }else{
        const newRow = document.createElement('tr');

        // Creating new Book Name
        const newBookName = document.createElement('th');
        newBookName.innerHTML = bookName.value;
        newRow.appendChild(newBookName);

        // creating new author name
        const newAuthor = document.createElement('th');
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        // creating new year.
        const newYear = document.createElement('th');
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        bookList.appendChild(newRow)

    }
});