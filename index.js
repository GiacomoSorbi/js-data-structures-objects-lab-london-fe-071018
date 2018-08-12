// Write your solution in this file!
const updateDriverWithKeyAndValue=(v,k)=>Object.assign(drivers,{[v]: k});
const destructivelyUpdateDriverWithKeyAndValue=(v,k)=>drivers[v]=k;
const 