const matchesRandomNumber = (givenNumber: number): string => {
  const randomNumber: number = Math.floor(Math.random() * 10 + 1);
  return givenNumber === randomNumber? 'GOOD WORK!!!!!!!' : 'NOT MATCHED';    
}


const daysLeftToNextChristmas = (year: number): string => {
  const today: any = new Date().getTime();
  const nextChristmas: any = new Date(year,11,25);
  if((nextChristmas-today) < 0){ 
    return `${Math.ceil(-1*(nextChristmas-today)/(3600000*24))} days had already passed since ${year}`
  }
  else{
   return `Reamaning ${Math.ceil((nextChristmas-today)/(24 * 3600000))} days for the next Christmas`;
  }
}


const extractingSpecifiedIndex = (arrayOfNumbers: number[], specifiedIndex: number[]): number[] => specifiedIndex.map(x => arrayOfNumbers[x])


const filteredArray = (arrayOfNumbers: number[], ...precisedValues: number[]): number[] => {
  return arrayOfNumbers.filter(elementOfArray => precisedValues.every(element=> element !== elementOfArray));
}


const division = (numerator: number, denominator: number): number | string => {
  let result: number | string = 0;
  if(numerator !== 0 && denominator == 0){ 
    result ='Impossible to divide a number by "0"';
  }
  else if(numerator == 0 && denominator !== 0){
    result = 'The result is "0"';
  }   
  else if(numerator !== 0 && denominator !== 0){
    result = numerator/denominator;
  }
  else if(typeof numerator !== 'number' || typeof denominator !== 'number'){
    result = `Expected number to be entered`;
  } 
  return result;
}


const deleteObjectProperty  = (entireObject: object, property: any): object => {
  if(entireObject.hasOwnProperty(property)){
    delete entireObject[property as keyof object];
  }
 return entireObject;
} 


const equalObject = (object1: object, object2: object): boolean => {
  const object1Property: (string|number)[] = Object.keys(object1);
  const object2Property: (string|number)[] = Object.keys(object2);
  const status: boolean[] = [];
  if(object1Property.length == object2Property.length){
      for(const property in object1){
      status.push((object2.hasOwnProperty(`${property}`) && object1[property as keyof object]==object2[property as keyof object]))    
      }
    return  status.filter(item => item === false).length === 0;
  }
  return false;
}



const returnLongestStringOfArray = (arrayOfString: string[]): string => {
    return arrayOfString.reduce((previousString: string, currentString: string)=>{
      if(previousString.length>currentString.length){
        return previousString
      } 
    return currentString
  })
}


const largestEvenIntegerOfArray = (arrayOfNumber: number[]): number => { 
  return Math.max(...arrayOfNumber.filter(number => number%2 == 0))
}

  
const deleteRepeatedCharacter = (string: string): string => {
  const nonDuplicatedCharacters = new Set(string.split(''))
  return [...nonDuplicatedCharacters].join('');
}


const sumOfCubes = (maximumNumber: number): number => {
  let summingToMaximun: number = 0;
    for(let i=0; i<(maximumNumber+1); i++){
      summingToMaximun += Math.pow(i,3)
    }
  return summingToMaximun
}


const volumeOfCylinder = (radius: number , height: number): number =>  {
  const PI: number = 3.1416;
  return (PI*Math.pow(radius,2)*height)
}


const  clock = (): void => {
  const today: Date = new Date()
  const hours: number = today.getHours();
  const minutes: number = today.getMinutes();
  const seconds: number =  today.getSeconds();
  `${hours}:${minutes}:${seconds}`;
  setInterval(clock,1000)
}


const isLowerCase = (value: string): boolean => {
  return (value==value.toLowerCase());
}



const multiplication = (firstValue: number, secondValue: number): number | string => {
  if(firstValue == 0 || secondValue == 0){
    return "Any multiplication by 0 is '0'";
  } 
  else if(typeof firstValue !== "number" && typeof secondValue !== 'number' ){
    return 'Can not multply variable of type "string"';
  }
  return firstValue*secondValue;
}


const add = (parameter1: any ,parameter2: any): any => {
  return new Promise((resolve, reject) => {
    if(typeof parameter1! == "number" || typeof parameter2 !== "number"){
      reject('Must enter the two parameters')     
    }
    resolve(parameter1+parameter2);
  })
}


export { matchesRandomNumber, division, isLowerCase, multiplication, clock,
  volumeOfCylinder, sumOfCubes, deleteRepeatedCharacter, largestEvenIntegerOfArray,
  returnLongestStringOfArray, daysLeftToNextChristmas, add, extractingSpecifiedIndex, 
  equalObject, deleteObjectProperty, filteredArray };
