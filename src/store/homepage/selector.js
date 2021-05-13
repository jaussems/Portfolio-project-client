export const getCoinData = (state) => state.homepage.coins;

export const defaultCoinData = (state) => state.homepage.coins;
// export const getCoinData = (value) = (state) => {
//   const

//   // if (selector === 0) {
//   //   return state.homepage.coins;
//   // } else if (selector === 1) {
//   //   return state.homepage.coins.sort((a, b) => {
//   //     return a.name.localeCompare(b.name);
//   //   });
//   // } else if (selector === 2) {
//   //   return state.homepage.coins.sort((a, b) => {
//   //     return a.current_price - b.current_price;
//   //   });
//   // } else if (selector === 3) {
//   //   return state.homepage.coins.sort((a, b) => {
//   //     return b.current_price - a.current_price;
//   //   });
//   // }
// };

// export const getCoinDataByName = (state) => {
//   const result = state.homepage.coins.sort((a, b) => {
//     return a.name.localeCompare(b.name);
//   });
//   return result;
// };

// export const getCoinDataByLowestPrice = (state) => {
//   const result = state.homepage.coins.sort((a, b) => {
//     return a.current_price - b.current_price;
//   });
//   return result;
// };
// export const getCoinDataByHighestPrice = (state) =>
//   state.homepage.coins.sort((a, b) => {
//     return b.current_price - a.current_price;
//   });

// export const getDyanmicPrice = (state) => state.dynamicprice;

// if (sortdoctor === 0) {
//     patient.sort((a, b) => {
//       return a.lastName.localeCompare(b.lastName);
//     });
//   } else if (sortdoctor === 1) {
//     filterdresults = patient.filter((findId) => {
//       return findId.doctorId === 1;
//     });
//   } else if (sortdoctor === 2) {
//     filterdresults = patient.filter((findId) => {
//       return findId.doctorId === 2;
//     });
//   } else if (sortdoctor === 3) {
//     filterdresults = patient.filter((findId) => {
//       return findId.doctorId === 3;
//     });
//   }
