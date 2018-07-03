// takes in params object and returns object with null keys removed
// this is specific to NYT api

export default params => 
    Object.keys(params)
    .filter(key=> params[key])
    .reduce((acc, curr) => {
        acc[curr] = params[curr];
        return acc;
    }, {});