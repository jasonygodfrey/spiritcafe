"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./utils/app.js":
/*!**********************!*\
  !*** ./utils/app.js ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    // Initialize the noise generator\n    const noise3DFunction = (0,simplex_noise__WEBPACK_IMPORTED_MODULE_0__.createNoise3D)();\n    const mouseRadius = 0.1; // Adjust this value as needed\n    const mouseStrength = 0.05; // Adjust this value as needed, if not defined elsewhere\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0x000000, 0);\n    mountPoint.appendChild(renderer.domElement);\n    // Initialize the Effect Composer\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__.EffectComposer(renderer);\n    const renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    composer.addPass(renderPass);\n    const bloomOptions = {\n        strength: 2.5,\n        radius: 0.6,\n        threshold: 0\n    };\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(window.innerWidth, window.innerHeight), bloomOptions.strength, bloomOptions.radius, bloomOptions.threshold);\n    composer.addPass(bloomPass);\n    // Define the textureLoader here\n    const textureLoader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(10000, 10000);\n    let raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();\n    const cameraParallaxFactor = 0.5;\n    window.addEventListener(\"mousemove\", (e)=>{\n        mouse.x = e.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;\n        mouse.z = getAverageParticleZ();\n        raycaster.setFromCamera(mouse, camera);\n        if (!raycaster.ray) {\n            console.error(\"Raycaster ray is not initialized.\");\n            return; // Exit the function early to prevent further errors\n        }\n        let intersectPoint = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3();\n        raycaster.ray.at(1.3, intersectPoint);\n        camera.position.x += (intersectPoint.x * cameraParallaxFactor - camera.position.x) * 0.05;\n        camera.position.y += (-intersectPoint.y * cameraParallaxFactor - camera.position.y) * 0.05;\n        camera.lookAt(scene.position);\n    });\n    window.addEventListener(\"touchstart\", handleTouch);\n    window.addEventListener(\"touchmove\", handleTouch);\n    function handleTouch(e) {\n        e.preventDefault();\n        if (e.touches.length > 0) {\n            const touch = e.touches[0];\n            mouse.x = touch.clientX / window.innerWidth * 2 - 1;\n            mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;\n            mouse.z = getAverageParticleZ();\n            raycaster.setFromCamera(mouse, camera);\n            const intersectPoint = raycaster.ray.at(1.3);\n            camera.position.x += (intersectPoint.x * cameraParallaxFactor - camera.position.x) * 0.05;\n            camera.position.y += (-intersectPoint.y * cameraParallaxFactor - camera.position.y) * 0.05;\n            camera.lookAt(scene.position);\n        }\n    // Add a new function to calculate the average z-coordinate of all particles\n    }\n    const scale = 1; // Adjust this value for your desired scale. E.g., 0.5 means the image will be 50% smaller\n    textureLoader.load(\"skrillex2023logo.png\", (imageTexture)=>{\n        const imgWidth = imageTexture.image.width * scale;\n        const imgHeight = imageTexture.image.height * scale;\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = imgWidth;\n        canvas.height = imgHeight;\n        const context = canvas.getContext(\"2d\");\n        context.drawImage(imageTexture.image, 0, 0, imgWidth, imgHeight);\n        const imgData = context.getImageData(0, 0, imgWidth, imgHeight).data;\n        const resolutionFactor = 4;\n        const particleTexture = textureLoader.load(\"particles2.png\");\n        const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();\n        const particleVertices = [];\n        const particleColors = [];\n        const originalPositions = [];\n        const increasedBrightness = 2.25; // Place this before the loop\n        for(let y = 0; y < imgHeight; y += resolutionFactor){\n            for(let x = 0; x < imgWidth; x += resolutionFactor){\n                const index = (y * imgWidth + x) * 4;\n                const r = imgData[index];\n                const g = imgData[index + 1];\n                const b = imgData[index + 2];\n                const brightness = 0.7152 * r + 0.2126 * g + 0.0722 * b;\n                if (brightness > 128) {\n                    const xPos = (x / imgWidth - 0.5) * 2;\n                    const yPos = (y / imgHeight - 0.5) * -2;\n                    particleVertices.push(xPos, yPos, 0);\n                    originalPositions.push(xPos, yPos, 0);\n                    particleColors.push(r / 255 * increasedBrightness * 0.8, g / 255 * increasedBrightness, b / 255 * increasedBrightness);\n                }\n            //particleColors.push(1, 0, 0); // Set RGB values to (1, 0, 0) for red\n            }\n        }\n        particlesGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(particleVertices, 3));\n        particlesGeometry.setAttribute(\"color\", new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(particleColors, 3));\n        const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({\n            size: 0.05,\n            map: particleTexture,\n            vertexColors: true,\n            transparent: true,\n            opacity: 1\n        });\n        const particles = new three__WEBPACK_IMPORTED_MODULE_1__.Points(particlesGeometry, particlesMaterial);\n        scene.add(particles);\n        const radius = 1; // Replace with the desired radius of the circle\n        const segments = 32; // Replace with the desired number of segments to approximate the circle\n        const circleTexture = textureLoader.load(\"circle4.png\");\n        const circleMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n            map: circleTexture\n        });\n        const circleGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(radius, segments);\n        const circleMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(circleGeometry, circleMaterial);\n        circleMesh.position.set(0, 0, -2);\n        circleMesh.rotation.set(0, 0, 0);\n        //scene.add(circleMesh);\n        // Then, in your animate function:\n        function animate() {\n            const positions = particlesGeometry.attributes.position.array;\n            const time = Date.now() * 0.0001; // adjust the multiplier to control the speed of the animation\n            for(let i = 0; i < positions.length; i += 3){\n                let particlePos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(positions[i], positions[i + 1], positions[i + 2]);\n                let originalPos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(originalPositions[i], originalPositions[i + 1], originalPositions[i + 2]);\n                // Calculate the distance between the particle and the mouse\n                let distanceToMouse = particlePos.distanceTo(mouse);\n                // If the distance is less than the mouseRadius, move the particle towards the mouse\n                if (distanceToMouse < mouseRadius) {\n                    particlePos.lerp(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(mouse.x, mouse.y, particlePos.z), mouseStrength);\n                } else {\n                    // Otherwise, move the particle back to its original position\n                    particlePos.lerp(originalPos, 0.05);\n                }\n                // Use the noise function to get a smooth, varying value for each particle\n                const noiseValue = noise3DFunction(particlePos.x, particlePos.y, time);\n                // Use the noise value to adjust the position of the particle\n                particlePos.z += noiseValue * 0.01; // adjust the multiplier to control the amplitude of the animation\n                positions[i] = particlePos.x;\n                positions[i + 1] = particlePos.y;\n                positions[i + 2] = particlePos.z;\n            }\n            particlesGeometry.attributes.position.needsUpdate = true;\n            //renderer.render(scene, camera);\n            composer.render();\n            requestAnimationFrame(animate);\n        }\n        animate();\n    });\n    camera.position.z = 1.38;\n    window.addEventListener(\"resize\", ()=>{\n        const newWidth = window.innerWidth;\n        const newHeight = window.innerHeight;\n        camera.aspect = newWidth / newHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(newWidth, newHeight);\n        composer.setSize(newWidth, newHeight);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHNCQUFzQjtRQUU3QnZILFNBQVNHLE9BQU8sQ0FBQ2lILFVBQVVDO1FBQzNCOUcsU0FBU0osT0FBTyxDQUFDaUgsVUFBVUM7SUFDL0I7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcHAuanM/YzI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcclxuaW1wb3J0IHsgRWZmZWN0Q29tcG9zZXIgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL0VmZmVjdENvbXBvc2VyLmpzXCI7XHJcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcclxuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanNcIjtcclxuaW1wb3J0IHsgY3JlYXRlTm9pc2UzRCB9IGZyb20gJ3NpbXBsZXgtbm9pc2UnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRpYWxpemVUaHJlZUpTKG1vdW50UG9pbnQpIHtcclxuICAgIC8vIEluaXRpYWxpemUgdGhlIG5vaXNlIGdlbmVyYXRvclxyXG4gICAgY29uc3Qgbm9pc2UzREZ1bmN0aW9uID0gY3JlYXRlTm9pc2UzRCgpO1xyXG5cclxuICAgIGNvbnN0IG1vdXNlUmFkaXVzID0gMC4xOyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWRcclxuY29uc3QgbW91c2VTdHJlbmd0aCA9IDAuMDU7IC8vIEFkanVzdCB0aGlzIHZhbHVlIGFzIG5lZWRlZCwgaWYgbm90IGRlZmluZWQgZWxzZXdoZXJlXHJcblxyXG5cclxuICAgIC8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXHJcbiAgICBjb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xyXG4gICAgY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcclxuICAgIGNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcclxuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XHJcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLCAwKTtcclxuXHJcbiAgICBtb3VudFBvaW50LmFwcGVuZENoaWxkKHJlbmRlcmVyLmRvbUVsZW1lbnQpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpemUgdGhlIEVmZmVjdCBDb21wb3NlclxyXG4gICAgY29uc3QgY29tcG9zZXIgPSBuZXcgRWZmZWN0Q29tcG9zZXIocmVuZGVyZXIpO1xyXG5cclxuICAgIGNvbnN0IHJlbmRlclBhc3MgPSBuZXcgUmVuZGVyUGFzcyhzY2VuZSwgY2FtZXJhKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MocmVuZGVyUGFzcyk7XHJcblxyXG4gICAgY29uc3QgYmxvb21PcHRpb25zID0ge1xyXG4gICAgICAgIHN0cmVuZ3RoOiAyLjUsXHJcbiAgICAgICAgcmFkaXVzOiAwLjYsXHJcbiAgICAgICAgdGhyZXNob2xkOiAwXHJcbiAgICB9O1xyXG4gICAgY29uc3QgYmxvb21QYXNzID0gbmV3IFVucmVhbEJsb29tUGFzcyhuZXcgVEhSRUUuVmVjdG9yMih3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0KSwgYmxvb21PcHRpb25zLnN0cmVuZ3RoLCBibG9vbU9wdGlvbnMucmFkaXVzLCBibG9vbU9wdGlvbnMudGhyZXNob2xkKTtcclxuICAgIGNvbXBvc2VyLmFkZFBhc3MoYmxvb21QYXNzKTtcclxuXHJcbiAgICAvLyBEZWZpbmUgdGhlIHRleHR1cmVMb2FkZXIgaGVyZVxyXG5jb25zdCB0ZXh0dXJlTG9hZGVyID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKTtcclxuXHJcbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigxMDAwMCwgMTAwMDApO1xyXG4gICAgbGV0IHJheWNhc3RlciA9IG5ldyBUSFJFRS5SYXljYXN0ZXIoKTtcclxuXHJcbiAgICBjb25zdCBjYW1lcmFQYXJhbGxheEZhY3RvciA9IDAuNTtcclxuXHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBtb3VzZS54ID0gKGUuY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xyXG4gICAgICAgIG1vdXNlLnkgPSAtKGUuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcclxuICAgICAgICBtb3VzZS56ID0gZ2V0QXZlcmFnZVBhcnRpY2xlWigpO1xyXG4gICAgXHJcbiAgICAgICAgcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIGNhbWVyYSk7XHJcbiAgICBcclxuICAgICAgICBpZiAoIXJheWNhc3Rlci5yYXkpIHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcignUmF5Y2FzdGVyIHJheSBpcyBub3QgaW5pdGlhbGl6ZWQuJyk7XHJcbiAgICAgICAgICAgIHJldHVybjsgLy8gRXhpdCB0aGUgZnVuY3Rpb24gZWFybHkgdG8gcHJldmVudCBmdXJ0aGVyIGVycm9yc1xyXG4gICAgICAgIH1cclxuICAgIFxyXG4gICAgICAgIGxldCBpbnRlcnNlY3RQb2ludCA9IG5ldyBUSFJFRS5WZWN0b3IzKCk7XHJcbiAgICAgICAgcmF5Y2FzdGVyLnJheS5hdCgxLjMsIGludGVyc2VjdFBvaW50KTtcclxuICAgIFxyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IChpbnRlcnNlY3RQb2ludC54ICogY2FtZXJhUGFyYWxsYXhGYWN0b3IgLSBjYW1lcmEucG9zaXRpb24ueCkgKiAwLjA1O1xyXG4gICAgICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9ICgtaW50ZXJzZWN0UG9pbnQueSAqIGNhbWVyYVBhcmFsbGF4RmFjdG9yIC0gY2FtZXJhLnBvc2l0aW9uLnkpICogMC4wNTtcclxuICAgICAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCBoYW5kbGVUb3VjaCk7XHJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2gpO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVUb3VjaChlKSB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChlLnRvdWNoZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zdCB0b3VjaCA9IGUudG91Y2hlc1swXTtcclxuXHJcbiAgICAgICAgICAgIG1vdXNlLnggPSAodG91Y2guY2xpZW50WCAvIHdpbmRvdy5pbm5lcldpZHRoKSAqIDIgLSAxO1xyXG4gICAgICAgICAgICBtb3VzZS55ID0gLSh0b3VjaC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xyXG4gICAgICAgICAgICBtb3VzZS56ID0gZ2V0QXZlcmFnZVBhcnRpY2xlWigpO1xyXG5cclxuICAgICAgICAgICAgcmF5Y2FzdGVyLnNldEZyb21DYW1lcmEobW91c2UsIGNhbWVyYSk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBjb25zdCBpbnRlcnNlY3RQb2ludCA9IHJheWNhc3Rlci5yYXkuYXQoMS4zKTtcclxuXHJcbiAgICAgICAgICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IChpbnRlcnNlY3RQb2ludC54ICogY2FtZXJhUGFyYWxsYXhGYWN0b3IgLSBjYW1lcmEucG9zaXRpb24ueCkgKiAwLjA1O1xyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueSArPSAoLWludGVyc2VjdFBvaW50LnkgKiBjYW1lcmFQYXJhbGxheEZhY3RvciAtIGNhbWVyYS5wb3NpdGlvbi55KSAqIDAuMDU7XHJcbiAgICAgICAgICAgIGNhbWVyYS5sb29rQXQoc2NlbmUucG9zaXRpb24pO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBBZGQgYSBuZXcgZnVuY3Rpb24gdG8gY2FsY3VsYXRlIHRoZSBhdmVyYWdlIHotY29vcmRpbmF0ZSBvZiBhbGwgcGFydGljbGVzXHJcblxyXG4gICAgfVxyXG5jb25zdCBzY2FsZSA9IDE7IC8vIEFkanVzdCB0aGlzIHZhbHVlIGZvciB5b3VyIGRlc2lyZWQgc2NhbGUuIEUuZy4sIDAuNSBtZWFucyB0aGUgaW1hZ2Ugd2lsbCBiZSA1MCUgc21hbGxlclxyXG5cclxudGV4dHVyZUxvYWRlci5sb2FkKCdza3JpbGxleDIwMjNsb2dvLnBuZycsIChpbWFnZVRleHR1cmUpID0+IHtcclxuICAgIGNvbnN0IGltZ1dpZHRoID0gaW1hZ2VUZXh0dXJlLmltYWdlLndpZHRoICogc2NhbGU7XHJcbiAgICBjb25zdCBpbWdIZWlnaHQgPSBpbWFnZVRleHR1cmUuaW1hZ2UuaGVpZ2h0ICogc2NhbGU7XHJcbiAgICBcclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gaW1nV2lkdGg7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gaW1nSGVpZ2h0O1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgXHJcbiAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZVRleHR1cmUuaW1hZ2UsIDAsIDAsIGltZ1dpZHRoLCBpbWdIZWlnaHQpO1xyXG5cclxuICAgIGNvbnN0IGltZ0RhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KS5kYXRhO1xyXG4gICAgY29uc3QgcmVzb2x1dGlvbkZhY3RvciA9IDQ7XHJcblxyXG4gICAgY29uc3QgcGFydGljbGVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCdwYXJ0aWNsZXMyLnBuZycpO1xyXG4gICAgY29uc3QgcGFydGljbGVzR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgIGNvbnN0IHBhcnRpY2xlVmVydGljZXMgPSBbXTtcclxuICAgIGNvbnN0IHBhcnRpY2xlQ29sb3JzID0gW107XHJcbiAgICBjb25zdCBvcmlnaW5hbFBvc2l0aW9ucyA9IFtdO1xyXG4gICAgY29uc3QgaW5jcmVhc2VkQnJpZ2h0bmVzcyA9IDIuMjU7IC8vIFBsYWNlIHRoaXMgYmVmb3JlIHRoZSBsb29wXHJcblxyXG4gICAgZm9yIChsZXQgeSA9IDA7IHkgPCBpbWdIZWlnaHQ7IHkgKz0gcmVzb2x1dGlvbkZhY3Rvcikge1xyXG4gICAgICAgIGZvciAobGV0IHggPSAwOyB4IDwgaW1nV2lkdGg7IHggKz0gcmVzb2x1dGlvbkZhY3Rvcikge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICh5ICogaW1nV2lkdGggKyB4KSAqIDQ7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSBpbWdEYXRhW2luZGV4XTtcclxuICAgICAgICAgICAgY29uc3QgZyA9IGltZ0RhdGFbaW5kZXggKyAxXTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IGltZ0RhdGFbaW5kZXggKyAyXTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGJyaWdodG5lc3MgPSAwLjcxNTIgKiByICsgMC4yMTI2ICogZyArIDAuMDcyMiAqIGI7XHJcbiAgICAgICAgICAgIGlmIChicmlnaHRuZXNzID4gMTI4KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB4UG9zID0gKHggLyBpbWdXaWR0aCAtIDAuNSkgKiAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeVBvcyA9ICh5IC8gaW1nSGVpZ2h0IC0gMC41KSAqIC0yO1xyXG4gICAgICAgICAgICAgICAgcGFydGljbGVWZXJ0aWNlcy5wdXNoKHhQb3MsIHlQb3MsIDApO1xyXG4gICAgICAgICAgICAgICAgb3JpZ2luYWxQb3NpdGlvbnMucHVzaCh4UG9zLCB5UG9zLCAwKTtcclxucGFydGljbGVDb2xvcnMucHVzaCgociAvIDI1NSkgKiBpbmNyZWFzZWRCcmlnaHRuZXNzICogMC44LCAoZyAvIDI1NSkgKiBpbmNyZWFzZWRCcmlnaHRuZXNzLCAoYiAvIDI1NSkgKiBpbmNyZWFzZWRCcmlnaHRuZXNzKTsgICAgICAgICAgICB9XHJcbi8vcGFydGljbGVDb2xvcnMucHVzaCgxLCAwLCAwKTsgLy8gU2V0IFJHQiB2YWx1ZXMgdG8gKDEsIDAsIDApIGZvciByZWRcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHBhcnRpY2xlc0dlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgVEhSRUUuRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwYXJ0aWNsZVZlcnRpY2VzLCAzKSk7XHJcbiAgICBwYXJ0aWNsZXNHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocGFydGljbGVDb2xvcnMsIDMpKTtcclxuXHJcbiAgICBjb25zdCBwYXJ0aWNsZXNNYXRlcmlhbCA9IG5ldyBUSFJFRS5Qb2ludHNNYXRlcmlhbCh7IFxyXG4gICAgICAgIHNpemU6IDAuMDUsIFxyXG4gICAgICAgIG1hcDogcGFydGljbGVUZXh0dXJlLCBcclxuICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsIFxyXG4gICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgIG9wYWNpdHk6IDEsIC8vIEFkanVzdCB0aGlzIHZhbHVlXHJcbiAgICAgICAgXHJcblxyXG4gICAgfSk7XHJcbiAgICBjb25zdCBwYXJ0aWNsZXMgPSBuZXcgVEhSRUUuUG9pbnRzKHBhcnRpY2xlc0dlb21ldHJ5LCBwYXJ0aWNsZXNNYXRlcmlhbCk7XHJcbiAgICBzY2VuZS5hZGQocGFydGljbGVzKTtcclxuXHJcblxyXG4gICAgY29uc3QgcmFkaXVzID0gMTsgLy8gUmVwbGFjZSB3aXRoIHRoZSBkZXNpcmVkIHJhZGl1cyBvZiB0aGUgY2lyY2xlXHJcbmNvbnN0IHNlZ21lbnRzID0gMzI7IC8vIFJlcGxhY2Ugd2l0aCB0aGUgZGVzaXJlZCBudW1iZXIgb2Ygc2VnbWVudHMgdG8gYXBwcm94aW1hdGUgdGhlIGNpcmNsZVxyXG4gICAgXHJcbiAgICBjb25zdCBjaXJjbGVUZXh0dXJlID0gdGV4dHVyZUxvYWRlci5sb2FkKCdjaXJjbGU0LnBuZycpO1xyXG4gICAgY29uc3QgY2lyY2xlTWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBtYXA6IGNpcmNsZVRleHR1cmUgfSk7XHJcbiAgICBjb25zdCBjaXJjbGVHZW9tZXRyeSA9IG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeShyYWRpdXMsIHNlZ21lbnRzKTtcclxuICAgIGNvbnN0IGNpcmNsZU1lc2ggPSBuZXcgVEhSRUUuTWVzaChjaXJjbGVHZW9tZXRyeSwgY2lyY2xlTWF0ZXJpYWwpO1xyXG4gICAgY2lyY2xlTWVzaC5wb3NpdGlvbi5zZXQoMCwgMCwgLTIpO1xyXG4gICAgICAgIGNpcmNsZU1lc2gucm90YXRpb24uc2V0KDAsIDAsIDApO1xyXG4vL3NjZW5lLmFkZChjaXJjbGVNZXNoKTtcclxuXHJcbi8vIFRoZW4sIGluIHlvdXIgYW5pbWF0ZSBmdW5jdGlvbjpcclxuZnVuY3Rpb24gYW5pbWF0ZSgpIHtcclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHBhcnRpY2xlc0dlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICBjb25zdCB0aW1lID0gRGF0ZS5ub3coKSAqIDAuMDAwMTsgIC8vIGFkanVzdCB0aGUgbXVsdGlwbGllciB0byBjb250cm9sIHRoZSBzcGVlZCBvZiB0aGUgYW5pbWF0aW9uXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb3NpdGlvbnMubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICBsZXQgcGFydGljbGVQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyhwb3NpdGlvbnNbaV0sIHBvc2l0aW9uc1tpICsgMV0sIHBvc2l0aW9uc1tpICsgMl0pO1xyXG4gICAgICAgIGxldCBvcmlnaW5hbFBvcyA9IG5ldyBUSFJFRS5WZWN0b3IzKG9yaWdpbmFsUG9zaXRpb25zW2ldLCBvcmlnaW5hbFBvc2l0aW9uc1tpICsgMV0sIG9yaWdpbmFsUG9zaXRpb25zW2kgKyAyXSk7XHJcblxyXG4gICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgZGlzdGFuY2UgYmV0d2VlbiB0aGUgcGFydGljbGUgYW5kIHRoZSBtb3VzZVxyXG4gICAgICAgIGxldCBkaXN0YW5jZVRvTW91c2UgPSBwYXJ0aWNsZVBvcy5kaXN0YW5jZVRvKG1vdXNlKTtcclxuXHJcbiAgICAgICAgLy8gSWYgdGhlIGRpc3RhbmNlIGlzIGxlc3MgdGhhbiB0aGUgbW91c2VSYWRpdXMsIG1vdmUgdGhlIHBhcnRpY2xlIHRvd2FyZHMgdGhlIG1vdXNlXHJcbiAgICAgICAgaWYgKGRpc3RhbmNlVG9Nb3VzZSA8IG1vdXNlUmFkaXVzKSB7XHJcbiAgICAgICAgICAgIHBhcnRpY2xlUG9zLmxlcnAobmV3IFRIUkVFLlZlY3RvcjMobW91c2UueCwgbW91c2UueSwgcGFydGljbGVQb3MueiksIG1vdXNlU3RyZW5ndGgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgbW92ZSB0aGUgcGFydGljbGUgYmFjayB0byBpdHMgb3JpZ2luYWwgcG9zaXRpb25cclxuICAgICAgICAgICAgcGFydGljbGVQb3MubGVycChvcmlnaW5hbFBvcywgMC4wNSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIG5vaXNlIGZ1bmN0aW9uIHRvIGdldCBhIHNtb290aCwgdmFyeWluZyB2YWx1ZSBmb3IgZWFjaCBwYXJ0aWNsZVxyXG4gICAgICAgIGNvbnN0IG5vaXNlVmFsdWUgPSBub2lzZTNERnVuY3Rpb24ocGFydGljbGVQb3MueCwgcGFydGljbGVQb3MueSwgdGltZSk7XHJcblxyXG4gICAgICAgIC8vIFVzZSB0aGUgbm9pc2UgdmFsdWUgdG8gYWRqdXN0IHRoZSBwb3NpdGlvbiBvZiB0aGUgcGFydGljbGVcclxuICAgICAgICBwYXJ0aWNsZVBvcy56ICs9IG5vaXNlVmFsdWUgKiAwLjAxOyAgLy8gYWRqdXN0IHRoZSBtdWx0aXBsaWVyIHRvIGNvbnRyb2wgdGhlIGFtcGxpdHVkZSBvZiB0aGUgYW5pbWF0aW9uXHJcblxyXG4gICAgICAgIHBvc2l0aW9uc1tpXSA9IHBhcnRpY2xlUG9zLng7XHJcbiAgICAgICAgcG9zaXRpb25zW2kgKyAxXSA9IHBhcnRpY2xlUG9zLnk7XHJcbiAgICAgICAgcG9zaXRpb25zW2kgKyAyXSA9IHBhcnRpY2xlUG9zLno7XHJcbiAgICB9XHJcblxyXG4gICAgcGFydGljbGVzR2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgLy9yZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XHJcbiAgICBjb21wb3Nlci5yZW5kZXIoKTtcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxufVxyXG5cclxuICAgIGFuaW1hdGUoKTtcclxufSk7XHJcblxyXG5jYW1lcmEucG9zaXRpb24ueiA9IDEuMzg7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgIGNvbnN0IG5ld0hlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodDtcclxuXHJcbiAgICBjYW1lcmEuYXNwZWN0ID0gbmV3V2lkdGggLyBuZXdIZWlnaHQ7XHJcbiAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xyXG5cclxuICAgIHJlbmRlcmVyLnNldFNpemUobmV3V2lkdGgsIG5ld0hlaWdodCk7XHJcbiAgICBjb21wb3Nlci5zZXRTaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG59KTtcclxufSJdLCJuYW1lcyI6WyJUSFJFRSIsIkVmZmVjdENvbXBvc2VyIiwiUmVuZGVyUGFzcyIsIlVucmVhbEJsb29tUGFzcyIsImNyZWF0ZU5vaXNlM0QiLCJpbml0aWFsaXplVGhyZWVKUyIsIm1vdW50UG9pbnQiLCJub2lzZTNERnVuY3Rpb24iLCJtb3VzZVJhZGl1cyIsIm1vdXNlU3RyZW5ndGgiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwiY29tcG9zZXIiLCJyZW5kZXJQYXNzIiwiYWRkUGFzcyIsImJsb29tT3B0aW9ucyIsInN0cmVuZ3RoIiwicmFkaXVzIiwidGhyZXNob2xkIiwiYmxvb21QYXNzIiwiVmVjdG9yMiIsInRleHR1cmVMb2FkZXIiLCJUZXh0dXJlTG9hZGVyIiwibW91c2UiLCJyYXljYXN0ZXIiLCJSYXljYXN0ZXIiLCJjYW1lcmFQYXJhbGxheEZhY3RvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwieCIsImNsaWVudFgiLCJ5IiwiY2xpZW50WSIsInoiLCJnZXRBdmVyYWdlUGFydGljbGVaIiwic2V0RnJvbUNhbWVyYSIsInJheSIsImNvbnNvbGUiLCJlcnJvciIsImludGVyc2VjdFBvaW50IiwiVmVjdG9yMyIsImF0IiwicG9zaXRpb24iLCJsb29rQXQiLCJoYW5kbGVUb3VjaCIsInByZXZlbnREZWZhdWx0IiwidG91Y2hlcyIsImxlbmd0aCIsInRvdWNoIiwic2NhbGUiLCJsb2FkIiwiaW1hZ2VUZXh0dXJlIiwiaW1nV2lkdGgiLCJpbWFnZSIsIndpZHRoIiwiaW1nSGVpZ2h0IiwiaGVpZ2h0IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29udGV4dCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJpbWdEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZGF0YSIsInJlc29sdXRpb25GYWN0b3IiLCJwYXJ0aWNsZVRleHR1cmUiLCJwYXJ0aWNsZXNHZW9tZXRyeSIsIkJ1ZmZlckdlb21ldHJ5IiwicGFydGljbGVWZXJ0aWNlcyIsInBhcnRpY2xlQ29sb3JzIiwib3JpZ2luYWxQb3NpdGlvbnMiLCJpbmNyZWFzZWRCcmlnaHRuZXNzIiwiaW5kZXgiLCJyIiwiZyIsImIiLCJicmlnaHRuZXNzIiwieFBvcyIsInlQb3MiLCJwdXNoIiwic2V0QXR0cmlidXRlIiwiRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSIsInBhcnRpY2xlc01hdGVyaWFsIiwiUG9pbnRzTWF0ZXJpYWwiLCJzaXplIiwibWFwIiwidmVydGV4Q29sb3JzIiwidHJhbnNwYXJlbnQiLCJvcGFjaXR5IiwicGFydGljbGVzIiwiUG9pbnRzIiwiYWRkIiwic2VnbWVudHMiLCJjaXJjbGVUZXh0dXJlIiwiY2lyY2xlTWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNpcmNsZUdlb21ldHJ5IiwiQ2lyY2xlR2VvbWV0cnkiLCJjaXJjbGVNZXNoIiwiTWVzaCIsInNldCIsInJvdGF0aW9uIiwiYW5pbWF0ZSIsInBvc2l0aW9ucyIsImF0dHJpYnV0ZXMiLCJhcnJheSIsInRpbWUiLCJEYXRlIiwibm93IiwiaSIsInBhcnRpY2xlUG9zIiwib3JpZ2luYWxQb3MiLCJkaXN0YW5jZVRvTW91c2UiLCJkaXN0YW5jZVRvIiwibGVycCIsIm5vaXNlVmFsdWUiLCJuZWVkc1VwZGF0ZSIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIm5ld1dpZHRoIiwibmV3SGVpZ2h0IiwiYXNwZWN0IiwidXBkYXRlUHJvamVjdGlvbk1hdHJpeCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});