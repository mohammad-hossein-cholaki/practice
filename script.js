function readingList(books) {
  // Write your code here...

  
  let content= document.querySelector("#content");
  
  let ul =document.createElement("ul");
  ul.style.width="400px";

  for(let i=0; i<books.length; i++){
    
    let li= document.createElement("li");
    let p= document.createElement("p");
    let img= document.createElement("img");
    let a= document.createElement("a");

    p.innerHTML=books[i].title +" "+"by"+" "+books[i].author;

    img.src=books[i].url;
    a.href=books[i].url;
    img.classList.add("customize-image");
    p.classList.add("customize-p");
    li.style.borderRadius="15px";
    
    a.appendChild(img);
    li.appendChild(a);
    li.appendChild(p);
    ul.appendChild(li);


    if(books[i].alreadyRead===true){
      li.style.backgroundColor="green"
    }else{
      li.style.backgroundColor="red"
    }

  }
content.appendChild(ul)
}

const books = [
  {
    title: "The Design of Everyday Things",
    author: "Don Norman",
    alreadyRead: false,
    url: "https://m.media-amazon.com/images/I/51-yJS95QML.jpg"
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    url: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1295465264i/8884400.jpg"
  },
  {
    title: "The Pragmatic Programmer",
    author: "Andrew Hunt",
    alreadyRead: true,
    url: "https://m.media-amazon.com/images/I/71f743sOPoL.jpg"
  },
]

readingList(books)
