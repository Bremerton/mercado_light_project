while True:
    print("Light Level:" + input.light_level())
    if input.light_level() < 5:
        light.show_animation(light.rainbowAnimation, 30000)
        light.clear()     
    else:
        light.clear()