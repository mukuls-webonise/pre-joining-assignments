var library = [{
  author: 'Bill Gates',
  title: 'The Road Ahead',
  readingStatus: true
}, {
  author: 'Steve Jobs',
  title: 'Walter Isaacson',
  readingStatus: true
}, {
  author: 'Suzanne Collins',
  title: 'Mockingjay: The Final Book of The Hunger Games',
  readingStatus: false
}];
for (var i in library) {
  var book = library[i];
  console.log("\nAuthor: "+ book.author +
    "\nTitle: "+ book.title +
    "\nReading Status: " + book.readingStatus);
}