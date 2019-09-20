Data Model
Each card should get its data from an object instance of a Bookmark class

Each Bookmark should have the following properties:
id - must be a unique identifier (take a look into Date.now()!)
title
url
read - this should be a boolean!

Each Bookmark should have the following methods:
toggleRead()
This method should be invoked when someone changes whether a Bookmark has been read or not
This method should update the read property on the Bookmark
var bookID = 0;

class Bookmark {
  constructor() {
    this.id = id; >> take a look into Date.now()
    this.title = title; >> user website input
    this.url = url; >> user URL input
    this.read = true/false; >> boolean
  }
  toggleRead() {
    This method should be invoked when someone changes whether a Bookmark has been read or not
    This method should update the read property on the Bookmark

    When the user clicks on the “Delete” button, the link should be removed from the page AND removed from the data model

    CSS{
      A class of .read should be added to the bookmark
      When the user clicks the “Read” button, it should update that instance of the Bookmark class!
    }


  }

}

When the user clicks on the “Mark as Read” button:
CSS
.read {
  When the user clicks on the “Mark as Read” button:
  A class of .read should be added to the bookmark
  If it already has the class of .read, it should be removed

}


CSS NOTES
font-family: "Open Sans" Extra Bold 800, Regular 400
dark-background #455A64;
light-background #CFD8DC;
white: #FFFFFF;

yellow Enter button
background-color: #FFC107;
color: #FFFFFF;
on:hover
background-color: #FFD773
color: same
