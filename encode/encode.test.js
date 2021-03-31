const encode = require('./encode');

// Sample input:
const sampleJson = {
  "car": {
    "color": "blue",
    "year": 1999,
    "broken": [
      "left mirror",
      "right door"
    ]
  },
}

const encodedSample = {
  'car-color': 'blue',
  'car-year': 1999,
  'car-broken-0': 'left mirror',
  'car-broken-1': 'right door'
}

test('flatten sample JSON to single depth OBJ', () => {
  expect(encode(sampleJson)).toStrictEqual(encodedSample);
});