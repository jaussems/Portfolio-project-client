export const getCoinData = (state) => state.homepage.coins;

export const getCoinDataByName = (state) =>
  state.homepage.coins.sort((a, b) => {
    return a.name.localeCompare(b.name);
  });

export const getCoinDataByLowestPrice = (state) =>
  state.homepage.coins.sort((a, b) => {
    return a.current_price - b.current_price;
  });

export const getCoinDataByHighestPrice = (state) =>
  state.homepage.coins.sort((a, b) => {
    return b.current_price - a.current_price;
  });

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
