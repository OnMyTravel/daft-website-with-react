import Trip from '../models/Trip'

class TripApi {
  constructor({ httpClient } = {}) {
    this.httpClient = httpClient;
  }

  getAll() {
    return this.httpClient.get('/trips').then((trips) => {

      return trips.map((rawTrip) => {
        return new Trip({
          id: rawTrip._id,
          userId: rawTrip.owner_id,
          name: rawTrip.name,
          destination: rawTrip.destination,
          description: rawTrip.description,
        })
      })
    });
  }

  get(id) {
    return this.httpClient.get(`/trips/${id}`).then((rawTrip) => {
      console.log(rawTrip.data.attributes)
      return new Trip({
        id: rawTrip.data.id,
        userId: rawTrip.data.attributes.userId,
        name: rawTrip.data.attributes.name,
        destination: rawTrip.data.attributes.destination,
        description: rawTrip.data.attributes.description,
      })
    })
  }
}

export default TripApi