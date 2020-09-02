//Первое задание с последовательностью Фибоначчи

const input = document.querySelector('#input'),
      btn = document.querySelector("#start");

btn.onclick = function() {
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