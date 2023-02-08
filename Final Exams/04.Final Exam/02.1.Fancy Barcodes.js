function fancyBarcode(input) {
    const patternBarcode = /@#+([A-Z][A-Za-z0-9]{4,}[A-Z])@#+/;
    const patternDigit = /\d/;
    
    input.shift();
  
    input.forEach(barcode => {
      if (patternBarcode.test(barcode)) {
        const productGroup = [...barcode]
          .filter(char => patternDigit.test(char))
          .join('');
  
        if (productGroup.length > 0) {
          console.log(`Product group: ${productGroup}`);
        } else {
          console.log(`Product group: 00`);
        }
      } else {
        console.log('Invalid barcode');
      }
    });
  }
fancyBarcode(["6",
    "@###Val1d1teM@###",
    "@#ValidIteM@#",
    "##InvaliDiteM##",
    "@InvalidIteM@",
    "@#Invalid_IteM@#",
    "@#ValiditeM@#"])