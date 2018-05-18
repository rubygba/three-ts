import './webgl-utils.js'
import './webgl-debug.js'
import './cuon-utils.js'

// 定点着色器
var VSHADER_SOURCE = `
  attribute vec4 a_Position;
  void main() {
    gl_Position = a_Position;
    gl_PointSize = 10.0;
  }
  `
var FSHADER_SOURCE = `
  void main() {
    gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0)
  }
  `

function main() {
  var canvas = document.getElementById('webgl')

  var gl = getWebGLContext(canvas, true)
  if (!gl) {
    console.log('Failed to get the rendering context for WebGL')
    return
  }

  gl.clearColor(0.0, 0.0, 0.0, 1.0)

  gl.clear(gl.COLOR_BUFFER_BIT)
}