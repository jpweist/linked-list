class Bookmark {
  constructor(title, url) {
    this.id = Date.now().toString();
    this.title = title;
    this.url = url;
    this.read = false;
    this.totalBookmarks = 0;
    this.totalRead = 0;
  }
  toggleRead() {
    if (this.read === false) {
      this.read = !false;
      this.totalRead++;
    }
    else {
      this.read = !true;
      this.totalRead--;
    }
    // This method should be invoked when someone changes whether a Bookmark has been read or not
    // This method should update the read property on the Bookmark
    //
    // When the user clicks on the “Delete” button, the link should be removed from the page AND removed from the data model

  }
  addTotalBookmarks() {
    this.totalBookmarks++;
  }
  deleteBookmark() {
    this.totalBookmarks--;
  }

}
