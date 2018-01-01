import delay from './delay';

const hotels = [
  {
    id: "hotel-1",
    name: "Hampton Inn",
    category: "inn"
  },
  {
    id: "hotel-2",
    name: "Double Tree Suite",
    category: "suite"
  },
  {
    id: "hotel-3",
    name: "Holiday Inn",
    category: "inn"
  }
];

// function replaceAll(str, find, replace) {
//   return str.replace(new RegExp(find, 'g'), replace);
// }

//This would be performed on the server in a real app. Just stubbing in.
// const generateId = (hotel) => {
//   return replaceAll(hotel.name, ' ', '-');
// };

class HotelApi {
  static getAllHotels() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(Object.assign([], hotels));
      }, delay);
    });
  }

  static getHotelById(id){
    return new Promise((resolve) => {
      setTimeout(() => {

        let hotel = hotels.filter(h => h.id == id);
        if(hotel && hotel.length >= 0)
          hotel = hotel[0];
        else
          hotel = {id:'unknown', name:'unknown', category: ''};
        resolve(Object.assign({}, hotel));
      },delay);
    });
  }

}

export default HotelApi;
