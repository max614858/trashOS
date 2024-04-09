document.addEventListener('DOMContentLoaded', function() {
  let username = document.getElementById('username');
  let password = document.getElementById('password');
  let inputbox = document.getElementById('inputBoxes');
  let loginscreen = document.getElementById('repBody');
  let desktopbackground = document.getElementById('desktopbackground');
  let snakeI = document.getElementById('snakeI')
  let windowcontainer = document.getElementById('windowcontainer')
  let randomLT;
  let keyboardSounds = [1,2,3,4,5,6,7,8];
  let randomKS;
  let loadin = false;
  let windowmain = document.getElementById('windowmain')
  let game;
  let mainsnake;
  let canvas = document.querySelector('canvas');
  let c = canvas.getContext('2d');
  

  document.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
      if (username.value == 'admin' && password.value == 'admin') {
        new Audio('audio/keyboard/enter.mp3').play()
        username.disabled = true;
        password.disabled = true;
        let lgif = document.createElement('img')
        lgif.src = 'img/loading.gif'
        lgif.style.width = "50px";
        lgif.style.height = "50px";
        lgif.style.position = "absolute";
        lgif.style.marginTop = "90px";
        randomLT = (Math.ceil(Math.random() * 5) * 1000)
        inputbox.appendChild(lgif)
        loadin = true;
        setTimeout(function(){
          document.body.removeChild(loginscreen);
          desktopbackground.style.display = "flex";
        },randomLT)
      }
    } else {
      randomKS = keyboardSounds[Math.floor(Math.random() * keyboardSounds.length)]
      new Audio('audio/keyboard/' + `${randomKS}` + ".mp3").play()
    }
  })

  document.addEventListener('click', function(event) {
    new Audio('audio/mouse/0.mp3').play();
  })

  snakeI.addEventListener('click', function(event) {
    windowcontainer.style.display = "flex"
    windowcontainer.style.justifyContent = "center";
    windowcontainer.style.alignItems = "center";
    windowcontainer.style.flexDirection = "column";
    game = 'snake';
    mainsnake = new Snake()
    document.removeEventListener('keydown', document);
    document.addEventListener('keydown', function(event) {
      if (event.key == "ArrowLeft") {
        mainsnake.left = true;
        mainsnake.right = false
        mainsnake.up = false
        mainsnake.down = false
      }
      if (event.key == "ArrowRight") {
        mainsnake.left = false;
        mainsnake.right = true
        mainsnake.up = false
        mainsnake.down = false
      }
      if (event.key == "ArrowUp") {
        mainsnake.left = false;
        mainsnake.right = false
        mainsnake.up = true;
        mainsnake.down = false}
      if (event.key == "ArrowDown") {
        mainsnake.left = false;
        mainsnake.right = false
        mainsnake.up = false
        mainsnake.down = true}
      console.log(event.key)
    })
    animate()
    })


  window.addEventListener('resize', function() {
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.8;
  })

  function Snake() {
    this.applecolor = 'red';
    this.snakecolor = 'rgb(190, 137, 217)';
    this.squarelength = 20;
    this.left = false
    this.right = true;
    this.up = false
    this.down = false

    this.checkx = 0
    this.checky = 0
    this.x = 100
    this.y = 100
    this.applex = (Math.ceil(Math.random())/10 * canvas.width)
    this.appley = (Math.ceil(Math.random())/10 * canvas.height)
    this.draw = function() {
      c.beginPath()
      c.rect(this.x, this.y, this.squarelength, this.squarelength)
      c.fillStyle = this.snakecolor
      c.fill()
      c.stroke()
      c.beginPath()
      c.rect(this.applex, this.appley, 20,20)
      c.fillStyle = 'red';
      c.fill()
      c.stroke()

      if (this.left) {
        this.x -= 5
      }
      if (this.right) {
        this.x += 5
      }
      if (this.up) {
        this.y -= 5
      }
      if (this.down) {
        this.y += 5
      }
    this.stick = function() {
      this.applex = this.x
      this.appley = this.y
    }
      if (((this.x - 50) < this.applex) && (this.applex < (this.x + 50))) {
        this.randomise()
      }
    }
   
  
  }

  function animate() {
    requestAnimationFrame(animate);
    c.clearRect(0,0,canvas.width, canvas.height)
    canvas.width = window.innerWidth * 0.6;
    canvas.height = window.innerHeight * 0.8;
    
    mainsnake.draw()
    
  }

  
  

})