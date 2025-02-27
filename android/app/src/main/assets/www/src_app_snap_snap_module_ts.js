(self["webpackChunkwhatsapp"] = self["webpackChunkwhatsapp"] || []).push([["src_app_snap_snap_module_ts"],{

/***/ 51557:
/*!*********************************************!*\
  !*** ./src/app/snap/snap-routing.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapPageRoutingModule": () => (/* binding */ SnapPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 29535);
/* harmony import */ var _snap_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snap.page */ 19815);




const routes = [
    {
        path: '',
        component: _snap_page__WEBPACK_IMPORTED_MODULE_0__.SnapPage
    }
];
let SnapPageRoutingModule = class SnapPageRoutingModule {
};
SnapPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], SnapPageRoutingModule);



/***/ }),

/***/ 89652:
/*!*************************************!*\
  !*** ./src/app/snap/snap.module.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapPageModule": () => (/* binding */ SnapPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 16274);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 93324);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 34595);
/* harmony import */ var _snap_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snap-routing.module */ 51557);
/* harmony import */ var _snap_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snap.page */ 19815);







let SnapPageModule = class SnapPageModule {
};
SnapPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _snap_routing_module__WEBPACK_IMPORTED_MODULE_0__.SnapPageRoutingModule
        ],
        declarations: [_snap_page__WEBPACK_IMPORTED_MODULE_1__.SnapPage]
    })
], SnapPageModule);



/***/ }),

/***/ 19815:
/*!***********************************!*\
  !*** ./src/app/snap/snap.page.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SnapPage": () => (/* binding */ SnapPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 61855);
/* harmony import */ var _raw_loader_snap_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./snap.page.html */ 53123);
/* harmony import */ var _snap_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./snap.page.scss */ 82734);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 42741);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ 34595);





let SnapPage = class SnapPage {
    constructor(navctrl) {
        this.navctrl = navctrl;
        this.slideOpts = {
            initialSlide: 0,
            speed: 400,
            autoplay: true,
            // slidesPerView: 'auto',
            // zoom: true,
            // direction:  'horizontal',
        };
    }
    ngOnInit() {
        console.log('snap page');
    }
    next() {
        this.slides.slideNext();
    }
    back() {
        this.slides.slidePrev();
    }
    nextt() {
        this.navctrl.navigateForward('/getstarted');
    }
    slideChanged(e) {
        this.slides.getActiveIndex().then((index) => {
            console.log(index);
            if (index == 3) {
                this.Skipbtn();
            }
        });
    }
    Skipbtn() {
        this.navctrl.navigateForward('/getstarted');
    }
};
SnapPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__.NavController }
];
SnapPage.propDecorators = {
    slides: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__.ViewChild, args: ['slides', { static: true },] }]
};
SnapPage = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-snap',
        template: _raw_loader_snap_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_snap_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], SnapPage);



/***/ }),

