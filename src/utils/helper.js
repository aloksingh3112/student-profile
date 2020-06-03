export const  average = (grades) => {
  var total = 0;
  for (var i = 0; i < grades.length; i++) {
    total =total+parseInt(grades[i]);
  }
  var avg = total / grades.length;

  return avg
};
