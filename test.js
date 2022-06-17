test('multiply 1.2 and 2 to equal', () => {
    const { fromEuroToDollar } = require('./app.js');
    
    let dollars = fromEuroToDollar(2);
    let dollarsExpected = 2 * 1.2;


    
    expect(dollars).toBe(dollarsExpected);
});
test('divided by 1.2 and multiplied by 127.9 to equal 127.9', () => {
    const { fromDollarToYen } = require('./app.js');
    
    let yen = fromDollarToYen(1.2);
    let yenExpected = (1.2 / 1.2) * 127.9;


    
    expect(yen).toBe(yenExpected);
});
test('divided by 127.9 and multiplied by 0.8 to equal 0.8', () => {
    const { fromYanToPound } = require('./app.js');
    
    let pound = fromYanToPound(127.9);
    let poundExpected = (pound / 127.9) * 127.9;


    
    expect(pound).toBe(poundExpected);
});