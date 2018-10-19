/// <reference path="./interface.d.ts" />

type ShaderType = 'FRAGMENT_SHADER' | 'VERTEX_SHADER'

var gl;
var canvas;
var shaderProgram;
var vertexBuffer;

function loadShader(shaderType: ShaderType, source: string) {
  
  var shader;
  if (shaderType == "FRAGMENT_SHADER") {
    shader = gl.createShader(gl.FRAGMENT_SHADER);
    console.log('A fragment shader has been compiled')
  } else if (shaderType == "VERTEX_SHADER") {
    shader = gl.createShader(gl.VERTEX_SHADER);
    console.log('A vertex shader has been compiled')
  } else {
    return null;
  }
 
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
 
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.warn(gl.getShaderInfoLog(shader));
    return null;
  } 
  return shader;
}
function setupShaders() {
  var vSource = `
  attribute vec3 aVertexPosition;
  void main() {
    gl_Position = vec4(aVertexPosition, 1.0); 
  }`

  var fSource = `
  precision mediump float;
  void main() {
    gl_FragColor = vec4(0.5, 1.0, 1.0, 1.0);    
  }`

  var vertexShader = loadShader("VERTEX_SHADER", vSource),
      fragmentShader = loadShader("FRAGMENT_SHADER", fSource);
  
  shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
    console.error("Failed to setup shaders");
  }
  gl.useProgram(shaderProgram);
  
  shaderProgram.vertexPositionAttribute = gl.getAttribLocation(shaderProgram, "aVertexPosition"); 
}
function setupBuffers() {
  vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  var triangleVertices = [
         0.0,  0.5,  0.0,
        -0.5, -0.5,  0.0,
         0.5, -0.5,  0.0
  ];
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(triangleVertices), gl.STATIC_DRAW);
  vertexBuffer.itemSize = 3;
  vertexBuffer.numberOfItems = 3;
}

function draw() { 
  gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
  gl.clear(gl.COLOR_BUFFER_BIT);
  
  gl.vertexAttribPointer(shaderProgram.vertexPositionAttribute, 
                         vertexBuffer.itemSize, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(shaderProgram.vertexPositionAttribute);
                          
  gl.drawArrays(gl.TRIANGLES, 0, vertexBuffer.numberOfItems);
  gl.commit()
}

function handleEvent(e: SceneEvent) {
  switch(e.kind) {
    case "CanvasReady":
      start(e.canvas)
      break
  }
}

function start(canvas: OffscreenCanvas) {
  gl = canvas.getContext('webgl')
  setupShaders(); 
  setupBuffers();
  gl.clearColor(0.0, 0.5, 0.0, 1.0);
  draw();  
  console.log("Should have rendered")
}

onmessage = (e) => {
  handleEvent(e.data)
}
