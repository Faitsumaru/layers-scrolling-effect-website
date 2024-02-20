// 3D Scroll

let zSpacing = -1000,
    lastPos = zSpacing / 5,
    $frames = document.getElementsByClassName('gallery__frame'),
    frames = Array.from($frames),
    zVals = []


window.onscroll = function() {

    let top = document.documentElement.scrollTop,
        delta = lastPos - top
    
    lastPos = top

    frames.forEach((n, i) => { 
        zVals.push((i * zSpacing) + zSpacing) //to give every single frame different value of property 'transform: translateZ' to make layers
        zVals[i] += delta * -5.5 //scrolling speed
        
        let frame = frames[i],
            transform = `translateZ(${zVals[i]}px)`,
            opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0
        
        frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`)
    })

}