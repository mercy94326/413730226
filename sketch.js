
let font;  //載入字型文字
let points = [];  //轉成點狀文字
let r=15
let angle=0
// ==================================================function preload(){  //在執行setup()前，必須先做此函數執行，主要先載入字型
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
  background("#fcf6bd");
  noFill()
stroke("#ffd166")
strokeWeight(2)
var rect_width = 50
var bc_w = 50
var sc_w =25
for(let j=0;j<50;j=j+1){
  for(let x=0;x<width;x=x+rect_width){
ellipse(x,-25+bc_w*j,bc_w)
rect(x,rect_width*j,rect_width)
rect(-15+x+rect_width,38*j,sc_w)
  }
}
//=================================================
  //background("#fefae0")
  translate(mouseX,mouseY)
  //rotate((angle/30)%360)
  for(let i=0; i<points.length-1; i++){
    //text(str(i),points[i].x,points[i].y)
    fill("#caf0f8")
    noStroke()
    ellipse(points[i].x+r*sin(angle+i*5),points[i].y,20)
    strokeWeight(3)
    stroke("#48cae4")
    line(points[i].x+r*sin(angle+i*8),points[i].y,points[i+1].x+r*sin(angle+i*8),points[i+1].y)
}
angle= angle + 10
}


