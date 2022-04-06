// code your solution here

function checkWin(element){ 
    return (element['result'] === 'W');
}
function superbowlWin(arr){
    let obj = arr.find(checkWin);
    return obj == undefined ? undefined : obj['year']
}
// const record = [
//     { year: "2015", result: "W"},
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"},
//     //...
//   ]
// const record2 = [ 
//     { year: "2014", result: "N/A"},
//     { year: "2013", result: "L"} ]
