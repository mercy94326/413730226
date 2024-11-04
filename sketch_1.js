let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=15
let angle=0
// ==================================================
function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
    //為載入在fonts資料夾內的Zeyada-Regular.ttf字型
    font = loadFont("fonts/NotoSerifTC-VariableFont_wght.ttf") 
}
//===================================================

function setup() { 
    createCanvas(windowWidth, windowHeight);
    background("#fefae0")
    points = font.textToPoints("CHEN", 0, 200, 200, {
        sampleFactor:0.05
      }); //轉成文字圖檔，放在(0, 200)位置，圖形大小為200，sampleFactor為點數距離大小
      //for(let i=0; i<points.length; i++){
        //text(str(i),points[i].x,points[i].y)
        //ellipse(points[i].x,points[i].y,20)
        angleMode(DEGREES);//宣告角度使用0~360,
        translate(width/2,height/2)
    }
  
  function draw() {
    background("#fefae0")
    translate(mouseX,mouseY)
    //rotate((angle/30)%360)
    for(let i=0; i<points.length-1; i++){
      //text(str(i),points[i].x,points[i].y)
      fill("#ffd500")
      noStroke()
      ellipse(points[i].x+r*sin(angle+i*5),points[i].y,20)
      strokeWeight(3)
      stroke("#ced4da")
      line(points[i].x+r*sin(angle+i*8),points[i].y,points[i+1].x+r*sin(angle+i*8),points[i+1].y)
  }
  angle= angle + 10
}