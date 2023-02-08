function Class(num) {
    num = num.toString()
    let sym = 0
    for (let i = 0; i < num.length; i++) {
        sym += Number(num[i]);
        
    }
    let result = sym.toString().includes(`9`)
    if(result){
        console.log(`${num} Amazing? True`);
    }else{
        console.log(`${num} Amazing? False`);
    }
}

Class(999)