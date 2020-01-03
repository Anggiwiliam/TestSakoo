function pengendaraMalam($n)

const pengendaraMalam = (n) => {
    const num = n;
    const hours = (num / 60);
    const rhours = Math.floor(hours);
    const minutes = (hours - rhours) * 60;
    const rminutes = Math.round(minutes);
    const result = rhours.toString()+ rminutes.toString()
    let sum = 0
    for (const n of result) {
      let test = sum + Number(n)
      sum = test
    }
    console.log(sum)
  }
  
  
  pengendaraMalam(331)