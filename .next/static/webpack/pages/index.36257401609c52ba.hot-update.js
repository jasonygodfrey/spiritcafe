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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   initializeThreeJS: function() { return /* binding */ initializeThreeJS; }\n/* harmony export */ });\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* harmony import */ var simplex_noise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! simplex-noise */ \"./node_modules/simplex-noise/dist/esm/simplex-noise.js\");\n/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ \"./node_modules/three/examples/jsm/loaders/GLTFLoader.js\");\n\n\n\n\n\n\n\nfunction initializeThreeJS(mountPoint) {\n    let mouse = new three__WEBPACK_IMPORTED_MODULE_1__.Vector2();\n    // Set up the scene, camera, and renderer\n    const scene = new three__WEBPACK_IMPORTED_MODULE_1__.Scene();\n    const camera = new three__WEBPACK_IMPORTED_MODULE_1__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n    camera.position.z = 5; // Adjust this value as needed\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_1__.WebGLRenderer({\n        alpha: true\n    });\n    renderer.setSize(window.innerWidth, window.innerHeight);\n    renderer.setClearColor(0xF5F5DC, 1); // Beige color\n    mountPoint.appendChild(renderer.domElement);\n    // Load the GLTF model\n    const loader = new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_2__.GLTFLoader();\n    loader.load(\"sushiresturantkit/scene.gltf\", function(gltf) {\n        gltf.scene.scale.set(1, 1, 1); // Scale down by 100x\n        scene.add(gltf.scene);\n    // scene.rotation.y = 90 * (Math.PI / 180); // Rotate the scene 90 degrees to the left\n    // scene.rotation.y = 90; // Rotate the scene 90 degrees to the right\n    //scene.rotation.x = Math.PI; // Rotate the scene 180 degrees around the x-axis\n    }, undefined, function(error) {\n        console.error(error);\n    });\n    // Create an ambient light\n    const ambientLight = new three__WEBPACK_IMPORTED_MODULE_1__.AmbientLight(0xffffff, 0.5);\n    scene.add(ambientLight);\n    // Create a directional light\n    const directionalLight = new three__WEBPACK_IMPORTED_MODULE_1__.DirectionalLight(0xffffff, 1);\n    directionalLight.position.set(1, 1, 1); // set the direction of the light\n    scene.add(directionalLight);\n    // Render the scene\n    function animate() {\n        camera.position.x += (mouse.x * 10 - camera.position.x) * 0.05;\n        camera.position.y += (-(mouse.y * 10) - camera.position.y) * 0.05;\n        camera.lookAt(scene.position);\n        renderer.render(scene, camera);\n        requestAnimationFrame(animate);\n    }\n    animate();\n    window.addEventListener(\"mousemove\", (event)=>{\n        mouse.x = event.clientX / window.innerWidth * 2 - 1;\n        mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;\n    });\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9hcHAuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQjtBQUNzRDtBQUNSO0FBQ1U7QUFDekM7QUFDd0I7QUFDTztBQUV0RSxTQUFTTyxrQkFBa0JDLFVBQVU7SUFFeEMsSUFBSUMsUUFBUSxJQUFJVCwwQ0FBYTtJQUNqQyx5Q0FBeUM7SUFDekMsTUFBTVcsUUFBUSxJQUFJWCx3Q0FBVztJQUM3QixNQUFNYSxTQUFTLElBQUliLG9EQUF1QixDQUFDLElBQUllLE9BQU9DLFVBQVUsR0FBR0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7SUFDNUZKLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLEdBQUcsOEJBQThCO0lBR3JELE1BQU1DLFdBQVcsSUFBSXBCLGdEQUFtQixDQUFDO1FBQUVzQixPQUFPO0lBQUs7SUFDdkRGLFNBQVNHLE9BQU8sQ0FBQ1IsT0FBT0MsVUFBVSxFQUFFRCxPQUFPRSxXQUFXO0lBQ3RERyxTQUFTSSxhQUFhLENBQUMsVUFBVSxJQUFJLGNBQWM7SUFFbkRoQixXQUFXaUIsV0FBVyxDQUFDTCxTQUFTTSxVQUFVO0lBRTFDLHNCQUFzQjtJQUN0QixNQUFNQyxTQUFTLElBQUl0QixnRkFBVUE7SUFDN0JzQixPQUFPQyxJQUFJLENBQUMsZ0NBQWdDLFNBQVVDLElBQUk7UUFDdERBLEtBQUtsQixLQUFLLENBQUNtQixLQUFLLENBQUNDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxxQkFBcUI7UUFDcERwQixNQUFNcUIsR0FBRyxDQUFDSCxLQUFLbEIsS0FBSztJQUVyQixzRkFBc0Y7SUFDdEYscUVBQXFFO0lBQ3BFLCtFQUErRTtJQUNuRixHQUFHc0IsV0FBVyxTQUFVQyxLQUFLO1FBQ3pCQyxRQUFRRCxLQUFLLENBQUNBO0lBQ2xCO0lBRUEsMEJBQTBCO0lBQzFCLE1BQU1FLGVBQWUsSUFBSXBDLCtDQUFrQixDQUFDLFVBQVU7SUFDdERXLE1BQU1xQixHQUFHLENBQUNJO0lBRVYsNkJBQTZCO0lBQzdCLE1BQU1FLG1CQUFtQixJQUFJdEMsbURBQXNCLENBQUMsVUFBVTtJQUM5RHNDLGlCQUFpQnBCLFFBQVEsQ0FBQ2EsR0FBRyxDQUFDLEdBQUcsR0FBRyxJQUFJLGlDQUFpQztJQUN6RXBCLE1BQU1xQixHQUFHLENBQUNNO0lBRVYsbUJBQW1CO0lBQ25CLFNBQVNFO1FBQ0wzQixPQUFPSyxRQUFRLENBQUN1QixDQUFDLElBQUksQ0FBQ2hDLE1BQU1nQyxDQUFDLEdBQUcsS0FBSzVCLE9BQU9LLFFBQVEsQ0FBQ3VCLENBQUMsSUFBSTtRQUMxRDVCLE9BQU9LLFFBQVEsQ0FBQ3dCLENBQUMsSUFBSSxDQUFDLENBQUVqQyxDQUFBQSxNQUFNaUMsQ0FBQyxHQUFHLEVBQUMsSUFBSzdCLE9BQU9LLFFBQVEsQ0FBQ3dCLENBQUMsSUFBSTtRQUU3RDdCLE9BQU84QixNQUFNLENBQUNoQyxNQUFNTyxRQUFRO1FBRTVCRSxTQUFTd0IsTUFBTSxDQUFDakMsT0FBT0U7UUFDdkJnQyxzQkFBc0JMO0lBQzFCO0lBRUFBO0lBQ0F6QixPQUFPK0IsZ0JBQWdCLENBQUMsYUFBYSxDQUFDQztRQUNsQ3RDLE1BQU1nQyxDQUFDLEdBQUcsTUFBT08sT0FBTyxHQUFHakMsT0FBT0MsVUFBVSxHQUFJLElBQUk7UUFDcERQLE1BQU1pQyxDQUFDLEdBQUcsQ0FBRUssQ0FBQUEsTUFBTUUsT0FBTyxHQUFHbEMsT0FBT0UsV0FBVyxJQUFJLElBQUk7SUFDMUQ7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9hcHAuanM/YzI0NCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBUSFJFRSBmcm9tIFwidGhyZWVcIjtcbmltcG9ydCB7IEVmZmVjdENvbXBvc2VyIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9FZmZlY3RDb21wb3Nlci5qc1wiO1xuaW1wb3J0IHsgUmVuZGVyUGFzcyB9IGZyb20gXCJ0aHJlZS9leGFtcGxlcy9qc20vcG9zdHByb2Nlc3NpbmcvUmVuZGVyUGFzcy5qc1wiO1xuaW1wb3J0IHsgVW5yZWFsQmxvb21QYXNzIH0gZnJvbSBcInRocmVlL2V4YW1wbGVzL2pzbS9wb3N0cHJvY2Vzc2luZy9VbnJlYWxCbG9vbVBhc3MuanNcIjtcbmltcG9ydCB7IGNyZWF0ZU5vaXNlM0QgfSBmcm9tICdzaW1wbGV4LW5vaXNlJztcbmltcG9ydCB7IEdMVEZMb2FkZXIgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vbG9hZGVycy9HTFRGTG9hZGVyLmpzJztcbmltcG9ydCB7IE9yYml0Q29udHJvbHMgfSBmcm9tICd0aHJlZS9leGFtcGxlcy9qc20vY29udHJvbHMvT3JiaXRDb250cm9scy5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplVGhyZWVKUyhtb3VudFBvaW50KSB7XG5cbiAgICBsZXQgbW91c2UgPSBuZXcgVEhSRUUuVmVjdG9yMigpO1xuLy8gU2V0IHVwIHRoZSBzY2VuZSwgY2FtZXJhLCBhbmQgcmVuZGVyZXJcbmNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5jb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoNzUsIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LCAwLjEsIDEwMDApO1xuY2FtZXJhLnBvc2l0aW9uLnogPSA1OyAvLyBBZGp1c3QgdGhpcyB2YWx1ZSBhcyBuZWVkZWRcblxuXG5jb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgYWxwaGE6IHRydWUgfSk7XG5yZW5kZXJlci5zZXRTaXplKHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQpO1xucmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweEY1RjVEQywgMSk7IC8vIEJlaWdlIGNvbG9yXG5cbm1vdW50UG9pbnQuYXBwZW5kQ2hpbGQocmVuZGVyZXIuZG9tRWxlbWVudCk7XG5cbi8vIExvYWQgdGhlIEdMVEYgbW9kZWxcbmNvbnN0IGxvYWRlciA9IG5ldyBHTFRGTG9hZGVyKCk7XG5sb2FkZXIubG9hZCgnc3VzaGlyZXN0dXJhbnRraXQvc2NlbmUuZ2x0ZicsIGZ1bmN0aW9uIChnbHRmKSB7XG4gICAgZ2x0Zi5zY2VuZS5zY2FsZS5zZXQoMSwgMSwgMSk7IC8vIFNjYWxlIGRvd24gYnkgMTAweFxuICAgIHNjZW5lLmFkZChnbHRmLnNjZW5lKTtcblxuICAgLy8gc2NlbmUucm90YXRpb24ueSA9IDkwICogKE1hdGguUEkgLyAxODApOyAvLyBSb3RhdGUgdGhlIHNjZW5lIDkwIGRlZ3JlZXMgdG8gdGhlIGxlZnRcbiAgIC8vIHNjZW5lLnJvdGF0aW9uLnkgPSA5MDsgLy8gUm90YXRlIHRoZSBzY2VuZSA5MCBkZWdyZWVzIHRvIHRoZSByaWdodFxuICAgIC8vc2NlbmUucm90YXRpb24ueCA9IE1hdGguUEk7IC8vIFJvdGF0ZSB0aGUgc2NlbmUgMTgwIGRlZ3JlZXMgYXJvdW5kIHRoZSB4LWF4aXNcbn0sIHVuZGVmaW5lZCwgZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgY29uc29sZS5lcnJvcihlcnJvcik7XG59KTtcblxuLy8gQ3JlYXRlIGFuIGFtYmllbnQgbGlnaHRcbmNvbnN0IGFtYmllbnRMaWdodCA9IG5ldyBUSFJFRS5BbWJpZW50TGlnaHQoMHhmZmZmZmYsIDAuNSk7XG5zY2VuZS5hZGQoYW1iaWVudExpZ2h0KTtcblxuLy8gQ3JlYXRlIGEgZGlyZWN0aW9uYWwgbGlnaHRcbmNvbnN0IGRpcmVjdGlvbmFsTGlnaHQgPSBuZXcgVEhSRUUuRGlyZWN0aW9uYWxMaWdodCgweGZmZmZmZiwgMSk7XG5kaXJlY3Rpb25hbExpZ2h0LnBvc2l0aW9uLnNldCgxLCAxLCAxKTsgLy8gc2V0IHRoZSBkaXJlY3Rpb24gb2YgdGhlIGxpZ2h0XG5zY2VuZS5hZGQoZGlyZWN0aW9uYWxMaWdodCk7XG5cbi8vIFJlbmRlciB0aGUgc2NlbmVcbmZ1bmN0aW9uIGFuaW1hdGUoKSB7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnggKz0gKG1vdXNlLnggKiAxMCAtIGNhbWVyYS5wb3NpdGlvbi54KSAqIDAuMDU7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnkgKz0gKC0obW91c2UueSAqIDEwKSAtIGNhbWVyYS5wb3NpdGlvbi55KSAqIDAuMDU7XG5cbiAgICBjYW1lcmEubG9va0F0KHNjZW5lLnBvc2l0aW9uKTtcblxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XG59XG5cbmFuaW1hdGUoKTtcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICBtb3VzZS54ID0gKGV2ZW50LmNsaWVudFggLyB3aW5kb3cuaW5uZXJXaWR0aCkgKiAyIC0gMTtcbiAgICBtb3VzZS55ID0gLShldmVudC5jbGllbnRZIC8gd2luZG93LmlubmVySGVpZ2h0KSAqIDIgKyAxO1xufSk7XG5cbn1cblxuIl0sIm5hbWVzIjpbIlRIUkVFIiwiRWZmZWN0Q29tcG9zZXIiLCJSZW5kZXJQYXNzIiwiVW5yZWFsQmxvb21QYXNzIiwiY3JlYXRlTm9pc2UzRCIsIkdMVEZMb2FkZXIiLCJPcmJpdENvbnRyb2xzIiwiaW5pdGlhbGl6ZVRocmVlSlMiLCJtb3VudFBvaW50IiwibW91c2UiLCJWZWN0b3IyIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImxvYWRlciIsImxvYWQiLCJnbHRmIiwic2NhbGUiLCJzZXQiLCJhZGQiLCJ1bmRlZmluZWQiLCJlcnJvciIsImNvbnNvbGUiLCJhbWJpZW50TGlnaHQiLCJBbWJpZW50TGlnaHQiLCJkaXJlY3Rpb25hbExpZ2h0IiwiRGlyZWN0aW9uYWxMaWdodCIsImFuaW1hdGUiLCJ4IiwieSIsImxvb2tBdCIsInJlbmRlciIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJldmVudCIsImNsaWVudFgiLCJjbGllbnRZIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/app.js\n"));

/***/ })

});