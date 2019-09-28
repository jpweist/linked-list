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
  }
  addTotalBookmarks() {
    this.totalBookmarks++;

  }
  deleteBookmark() {
    this.totalBookmarks--;

  }

}
