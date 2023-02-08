function Class(input) {
   let dollar = 1.57

   let procesorDollar = Number(input[0])
   let videokartaDollar = Number(input[1])
   let ramDollar = Number(input[2])
   let ramAmount = Number(input[3])
   let disscount = Number(input[4]);


   let procesorCena = procesorDollar * dola
   let videoCena = videokartaDollar * dola
   let ramCena = (ramAmount * ramDollar) * dola

   let disscountProcesor = procesorCena - (procesorCena * disscount)
   let disscountVideo = videoCena - (videoCena * disscount)


   let sum = disscountProcesor + ramCena + disscountVideo
   console.log(`Money needed - ${sum.toFixed(2)} leva.`);
}
Class(["1200",
"850",
"120",
"4",
"0.1"])

