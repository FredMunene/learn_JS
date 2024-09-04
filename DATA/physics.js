const getAcceleration = (question) => {

 
    var ans1 = question.f /question.m;
    var ans2 = question.Δv/question.Δt;
    var ans3 = 2*question.d/ (question.t*question.t);
    // isNan captures NotANumber 
    if (!isNaN(ans1))  return ans1;
    if (!isNaN(ans2))  return ans2;
    if (!isNaN(ans3))  return ans3;

     return "impossible"

}

// const question = {
//   f: 10,
//   m: 5,
//   Δv: 100,
//   Δt: 50,
//   t:1,
//   d: 10
// }
  
console.log(getAcceleration({}))

