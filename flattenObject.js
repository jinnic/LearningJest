// /* 
// Define an encoding format that can represent a JSON data structure as an array of single-line strings. Each JSON value primitive (e.g. number, string, boolean, null) should correspond to its own string entry in the output array. Other than those requirements, your encoding scheme can be anything you want. 

// Create an `encode` function that takes JSON data input and outputs an array of strings in your encoding format. 

// Create a `decode` function that takes the string array and transforms it back into the original JSON data structure.
// */

const flattenObject = (obj, prefix = '') =>{
  return Object.keys(obj).reduce((acc, k) => {
    const pre = prefix.length ? `${prefix}-` : '';
    if (
      typeof obj[k] === 'object' &&
      obj[k] !== null &&
      Object.keys(obj[k]).length > 0
    )
      Object.assign(acc, flattenObject(obj[k], pre + k));
    else acc[pre + k] = obj[k];
    return acc;
  }, {});
}

// flattenObject({
//   car: {
//     color: "blue",
//     year: 1999,
//     broken: ["left mirror", "right door"],
//   },
// });








// // Sample output string array (remember this encoding is arbitrary and is up to you!):
// const encodedSample = [
//   'car/color="blue"',
//   'car/year=1999',
//   'car/broken[0]="left mirror"',
//   'car/broken[1]="right door"'
// ]


// //encode : JSON -> array
// const encode = (json, prevKey = '') =>{

// // first try using arr
// //   if(getNodeType(json) === 'object'){
     
// //      //add key to the str
// //      let keys = Object.keys(json)
// //      for(let key of keys){
       
// //        //how should I keep arr for only that value?
// //        //array of arrays?
              
// //        //if arr has length
// //        //make new array with new key
// //        let newStr = ''
// //        if(arr.length){
// //          for(let str of arr){
// //            newStr  = str + '-' + key 
// //            //console.log('added arr', str)
// //          }
// //          arr.push(newStr)
// //        }else{
// //          arr.push(key) // [car], 
// //        }
       
// //        console.log('before recursion', arr)
// //        encode(json[key], arr)
// //      }
// //   }else{
// //     //add values inside the array to str
    
// //     console.log(json,arr)
// //   }

// //second try using object
// //   let resultObj = {}
// //   //**should check edge case of object being null
// //   for( let key in json){
// //     if(getNodeType(json[key]) === 'object'){
// //       let newObj = encode(json[key])
      
// //       for( let newKey in newObj){
// //         resultObj[ key +'-'+newKey] = newObj[newKey]
// //       }
// //     }else{
// //       resultObj[key] = json[key]
// //     }
// //   }
// //   console.log(resultObj)
// // 
  
// // third try using reduce
//     return Object.keys(json).reduce((accumulator, k) =>{
//       //if there is previous key add new key
//       let pre = prevKey.length ? prevKey+'-' : ''
      
//       if( getNodeType(json[k]) === 'object' && json[k] !== null){
//         Object.assign(accumulator, encode(json[k], pre+k))
//       }else{
        
//         accumulator[pre+k] = json[k]
//       }
//       console.log( accumulator)
//     }, {})
// }

// /*
// blue [ 'car', 'color' ] -> ['car-color'] or [ ['car','color']]
// 1999 [ 'car', 'color', 'year' ] -> ['car-color', 'car-year'] or [ ['car','color'], ['car, 'year]]
// */




// const arr = []
// encode(sampleJson)
// // Helper function to determine the leaf node type of a JSON value.
// //   nodeType({})    // 'object'
// //   nodeType([])    // 'array'
// //   nodeType(null)  // 'primitive'
// //   nodeType('str') // 'primitive'
// //   nodeType(123)   // 'primitive'
// //   nodeType(true)  // 'primitive'
// function getNodeType(value) {
//   if (value === null)
//     return 'primitive'
//   if (Array.isArray(value))
//     return 'array'
//   if (typeof value === 'object')
//     return 'object'
//   else
//     return 'primitive'
// }

 module.exports = flattenObject;
