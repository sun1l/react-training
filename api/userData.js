module.exports = function(){
    let faker = require("faker");
    let _ = require("lodash");
    
    return _.times(100, function (n) {
        return {
            id: n,
            name: faker.name.findName(),
            jobTitle: faker.name.jobTitle(),
            jobType: faker.name.jobType(),
            jobArea: faker.name.jobArea(),
            jobDescriptor: faker.name.jobDescriptor()
        };
    });
};