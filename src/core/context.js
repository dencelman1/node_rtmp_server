
export default (
  function (c) {
    this.config = c;
    this.sessions = new Map();
    this.broadcasts = new Map();
  }
)
