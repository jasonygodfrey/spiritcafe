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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5; // Adjust this value as needed\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(\"sushiresturantkit/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(1, 1, 1); // Scale down by 100x\n        scene.add(gltf.scene);\n        camera.position.x += 50; // Move the camera 5 units to the right\n    // scene.rotation.y = 90 * (Math.PI / 180); // Rotate the scene 90 degrees to the left\n    // scene.rotation.y = 90; // Rotate the scene 90 degrees to the right\n    //scene.rotation.x = Math.PI; // Rotate the scene 180 degrees around the x-axis\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create an ambient light\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 0.5);\n    scene.add(ambientLight);\n    // Create a directional light\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1); // set the direction of the light\n    scene.add(directionalLight);\n    // Render the scene\n    function animate() {\n        camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;\n        camera.position.y += (-(mouse.y * 10) - camera.position.y) * 0.05;\n        camera.lookAt(scene.position);\n        renderer.render(scene, camera);\n        requestAnimationFrame(animate);\n    }\n    animate();\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNzRDtBQUNSO0FBQ1U7QUFDekM7QUFDd0I7QUFDTztBQUV0RSxTQUFTTyxrQkFBa0JDLFVBQVU7SUFFeEMsSUFBSUMsUUFBUSxJQUFJVCwwQ0FBYTtJQUNqQyx5Q0FBeUM7SUFDekMsTUFBTVcsUUFBUSxJQUFJWCx3Q0FBVztJQUM3QixNQUFNYSxTQUFTLElBQUliLG9EQUF1QixDQUFDLElBQUllLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7SUFDNUZKLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsOEJBQThCO0lBRXJELE1BQU1DLFdBQVcsSUFBSXBCLGdEQUFtQixDQUFDO1FBQUVzQixPQUFPO0lBQUs7SUFDdkRGLFNBQVNHLE9BQU8sQ0FBQ1IsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQ3RERyxTQUFTSSxhQUFhLENBQUMsVUFBVSxJQUFJLGNBQWM7SUFFbkRoQixXQUFXaUIsV0FBVyxDQUFDTCxTQUFTTSxVQUFVO0lBRTFDLHNCQUFzQjtJQUN0QixNQUFNQyxTQUFTLElBQUl0QixnRkFBVUE7SUFDN0JzQixPQUFPQyxJQUFJLENBQUMsZ0NBQWdDLFNBQVVDLElBQUk7UUFDdERBLEtBQUtsQixLQUFLLENBQUNtQixLQUFLLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxxQkFBcUI7UUFDcERwQixNQUFNcUIsR0FBRyxDQUFDSCxLQUFLbEIsS0FBSztRQUNwQkUsT0FBT0ssUUFBUSxDQUFDZSxDQUFDLElBQUksSUFBSSx1Q0FBdUM7SUFDakUsc0ZBQXNGO0lBQ3RGLHFFQUFxRTtJQUNwRSwrRUFBK0U7SUFDbkYsR0FBR0MsV0FBVyxTQUFVQyxLQUFLO1FBQ3pCQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2xCO0lBRUEsMEJBQTBCO0lBQzFCLE1BQU1FLGVBQWUsSUFBSXJDLCtDQUFrQixDQUFDLFVBQVU7SUFDdERXLE1BQU1xQixHQUFHLENBQUNLO0lBRVYsNkJBQTZCO0lBQzdCLE1BQU1FLG1CQUFtQixJQUFJdkMsbURBQXNCLENBQUMsVUFBVTtJQUM5RHVDLGlCQUFpQnJCLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLGlDQUFpQztJQUN6RXBCLE1BQU1xQixHQUFHLENBQUNPO0lBRVYsbUJBQW1CO0lBQ25CLFNBQVNFO1FBQ0w1QixPQUFPSyxRQUFRLENBQUNlLENBQUMsSUFBSSxDQUFDeEIsTUFBTXdCLENBQUMsR0FBRyxLQUFLcEIsT0FBT0ssUUFBUSxDQUFDZSxDQUFDLElBQUk7UUFDMURwQixPQUFPSyxRQUFRLENBQUN3QixDQUFDLElBQUksQ0FBQyxDQUFFakMsQ0FBQUEsTUFBTWlDLENBQUMsR0FBRyxFQUFDLElBQUs3QixPQUFPSyxRQUFRLENBQUN3QixDQUFDLElBQUk7UUFFN0Q3QixPQUFPOEIsTUFBTSxDQUFDaEMsTUFBTU8sUUFBUTtRQUU1QkUsU0FBU3dCLE1BQU0sQ0FBQ2pDLE9BQU9FO1FBQ3ZCZ0Msc0JBQXNCSjtJQUMxQjtJQUVBQTtJQUNBMUIsT0FBTytCLGdCQUFnQixDQUFDLGFBQWEsQ0FBQ0M7UUFDbEN0QyxNQUFNd0IsQ0FBQyxHQUFHLE1BQU9lLE9BQU8sR0FBR2pDLE9BQU9DLFVBQVUsR0FBSSxJQUFJO1FBQ3BEUCxNQUFNaUMsQ0FBQyxHQUFHLENBQUVLLENBQUFBLE1BQU1FLE9BQU8sR0FBR2xDLE9BQU9FLFdBQVcsSUFBSSxJQUFJO0lBQzFEO0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvYXBwLmpzP2MyNDQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgVEhSRUUgZnJvbSBcInRocmVlXCI7XG5pbXBvcnQgeyBFZmZlY3RDb21wb3NlciB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvRWZmZWN0Q29tcG9zZXIuanNcIjtcbmltcG9ydCB7IFJlbmRlclBhc3MgfSBmcm9tIFwidGhyZWUvZXhhbXBsZXMvanNtL3Bvc3Rwcm9jZXNzaW5nL1JlbmRlclBhc3MuanNcIjtcbmltcG9ydCB7IFVucmVhbEJsb29tUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvVW5yZWFsQmxvb21QYXNzLmpzXCI7XG5pbXBvcnQgeyBjcmVhdGVOb2lzZTNEIH0gZnJvbSAnc2ltcGxleC1ub2lzZSc7XG5pbXBvcnQgeyBHTFRGTG9hZGVyIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2xvYWRlcnMvR0xURkxvYWRlci5qcyc7XG5pbXBvcnQgeyBPcmJpdENvbnRyb2xzIH0gZnJvbSAndGhyZWUvZXhhbXBsZXMvanNtL2NvbnRyb2xzL09yYml0Q29udHJvbHMuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdGlhbGl6ZVRocmVlSlMobW91bnRQb2ludCkge1xuXG4gICAgbGV0IG1vdXNlID0gbmV3IFRIUkVFLlZlY3RvcjIoKTtcbi8vIFNldCB1cCB0aGUgc2NlbmUsIGNhbWVyYSwgYW5kIHJlbmRlcmVyXG5jb25zdCBzY2VuZSA9IG5ldyBUSFJFRS5TY2VuZSgpO1xuY29uc3QgY2FtZXJhID0gbmV3IFRIUkVFLlBlcnNwZWN0aXZlQ2FtZXJhKDc1LCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwKTtcbmNhbWVyYS5wb3NpdGlvbi56ID0gNTsgLy8gQWRqdXN0IHRoaXMgdmFsdWUgYXMgbmVlZGVkXG5cbmNvbnN0IHJlbmRlcmVyID0gbmV3IFRIUkVFLldlYkdMUmVuZGVyZXIoeyBhbHBoYTogdHJ1ZSB9KTtcbnJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG5yZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4RjVGNURDLCAxKTsgLy8gQmVpZ2UgY29sb3JcblxubW91bnRQb2ludC5hcHBlbmRDaGlsZChyZW5kZXJlci5kb21FbGVtZW50KTtcblxuLy8gTG9hZCB0aGUgR0xURiBtb2RlbFxuY29uc3QgbG9hZGVyID0gbmV3IEdMVEZMb2FkZXIoKTtcbmxvYWRlci5sb2FkKCdzdXNoaXJlc3R1cmFudGtpdC9zY2VuZS5nbHRmJywgZnVuY3Rpb24gKGdsdGYpIHtcbiAgICBnbHRmLnNjZW5lLnNjYWxlLnNldCgxLCAxLCAxKTsgLy8gU2NhbGUgZG93biBieSAxMDB4XG4gICAgc2NlbmUuYWRkKGdsdGYuc2NlbmUpO1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IDUwOyAvLyBNb3ZlIHRoZSBjYW1lcmEgNSB1bml0cyB0byB0aGUgcmlnaHRcbiAgIC8vIHNjZW5lLnJvdGF0aW9uLnkgPSA5MCAqIChNYXRoLlBJIC8gMTgwKTsgLy8gUm90YXRlIHRoZSBzY2VuZSA5MCBkZWdyZWVzIHRvIHRoZSBsZWZ0XG4gICAvLyBzY2VuZS5yb3RhdGlvbi55ID0gOTA7IC8vIFJvdGF0ZSB0aGUgc2NlbmUgOTAgZGVncmVlcyB0byB0aGUgcmlnaHRcbiAgICAvL3NjZW5lLnJvdGF0aW9uLnggPSBNYXRoLlBJOyAvLyBSb3RhdGUgdGhlIHNjZW5lIDE4MCBkZWdyZWVzIGFyb3VuZCB0aGUgeC1heGlzXG59LCB1bmRlZmluZWQsIGZ1bmN0aW9uIChlcnJvcikge1xuICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xufSk7XG5cbi8vIENyZWF0ZSBhbiBhbWJpZW50IGxpZ2h0XG5jb25zdCBhbWJpZW50TGlnaHQgPSBuZXcgVEhSRUUuQW1iaWVudExpZ2h0KDB4ZmZmZmZmLCAwLjUpO1xuc2NlbmUuYWRkKGFtYmllbnRMaWdodCk7XG5cbi8vIENyZWF0ZSBhIGRpcmVjdGlvbmFsIGxpZ2h0XG5jb25zdCBkaXJlY3Rpb25hbExpZ2h0ID0gbmV3IFRIUkVFLkRpcmVjdGlvbmFsTGlnaHQoMHhmZmZmZmYsIDEpO1xuZGlyZWN0aW9uYWxMaWdodC5wb3NpdGlvbi5zZXQoMSwgMSwgMSk7IC8vIHNldCB0aGUgZGlyZWN0aW9uIG9mIHRoZSBsaWdodFxuc2NlbmUuYWRkKGRpcmVjdGlvbmFsTGlnaHQpO1xuXG4vLyBSZW5kZXIgdGhlIHNjZW5lXG5mdW5jdGlvbiBhbmltYXRlKCkge1xuICAgIGNhbWVyYS5wb3NpdGlvbi54ICs9IChtb3VzZS54ICogMTAgLSBjYW1lcmEucG9zaXRpb24ueCkgKiAwLjA1O1xuICAgIGNhbWVyYS5wb3NpdGlvbi55ICs9ICgtKG1vdXNlLnkgKiAxMCkgLSBjYW1lcmEucG9zaXRpb24ueSkgKiAwLjA1O1xuXG4gICAgY2FtZXJhLmxvb2tBdChzY2VuZS5wb3NpdGlvbik7XG5cbiAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xufVxuXG5hbmltYXRlKCk7XG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGV2ZW50KSA9PiB7XG4gICAgbW91c2UueCA9IChldmVudC5jbGllbnRYIC8gd2luZG93LmlubmVyV2lkdGgpICogMiAtIDE7XG4gICAgbW91c2UueSA9IC0oZXZlbnQuY2xpZW50WSAvIHdpbmRvdy5pbm5lckhlaWdodCkgKiAyICsgMTtcbn0pO1xuXG59XG5cbiJdLCJuYW1lcyI6WyJUSFJFRSIsIkVmZmVjdENvbXBvc2VyIiwiUmVuZGVyUGFzcyIsIlVucmVhbEJsb29tUGFzcyIsImNyZWF0ZU5vaXNlM0QiLCJHTFRGTG9hZGVyIiwiT3JiaXRDb250cm9scyIsImluaXRpYWxpemVUaHJlZUpTIiwibW91bnRQb2ludCIsIm1vdXNlIiwiVmVjdG9yMiIsInNjZW5lIiwiU2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsInJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsImFscGhhIiwic2V0U2l6ZSIsInNldENsZWFyQ29sb3IiLCJhcHBlbmRDaGlsZCIsImRvbUVsZW1lbnQiLCJsb2FkZXIiLCJsb2FkIiwiZ2x0ZiIsInNjYWxlIiwic2V0IiwiYWRkIiwieCIsInVuZGVmaW5lZCIsImVycm9yIiwiY29uc29sZSIsImFtYmllbnRMaWdodCIsIkFtYmllbnRMaWdodCIsImRpcmVjdGlvbmFsTGlnaHQiLCJEaXJlY3Rpb25hbExpZ2h0IiwiYW5pbWF0ZSIsInkiLCJsb29rQXQiLCJyZW5kZXIiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJjbGllbnRYIiwiY2xpZW50WSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});