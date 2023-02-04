function Class(radius, height) {
 let volume = (1/3)*Math.PI*Math.pow(radius,2)*height
 let slantHeight =  Math. sqrt(Math.pow(radius,2) + Math.pow(height,2))
 let totalSurfaceArea = Math.PI*radius * slantHeight + Math.PI*Math.pow(radius,2)


 console.log(`volume = ${volume.toFixed(4)}`);
 console.log(`area = ${totalSurfaceArea.toFixed(4)}`);
}
Class(3,5)