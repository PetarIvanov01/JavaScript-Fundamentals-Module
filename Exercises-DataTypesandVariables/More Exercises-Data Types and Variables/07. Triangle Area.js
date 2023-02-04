function Class(arg1,arg2,arg3) {
    let semiPerimetr = (arg1+arg2+arg3)/2
    let triangleArea = Math.sqrt(semiPerimetr*(semiPerimetr-arg1)*(semiPerimetr - arg2)*(semiPerimetr - arg3))
 console.log(triangleArea);   
}
Class(2,

    3.5,
    
    4)