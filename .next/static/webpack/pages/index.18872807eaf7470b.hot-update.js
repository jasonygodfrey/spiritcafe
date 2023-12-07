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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/postprocessing/EffectComposer.js */ \"./node_modules/three/examples/jsm/postprocessing/EffectComposer.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/postprocessing/RenderPass.js */ \"./node_modules/three/examples/jsm/postprocessing/RenderPass.js\");\n/* harmony import */ var three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/postprocessing/UnrealBloomPass.js */ \"./node_modules/three/examples/jsm/postprocessing/UnrealBloomPass.js\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    // Initialize the noise generator\n    const noise3DFunction = (0,simplex_noise__WEBPACK_IMPORTED_MODULE_0__.createNoise3D)();\n    const mouseRadius = 0.1; // Adjust this value as needed\n    const mouseStrength = 0.05; // Adjust this value as needed, if not defined elsewhere\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0x000000, 0);\n    mountPoint.appendChild(renderer.domElement);\n    // Initialize the Effect Composer\n    const composer = new three_examples_jsm_postprocessing_EffectComposer_js__WEBPACK_IMPORTED_MODULE_2__.EffectComposer(renderer);\n    const renderPass = new three_examples_jsm_postprocessing_RenderPass_js__WEBPACK_IMPORTED_MODULE_3__.RenderPass(scene, camera);\n    composer.addPass(renderPass);\n    const bloomOptions = {\n        strength: 2.5,\n        radius: 0.6,\n        threshold: 0\n    };\n    const bloomPass = new three_examples_jsm_postprocessing_UnrealBloomPass_js__WEBPACK_IMPORTED_MODULE_4__.UnrealBloomPass(new three__WEBPACK_IMPORTED_MODULE_1__.Vector2(window.innerWidth, window.innerHeight), bloomOptions.strength, bloomOptions.radius, bloomOptions.threshold);\n    composer.addPass(bloomPass);\n    // Define the textureLoader here\n    const textureLoader = new three__WEBPACK_IMPORTED_MODULE_1__.TextureLoader();\n    let raycaster = new three__WEBPACK_IMPORTED_MODULE_1__.Raycaster();\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();\n    window.addEventListener(\"mousemove\", (e)=>{\n        // Update the mouse position\n        mouse.x = e.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(e.clientY / window.innerHeight) * 2 + 1;\n        // Update the raycaster with the mouse position\n        raycaster.setFromCamera(mouse, camera);\n        // Find all particles that intersect with the mouse's ray\n        let intersects = raycaster.intersectObjects(particles);\n        // If there's at least one intersection, the first one is the closest\n        if (intersects.length > 0) {\n            let intersect = intersects[0];\n            // The intersection point is the position where the mouse's ray hits the particle\n            let intersectPoint = intersect.point;\n        // You can now use intersectPoint to interact with the particles\n        }\n    });\n    // Define particlesGeometry in the outer scope\n    let particlesGeometry;\n    textureLoader.load(\"skrillex2023logo.png\", (imageTexture)=>{\n    // ...\n    //  particlesGeometry = new THREE.BufferGeometry();\n    // ...\n    });\n    function getAverageParticleZ() {\n        if (!particlesGeometry) {\n            return 0;\n        }\n        const positions = particlesGeometry.attributes.position.array;\n        let totalZ = 0;\n        for(let i = 2; i < positions.length; i += 3){\n            totalZ += positions[i];\n        }\n        return totalZ / (positions.length / 3);\n    }\n    window.addEventListener(\"touchstart\", handleTouch);\n    window.addEventListener(\"touchmove\", handleTouch);\n    function handleTouch(e) {\n        e.preventDefault();\n        if (e.touches.length > 0) {\n            const touch = e.touches[0];\n            mouse.x = touch.clientX / window.innerWidth * 2 - 1;\n            mouse.y = -(touch.clientY / window.innerHeight) * 2 + 1;\n            mouse.z = getAverageParticleZ();\n            raycaster.setFromCamera(mouse, camera);\n            const intersectPoint = raycaster.ray.at(1.3);\n            camera.position.x += (intersectPoint.x * cameraParallaxFactor - camera.position.x) * 0.05;\n            camera.position.y += (-intersectPoint.y * cameraParallaxFactor - camera.position.y) * 0.05;\n            camera.lookAt(scene.position);\n        }\n    // Add a new function to calculate the average z-coordinate of all particles\n    }\n    const scale = 1; // Adjust this value for your desired scale. E.g., 0.5 means the image will be 50% smaller\n    textureLoader.load(\"skrillex2023logo.png\", (imageTexture)=>{\n        const imgWidth = imageTexture.image.width * scale;\n        const imgHeight = imageTexture.image.height * scale;\n        const canvas = document.createElement(\"canvas\");\n        canvas.width = imgWidth;\n        canvas.height = imgHeight;\n        const context = canvas.getContext(\"2d\");\n        context.drawImage(imageTexture.image, 0, 0, imgWidth, imgHeight);\n        const imgData = context.getImageData(0, 0, imgWidth, imgHeight).data;\n        const resolutionFactor = 4;\n        const particleTexture = textureLoader.load(\"particles2.png\");\n        const particlesGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.BufferGeometry();\n        const particleVertices = [];\n        const particleColors = [];\n        const originalPositions = [];\n        const increasedBrightness = 2.25; // Place this before the loop\n        for(let y = 0; y < imgHeight; y += resolutionFactor){\n            for(let x = 0; x < imgWidth; x += resolutionFactor){\n                const index = (y * imgWidth + x) * 4;\n                const r = imgData[index];\n                const g = imgData[index + 1];\n                const b = imgData[index + 2];\n                const brightness = 0.7152 * r + 0.2126 * g + 0.0722 * b;\n                if (brightness > 128) {\n                    const xPos = (x / imgWidth - 0.5) * 2;\n                    const yPos = (y / imgHeight - 0.5) * -2;\n                    particleVertices.push(xPos, yPos, 0);\n                    originalPositions.push(xPos, yPos, 0);\n                    particleColors.push(r / 255 * increasedBrightness * 0.8, g / 255 * increasedBrightness, b / 255 * increasedBrightness);\n                }\n            //particleColors.push(1, 0, 0); // Set RGB values to (1, 0, 0) for red\n            }\n        }\n        particlesGeometry.setAttribute(\"position\", new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(particleVertices, 3));\n        particlesGeometry.setAttribute(\"color\", new three__WEBPACK_IMPORTED_MODULE_1__.Float32BufferAttribute(particleColors, 3));\n        const particlesMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.PointsMaterial({\n            size: 0.05,\n            map: particleTexture,\n            vertexColors: true,\n            transparent: true,\n            opacity: 1\n        });\n        const particles1 = new three__WEBPACK_IMPORTED_MODULE_1__.Points(particlesGeometry, particlesMaterial);\n        scene.add(particles1);\n        const radius = 1; // Replace with the desired radius of the circle\n        const segments = 32; // Replace with the desired number of segments to approximate the circle\n        const circleTexture = textureLoader.load(\"circle4.png\");\n        const circleMaterial = new three__WEBPACK_IMPORTED_MODULE_1__.MeshBasicMaterial({\n            map: circleTexture\n        });\n        const circleGeometry = new three__WEBPACK_IMPORTED_MODULE_1__.CircleGeometry(radius, segments);\n        const circleMesh = new three__WEBPACK_IMPORTED_MODULE_1__.Mesh(circleGeometry, circleMaterial);\n        circleMesh.position.set(0, 0, -2);\n        circleMesh.rotation.set(0, 0, 0);\n        //scene.add(circleMesh);\n        // Then, in your animate function:\n        function animate() {\n            const positions = particlesGeometry.attributes.position.array;\n            const time = Date.now() * 0.0001; // adjust the multiplier to control the speed of the animation\n            for(let i = 0; i < positions.length; i += 3){\n                let particlePos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(positions[i], positions[i + 1], positions[i + 2]);\n                let originalPos = new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(originalPositions[i], originalPositions[i + 1], originalPositions[i + 2]);\n                // Calculate the distance between the particle and the mouse\n                let distanceToMouse = particlePos.distanceTo(mouse);\n                // If the distance is less than the mouseRadius, move the particle towards the mouse\n                if (distanceToMouse < mouseRadius) {\n                    particlePos.lerp(new three__WEBPACK_IMPORTED_MODULE_1__.Vector3(mouse.x, mouse.y, particlePos.z), mouseStrength);\n                } else {\n                    // Otherwise, move the particle back to its original position\n                    particlePos.lerp(originalPos, 0.05);\n                }\n                // Use the noise function to get a smooth, varying value for each particle\n                const noiseValue = noise3DFunction(particlePos.x, particlePos.y, time);\n                // Use the noise value to adjust the position of the particle\n                particlePos.z += noiseValue * 0.01; // adjust the multiplier to control the amplitude of the animation\n                positions[i] = particlePos.x;\n                positions[i + 1] = particlePos.y;\n                positions[i + 2] = particlePos.z;\n            }\n            particlesGeometry.attributes.position.needsUpdate = true;\n            //renderer.render(scene, camera);\n            composer.render();\n            requestAnimationFrame(animate);\n        }\n        animate();\n    });\n    camera.position.z = 1.38;\n    window.addEventListener(\"resize\", ()=>{\n        const newWidth = window.innerWidth;\n        const newHeight = window.innerHeight;\n        camera.aspect = newWidth / newHeight;\n        camera.updateProjectionMatrix();\n        renderer.setSize(newWidth, newHeight);\n        composer.setSize(newWidth, newHeight);\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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USxDQUFDUSxDQUFDLEdBQUc7SUFFcEJwRCxPQUFPd0IsZ0JBQWdCLENBQUMsVUFBVTtRQUM5QixNQUFNa0csV0FBVzFILE9BQU9DLFVBQVU7UUFDbEMsTUFBTTBILFlBQVkzSCxPQUFPRSxXQUFXO1FBRXBDSixPQUFPOEgsTUFBTSxHQUFHRixXQUFXQztRQUMzQjdILE9BQU8rSCxzQkFBc0I7UUFFN0IxSCxTQUFTRyxPQUFPLENBQUNvSCxVQUFVQztRQUMzQmpILFNBQVNKLE9BQU8sQ0FBQ29ILFVBQVVDO0lBQy9CO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XHJcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJQYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9SZW5kZXJQYXNzLmpzXCI7XHJcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XHJcbmltcG9ydCB7IGNyZWF0ZU5vaXNlM0QgfSBmcm9tICdzaW1wbGV4LW5vaXNlJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSBub2lzZSBnZW5lcmF0b3JcclxuICAgIGNvbnN0IG5vaXNlM0RGdW5jdGlvbiA9IGNyZWF0ZU5vaXNlM0QoKTtcclxuXHJcbiAgICBjb25zdCBtb3VzZVJhZGl1cyA9IDAuMTsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkXHJcbmNvbnN0IG1vdXNlU3RyZW5ndGggPSAwLjA1OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWQsIGlmIG5vdCBkZWZpbmVkIGVsc2V3aGVyZVxyXG5cclxuXHJcbiAgICAvLyBTZXQgdXAgdGhlIHNjZW5lLCBjYW1lcmEsIGFuZCByZW5kZXJlclxyXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcclxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSg3NSwgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCk7XHJcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XHJcbiAgICByZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xyXG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwgMCk7XHJcblxyXG4gICAgbW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXplIHRoZSBFZmZlY3QgQ29tcG9zZXJcclxuICAgIGNvbnN0IGNvbXBvc2VyID0gbmV3IEVmZmVjdENvbXBvc2VyKHJlbmRlcmVyKTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJQYXNzID0gbmV3IFJlbmRlclBhc3Moc2NlbmUsIGNhbWVyYSk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKHJlbmRlclBhc3MpO1xyXG5cclxuICAgIGNvbnN0IGJsb29tT3B0aW9ucyA9IHtcclxuICAgICAgICBzdHJlbmd0aDogMi41LFxyXG4gICAgICAgIHJhZGl1czogMC42LFxyXG4gICAgICAgIHRocmVzaG9sZDogMFxyXG4gICAgfTtcclxuICAgIGNvbnN0IGJsb29tUGFzcyA9IG5ldyBVbnJlYWxCbG9vbVBhc3MobmV3IFRIUkVFLlZlY3RvcjIod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCksIGJsb29tT3B0aW9ucy5zdHJlbmd0aCwgYmxvb21PcHRpb25zLnJhZGl1cywgYmxvb21PcHRpb25zLnRocmVzaG9sZCk7XHJcbiAgICBjb21wb3Nlci5hZGRQYXNzKGJsb29tUGFzcyk7XHJcblxyXG4gICAgLy8gRGVmaW5lIHRoZSB0ZXh0dXJlTG9hZGVyIGhlcmVcclxuY29uc3QgdGV4dHVyZUxvYWRlciA9IG5ldyBUSFJFRS5UZXh0dXJlTG9hZGVyKCk7XHJcbmxldCByYXljYXN0ZXIgPSBuZXcgVEhSRUUuUmF5Y2FzdGVyKCk7XHJcbmxldCBtb3VzZSA9IG5ldyBUSFJFRS5WZWN0b3IyKCk7XHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuICAgIC8vIFVwZGF0ZSB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgIG1vdXNlLnggPSAoZS5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XHJcbiAgICBtb3VzZS55ID0gLShlLmNsaWVudFkgLyB3aW5kb3cuaW5uZXJIZWlnaHQpICogMiArIDE7XHJcblxyXG4gICAgLy8gVXBkYXRlIHRoZSByYXljYXN0ZXIgd2l0aCB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgIHJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKG1vdXNlLCBjYW1lcmEpO1xyXG5cclxuICAgIC8vIEZpbmQgYWxsIHBhcnRpY2xlcyB0aGF0IGludGVyc2VjdCB3aXRoIHRoZSBtb3VzZSdzIHJheVxyXG4gICAgbGV0IGludGVyc2VjdHMgPSByYXljYXN0ZXIuaW50ZXJzZWN0T2JqZWN0cyhwYXJ0aWNsZXMpO1xyXG5cclxuICAgIC8vIElmIHRoZXJlJ3MgYXQgbGVhc3Qgb25lIGludGVyc2VjdGlvbiwgdGhlIGZpcnN0IG9uZSBpcyB0aGUgY2xvc2VzdFxyXG4gICAgaWYgKGludGVyc2VjdHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgIGxldCBpbnRlcnNlY3QgPSBpbnRlcnNlY3RzWzBdO1xyXG5cclxuICAgICAgICAvLyBUaGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIHRoZSBwb3NpdGlvbiB3aGVyZSB0aGUgbW91c2UncyByYXkgaGl0cyB0aGUgcGFydGljbGVcclxuICAgICAgICBsZXQgaW50ZXJzZWN0UG9pbnQgPSBpbnRlcnNlY3QucG9pbnQ7XHJcblxyXG4gICAgICAgIC8vIFlvdSBjYW4gbm93IHVzZSBpbnRlcnNlY3RQb2ludCB0byBpbnRlcmFjdCB3aXRoIHRoZSBwYXJ0aWNsZXNcclxuICAgIH1cclxufSk7XHJcbiAgICAvLyBEZWZpbmUgcGFydGljbGVzR2VvbWV0cnkgaW4gdGhlIG91dGVyIHNjb3BlXHJcbmxldCBwYXJ0aWNsZXNHZW9tZXRyeTtcclxuXHJcbnRleHR1cmVMb2FkZXIubG9hZCgnc2tyaWxsZXgyMDIzbG9nby5wbmcnLCAoaW1hZ2VUZXh0dXJlKSA9PiB7XHJcbiAgICAvLyAuLi5cclxuICAvLyAgcGFydGljbGVzR2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgIC8vIC4uLlxyXG59KTtcclxuICAgIGZ1bmN0aW9uIGdldEF2ZXJhZ2VQYXJ0aWNsZVooKSB7XHJcbiAgICAgICAgaWYgKCFwYXJ0aWNsZXNHZW9tZXRyeSkge1xyXG4gICAgICAgICAgICByZXR1cm4gMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gcGFydGljbGVzR2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICBsZXQgdG90YWxaID0gMDtcclxuICAgICAgICBmb3IgKGxldCBpID0gMjsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkgKz0gMykge1xyXG4gICAgICAgICAgICB0b3RhbFogKz0gcG9zaXRpb25zW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdG90YWxaIC8gKHBvc2l0aW9ucy5sZW5ndGggLyAzKTtcclxuICAgIH1cclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgaGFuZGxlVG91Y2gpO1xyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gaGFuZGxlVG91Y2goZSkge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZS50b3VjaGVzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc3QgdG91Y2ggPSBlLnRvdWNoZXNbMF07XHJcblxyXG4gICAgICAgICAgICBtb3VzZS54ID0gKHRvdWNoLmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMTtcclxuICAgICAgICAgICAgbW91c2UueSA9IC0odG91Y2guY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcclxuICAgICAgICAgICAgbW91c2UueiA9IGdldEF2ZXJhZ2VQYXJ0aWNsZVooKTtcclxuXHJcbiAgICAgICAgICAgIHJheWNhc3Rlci5zZXRGcm9tQ2FtZXJhKG1vdXNlLCBjYW1lcmEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgaW50ZXJzZWN0UG9pbnQgPSByYXljYXN0ZXIucmF5LmF0KDEuMyk7XHJcblxyXG4gICAgICAgICAgICBjYW1lcmEucG9zaXRpb24ueCArPSAoaW50ZXJzZWN0UG9pbnQueCAqIGNhbWVyYVBhcmFsbGF4RmFjdG9yIC0gY2FtZXJhLnBvc2l0aW9uLngpICogMC4wNTtcclxuICAgICAgICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gKC1pbnRlcnNlY3RQb2ludC55ICogY2FtZXJhUGFyYWxsYXhGYWN0b3IgLSBjYW1lcmEucG9zaXRpb24ueSkgKiAwLjA1O1xyXG4gICAgICAgICAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gQWRkIGEgbmV3IGZ1bmN0aW9uIHRvIGNhbGN1bGF0ZSB0aGUgYXZlcmFnZSB6LWNvb3JkaW5hdGUgb2YgYWxsIHBhcnRpY2xlc1xyXG5cclxuICAgIH1cclxuY29uc3Qgc2NhbGUgPSAxOyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBmb3IgeW91ciBkZXNpcmVkIHNjYWxlLiBFLmcuLCAwLjUgbWVhbnMgdGhlIGltYWdlIHdpbGwgYmUgNTAlIHNtYWxsZXJcclxuXHJcbnRleHR1cmVMb2FkZXIubG9hZCgnc2tyaWxsZXgyMDIzbG9nby5wbmcnLCAoaW1hZ2VUZXh0dXJlKSA9PiB7XHJcbiAgICBjb25zdCBpbWdXaWR0aCA9IGltYWdlVGV4dHVyZS5pbWFnZS53aWR0aCAqIHNjYWxlO1xyXG4gICAgY29uc3QgaW1nSGVpZ2h0ID0gaW1hZ2VUZXh0dXJlLmltYWdlLmhlaWdodCAqIHNjYWxlO1xyXG4gICAgXHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IGltZ1dpZHRoO1xyXG4gICAgY2FudmFzLmhlaWdodCA9IGltZ0hlaWdodDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIFxyXG4gICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2VUZXh0dXJlLmltYWdlLCAwLCAwLCBpbWdXaWR0aCwgaW1nSGVpZ2h0KTtcclxuXHJcbiAgICBjb25zdCBpbWdEYXRhID0gY29udGV4dC5nZXRJbWFnZURhdGEoMCwgMCwgaW1nV2lkdGgsIGltZ0hlaWdodCkuZGF0YTtcclxuICAgIGNvbnN0IHJlc29sdXRpb25GYWN0b3IgPSA0O1xyXG5cclxuICAgIGNvbnN0IHBhcnRpY2xlVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCgncGFydGljbGVzMi5wbmcnKTtcclxuICAgIGNvbnN0IHBhcnRpY2xlc0dlb21ldHJ5ID0gbmV3IFRIUkVFLkJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICBjb25zdCBwYXJ0aWNsZVZlcnRpY2VzID0gW107XHJcbiAgICBjb25zdCBwYXJ0aWNsZUNvbG9ycyA9IFtdO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxQb3NpdGlvbnMgPSBbXTtcclxuICAgIGNvbnN0IGluY3JlYXNlZEJyaWdodG5lc3MgPSAyLjI1OyAvLyBQbGFjZSB0aGlzIGJlZm9yZSB0aGUgbG9vcFxyXG5cclxuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgaW1nSGVpZ2h0OyB5ICs9IHJlc29sdXRpb25GYWN0b3IpIHtcclxuICAgICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IGltZ1dpZHRoOyB4ICs9IHJlc29sdXRpb25GYWN0b3IpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSAoeSAqIGltZ1dpZHRoICsgeCkgKiA0O1xyXG4gICAgICAgICAgICBjb25zdCByID0gaW1nRGF0YVtpbmRleF07XHJcbiAgICAgICAgICAgIGNvbnN0IGcgPSBpbWdEYXRhW2luZGV4ICsgMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBpbWdEYXRhW2luZGV4ICsgMl07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBicmlnaHRuZXNzID0gMC43MTUyICogciArIDAuMjEyNiAqIGcgKyAwLjA3MjIgKiBiO1xyXG4gICAgICAgICAgICBpZiAoYnJpZ2h0bmVzcyA+IDEyOCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeFBvcyA9ICh4IC8gaW1nV2lkdGggLSAwLjUpICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHlQb3MgPSAoeSAvIGltZ0hlaWdodCAtIDAuNSkgKiAtMjtcclxuICAgICAgICAgICAgICAgIHBhcnRpY2xlVmVydGljZXMucHVzaCh4UG9zLCB5UG9zLCAwKTtcclxuICAgICAgICAgICAgICAgIG9yaWdpbmFsUG9zaXRpb25zLnB1c2goeFBvcywgeVBvcywgMCk7XHJcbnBhcnRpY2xlQ29sb3JzLnB1c2goKHIgLyAyNTUpICogaW5jcmVhc2VkQnJpZ2h0bmVzcyAqIDAuOCwgKGcgLyAyNTUpICogaW5jcmVhc2VkQnJpZ2h0bmVzcywgKGIgLyAyNTUpICogaW5jcmVhc2VkQnJpZ2h0bmVzcyk7ICAgICAgICAgICAgfVxyXG4vL3BhcnRpY2xlQ29sb3JzLnB1c2goMSwgMCwgMCk7IC8vIFNldCBSR0IgdmFsdWVzIHRvICgxLCAwLCAwKSBmb3IgcmVkXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwYXJ0aWNsZXNHZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IFRIUkVFLkZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocGFydGljbGVWZXJ0aWNlcywgMykpO1xyXG4gICAgcGFydGljbGVzR2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBUSFJFRS5GbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBhcnRpY2xlQ29sb3JzLCAzKSk7XHJcblxyXG4gICAgY29uc3QgcGFydGljbGVzTWF0ZXJpYWwgPSBuZXcgVEhSRUUuUG9pbnRzTWF0ZXJpYWwoeyBcclxuICAgICAgICBzaXplOiAwLjA1LCBcclxuICAgICAgICBtYXA6IHBhcnRpY2xlVGV4dHVyZSwgXHJcbiAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLCBcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICBvcGFjaXR5OiAxLCAvLyBBZGp1c3QgdGhpcyB2YWx1ZVxyXG4gICAgICAgIFxyXG5cclxuICAgIH0pO1xyXG4gICAgY29uc3QgcGFydGljbGVzID0gbmV3IFRIUkVFLlBvaW50cyhwYXJ0aWNsZXNHZW9tZXRyeSwgcGFydGljbGVzTWF0ZXJpYWwpO1xyXG4gICAgc2NlbmUuYWRkKHBhcnRpY2xlcyk7XHJcblxyXG5cclxuICAgIGNvbnN0IHJhZGl1cyA9IDE7IC8vIFJlcGxhY2Ugd2l0aCB0aGUgZGVzaXJlZCByYWRpdXMgb2YgdGhlIGNpcmNsZVxyXG5jb25zdCBzZWdtZW50cyA9IDMyOyAvLyBSZXBsYWNlIHdpdGggdGhlIGRlc2lyZWQgbnVtYmVyIG9mIHNlZ21lbnRzIHRvIGFwcHJveGltYXRlIHRoZSBjaXJjbGVcclxuICAgIFxyXG4gICAgY29uc3QgY2lyY2xlVGV4dHVyZSA9IHRleHR1cmVMb2FkZXIubG9hZCgnY2lyY2xlNC5wbmcnKTtcclxuICAgIGNvbnN0IGNpcmNsZU1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgbWFwOiBjaXJjbGVUZXh0dXJlIH0pO1xyXG4gICAgY29uc3QgY2lyY2xlR2VvbWV0cnkgPSBuZXcgVEhSRUUuQ2lyY2xlR2VvbWV0cnkocmFkaXVzLCBzZWdtZW50cyk7XHJcbiAgICBjb25zdCBjaXJjbGVNZXNoID0gbmV3IFRIUkVFLk1lc2goY2lyY2xlR2VvbWV0cnksIGNpcmNsZU1hdGVyaWFsKTtcclxuICAgIGNpcmNsZU1lc2gucG9zaXRpb24uc2V0KDAsIDAsIC0yKTtcclxuICAgICAgICBjaXJjbGVNZXNoLnJvdGF0aW9uLnNldCgwLCAwLCAwKTtcclxuLy9zY2VuZS5hZGQoY2lyY2xlTWVzaCk7XHJcblxyXG4vLyBUaGVuLCBpbiB5b3VyIGFuaW1hdGUgZnVuY3Rpb246XHJcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBwYXJ0aWNsZXNHZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgY29uc3QgdGltZSA9IERhdGUubm93KCkgKiAwLjAwMDE7ICAvLyBhZGp1c3QgdGhlIG11bHRpcGxpZXIgdG8gY29udHJvbCB0aGUgc3BlZWQgb2YgdGhlIGFuaW1hdGlvblxyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9zaXRpb25zLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgbGV0IHBhcnRpY2xlUG9zID0gbmV3IFRIUkVFLlZlY3RvcjMocG9zaXRpb25zW2ldLCBwb3NpdGlvbnNbaSArIDFdLCBwb3NpdGlvbnNbaSArIDJdKTtcclxuICAgICAgICBsZXQgb3JpZ2luYWxQb3MgPSBuZXcgVEhSRUUuVmVjdG9yMyhvcmlnaW5hbFBvc2l0aW9uc1tpXSwgb3JpZ2luYWxQb3NpdGlvbnNbaSArIDFdLCBvcmlnaW5hbFBvc2l0aW9uc1tpICsgMl0pO1xyXG5cclxuICAgICAgICAvLyBDYWxjdWxhdGUgdGhlIGRpc3RhbmNlIGJldHdlZW4gdGhlIHBhcnRpY2xlIGFuZCB0aGUgbW91c2VcclxuICAgICAgICBsZXQgZGlzdGFuY2VUb01vdXNlID0gcGFydGljbGVQb3MuZGlzdGFuY2VUbyhtb3VzZSk7XHJcblxyXG4gICAgICAgIC8vIElmIHRoZSBkaXN0YW5jZSBpcyBsZXNzIHRoYW4gdGhlIG1vdXNlUmFkaXVzLCBtb3ZlIHRoZSBwYXJ0aWNsZSB0b3dhcmRzIHRoZSBtb3VzZVxyXG4gICAgICAgIGlmIChkaXN0YW5jZVRvTW91c2UgPCBtb3VzZVJhZGl1cykge1xyXG4gICAgICAgICAgICBwYXJ0aWNsZVBvcy5sZXJwKG5ldyBUSFJFRS5WZWN0b3IzKG1vdXNlLngsIG1vdXNlLnksIHBhcnRpY2xlUG9zLnopLCBtb3VzZVN0cmVuZ3RoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIG1vdmUgdGhlIHBhcnRpY2xlIGJhY2sgdG8gaXRzIG9yaWdpbmFsIHBvc2l0aW9uXHJcbiAgICAgICAgICAgIHBhcnRpY2xlUG9zLmxlcnAob3JpZ2luYWxQb3MsIDAuMDUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gVXNlIHRoZSBub2lzZSBmdW5jdGlvbiB0byBnZXQgYSBzbW9vdGgsIHZhcnlpbmcgdmFsdWUgZm9yIGVhY2ggcGFydGljbGVcclxuICAgICAgICBjb25zdCBub2lzZVZhbHVlID0gbm9pc2UzREZ1bmN0aW9uKHBhcnRpY2xlUG9zLngsIHBhcnRpY2xlUG9zLnksIHRpbWUpO1xyXG5cclxuICAgICAgICAvLyBVc2UgdGhlIG5vaXNlIHZhbHVlIHRvIGFkanVzdCB0aGUgcG9zaXRpb24gb2YgdGhlIHBhcnRpY2xlXHJcbiAgICAgICAgcGFydGljbGVQb3MueiArPSBub2lzZVZhbHVlICogMC4wMTsgIC8vIGFkanVzdCB0aGUgbXVsdGlwbGllciB0byBjb250cm9sIHRoZSBhbXBsaXR1ZGUgb2YgdGhlIGFuaW1hdGlvblxyXG5cclxuICAgICAgICBwb3NpdGlvbnNbaV0gPSBwYXJ0aWNsZVBvcy54O1xyXG4gICAgICAgIHBvc2l0aW9uc1tpICsgMV0gPSBwYXJ0aWNsZVBvcy55O1xyXG4gICAgICAgIHBvc2l0aW9uc1tpICsgMl0gPSBwYXJ0aWNsZVBvcy56O1xyXG4gICAgfVxyXG5cclxuICAgIHBhcnRpY2xlc0dlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgIC8vcmVuZGVyZXIucmVuZGVyKHNjZW5lLCBjYW1lcmEpO1xyXG4gICAgY29tcG9zZXIucmVuZGVyKCk7XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbn1cclxuXHJcbiAgICBhbmltYXRlKCk7XHJcbn0pO1xyXG5cclxuY2FtZXJhLnBvc2l0aW9uLnogPSAxLjM4O1xyXG5cclxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsICgpID0+IHtcclxuICAgIGNvbnN0IG5ld1dpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICBjb25zdCBuZXdIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcblxyXG4gICAgY2FtZXJhLmFzcGVjdCA9IG5ld1dpZHRoIC8gbmV3SGVpZ2h0O1xyXG4gICAgY2FtZXJhLnVwZGF0ZVByb2plY3Rpb25NYXRyaXgoKTtcclxuXHJcbiAgICByZW5kZXJlci5zZXRTaXplKG5ld1dpZHRoLCBuZXdIZWlnaHQpO1xyXG4gICAgY29tcG9zZXIuc2V0U2l6ZShuZXdXaWR0aCwgbmV3SGVpZ2h0KTtcclxufSk7XHJcbn0iXSwibmFtZXMiOlsiVEhSRUUiLCJFZmZlY3RDb21wb3NlciIsIlJlbmRlclBhc3MiLCJVbnJlYWxCbG9vbVBhc3MiLCJjcmVhdGVOb2lzZTNEIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJtb3VudFBvaW50Iiwibm9pc2UzREZ1bmN0aW9uIiwibW91c2VSYWRpdXMiLCJtb3VzZVN0cmVuZ3RoIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNvbXBvc2VyIiwicmVuZGVyUGFzcyIsImFkZFBhc3MiLCJibG9vbU9wdGlvbnMiLCJzdHJlbmd0aCIsInJhZGl1cyIsInRocmVzaG9sZCIsImJsb29tUGFzcyIsIlZlY3RvcjIiLCJ0ZXh0dXJlTG9hZGVyIiwiVGV4dHVyZUxvYWRlciIsInJheWNhc3RlciIsIlJheWNhc3RlciIsIm1vdXNlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJ4IiwiY2xpZW50WCIsInkiLCJjbGllbnRZIiwic2V0RnJvbUNhbWVyYSIsImludGVyc2VjdHMiLCJpbnRlcnNlY3RPYmplY3RzIiwicGFydGljbGVzIiwibGVuZ3RoIiwiaW50ZXJzZWN0IiwiaW50ZXJzZWN0UG9pbnQiLCJwb2ludCIsInBhcnRpY2xlc0dlb21ldHJ5IiwibG9hZCIsImltYWdlVGV4dHVyZSIsImdldEF2ZXJhZ2VQYXJ0aWNsZVoiLCJwb3NpdGlvbnMiLCJhdHRyaWJ1dGVzIiwicG9zaXRpb24iLCJhcnJheSIsInRvdGFsWiIsImkiLCJoYW5kbGVUb3VjaCIsInByZXZlbnREZWZhdWx0IiwidG91Y2hlcyIsInRvdWNoIiwieiIsInJheSIsImF0IiwiY2FtZXJhUGFyYWxsYXhGYWN0b3IiLCJsb29rQXQiLCJzY2FsZSIsImltZ1dpZHRoIiwiaW1hZ2UiLCJ3aWR0aCIsImltZ0hlaWdodCIsImhlaWdodCIsImNhbnZhcyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNvbnRleHQiLCJnZXRDb250ZXh0IiwiZHJhd0ltYWdlIiwiaW1nRGF0YSIsImdldEltYWdlRGF0YSIsImRhdGEiLCJyZXNvbHV0aW9uRmFjdG9yIiwicGFydGljbGVUZXh0dXJlIiwiQnVmZmVyR2VvbWV0cnkiLCJwYXJ0aWNsZVZlcnRpY2VzIiwicGFydGljbGVDb2xvcnMiLCJvcmlnaW5hbFBvc2l0aW9ucyIsImluY3JlYXNlZEJyaWdodG5lc3MiLCJpbmRleCIsInIiLCJnIiwiYiIsImJyaWdodG5lc3MiLCJ4UG9zIiwieVBvcyIsInB1c2giLCJzZXRBdHRyaWJ1dGUiLCJGbG9hdDMyQnVmZmVyQXR0cmlidXRlIiwicGFydGljbGVzTWF0ZXJpYWwiLCJQb2ludHNNYXRlcmlhbCIsInNpemUiLCJtYXAiLCJ2ZXJ0ZXhDb2xvcnMiLCJ0cmFuc3BhcmVudCIsIm9wYWNpdHkiLCJQb2ludHMiLCJhZGQiLCJzZWdtZW50cyIsImNpcmNsZVRleHR1cmUiLCJjaXJjbGVNYXRlcmlhbCIsIk1lc2hCYXNpY01hdGVyaWFsIiwiY2lyY2xlR2VvbWV0cnkiLCJDaXJjbGVHZW9tZXRyeSIsImNpcmNsZU1lc2giLCJNZXNoIiwic2V0Iiwicm90YXRpb24iLCJhbmltYXRlIiwidGltZSIsIkRhdGUiLCJub3ciLCJwYXJ0aWNsZVBvcyIsIlZlY3RvcjMiLCJvcmlnaW5hbFBvcyIsImRpc3RhbmNlVG9Nb3VzZSIsImRpc3RhbmNlVG8iLCJsZXJwIiwibm9pc2VWYWx1ZSIsIm5lZWRzVXBkYXRlIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwibmV3V2lkdGgiLCJuZXdIZWlnaHQiLCJhc3BlY3QiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});