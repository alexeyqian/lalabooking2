import delay from './delay';

const photos = [
  {
    title: "king bed room",
    original: "https://t-ec.bstatic.com/images/hotel/max1280x900/130/130485882.jpg",
    thumbnail: "https://s-ec.bstatic.com/images/hotel/max200/130/130485882.jpg",
    type: "",
    originalTitle: ""
  },
  {
    title: "queen bed room",
    original: "https://t-ec.bstatic.com/images/hotel/max1280x900/130/130485985.jpg",
    thumbnail: "https://t-ec.bstatic.com/images/hotel/max200/130/130485985.jpg",
    type: "",
    originalTitle: ""
  },
  {
    title: "twin bed room",
    original: "https://s-ec.bstatic.com/images/hotel/max1280x900/130/130487761.jpg",
    thumbnail: "https://s-ec.bstatic.com/images/hotel/max200/130/130487761.jpg",
    type: "",
    originalTitle: ""
  },
  {
    title: "bath room",
    original: "https://s-ec.bstatic.com/images/hotel/max1280x900/130/130485989.jpg",
    thumbnail: "https://s-ec.bstatic.com/images/hotel/max200/130/130485989.jpg",
    type: "",
    originalTitle: ""
  }
];

const description = "Featuring a stunning roof-top swimming pool and a Health Club, Hyatt Place Shanghai Hongqiao CBD provides upscale living in the heart of Hongqiao CBD. Boasting 252 guestrooms and suites, this hotel provides free WiFi throughout the property. Guests can also enjoy free breakfast and parking.\n" +
  "Hyatt Place Shanghai Hongqiao CBD is about 12 minutes' drive from Shanghai Hongqiao International Airport. Should guests choose to travel by high speed trains, Shanghai Hongqiao Railway Station is only a 15-minute walk from this property. The National Exhibition and Convention Center is less than a 15-minute drive away. Guests will have convenient access to Corporate offices and lush shopping malls from this establishment.\n" +
  "\n" +
  "All ultra-cozy and contemporary guestrooms at this hotel offer a flat screen TV. To maximize your comfort, this hotel also provides high quality furniture and bedding. A refrigerator, ironing facilities plus tea and coffee maker can be found in each room. The private bathroom in each unit is equipped with premium hair and skin care amenities.\n" +
  "\n" +
  "Hyatt Place Shanghai Hongqiao CBD caters to guests' various needs with 287 square metres of flexible meeting places for business or social events. Top-notch audiovisual equipment are also fitted into these function spaces. Guests are also welcome to unwind in the public lounge, or work out in the 24-hour gym.\n" +
  "\n" +
  "Offering 2 full-service restaurants, guests can have round-the-clock dining options that will satisfy their cravings. The Coffee to Cocktails Bar at this property is there when guests need a hot drink to perk up, or a cold one to help them relax. \n" +
  "\n" +
  "Minhang is a great choice for travelers interested in riverside walks, tourist attractions and city walks.\n" +
  "\n" +
  "This property is also rated for the best value in Shanghai! Guests are getting more for their money when compared to other properties in this city.\n" +
  "\n" +
  "We speak your language!\n" +
  "\n" +
  "Hyatt Place Shanghai Hongqiao CBD has been welcoming Booking.com guests since Sept 20, 2017\n" +
  "Hotel Chain: Hyatt Place";

