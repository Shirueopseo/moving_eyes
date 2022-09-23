document.addEventListener('mousemove', (e) => {
    //console.log(e);

    //Values for x and y of the cursor when moves through the screen
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    //Calculate position of the anchor element
    const anchor = document.getElementById('anchor');

    //imaginary rect around image to get the middle and the current position of mouse
    const rekt = anchor.getBoundingClientRect(); 
    const anchorX = rekt.left + rekt.width / 2;
    const anchorY = rekt.top + rekt.height / 2;

    const angleDeg = angle(mouseX, mouseY, anchorX, anchorY);

    console.log(angleDeg);

    const eyes = document.querySelectorAll('.eye')
    eyes.forEach(eye => {
        eye.style.transform = `rotate(${90 + angleDeg}deg)`;
    })

})


 //angle of rotation w/mouse
function angle(cx, cy, ex, ey){
    const dy = ey - cy;
    const dx = ex - cx;
    const rad = Math.atan2(dy, dx); //angle between 2 points in radians
    const deg = rad * 180 / Math.PI; //rads to deg (-180,180)
    return deg;
}