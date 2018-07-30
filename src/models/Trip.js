class Trip {
  constructor({ 
    id,
    name,
    description,
    destination,
    userId,
   } = {}) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.destination = destination;
      this.userId = userId;
  }
}

module.exports = Trip;