const roomTypes = [
  {
    "roomTypeId": "10001",
    "roomTypeName": "Business King Room",
    "description": "king bed: 150cm*200cm or Twin bed: 110cm * 200cm, Internet: free wifi / free wired",
    "defaultPhoto": "http://pavo.elongstatic.com/i/Hotel120_120/0000pT7L.jpg",
    "photos": [
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSWQ.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTW.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTs.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTj.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSNO.jpg"
    ],
    "capacity": 2,
    "bedType": "king",
    "facilities": [267,63,65],
    "floor": "4-9,11",
    "sqm": "22",
    "comments": "",
    "minPrice": 600,
    "currency": "RMB",
    "products": [
      {
        "productId": "10001-001",
        "productName": "Discount",
        "supplier": "elong",
        "breakfast": "For 2",
        "cancellationPolicy": "Free Cancellation",
        "price": 618,
        "currency": "RMB"
      },
      {
        "productId": "10001-002",
        "productName": "Standard Price",
        "supplier": "elong",
        "breakfast": "For 1",
        "cancellationPolicy": "Free Cancellation",
        "price": 618,
        "currency": "RMB"
      },
      {
        "productId": "10001-003",
        "productName": "Discount",
        "supplier": "elong",
        "breakfast": "For 2",
        "cancellationPolicy": "No Cancellation",
        "price": 618,
        "currency": "RMB"
      }
    ]
  },
  {
    "roomTypeId": "20001",
    "roomTypeName": "Business King Room",
    "description": "king bed: 150cm*200cm or Twin bed: 110cm * 200cm, Internet: free wifi / free wired",
    "defaultPhoto": "http://pavo.elongstatic.com/i/Hotel120_120/0000pSL9.jpg",
    "photos": [
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSWQ.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTW.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTs.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSTj.jpg",
      "http://pavo.elongstatic.com/i/Hotel350_350/0000pSNO.jpg"
    ],
    "capacity": 2,
    "bedType": "king",
    "facilities": [267,63,65],
    "floor": "4-9,11",
    "sqm": "22",
    "comments": "",
    "minPrice": 600,
    "currency": "RMB",
    "products": [
      {
        "productId": "20001-001",
        "productName": "Discount",
        "supplier": "elong",
        "breakfast": "For 2",
        "cancellationPolicy": "Free Cancellation",
        "price": 618,
        "currency": "RMB"
      },
      {
        "productId": "20001-002",
        "productName": "Standard Price",
        "supplier": "elong",
        "breakfast": "For 1",
        "cancellationPolicy": "Free Cancellation",
        "price": 618,
        "currency": "RMB"
      },
      {
        "productId": "20001-003",
        "productName": "Discount",
        "supplier": "elong",
        "breakfast": "For 2",
        "cancellationPolicy": "No Cancellation",
        "price": 618,
        "currency": "RMB"
      }
    ]
  }
];

const hotels = [
  {
    id: "hotel-1",
    name: "Habitat Suites",
    stars: 3,
    defaultPhoto: "https://s-ec.bstatic.com/images/hotel/square200/466/46689729.jpg",
    photos: photos,
    description: description,
    latlng: {lat: -97.7100741863251,lng: 30.3281244489002},
    totalReives: 1023,
    reviewScore: 8.7,
    price: 127,
    facilities: ["Free Wifi", "Coffee", "Swimming Pool"],
    category: "inn",
    roomTypes: roomTypes
  },
  {
    id: "hotel-2",
    name: "Drury Inn and Suites Austin North",
    stars: 4,
    defaultPhoto: "https://t-ec.bstatic.com/images/hotel/square200/577/57757194.jpg",
    photos: photos,
    description: description,
    latlng: {},
    totalReives: 545,
    reviewScore: 9.2,
    price: 140,
    facilities: ["Free Wifi", "Coffee", "Swimming Pool"],
    category: "suite",
    roomTypes: roomTypes
  },
  {
    id: "hotel-3",
    name: "Omni Austin Hotel Downtown",
    stars: 3,
    defaultPhoto: "http://pavo.elongstatic.com/i/Hotel180_135/nw_0009Snu3.jpg",
    photos: photos,
    description: description,
    latlng:{},
    totalReives: 693,
    reviewScore: 8.6,
    price: 120,
    facilities: ["Free Wifi", "Coffee", "Swimming Pool"],
    category: "inn",
    roomTypes: roomTypes
  },
  {
    id: "hotel-4",
    name: "Drury Inn and Suites Austin North",
    stars: 4,
    defaultPhoto: "https://t-ec.bstatic.com/images/hotel/square200/577/57757194.jpg",
    photos: photos,
    description: description,
    latlng: {},
    totalReives: 545,
    reviewScore: 9.2,
    price: 140,
    facilities: ["Free Wifi", "Coffee", "Swimming Pool"],
    category: "suite",
    roomTypes: roomTypes
  },
  {
    id: "hotel-5",
    name: "Omni Austin Hotel Downtown",
    stars: 3,
    defaultPhoto: "http://pavo.elongstatic.com/i/Hotel180_135/nw_0009Snu3.jpg",
    photos: photos,
    description: description,
    latlng:{},
    totalReives: 693,
    reviewScore: 8.6,
    price: 120,
    facilities: ["Free Wifi", "Coffee", "Swimming Pool"],
    category: "inn",
    roomTypes: roomTypes
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
  static search(query) {
    return new Promise((resolve) => {
      query = {query};
      setTimeout(() => {
        resolve(Object.assign([], hotels));
      }, delay);
    });
  }

  static getNearByHotels(){
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
