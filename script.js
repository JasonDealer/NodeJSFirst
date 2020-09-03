//Первое задание с последовательностью Фибоначчи

const input = document.querySelector('#input'),
      btn1 = document.querySelector("#firstTask"),
      btn2 = document.querySelector("#secondTask"),
      btn3 = document.querySelector("#thirdTask");

btn1.onclick = function() {
    let val = document.getElementById('input').value;
    function fibi(n) {
    
        let sum = 0,
        i,
        str,
        arr = [];

        for(i=0; i<n; i++) {
            if( arr.length > 1)  {
                sum += arr[arr.length-2];
            }
            if( arr.length == 1) {sum = 1;}
            if( arr.length == 0) {sum = 0;}
            if(sum < val) {
                arr.push(sum);
            }
        }
        str = arr.join(", ");
        alert(str);
    }
    fibi(val);
};

//Второе задание объединение массивов (элементы в массив записываются вручную из браузера)

let arr1 = [],
      arr2 = [],
      btnAdd1 = document.querySelector('#addMassFirst'),
      btnAdd2 = document.querySelector('#addMassSecond');

btnAdd1.onclick = function() {
    let val = document.getElementById('inputFirst').value;
    arr1.push(val);
    document.getElementById("inputFirst").value = "";
};

btnAdd2.onclick = function() {
    let val = document.getElementById('inputSecond').value;
    arr2.push(val);
    document.getElementById("inputSecond").value = "";
};

btn2.onclick = function() {
    let fin = arr1.concat(arr2);
    function unique(arr) {
        let result = [];
    
        for (let str of arr) {
            if (!result.includes(str)) {
                result.push(str);
            }
        }
        return result;
    }
    alert("Первый массив: " + arr1 + ". Второй массив: " + arr2 + ". Уникальные элементы: " + unique(fin));
};

//Третье задание case-intensive search

btn3.onclick = function() {
    let text = document.getElementById('str').value.toLowerCase(),
    srch = document.getElementById('search').value.toLowerCase();
    if (text.toLowerCase().indexOf(srch) != -1){
        alert('Matched');
    }else {
        alert('No matches found');
    }
};

//Четвертое задание

let frstObj = {
    "a": "1",
    "b": "2",
    "c": "3",
    "d": "4",
    "e": "5",
    "f": "6" };   // empty object to contain reversed key/value paris
  
   // first get all keys in an array

function reposition(e) {
    let copyObj = {};
    let keys = Object.keys(e);
    keys.forEach(function(key){
        var val = e[key];   // get the value for the current key
        copyObj[val] = key;      // reverse is done here
    });
    console.log(copyObj);
}

console.log(reposition(frstObj));

//Пятое задание

function convertObj (obj) {
    const mp = new Map;
    Object.keys(obj).forEach(k => {mp.set(k, obj[k]);});
    return mp;
}

const givenObj = {"a":2, "b":9, "c":4};
console.log(givenObj);
console.log (convertObj(givenObj));

//Шестое задание

