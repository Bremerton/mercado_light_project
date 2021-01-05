while (true) {
    console.log("Light Level:" + input.lightLevel())
    if (input.lightLevel() < 5) {
        light.showAnimation(light.rainbowAnimation, 30000)
        light.clear()
    } else {
        light.clear()
    }
    
}
