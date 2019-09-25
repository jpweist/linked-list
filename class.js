class Bookmark {
  constructor(title, url) {
    this.id = Date.now().toString();
    this.title = title;
    this.url = url;
    this.read = false;
  }
  toggleRead(input) {
    this.read = input;
    // This method should be invoked when someone changes whether a Bookmark has been read or not
    // This method should update the read property on the Bookmark
    //
    // When the user clicks on the “Delete” button, the link should be removed from the page AND removed from the data model


  }
}
