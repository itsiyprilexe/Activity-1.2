
//3 Variables
let akonNgaran = "AprilHusay";
let pasarimoskor = 75;
let totalScore = 0;

// 3 Arrays
let subKo = ["CSElec1", "CS303 Lec", "CS301"];
let skorKo = [75, 75, 74];
let result = [];

//for loop
for (let i = 0; i < skorKo.length; i++){

    //CONDITIONAL 1: if else
    if (skorKo[i] >= pasarimoskor) {
        result.push(subKo[i] + " - PASAR KA DAI!");
    } else {
        result.push(subKo[i] + " - ARAY MO BAGSAK HAHAHAHAHA");
    }
    totalScore = totalScore + skorKo[i];
}

console.log("");

//while loop
let index = 0;
console.log("-----------------------YOTCH, IMO SCORE!-----------------------"); 
while (index < subKo.length) {
    console.log(subKo[index] + ": " + skorKo[index]);
    index++;
}

console.log("");

//for... of loop
console.log("-----------------------RESULT MO, YOTCH!-----------------------"); 
for (let res of result) {
    console.log(res);
}

console.log("");
console.log("---------------------------------------------------------------"); 
console.log("");

//CONDITIONAL 2: IF ELSE
let average = totalScore / skorKo.length;
if (average >= pasarimoskor) {
  console.log("BADAW PASAR SA AVERAGE NA: " + average);
} else {
  console.log("ARAY MO BAGSAK SA AVERAGE NA: " + average);
}

//CONDITIONAL 3: SWITCH 
switch (true) {
  case average >= 80:
    console.log("Remark: GOOD JOB KA SA'KIN!");
    break;
  case average >= 75:
    console.log("Remark: NAKS, PASANG AWA!");
    break;
  case average >= 74:
    console.log("Remark: ENGK NEED PA IMPROVEMENT, DAI!");
}