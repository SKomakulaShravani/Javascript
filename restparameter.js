const quantity = "100";
const names = [ "Steel", "Gold", "Copper" ];

const cost = (quantity, ...names) => {
   console.log(quantity);
   console.log(names);
}; 
cost(quantity, names, names);
//100
//(2) [Array(3), Array(3)]
//0: (3) ["Steel", "Gold", "Copper"]
//1: (3) ["Steel", "Gold", "Copper"]