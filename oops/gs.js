class User {

    constructor(name) {
      // invokes the setter
      this.name = name;
    }
  
    get name() {
      return this._name;
    }
  
    set name(value) {
      if (value.length < 4) {
        console.log("Name is too short.");
        return;
      }
      this._name = value;
    }
  
  }
  
  let user = new User("John"); // this uses getter property
  console.log(user.name); // John
  
  //this uses setter property
  user.name = "Harry" // Name is too short.
  console.log(user.name)