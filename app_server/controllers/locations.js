/* GET 'Home' page */
const homelist = (req, res) => {
  res.render('locations-list', {
    title: 'Loc8r - find a place to work with wifi',
    pageHeader: {
      title: 'Loc8r',
      strapline: 'Find places to work with wifi near you!'
    },
    sidebar: "Looking for wifi and a seat? Loc8r helps you find places to work when out and about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.",
    locations: [{
        id: 'starcups',
        name: 'Starcups',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 3,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '100m'
      },
      {
        id: 'cafe-hero',
        name: 'Cafe Hero',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 4,
        facilities: ['Hot drinks', 'Food', 'Premium wifi'],
        distance: '200m'
      },
      {
        id: 'burger-queen',
        name: 'Burger Queen',
        address: '125 High Street, Reading, RG6 1PS',
        rating: 2,
        facilities: ['Food', 'Premium wifi'],
        distance: '500m'
      }
    ]
  });
};
/* GET 'Location info' page */
const locationInfo = (req, res) => {
  const locations = {
    'starcups': {
      name: 'Starcups',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 3,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '7:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '5:00pm', closed: false },
        { days: 'Sunday', closed: true }
      ],
      reviews: [
        { author: 'Simon Holmes', rating: 3, timestamp: '16 February 2017', reviewText: 'What a great place.' },
        { author: 'Charlie Chaplin', rating: 3, timestamp: '14 February 2017', reviewText: "It was okay. Coffee wasn't great." }
      ]
    },
    'cafe-hero': {
      name: 'Cafe Hero',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 4,
      facilities: ['Hot drinks', 'Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '7:00am', closing: '9:00pm', closed: false },
        { days: 'Saturday', opening: '8:00am', closing: '10:00pm', closed: false },
        { days: 'Sunday', opening: '9:00am', closing: '8:00pm', closed: false }
      ],
      reviews: [
        { author: 'Jane Doe', rating: 5, timestamp: '18 February 2017', reviewText: 'Excellent coffee and great atmosphere for working.' },
        { author: 'Mike Johnson', rating: 4, timestamp: '15 February 2017', reviewText: 'Good place to get some work done. Friendly staff.' }
      ]
    },
    'burger-queen': {
      name: 'Burger Queen',
      address: '125 High Street, Reading, RG6 1PS',
      rating: 2,
      facilities: ['Food', 'Premium wifi'],
      coords: { lat: 51.455041, lng: -0.9690884 },
      openingTimes: [
        { days: 'Monday - Friday', opening: '10:00am', closing: '10:00pm', closed: false },
        { days: 'Saturday', opening: '10:00am', closing: '11:00pm', closed: false },
        { days: 'Sunday', opening: '11:00am', closing: '9:00pm', closed: false }
      ],
      reviews: [
        { author: 'John Smith', rating: 2, timestamp: '20 February 2017', reviewText: 'Food was okay, but wifi was slow.' }
      ]
    }
  };

  const locationId = req.params.locationid;
  const location = locations[locationId];

  if (location) {
    res.render('location-info', {
      title: location.name,
      location: location
    });
  } else {
    // simple redirect for now
    res.redirect('/');
  }
};
/* GET 'Add review' page */
const addReview = (req, res) => {
  res.render('location-review-form', { title: 'Add review' });
};

module.exports = {
  homelist,
  locationInfo,
  addReview
};
