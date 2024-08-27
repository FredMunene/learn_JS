const getAcceleration = (answers) => {

    var ans1 = question.f /question.m
    var ans2 = question.Δv/question.Δt
    var ans3 = 2*question.d/ (question.t*question.t)

  return ( ans1 !== undefined ? ans1 : ans2 !== undefined ? ans2 : ans3 !== undefined ? ans3 : "impossible" )

}

const question = {
  f: 10,
  m: 5,
  Δv: 100,
  Δt: 50,
  t:1,
  d: 10
}
  
console.log(getAcceleration(question))


