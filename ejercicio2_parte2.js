let num = prompt("Digite un numero de 6 cifras:")


inc = 0

for(let a = 0; a <= num ; a ++){ 
  
  if(a % 10 == num % 10){
    inc = inc + 1
  }
}

alert(inc)