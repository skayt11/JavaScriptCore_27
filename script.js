let Auto = class {
    constructor(brandName, model, productionYear) {
        this.brandName = brandName;
        this.model = model;
        this.productionYear = productionYear;
    }
};
console.log(Auto);
console.group(`----- create -----`);
    let tesla = _.create(Auto.prototype, {
        brandName: 'Tesla',
        model: 'S',
        productionYear: 2012
    });
    _.each(tesla, (x, y) => {
        console.log(`${y}: ${x}`);
    });
console.groupEnd();
console.group(`----- invert -----`);
    let invert = _.invert(tesla);
    console.log(invert);
console.groupEnd();
console.group(`----- pick & omit -----`);
    console.group(`----- pick -----`);
        let pick = _.pick(tesla, 'brandName', 'model');
        console.log(pick);
        _.each(pick, (x, y) => {
            console.log(`${y}: ${x}`);
        });
    console.groupEnd();
    console.group(`----- omit -----`);
        let omit = _.omit(tesla, 'productionYear');
        console.log(omit);
        _.each(omit, (x, y) => {
            console.log(`${y}: ${x}`);
        });
    console.groupEnd();
console.groupEnd();
console.group(`----- pairs -----`);
    let pairs = _.pairs(tesla);
    console.log(pairs);
console.groupEnd();
console.group(`----- min, max -----`);
    let random = _.random(0, 10000);
    console.log(`Випадкове число: ${random}`);
console.groupEnd();
console.group(`----- times -----`);
    _(3).times(() => {
        let random = _.random(0, 10000);
        console.log(`Випадкове число: ${random}`);
    });
console.groupEnd();
console.group(`----- iteratee -----`);
    let iteratee = _.iteratee(function(n) { return n * 2; });
    console.log(iteratee);
console.groupEnd();