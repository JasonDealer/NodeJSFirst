const input = document.querySelector('#input'),
      btn = document.querySelector("#start");

      btn.onclick = function() {
        let val = document.getElementById('input').value;
function fibi(n) {  // число n передадим параметром в ф-ю
    
    
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

        arr.push(sum);  
    }

    str = arr.join(", "); // склеить элементы массива запятой-с-пробелом
   alert(str);

}

fibi(val);
      };