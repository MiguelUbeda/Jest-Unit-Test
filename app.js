let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound
}
const fromEuroToDollar = (euro) => euro * 1.2;
 
const fromDollarToYen = (dollar) => (dollar / 1.2) * 127.9;
    

const fromYanToPound = (yan) => (yan / 127.9) * 0.8;
   


module.exports = { fromEuroToDollar, fromDollarToYen, fromYanToPound };
