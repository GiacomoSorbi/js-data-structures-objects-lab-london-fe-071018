// Write your solution in this file!
let driver={};

const updateDriverWithKeyAndValue=(driver,v,k)=>Object.assign(drivers,{[v]: k});
const destructivelyUpdateDriverWithKeyAndValue=(driver,v,k)=>drivers[v]=k;
const deleteFromDriverByKey=(driver,v,k)=>Object.keys(drivers).reduce((a,b)=>Object.assign(a,b==v?{}:{[b]: driver[b]}),{});
const destructivelyDeleteFromDriverByKey=(driver,v,k)=>delete drivers[v];