/***/ 82734:
/*!*************************************!*\
  !*** ./src/app/snap/snap.page.scss ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("ion-content {\n  height: -moz-fit-content;\n  height: fit-content;\n  --background: #ffffff;\n}\n\n.div1 {\n  margin: auto;\n  text-align: center;\n}\n\n.imag {\n  margin: auto;\n  text-align: center;\n  width: 100%;\n  height: auto;\n  display: block;\n  position: relative;\n}\n\n.skipdiv {\n  position: absolute;\n  top: 30px;\n  right: 10px;\n  color: white;\n  font-size: 23px;\n}\n\nion-slides {\n  text-align: end;\n  --bullet-background-active:#e76945;\n  --bullet-background:#f0e3dc;\n}\n\n:host ::ng-deep .swiper-pagination-bullets {\n  text-align: end;\n  margin-left: -17px;\n  margin-bottom: 49%;\n}\n\n:host ::ng-deep .swiper-pagination-bullets .swiper-pagination-bullet {\n  opacity: 1;\n  width: 8px;\n  height: 8px;\n  margin: 7px 4px;\n}\n\n.snap {\n  margin: auto;\n  text-align: center;\n  color: black;\n  font-size: 20px;\n  font-family: Arial, Helvetica, sans-serif;\n  margin-top: 28px;\n}\n\n.txt {\n  margin: auto;\n  text-align: center;\n  color: gray;\n  font-size: 14px;\n  letter-spacing: -0.67px;\n}\n\n.color {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 45%;\n  height: 41px;\n  margin-top: 29px;\n  margin-left: 156px;\n}\n\n.color1 {\n  --background: linear-gradient(248deg, #f78a46 0%, #ee7848 34%, #ea6b4a 100%);\n  --border-radius: 22px;\n  width: 96%;\n  height: 41px;\n  margin-top: 29px;\n  /* margin-left: 156px; */\n}\n\n.btn {\n  margin: auto;\n  border-radius: 22px;\n  width: 96%;\n  height: 41px;\n  margin-top: 29px;\n  border: 1px solid black;\n  padding: 9px;\n  color: black;\n}\n\n.swiper-pagination-bullet-active {\n  background: var(--bullet-background-active);\n}\n\n.swiper-pagination {\n  text-align: end;\n  --bullet-background-active:#e76945;\n  --bullet-background:#f0e3dc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNuYXAucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0JBQUE7RUFBQSxtQkFBQTtFQUNBLHFCQUFBO0FBQ0o7O0FBQ0E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUFFSjs7QUFDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFHSjs7QUFEQTtFQUNJLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBSUo7O0FBRkU7RUFFRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUlKOztBQURJO0VBQ0UsVUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUFBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSx5Q0FBQTtFQUVBLGdCQUFBO0FBRUo7O0FBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0FBR0o7O0FBREE7RUFDSSw0RUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSw0RUFBQTtFQUNBLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLHdCQUFBO0FBS0o7O0FBSEE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQU1KOztBQUhBO0VBQ0ksMkNBQUE7QUFNSjs7QUFIQTtFQUNJLGVBQUE7RUFDQSxrQ0FBQTtFQUNBLDJCQUFBO0FBTUoiLCJmaWxlIjoic25hcC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tY29udGVudHtcclxuICAgIGhlaWdodDpmaXQtY29udGVudDtcclxuICAgIC0tYmFja2dyb3VuZDogI2ZmZmZmZjtcclxufVxyXG4uZGl2MXtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgLy8gcGFkZGluZzogMzclO1xyXG59XHJcbi5pbWFne1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uc2tpcGRpdntcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMzBweDtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAyM3B4O1xyXG59XHJcbmlvbi1zbGlkZXMge1xyXG4gICAgdGV4dC1hbGlnbjogZW5kO1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZC1hY3RpdmU6I2U3Njk0NTtcclxuICAgIC0tYnVsbGV0LWJhY2tncm91bmQ6I2YwZTNkYztcclxuICB9XHJcbiAgOmhvc3QgOjpuZy1kZWVwIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcclxuICAgIC8vIG1hcmdpbi10b3A6IC0xOTBweDtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxuICAgIG1hcmdpbi1sZWZ0OiAtMTdweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDQ5JTtcclxuICAgIC8vIG1hcmdpbi1ib3R0b206IDE4NXB4O1xyXG5cclxuICAgIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICB3aWR0aDogOHB4O1xyXG4gICAgICBoZWlnaHQ6IDhweDtcclxuICAgICAgbWFyZ2luOiA3cHggNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuLnNuYXB7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjpibGFjaztcclxuICAgIGZvbnQtc2l6ZToyMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6QXJpYWwsIEhlbHZldGljYSwgc2Fucy1zZXJpZjtcclxuICAgIC8vIGZvbnQtc3R5bGU6Ym9sZDtcclxuICAgIG1hcmdpbi10b3A6IDI4cHg7XHJcbn1cclxuLnR4dHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiBncmF5O1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjY3cHg7XHJcbn1cclxuLmNvbG9ye1xyXG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMjQ4ZGVnLCAjZjc4YTQ2IDAlLCAjZWU3ODQ4IDM0JSwgI2VhNmI0YSAxMDAlKTtcclxuICAgIC0tYm9yZGVyLXJhZGl1czogMjJweDtcclxuICAgIHdpZHRoOiA0NSU7XHJcbiAgICBoZWlnaHQ6IDQxcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAyOXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDE1NnB4O1xyXG59XHJcbi5jb2xvcjF7XHJcbiAgICAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgyNDhkZWcsICNmNzhhNDYgMCUsICNlZTc4NDggMzQlLCAjZWE2YjRhIDEwMCUpO1xyXG4gICAgLS1ib3JkZXItcmFkaXVzOiAyMnB4O1xyXG4gICAgd2lkdGg6IDk2JTtcclxuICAgIGhlaWdodDogNDFweDtcclxuICAgIG1hcmdpbi10b3A6IDI5cHg7XHJcbiAgICAvKiBtYXJnaW4tbGVmdDogMTU2cHg7ICovXHJcbn1cclxuLmJ0bntcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIGJvcmRlci1yYWRpdXM6IDIycHg7XHJcbiAgICB3aWR0aDogOTYlO1xyXG4gICAgaGVpZ2h0OiA0MXB4O1xyXG4gICAgbWFyZ2luLXRvcDogMjlweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgcGFkZGluZzogOXB4O1xyXG4gICAgY29sb3I6YmxhY2s7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZSk7XHJcbn1cclxuXHJcbi5zd2lwZXItcGFnaW5hdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kLWFjdGl2ZTojZTc2OTQ1O1xyXG4gICAgLS1idWxsZXQtYmFja2dyb3VuZDojZjBlM2RjO1xyXG59XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ 53123:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/snap/snap.page.html ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<ion-content>\n\n  <div class=\"div1\">\n\n    <ion-slides class=\"pager\" pager=\"true\" [options]=\"slideOpts\" #slides>\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"imag\" src=\"assets/image/image1.jpg\">\n            <div class=\"skipdiv\" (click)=\"Skipbtn()\">skip</div>\n          </ion-col><br><br>\n          <ion-col size=\"12\">\n            <div class=\"snap\"><b>Snap & Sell</b></div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"txt\">Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt\n            </div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <ion-button class=\"color\" (click)=\"next()\">Next</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"imag\" src=\"assets/image/bill.jpg\">\n            <div class=\"skipdiv\" (click)=\"Skipbtn()\">skip</div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"snap\"><b>Discover</b></div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"txt\">Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt\n            </div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div class=\"btn\" (click)=\"back()\">Back</div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"color1\" (click)=\"next()\">Next</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"imag\" src=\"assets/image/drill.jpg\">\n            <div class=\"skipdiv\" (click)=\"Skipbtn()\">skip</div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"snap\"><b>Buy</b></div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"txt\">Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt\n            </div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div class=\"btn\" (click)=\"back()\">Back</div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"color1\" (click)=\"next()\">Next</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n\n      <ion-slide>\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-no-padding\">\n            <img class=\"imag\" src=\"assets/image/people.jpg\">\n            <div class=\"skipdiv\" (click)=\"Skipbtn()\">skip</div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"snap\"><b>Join the Community</b></div>\n          </ion-col>\n          <ion-col size=\"12\">\n            <div class=\"txt\">Lorem ipsum dolor sit amet,consectetur adipiscing elit,<br>sed do eiusmod tempor incididunt\n            </div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <div class=\"btn\" (click)=\"back()\">Back</div>\n          </ion-col>\n          <ion-col size=\"6\">\n            <ion-button class=\"color1\" (click)=\"Skipbtn()\">Get Started</ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-slide>\n    </ion-slides><br>\n  </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_snap_snap_module_ts.js.map