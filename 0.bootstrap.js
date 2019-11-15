(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/lsystems_web.js":
/*!******************************!*\
  !*** ../pkg/lsystems_web.js ***!
  \******************************/
/*! exports provided: evaluate_system, DrawOperation, DrawingParameters, IterationRules, LSystemInterface, LineSegment, Position2D, Vertex, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"evaluate_system\", function() { return evaluate_system; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawOperation\", function() { return DrawOperation; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DrawingParameters\", function() { return DrawingParameters; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IterationRules\", function() { return IterationRules; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LSystemInterface\", function() { return LSystemInterface; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"LineSegment\", function() { return LineSegment; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Position2D\", function() { return Position2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Vertex\", function() { return Vertex; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lsystems_web_bg.wasm */ \"../pkg/lsystems_web_bg.wasm\");\n\n\nlet WASM_VECTOR_LEN = 0;\n\nlet cachedTextEncoder = new TextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction passStringToWasm(arg) {\n\n    let len = arg.length;\n    let ptr = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](len);\n\n    const mem = getUint8Memory();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_realloc\"](ptr, len, len = offset + arg.length * 3);\n        const view = getUint8Memory().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nfunction _assertClass(instance, klass) {\n    if (!(instance instanceof klass)) {\n        throw new Error(`expected instance of ${klass.name}`);\n    }\n    return instance.ptr;\n}\n\nlet cachegetInt32Memory = null;\nfunction getInt32Memory() {\n    if (cachegetInt32Memory === null || cachegetInt32Memory.buffer !== _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetInt32Memory = new Int32Array(_lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetInt32Memory;\n}\n\nlet cachedTextDecoder = new TextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n/**\n* @param {string} axiom\n* @returns {string}\n*/\nfunction evaluate_system(axiom) {\n    const retptr = 8;\n    const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"evaluate_system\"](retptr, passStringToWasm(axiom), WASM_VECTOR_LEN);\n    const memi32 = getInt32Memory();\n    const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n    _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n    return v0;\n}\n\n/**\n*/\nconst DrawOperation = Object.freeze({ Forward:0,ForwardNoDraw:1,TurnRight:2,TurnLeft:3,SaveState:4,LoadState:5,Ignore:6, });\n/**\n*/\nclass DrawingParameters {\n\n    static __wrap(ptr) {\n        const obj = Object.create(DrawingParameters.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_drawingparameters_free\"](ptr);\n    }\n    /**\n    * @returns {DrawingParameters}\n    */\n    static new() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_new\"]();\n        return DrawingParameters.__wrap(ret);\n    }\n    /**\n    * @param {number} x\n    * @param {number} y\n    */\n    set_start_position(x, y) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_start_position\"](this.ptr, x, y);\n    }\n    /**\n    * @param {number} angle\n    */\n    set_start_angle(angle) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_start_angle\"](this.ptr, angle);\n    }\n    /**\n    * @param {number} angle\n    */\n    set_start_angle_degrees(angle) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_start_angle_degrees\"](this.ptr, angle);\n    }\n    /**\n    * @param {number} angle\n    */\n    set_angle_delta(angle) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_angle_delta\"](this.ptr, angle);\n    }\n    /**\n    * @param {number} angle\n    */\n    set_angle_delta_degrees(angle) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_angle_delta_degrees\"](this.ptr, angle);\n    }\n    /**\n    * @param {number} step\n    */\n    set_step(step) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"drawingparameters_set_step\"](this.ptr, step);\n    }\n}\n/**\n*/\nclass IterationRules {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_iterationrules_free\"](ptr);\n    }\n}\n/**\n*/\nclass LSystemInterface {\n\n    static __wrap(ptr) {\n        const obj = Object.create(LSystemInterface.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_lsysteminterface_free\"](ptr);\n    }\n    /**\n    * @returns {LSystemInterface}\n    */\n    static new() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_new\"]();\n        return LSystemInterface.__wrap(ret);\n    }\n    /**\n    * @param {number} iterations\n    */\n    set_iterations(iterations) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_set_iterations\"](this.ptr, iterations);\n    }\n    /**\n    * @param {string} axiom\n    */\n    set_axiom(axiom) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_set_axiom\"](this.ptr, passStringToWasm(axiom), WASM_VECTOR_LEN);\n    }\n    /**\n    * @param {DrawingParameters} params\n    */\n    set_draw_parameters(params) {\n        _assertClass(params, DrawingParameters);\n        const ptr0 = params.ptr;\n        params.ptr = 0;\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_set_draw_parameters\"](this.ptr, ptr0);\n    }\n    /**\n    * @param {string} character\n    * @param {string} rule\n    */\n    set_rule(character, rule) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_set_rule\"](this.ptr, character.codePointAt(0), passStringToWasm(rule), WASM_VECTOR_LEN);\n    }\n    /**\n    * @param {string} character\n    * @param {number} operation\n    */\n    set_interpretation(character, operation) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_set_interpretation\"](this.ptr, character.codePointAt(0), operation);\n    }\n    /**\n    */\n    iterate() {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_iterate\"](this.ptr);\n    }\n    /**\n    */\n    interpret() {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_interpret\"](this.ptr);\n    }\n    /**\n    * @returns {string}\n    */\n    retrieve_command_string() {\n        const retptr = 8;\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_retrieve_command_string\"](retptr, this.ptr);\n        const memi32 = getInt32Memory();\n        const v0 = getStringFromWasm(memi32[retptr / 4 + 0], memi32[retptr / 4 + 1]).slice();\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_free\"](memi32[retptr / 4 + 0], memi32[retptr / 4 + 1] * 1);\n        return v0;\n    }\n    /**\n    */\n    clear() {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_clear\"](this.ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    retrieve_lines() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_retrieve_lines\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @returns {number}\n    */\n    retrieve_lines_length() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"lsysteminterface_retrieve_lines_length\"](this.ptr);\n        return ret >>> 0;\n    }\n}\n/**\n*/\nclass LineSegment {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_linesegment_free\"](ptr);\n    }\n    /**\n    * @returns {Vertex}\n    */\n    get begin() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_linesegment_begin\"](this.ptr);\n        return Vertex.__wrap(ret);\n    }\n    /**\n    * @param {Vertex} arg0\n    */\n    set begin(arg0) {\n        _assertClass(arg0, Vertex);\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_linesegment_begin\"](this.ptr, ptr0);\n    }\n    /**\n    * @returns {Vertex}\n    */\n    get end() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_linesegment_end\"](this.ptr);\n        return Vertex.__wrap(ret);\n    }\n    /**\n    * @param {Vertex} arg0\n    */\n    set end(arg0) {\n        _assertClass(arg0, Vertex);\n        const ptr0 = arg0.ptr;\n        arg0.ptr = 0;\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_linesegment_end\"](this.ptr, ptr0);\n    }\n}\n/**\n*/\nclass Position2D {\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_position2d_free\"](ptr);\n    }\n}\n/**\n*/\nclass Vertex {\n\n    static __wrap(ptr) {\n        const obj = Object.create(Vertex.prototype);\n        obj.ptr = ptr;\n\n        return obj;\n    }\n\n    free() {\n        const ptr = this.ptr;\n        this.ptr = 0;\n\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_vertex_free\"](ptr);\n    }\n    /**\n    * @returns {number}\n    */\n    get x() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_vertex_x\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set x(arg0) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_vertex_x\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get y() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_vertex_y\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set y(arg0) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_vertex_y\"](this.ptr, arg0);\n    }\n    /**\n    * @returns {number}\n    */\n    get z() {\n        const ret = _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_get_vertex_z\"](this.ptr);\n        return ret;\n    }\n    /**\n    * @param {number} arg0\n    */\n    set z(arg0) {\n        _lsystems_web_bg_wasm__WEBPACK_IMPORTED_MODULE_0__[\"__wbg_set_vertex_z\"](this.ptr, arg0);\n    }\n}\n\nconst __wbindgen_throw = function(arg0, arg1) {\n    throw new Error(getStringFromWasm(arg0, arg1));\n};\n\n\n\n//# sourceURL=webpack:///../pkg/lsystems_web.js?");

