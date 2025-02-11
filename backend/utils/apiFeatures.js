class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  search() {
    let keyword = this.queryString.keyword
      ? {
          name: {
            $regex: this.queryString.keyword,
            $options: "i",
          },
        }
      : {};

    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    const queryStrCopy = { ...this.queryString };

    const removeFields = ["keyword", "limit", "page"];
    removeFields.forEach((field) => delete queryStrCopy[field]);

    this.query = this.query.find(queryStrCopy);
    return this;
  }
}

export default APIFeatures;
