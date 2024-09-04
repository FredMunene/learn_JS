const planetYears = {
    earth : [1,365.25,31557600],
    mercury : [0.2408467,0,0],
    venus : [0.61519726,0,0],
    mars : [1.8808158,0,0],
    jupiter: [11.862615,0,0],
    saturn: [29.447498,0,0],
    uranus:[84.016846,0,0],
    neptune: [164.79132,0,0]
}

const dogYears = (planet, age) => {


    // human year is equal to 7 dog years
    let earthYears = age/planetYears['earth'][2] * 7
    earthYears/=planetYears[planet][0]

    return Number(earthYears.toFixed(2))
}

console.log(dogYears("mercury",2134835688))