/***/ }),

/***/ "../pkg/lsystems_web_bg.wasm":
/*!***********************************!*\
  !*** ../pkg/lsystems_web_bg.wasm ***!
  \***********************************/
/*! exports provided: memory, __wbg_position2d_free, __wbg_drawingparameters_free, drawingparameters_new, drawingparameters_set_start_position, drawingparameters_set_start_angle, drawingparameters_set_start_angle_degrees, drawingparameters_set_angle_delta, drawingparameters_set_angle_delta_degrees, drawingparameters_set_step, __wbg_iterationrules_free, __wbg_lsysteminterface_free, lsysteminterface_new, lsysteminterface_set_iterations, lsysteminterface_set_axiom, lsysteminterface_set_draw_parameters, lsysteminterface_set_rule, lsysteminterface_set_interpretation, lsysteminterface_iterate, lsysteminterface_interpret, lsysteminterface_retrieve_command_string, lsysteminterface_clear, lsysteminterface_retrieve_lines, lsysteminterface_retrieve_lines_length, evaluate_system, __wbg_vertex_free, __wbg_get_vertex_x, __wbg_set_vertex_x, __wbg_get_vertex_y, __wbg_set_vertex_y, __wbg_get_vertex_z, __wbg_set_vertex_z, __wbg_linesegment_free, __wbg_get_linesegment_begin, __wbg_set_linesegment_begin, __wbg_get_linesegment_end, __wbg_set_linesegment_end, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./lsystems_web.js */ \"../pkg/lsystems_web.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/lsystems_web_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var lsystems_web__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lsystems-web */ \"../pkg/lsystems_web.js\");\n/* harmony import */ var lsystems_web_lsystems_web_bg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lsystems-web/lsystems_web_bg */ \"../pkg/lsystems_web_bg.wasm\");\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/controls/TrackballControls */ \"./node_modules/three/examples/jsm/controls/TrackballControls.js\");\n\n\n\n\n\n\nvar $ = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\n\n$('#slide-StartAngle').on('input',function () {\n    $(\"#input-StartAngle\").val($(this).val());\n    refreshDrawingParameters();\n});\n$('#input-StartAngle').on('input', function(){\n    $('#slide-StartAngle').val($(this).val());\n    refreshDrawingParameters();\n});\n$('#slide-AngleDelta').on('input',function () {\n    $(\"#input-AngleDelta\").val($(this).val());\n    refreshDrawingParameters();\n});\n$('#input-AngleDelta').on('input', function(){\n    $('#slide-AngleDelta').val($(this).val());\n    refreshDrawingParameters();\n});\n$('#slide-Step').on('input',function () {\n    $(\"#input-Step\").val($(this).val());\n    refreshDrawingParameters();\n});\n$('#input-Step').on('input', function(){\n    $('#slide-Step').val($(this).val());\n    refreshDrawingParameters();\n});\n\n\nvar canvas = document.getElementById('rendertarget');\n//canvas.style.width ='100%';\n//canvas.style.height='100%';\n// ...then set the internal size to match\ncanvas.width  = canvas.offsetWidth;\ncanvas.height = canvas.offsetHeight;\n\nvar scene = new three__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"]();\nvar camera = new three__WEBPACK_IMPORTED_MODULE_2__[\"PerspectiveCamera\"](75, canvas.width / canvas.height, 0.1, 1000);\n\ncamera.position.set(0, 0, 1);\n\nvar renderer = new three__WEBPACK_IMPORTED_MODULE_2__[\"WebGLRenderer\"]({ canvas: canvas });\n//document.body.appendChild(renderer.domElement);\n\nvar controls = new three_examples_jsm_controls_TrackballControls__WEBPACK_IMPORTED_MODULE_3__[\"TrackballControls\"](camera, renderer.domElement);\ncontrols.rotateSpeed = 1.0;\ncontrols.zoomSpeed = 1.2;\ncontrols.panSpeed = 0.8;\ncontrols.staticMoving = false;\ncontrols.dynamicDampingFactor = 0.3;\ncontrols.keys = [ 65, 83, 68 ];\n\ncamera.position.z = 5;\n\nvar drawingParms = lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawingParameters\"].new();\ndrawingParms.set_angle_delta_degrees(60.0);\n\n\nconst iterations = 6;\nvar lsystem = lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"LSystemInterface\"].new();\nlsystem.set_draw_parameters(drawingParms);\nlsystem.set_iterations(iterations);\nlsystem.set_axiom(\"X\");\nlsystem.set_rule('X', \"F+[[X]-X]-F[-FX]+X\");\nlsystem.set_rule('F', \"FF\");\nlsystem.set_interpretation('F', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].Forward);\nlsystem.set_interpretation('X', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].Ignore);\nlsystem.set_interpretation('-', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].TurnLeft);\nlsystem.set_interpretation('+', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].TurnRight);\nlsystem.set_interpretation('[', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].SaveState);\nlsystem.set_interpretation(']', lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawOperation\"].LoadState);\nlsystem.iterate();\nlsystem.interpret();\n\n\nretrieveLines();\n\nrefreshDrawingParameters();\n\nwindow.addEventListener('resize', onWindowResize, false);\n\nfunction onWindowResize() {\n    canvas.width  = canvas.offsetWidth;\n    canvas.height = canvas.offsetHeight;\n\n    renderer.setSize(canvas.width, canvas.height);\n\n    camera.aspect = canvas.width / canvas.height;\n    camera.updateProjectionMatrix();\n}\n\n\nfunction retrieveLines() {\n    scene = new three__WEBPACK_IMPORTED_MODULE_2__[\"Scene\"]();\n\n    const linePtr = lsystem.retrieve_lines();\n    const lineLen = lsystem.retrieve_lines_length();\n    const buffer = new Float64Array(lsystems_web_lsystems_web_bg__WEBPACK_IMPORTED_MODULE_1__[\"memory\"].buffer, linePtr, lineLen);\n    drawLines(buffer)\n}\n\nfunction refreshDrawingParameters() {\n    var drawingParams = lsystems_web__WEBPACK_IMPORTED_MODULE_0__[\"DrawingParameters\"].new();\n\n    drawingParams.set_angle_delta_degrees($('#slide-AngleDelta').val());\n    drawingParams.set_start_angle_degrees($('#slide-StartAngle').val());\n    drawingParams.set_step($('#slide-Step').val());\n    drawingParams.set_start_position(-2, 3);\n\n    lsystem.set_draw_parameters(drawingParams);\n\n    // We only need to reinterpret the already iterated axiom, since the changes only affect displaying.\n    lsystem.interpret();\n\n    retrieveLines();\n}\n\n/**\n * Draw a list of line segments.\n *\n * @param lines An array of float values. three values make up a vertex, and two vertices make up a line.\n * @param color The line color, white per default.\n */\nfunction drawLines(lines, color = 0xFFFFFF) {\n    // Determine how many vertices are contained in the parameter array\n    if(lines.length % 3 !== 0) {\n        console.error(\"Expected array of 3D vertices, but length does not match up\")\n        return\n    }\n\n    var numVertices = lines.length / 3;\n    var numLineSegments = numVertices / 2;\n\n    // Check that there is an even number of vertices, since each line segment consists\n    // of both a begin and end position.\n    if(numVertices % 2 !== 0) {\n        console.error(\"Expected even number of vertices\");\n        return\n    }\n\n    var geometry = new three__WEBPACK_IMPORTED_MODULE_2__[\"Geometry\"]();\n\n    for(var i = 0; i < numLineSegments; i++)\n    {\n        var startIdx = 6*i;\n        var beginVertexIdx = startIdx;\n        var endVertexIdx = startIdx + 3;\n\n        var beginVertex = new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector3\"](\n            lines[beginVertexIdx + 0],\n            -lines[beginVertexIdx + 1],\n            lines[beginVertexIdx + 2]\n        );\n\n        var endVertex = new three__WEBPACK_IMPORTED_MODULE_2__[\"Vector3\"](\n            lines[endVertexIdx + 0],\n            -lines[endVertexIdx + 1],\n            lines[endVertexIdx + 2]\n        );\n\n        geometry.vertices.push(beginVertex, endVertex);\n    }\n    var material = new three__WEBPACK_IMPORTED_MODULE_2__[\"LineBasicMaterial\"]({\n        color: color\n    });\n\n    var line = new three__WEBPACK_IMPORTED_MODULE_2__[\"LineSegments\"](geometry, material);\n    scene.add(line);\n}\n\n\nfunction animate()\n{\n    requestAnimationFrame(animate);\n    controls.update();\n    renderer.render(scene, camera);\n}\n\nanimate();\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ })

}]);