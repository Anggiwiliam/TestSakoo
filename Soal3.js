const hartaKarun = (value1, weight1, value2, weight2, maxKeranjang) => {
    const tot_k = weight1 + weight2
  
    if (tot_k > maxKeranjang) {
      if (weight1 > weight2) {
        return value1
      } else {
        return value2
      }
    } else {
      return value1+value2
    }
  }
  
  console.log(hartaKarun(8,8,1,1,9))