let myLibrary = [];

const hob = new Book("The Hobbit", 'J.R.R. Tolkien', '295', 'read', 0);
const elect = new Book("Do Androids Dream of Electric Sheep\?", "Phillip K. Dick", '264', 'unread', 1);
myLibrary.push(hob);
myLibrary.push(elect);

function Book(title, author, pages, read, pos){
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.pos = pos;
}

const submitBtn = document.querySelector('#submit');
submitBtn.addEventListener("click", addBookToLibrary);



function addBookToLibrary(){
  var title = document.querySelector('#input-title').value;
  var author = document.querySelector("#input-author").value;
  var pages = document.querySelector("#input-pages").value;
  var read = document.querySelector("#input-read").checked;
  read == true ? read = "read" : read = "unread";
  var position = myLibrary.length;
  myLibrary.push(new Book(title, author, pages, read, position));//push book to array
  clearTable();//clear table
  displayLib();//display library array on webpage
  
}

function clearTable(){
  let table = document.getElementById('myTable');
  table.innerHTML='';
}

function rBookFromArray(title){
  for (let i = 0; i < myLibrary.length; i++){
    if (title == myLibrary[i]['title']) {
    myLibrary.splice(i, 1) }

  }
   
  clearTable();
  displayLib();
}

function displayLib(){
  var a1 = document.createElement('TR');
  a1.setAttribute('id', "myTr");
  document.getElementById('myTable').appendChild(a1);
  var a2 = document.createElement("TH");//create header 
  var htitle = document.createTextNode('Title');
  a2.appendChild(htitle);
  a1.appendChild(a2);
  var a3 = document.createElement("TH");//create header 
  var hauthor = document.createTextNode('Author');
  a3.appendChild(hauthor);
  a1.appendChild(a3);
  var a4 = document.createElement("TH");//create header 
  var hpages = document.createTextNode('Pages');
  a4.appendChild(hpages);
  a1.appendChild(a4);
  var a5 = document.createElement("TH");//create header 
  var hRead = document.createTextNode('Read');
  a5.appendChild(hRead);
  a1.appendChild(a5);
  var a6 = document.createElement("TH");//create header 
  var hRemove = document.createTextNode('Remove');
  a6.appendChild(hRemove);
  a1.appendChild(a6);
  
  for (let book in myLibrary){ //for each book in myLibraryArray 
    var y = document.createElement("TR");//create new row
    y.setAttribute("id", "myTr");
    document.getElementById("myTable").appendChild(y);

    var z1 = document.createElement("TD");//create title cell
    z1.setAttribute("id", "TD");
    var t1 = document.createTextNode(myLibrary[book]["title"]);
    z1.appendChild(t1);
    y.appendChild(z1);

    var z2 = document.createElement("TD");//create author cell
    z2.setAttribute("id", "TD");
    var t2 = document.createTextNode(myLibrary[book]["author"]);
    z2.appendChild(t2);
    y.appendChild(z2);

    var z3 = document.createElement("TD");//pages cell
    z3.setAttribute("id", "TD");
    var t3 = document.createTextNode(myLibrary[book]["pages"]);
    z3.appendChild(t3);
    y.appendChild(z3);

    var z4 = document.createElement("TD");//read cell
    z4.setAttribute("id", "TD");
    var t4 = document.createTextNode(myLibrary[book]["read"]);
    z4.appendChild(t4);
    y.appendChild(z4);

    var z5 = document.createElement("TD");//remove cell
    z4.setAttribute("id", "TD");
    var removeButton = document.createElement('button');

  //event
    removeButton.addEventListener("click", () => {
      rBookFromArray(myLibrary[book]['title']);// remove from myLibrary array and displaytable
    });


    removeButton.innerText = "Remove";
    removeButton.id = `removeButton`;//-#${myLibrary[book]["pos"]
    z5.appendChild(removeButton);
    y.appendChild(z5);

  }

}

clearTable();
displayLib();


