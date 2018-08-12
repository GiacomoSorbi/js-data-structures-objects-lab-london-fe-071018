// Write your solution in this file!
const updateDriverWithKeyAndValue=(driver,v,k)=>Object.assign(drivers,{[v]: k});
const destructivelyUpdateDriverWithKeyAndValue=(driver,v,k)=>drivers[v]=k;
const deleteFromDriverByKey=(driver,v,k)=>delete drivers[v];
const 