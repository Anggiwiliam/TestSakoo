const lingkaranBulat = (n, number) => {
    if (!(n >= 4 && n <= 20)) {
        return 'n harus lebih besar'
      }
    
      if(!((n % 2) == 0)) {
        return 'n bilangan genap'
      } 
      if(!(number >= 0 && number <= (n-1))) {
        return 'Number harus gini'
      } 
      plus = n / 2
      plus2 = number + plus
      val = plus2 % n;
      return 'Output: '+ val
    
    }
    
    console.log(lingkaranBulat(10, 4));
    