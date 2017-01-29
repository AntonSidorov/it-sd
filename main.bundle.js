webpackJsonp([0,3],{

/***/ 159:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return CardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardComponent = (function () {
    function CardComponent() {
    }
    CardComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "label", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["l" /* Input */])(), 
        __metadata('design:type', String)
    ], CardComponent.prototype, "value", void 0);
    CardComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-card',
            templateUrl: './card.component.html',
            styleUrls: ['./card.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], CardComponent);
    return CardComponent;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/card.component.js.map

/***/ },

/***/ 225:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(103);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponent; });
/* unused harmony export Card */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.onLanding = true;
        this.setup = false;
        this.navVis = [false, false, false, false, false, false, false];
        this.pages = ["#scope", "#concepts", "#unit3", "#unit4", "#assessments", "#glossary", "#psm"];
        this.navs = [
            ['Scope of study'],
            ['Key concepts:', 'Approaches to problem solving', 'Data and information', 'Digital systems', 'Interactions and impact'],
            ['Unit 3:', 'Outcome 1', 'Outcome 2'],
            ['Unit 4:', 'Outcome 1', 'Outcome 2'],
            ['Assessments: ', 'Unit 3', 'Unit 4', 'SAT', 'Exam'],
            ['Glossary'],
            ['Problem Solving Methodology']
        ];
        this.rects = [];
        this.definitions = [
            {
                label: 'Application architecture',
                value: 'Application architecture is the process of identifying the components, and their interrelationships, of a structured (software) solution that meets all of the technical and operational requirements, while optimising common quality attributes such as performance, security and manageability.'
            },
            {
                label: 'Computational thinking',
                value: 'Computational thinking is a process of recognising aspects of computation in the world and being able to think logically, algorithmically, recursively and abstractly.'
            },
            {
                label: 'Data types',
                value: 'Data types are the particular forms that an item of data can take including numeric, character and Boolean, and are characterised by the kind of operations that can be performed on it. '
            },
            {
                label: 'Design brief',
                value: 'A design brief is a statement that contains an outline of a situation, context, problem, need or an opportunity, and constraints or conditions under which a solution must be developed.'
            },
            {
                label: 'Design principles',
                value: 'Design principles are accepted characteristics that contribute to the functionality and appearance of solutions.'
            },
            {
                label: 'Design thinking',
                value: 'Design thinking is a way of thinking critically and creatively to generate innovative ideas, evaluate them and precisely de ne the preferred solution so it can be created using a digital system.'
            },
            {
                label: 'Efficiency',
                value: 'Efficiency is a measure of how much time, cost and effort is applied to achieve intended results.'
            },
            {
                label: 'Effectiveness',
                value: 'Effectiveness is a measure of how well a solution, an information management strategy or a network work and whether each achieves its intended results.'
            },
            {
                label: 'Information architecture',
                value: 'Information architecture is the ways in which content (information and objects) is grouped, labelled and located in online solutions.'
            },
            {
                label: 'Information system',
                value: 'An information system is the combination of digital hardware and software components (digital systems), data, processes and people that interact to create, control and communicate ideas and digital solutions.'
            },
            {
                label: 'Legal requirements',
                value: 'There are legal requirements with which individuals and organisations are expected to comply, with respect to the ownership and privacy of information, and freedom of expression.'
            },
            {
                label: 'Normalisation',
                value: 'Normalisation is the process of ensuring that a database conforms to a set of normal forms. Its primary purpose is to remove redundancies that create threats to data integrity such as update anomalies. It also plays a role in making querying more ef cient.'
            },
            {
                label: 'Physical security controls',
                value: 'Physical security controls are the equipment and procedures used to assist in the protection of information systems and the files created, communicated and stored by individuals and organisations.'
            },
            {
                label: 'Security threats',
                value: 'Security threats are the actions, devices and events that threaten the integrity and security of data and information stored within, and communicated between, information systems. The threats can be accidental, such as losing a portable storage device containing files; deliberate, such as malware, phishing; and events-based such as a power surge.'
            },
            {
                label: 'Software requirements specification',
                value: 'Software requirements specification is a comprehensive description of the intended purpose and environment for purpose-designed software solutions. I'
            },
            {
                label: 'Software security controls',
                value: 'Software security controls are the software and procedures used to assist in the protection of information systems and the files created, communicated and stored by individuals and organisations.'
            },
            {
                label: 'Solution (digital)',
                value: 'A digital solution is the method of creating required digital output through the application of digital systems and processes that transforms data and information. '
            },
            {
                label: 'Systems thinking',
                value: 'Systems thinking is a management discipline that concerns an understanding of a system by examining the linkages and interactions between the components that comprise the entirety of that defined system.'
            },
            {
                label: 'Types of data',
                value: 'Types of data are general categories of data including text, number, sound and image (still and moving)'
            },
            {
                label: 'User experience',
                value: 'User experience is the overall experience of a person using an interactive solution, especially in terms of how easy or pleasing it is to use'
            },
            {
                label: 'User flow diagrams',
                value: 'A User flow diagram is diagram that denotes the path a user travels through when using an online interactive solution to complete a task or transaction'
            },
        ];
        this.title = 'app works!';
    }
    AppComponent.prototype.ngOnInit = function () {
        //REVERSE SORT CUZ JAVASCRIPT SUCC's?
        this.definitions.sort(function (s1, s2) { return s1.value.length > s2.value.length ? -1 : s1.value.length == s2.value.length ? 0 : 1; });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.setup = true;
        setTimeout(function () {
            _this.updateRects();
        }, 100);
    };
    AppComponent.prototype.updateRects = function () {
        this.rects[0] = this.landing.nativeElement.getBoundingClientRect();
        this.rects[1] = this.scope.nativeElement.getBoundingClientRect();
        this.rects[2] = this.concepts.nativeElement.getBoundingClientRect();
        this.rects[3] = this.unit3.nativeElement.getBoundingClientRect();
        this.rects[4] = this.unit4.nativeElement.getBoundingClientRect();
        this.rects[5] = this.assessments.nativeElement.getBoundingClientRect();
        this.rects[6] = this.glossary.nativeElement.getBoundingClientRect();
        this.rects[7] = this.psm.nativeElement.getBoundingClientRect();
    };
    AppComponent.prototype.onScroll = function (event) {
        //Now all we have to do is just check which element is focused the most out of those
        this.updateRects();
        if (this.rects[0].top < 0) {
            if (this.onLanding) {
                this.onLanding = false;
            }
        }
        else {
            this.onLanding = true;
        }
        //PLEASE EXPLAIN, WHY IS I A FUCKING STRINGGGG????
        for (var i in this.navVis)
            this.navVis[i] = this.rects[+i + 1].top <= 0 && this.rects[+i + 1].bottom >= 0;
    };
    AppComponent.prototype.onnav = function (event) {
        this.jump(this.rects[event + 1].top);
        //this.scrollTo(this.pages[event + 1]);
    };
    AppComponent.prototype.jump = function (target) {
        // Robert Penner's easeInOutQuad - http://robertpenner.com/easing/
        function easing(t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        var start = window.pageYOffset, duration = 400, timeStart, timeElapsed;
        requestAnimationFrame(function (time) {
            timeStart = time;
            loop(time);
        });
        function loop(time) {
            timeElapsed = time - timeStart;
            window.scrollTo(0, easing(timeElapsed, start, target, duration));
            if (timeElapsed < duration)
                requestAnimationFrame(loop);
            else
                end();
        }
        function end() {
            window.scrollTo(0, start + target);
        }
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('landing'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "landing", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('scope'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "scope", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('concepts'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "concepts", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('unit3'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "unit3", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('unit4'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "unit4", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('assessments'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "assessments", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('glossary'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "glossary", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* ViewChild */])('psm'), 
        __metadata('design:type', Object)
    ], AppComponent.prototype, "psm", void 0);
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["U" /* HostListener */])('window:scroll', ['$event']), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', [Object]), 
        __metadata('design:returntype', void 0)
    ], AppComponent.prototype, "onScroll", null);
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["b" /* Title */]) === 'function' && _a) || Object])
    ], AppComponent);
    return AppComponent;
    var _a;
}());
var Card = (function () {
    function Card() {
    }
    return Card;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/app.component.js.map

/***/ },

/***/ 267:
/***/ function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 267;


/***/ },

/***/ 268:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__(344);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills_ts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(343);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__ = __webpack_require__(335);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(103);





if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["W" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["d" /* platformBrowser */])().bootstrapModuleFactory(__WEBPACK_IMPORTED_MODULE_3__gendir_app_app_module_ngfactory__["a" /* AppModuleNgFactory */]);
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/main.js.map

/***/ },

/***/ 333:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_app_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__ = __webpack_require__(334);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__ = __webpack_require__(338);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__ = __webpack_require__(339);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__app_card_card_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__card_card_component_ngfactory__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__ = __webpack_require__(65);
/* unused harmony export Wrapper_AppComponent */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppComponentNgFactory; });
/* unused harmony export View_AppComponent0 */
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};





















var Wrapper_AppComponent = (function () {
    function Wrapper_AppComponent(p0) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */](p0);
    }
    Wrapper_AppComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_AppComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_AppComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_AppComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_AppComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        if ((eventName == 'window:scroll')) {
            var pd_sub_0 = (this.context.onScroll($event) !== false);
            result = (pd_sub_0 && result);
        }
        return result;
    };
    Wrapper_AppComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_AppComponent;
}());
var renderType_AppComponent_Host = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_AppComponent_Host0 = (function (_super) {
    __extends(View_AppComponent_Host0, _super);
    function View_AppComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent_Host0, renderType_AppComponent_Host, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-root', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_AppComponent0(this.viewUtils, this, 0, this._el_0);
        this._AppComponent_0_3 = new Wrapper_AppComponent(this.injectorGet(__WEBPACK_IMPORTED_MODULE_7__angular_platform_browser_src_browser_title__["a" /* Title */], this.parentIndex));
        this.compView_0.create(this._AppComponent_0_3.context);
        var disposable_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["subscribeToRenderElement"](this, this._el_0, new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'scroll', 'window'), this.eventHandler(this.handleEvent_0));
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), [disposable_0]);
        return new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._AppComponent_0_3.context);
    };
    View_AppComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]) && (0 === requestNodeIndex))) {
            return this._AppComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._AppComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
        if (!throwOnChange) {
            if ((this.numberOfChecks === 0)) {
                this._AppComponent_0_3.context.ngAfterViewInit();
            }
        }
    };
    View_AppComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent_Host0.prototype.handleEvent_0 = function (eventName, $event) {
        this.compView_0.markPathToRootAsCheckOnce();
        var result = true;
        result = (this._AppComponent_0_3.handleEvent(eventName, $event) && result);
        return result;
    };
    return View_AppComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var AppComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_6__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-root', View_AppComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_app_component__["a" /* AppComponent */]);
var styles_AppComponent = [__WEBPACK_IMPORTED_MODULE_8__app_component_scss_shim_ngstyle__["a" /* styles */]];
var View_AppComponent2 = (function (_super) {
    __extends(View_AppComponent2, _super);
    function View_AppComponent2(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent2, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent2.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent2.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent2.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent2;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent1 = (function (_super) {
    __extends(View_AppComponent1, _super);
    function View_AppComponent1(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent1, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent1.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'scope'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent1.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent1.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[0];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent1.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent1.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent1.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent2(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent1;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent4 = (function (_super) {
    __extends(View_AppComponent4, _super);
    function View_AppComponent4(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent4, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent4.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent4.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent4.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent4;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent3 = (function (_super) {
    __extends(View_AppComponent3, _super);
    function View_AppComponent3(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent3, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent3.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'concepts'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent3.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent3.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[1];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent3.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent3.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent3.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent4(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent3;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent6 = (function (_super) {
    __extends(View_AppComponent6, _super);
    function View_AppComponent6(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent6, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent6.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent6.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent6.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent6;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent5 = (function (_super) {
    __extends(View_AppComponent5, _super);
    function View_AppComponent5(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent5, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent5.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'unit3'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent5.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent5.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[2];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent5.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent5.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent5.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent6(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent5;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent8 = (function (_super) {
    __extends(View_AppComponent8, _super);
    function View_AppComponent8(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent8, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent8.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent8.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent8.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent8;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent7 = (function (_super) {
    __extends(View_AppComponent7, _super);
    function View_AppComponent7(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent7, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent7.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'unit4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent7.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent7.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[3];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent7.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent7.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent7.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent8(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent7;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent10 = (function (_super) {
    __extends(View_AppComponent10, _super);
    function View_AppComponent10(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent10, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent10.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent10.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent10.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent10;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent9 = (function (_super) {
    __extends(View_AppComponent9, _super);
    function View_AppComponent9(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent9, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent9.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'assessments'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent9.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent9.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[4];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent9.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent9.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent9.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent10(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent9;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent12 = (function (_super) {
    __extends(View_AppComponent12, _super);
    function View_AppComponent12(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent12, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent12.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent12.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent12.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent12;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent11 = (function (_super) {
    __extends(View_AppComponent11, _super);
    function View_AppComponent11(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent11, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent11.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'glossary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent11.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent11.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[5];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent11.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent11.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent11.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent12(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent11;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent14 = (function (_super) {
    __extends(View_AppComponent14, _super);
    function View_AppComponent14(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent14, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent14.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent14.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent14.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent14;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent13 = (function (_super) {
    __extends(View_AppComponent13, _super);
    function View_AppComponent13(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent13, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent13.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'id', 'psm'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent13.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent13.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.context.navs[6];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent13.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent13.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent13.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent14(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent13;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent17 = (function (_super) {
    __extends(View_AppComponent17, _super);
    function View_AppComponent17(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent17, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent17.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent17.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent17.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent17;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent16 = (function (_super) {
    __extends(View_AppComponent16, _super);
    function View_AppComponent16(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent16, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent16.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent16.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent16.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[0];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent16.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent16.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent16.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent17(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent16;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent15 = (function (_super) {
    __extends(View_AppComponent15, _super);
    function View_AppComponent15(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent15, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent15.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'scope'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'VCE Computing focuses on the application of a problem-solving methodology, and strategies and techniques for managing\n      information systems in a range of contexts, to create digital solutions that meet specific needs. The study examines\n      the attributes of each component of an information system including people, processes, data and digital systems (hardware,\n      software, networks), and how their interrelationships affect the types and quality of digital solutions.\n      ', null);
        this._el_8 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_6, ' VCE Computing is underpinned by four key concepts: approaches to problem solving, data and information,\n      digital systems and interactions and impact. Together these form the conceptual framework of the study and the organising\n      elements for its key knowledge.\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_6, 'An important component of the study is the opportunity for students to develop social capital, that is, the\n      shared understanding in social networks that enable cooperation and a cooperative approach to problem solving.\n      ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_6, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_6, ' VCE Computing provides students with opportunities to acquire and apply knowledge and skills to use digital\n      systems efficiently and effectively when creating digital solutions both individually and as part of a network. Students\n      investigate legal requirements and ethical responsibilities that individuals and organisations have with respect to\n      the security and integrity of data. Through a structured approach to problem solving, incorporating computational,\n      design and systems thinking, students are equipped to orient themselves towards the future, with an awareness of the\n      technical and societal implications of digital systems.\n    ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_18 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._el_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._el_12,
            this._text_13,
            this._el_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._text_18
        ]), null);
        return null;
    };
    View_AppComponent15.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent15.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[0];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent15.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_scope_1.setDirty();
    };
    View_AppComponent15.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent15.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent15.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent16(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent15;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent20 = (function (_super) {
    __extends(View_AppComponent20, _super);
    function View_AppComponent20(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent20, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent20.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent20.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent20.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent20;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent19 = (function (_super) {
    __extends(View_AppComponent19, _super);
    function View_AppComponent19(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent19, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent19.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent19.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent19.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[1];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent19.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent19.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent19.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent20(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent19;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent18 = (function (_super) {
    __extends(View_AppComponent18, _super);
    function View_AppComponent18(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent18, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent18.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'concepts'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Approaches to problem solving', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'Approaches to problem solving focuses on ways of creating solutions and thinking about problems, opportunities and needs.\n      A detailed approach to problem solving is explained in the stages and activities of the problem-solving methodology.\n      Overall approaches to problem solving involve computational, design and systems thinking.\n    ', null);
        this._text_11 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_12 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_13 = this.renderer.createText(this._el_12, 'Data and information', null);
        this._text_14 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_15 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_16 = this.renderer.createText(this._el_15, 'Data and information focuses on the nature of data and how data and information can be acquired, structured, represented\n      and interpreted to extract meaning. This process of preparing data and information appropriately is the precursor to\n      creating solutions that meet intended needs.\n    ', null);
        this._text_17 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_19 = this.renderer.createText(this._el_18, 'Digital systems', null);
        this._text_20 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_21 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_22 = this.renderer.createText(this._el_21, '\n      Digital systems focuses on the functions and technical underpinnings of hardware and software components as well as networks\n      (wireless, wired and mobile) and the internet, including protocols and styles of modern application architecture such\n      as rich client, mobile and internet. This concept also addresses ways in which hardware and software are used to manage\n      and control access to data and its transfer between digital systems. Digital systems form one of the components of\n      an information system along with people, data and processes.\n    ', null);
        this._text_23 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_24 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_25 = this.renderer.createText(this._el_24, 'Interactions and impact', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_28 = this.renderer.createText(this._el_27, '\n      Interactions and impact focuses on the relationships within and between information systems and the effects of these in achieving\n      economic and social goals. Relationships are considered from three perspectives: how people interact with other people\n      when using digital systems for communication and collaboration; how people interact with, or respond to, different\n      types of digital systems; and how information systems interact with other information systems. This concept also considers\n      the impact of these relationships on meeting current and future needs of individuals, organisations and society, including\n      the ownership and privacy of data and information, and personal safety.\n      ', null);
        this._el_29 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_27, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_30 = this.renderer.createText(this._el_27, ' ', null);
        this._el_31 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_27, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_32 = this.renderer.createText(this._el_27, ' Within an area of study, the key knowledge is organised under the headings of relevant concepts; however,\n      not all concepts may be addressed in any one area of study.\n    ', null);
        this._text_33 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_34 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._text_11,
            this._el_12,
            this._text_13,
            this._text_14,
            this._el_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._text_20,
            this._el_21,
            this._text_22,
            this._text_23,
            this._el_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._el_29,
            this._text_30,
            this._el_31,
            this._text_32,
            this._text_33,
            this._text_34
        ]), null);
        return null;
    };
    View_AppComponent18.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent18.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[1];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent18.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_concepts_2.setDirty();
    };
    View_AppComponent18.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent18.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent18.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent19(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent18;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent23 = (function (_super) {
    __extends(View_AppComponent23, _super);
    function View_AppComponent23(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent23, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent23.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent23.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent23.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent23;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent22 = (function (_super) {
    __extends(View_AppComponent22, _super);
    function View_AppComponent22(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent22, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent22.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent22.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent22.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[2];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent22.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent22.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent22.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent23(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent22;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent21 = (function (_super) {
    __extends(View_AppComponent21, _super);
    function View_AppComponent21(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent21, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent21.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'unit3'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Area of study 1 - Programming practice', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, 'Focus on design and development stages of the problem-solving methodology', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_15 = this.renderer.createText(this._el_14, 'Analyse design tools to form future requirements', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_18 = this.renderer.createText(this._el_17, 'Coding, testing, and documenting (development stage)', null);
        this._text_19 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_21 = this.renderer.createText(this._el_20, 'Interpret given designs and create working modules (not necessarily complete solutions, but rather focus on limited\n        features of the programming language)', null);
        this._text_22 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_24 = this.renderer.createText(this._el_23, 'Should allow testing to allow for development of the complete solution in Unit 4.', null);
        this._text_25 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_28 = this.renderer.createText(this._el_27, 'Outcome 1', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, 'Outcome 1 of Unit 3 focuses on these topics:', null);
        this._text_32 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_34 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_36 = this.renderer.createText(this._el_35, 'Data and information', null);
        this._text_37 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_39 = this.renderer.createText(this._el_38, 'Approaches to problem solving', null);
        this._text_40 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_41 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_42 = this.renderer.createText(this._el_41, 'And also key skills related to programming practice', null);
        this._text_43 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_44 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_45 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_46 = this.renderer.createText(this._el_45, 'Area of study 2 - Analysis and design', null);
        this._text_47 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_48 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_49 = this.renderer.createText(this._el_48, '\n      ', null);
        this._el_50 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_48, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_51 = this.renderer.createText(this._el_50, 'Construct the framework for the creation of a software solution that meets a need or opportunity determined by individual\n        students. (first part of the project)', null);
        this._text_52 = this.renderer.createText(this._el_48, '\n      ', null);
        this._el_53 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_48, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_54 = this.renderer.createText(this._el_53, 'Analyse a real-world need or opportunity in terms of solution requirements, constraints and scope (analysis stage of\n        problem-solving methodology) and present it as a software requirements specification', null);
        this._text_55 = this.renderer.createText(this._el_48, '\n      ', null);
        this._el_56 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_48, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_57 = this.renderer.createText(this._el_56, 'Generate two or three different design ideas for creating their solution (briefly states, could include annotations\n        to indicate key functions and layouts)', null);
        this._text_58 = this.renderer.createText(this._el_48, '\n      ', null);
        this._el_59 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_48, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_60 = this.renderer.createText(this._el_59, 'Developing and applying evaluation criteria to select the preferred design idea (fully detailed, addressing both the\n        functionality and user interface of the solution). Will be used in Unit 4 to evaluate the quality of the solution.', null);
        this._text_61 = this.renderer.createText(this._el_48, '\n      ', null);
        this._el_62 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_48, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_63 = this.renderer.createText(this._el_62, 'Prepare a project plan, taking into account all stages of the problem-solving methodology (do not have to use dedicated\n        project-management software). Students determine the milestones of their project', null);
        this._text_64 = this.renderer.createText(this._el_48, '\n    ', null);
        this._text_65 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_66 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_67 = this.renderer.createText(this._el_66, 'Outcome 2', null);
        this._text_68 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_69 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_70 = this.renderer.createText(this._el_69, 'Outcome 2 of Unit 3 focuses on these topics:', null);
        this._text_71 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_72 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_73 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_74 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_75 = this.renderer.createText(this._el_74, 'Data and information', null);
        this._text_76 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_77 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_78 = this.renderer.createText(this._el_77, 'Approaches to problem solving', null);
        this._text_79 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_80 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_81 = this.renderer.createText(this._el_80, 'Digital systems', null);
        this._text_82 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_83 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_84 = this.renderer.createText(this._el_83, 'Interactions and impact', null);
        this._text_85 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_86 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_87 = this.renderer.createText(this._el_86, 'And also key skills related to analysis and design', null);
        this._text_88 = this.renderer.createText(this._el_72, '\n    ', null);
        this._text_89 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_90 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._text_44,
            this._el_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._el_50,
            this._text_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._el_83,
            this._text_84,
            this._text_85,
            this._el_86,
            this._text_87,
            this._text_88,
            this._text_89,
            this._text_90
        ]), null);
        return null;
    };
    View_AppComponent21.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent21.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[2];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent21.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_unit3_3.setDirty();
    };
    View_AppComponent21.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent21.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent21.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent22(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent21;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent26 = (function (_super) {
    __extends(View_AppComponent26, _super);
    function View_AppComponent26(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent26, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent26.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent26.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent26.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent26;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent25 = (function (_super) {
    __extends(View_AppComponent25, _super);
    function View_AppComponent25(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent25, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent25.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent25.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent25.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[3];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent25.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent25.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent25.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent26(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent25;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent24 = (function (_super) {
    __extends(View_AppComponent24, _super);
    function View_AppComponent24(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent24, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent24.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'unit4'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Area of study 1 - Software solutions', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_11, 'Using the programing language studied in Unit 3 to transform the design they prepared in Unit 3, Outcome 2 into a software\n        solution that meets specific needs or opportunities', null);
        this._text_13 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_15 = this.renderer.createText(this._el_14, 'Prepare a usability test that addresses the core features of their solution. The test must be undertaken by at least\n        two other ‘users’and the results recorded. Students can make any necessary adjustments to their solution based on\n        these results.', null);
        this._text_16 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_18 = this.renderer.createText(this._el_17, 'Coding, testing, and documenting (development stage)', null);
        this._text_19 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_21 = this.renderer.createText(this._el_20, 'Interpret given designs and create working modules (not necessarily complete solutions, but rather focus on limited\n        features of the programming language)', null);
        this._text_22 = this.renderer.createText(this._el_9, '\n      ', null);
        this._el_23 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_24 = this.renderer.createText(this._el_23, 'Should allow testing to allow for development of the complete solution in Unit 4.', null);
        this._text_25 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_26 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_27 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_28 = this.renderer.createText(this._el_27, 'Outcome 1', null);
        this._text_29 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, 'Outcome 1 of Unit 4 focuses on these topics:', null);
        this._text_32 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_34 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_35 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_36 = this.renderer.createText(this._el_35, 'Data and information', null);
        this._text_37 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_38 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_39 = this.renderer.createText(this._el_38, 'Digital systems', null);
        this._text_40 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_41 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_42 = this.renderer.createText(this._el_41, 'Approaches to problem solving', null);
        this._text_43 = this.renderer.createText(this._el_33, '\n      ', null);
        this._el_44 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_33, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_45 = this.renderer.createText(this._el_44, 'And also key skills related to software solutions', null);
        this._text_46 = this.renderer.createText(this._el_33, '\n    ', null);
        this._text_47 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_48 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_49 = this.renderer.createText(this._el_48, 'Area of study 2 - Interactions and impact', null);
        this._text_50 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_51 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_52 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_53 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_54 = this.renderer.createText(this._el_53, 'apply systems thinking skills when examining information systems that share data', null);
        this._text_55 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_56 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_57 = this.renderer.createText(this._el_56, 'develop knowledge of factors that influence the integrity of data and consider processes user within information systems\n        to manage the storage, communication and disposal of data', null);
        this._text_58 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_59 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_60 = this.renderer.createText(this._el_59, 'investigate the capabilities of information systems operating in a networked environment and how these systems can\n        be secured to enhance the integrity of data', null);
        this._text_61 = this.renderer.createText(this._el_51, '\n      ', null);
        this._el_62 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_51, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_63 = this.renderer.createText(this._el_62, 'examine the importance of applying technical protocols when interacting with information systems and the consequences\n        of violating these protocols', null);
        this._text_64 = this.renderer.createText(this._el_51, '\n    ', null);
        this._text_65 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_66 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_67 = this.renderer.createText(this._el_66, 'Outcome 2', null);
        this._text_68 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_69 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h2', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_70 = this.renderer.createText(this._el_69, 'Outcome 2 of Unit 4 focuses on these topics:', null);
        this._text_71 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_72 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_73 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_74 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_75 = this.renderer.createText(this._el_74, 'Interactions and impact', null);
        this._text_76 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_77 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_78 = this.renderer.createText(this._el_77, 'Digital systems', null);
        this._text_79 = this.renderer.createText(this._el_72, '\n      ', null);
        this._el_80 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_72, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_81 = this.renderer.createText(this._el_80, 'And also key skills related to Interactions and impact', null);
        this._text_82 = this.renderer.createText(this._el_72, '\n    ', null);
        this._text_83 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_84 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._el_23,
            this._text_24,
            this._text_25,
            this._text_26,
            this._el_27,
            this._text_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._el_35,
            this._text_36,
            this._text_37,
            this._el_38,
            this._text_39,
            this._text_40,
            this._el_41,
            this._text_42,
            this._text_43,
            this._el_44,
            this._text_45,
            this._text_46,
            this._text_47,
            this._el_48,
            this._text_49,
            this._text_50,
            this._el_51,
            this._text_52,
            this._el_53,
            this._text_54,
            this._text_55,
            this._el_56,
            this._text_57,
            this._text_58,
            this._el_59,
            this._text_60,
            this._text_61,
            this._el_62,
            this._text_63,
            this._text_64,
            this._text_65,
            this._el_66,
            this._text_67,
            this._text_68,
            this._el_69,
            this._text_70,
            this._text_71,
            this._el_72,
            this._text_73,
            this._el_74,
            this._text_75,
            this._text_76,
            this._el_77,
            this._text_78,
            this._text_79,
            this._el_80,
            this._text_81,
            this._text_82,
            this._text_83,
            this._text_84
        ]), null);
        return null;
    };
    View_AppComponent24.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent24.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[3];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent24.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_unit4_4.setDirty();
    };
    View_AppComponent24.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent24.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent24.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent25(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent24;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent29 = (function (_super) {
    __extends(View_AppComponent29, _super);
    function View_AppComponent29(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent29, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent29.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent29.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent29.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent29;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent28 = (function (_super) {
    __extends(View_AppComponent28, _super);
    function View_AppComponent28(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent28, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent28.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent28.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent28.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[4];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent28.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent28.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent28.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent29(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent28;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent27 = (function (_super) {
    __extends(View_AppComponent27, _super);
    function View_AppComponent27(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent27, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent27.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'assessments'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Unit 3', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_10 = this.renderer.createText(this._el_9, 'Unit 3 assessments contribute to 10% of the final study score.', null);
        this._el_11 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_9, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_12 = this.renderer.createText(this._el_9, 'There\'s only one assessment in Unit 3 - "In response\n      to teacher-provided designs, create working modules to meet specific needs "\n    ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_14 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_15 = this.renderer.createText(this._el_14, 'Unit 4', null);
        this._text_16 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_17 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_18 = this.renderer.createText(this._el_17, 'Unit 4 assessments contribute to 10% of the final study score.', null);
        this._el_19 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_17, 'br', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_20 = this.renderer.createText(this._el_17, 'There\'s only one assessment in Unit 4 - "In response\n      to a case study, one of the following: a written report or an annotated visual report"\n    ', null);
        this._text_21 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_22 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_23 = this.renderer.createText(this._el_22, 'School-assessed Task', null);
        this._text_24 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_25 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'nomargin'), null);
        this._text_26 = this.renderer.createText(this._el_25, '\n      The SAT contrubtes 30% to the final study score and consists of multiple parts:\n    ', null);
        this._text_27 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_28 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'ul', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_29 = this.renderer.createText(this._el_28, '\n      ', null);
        this._el_30 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_31 = this.renderer.createText(this._el_30, 'An analysis that defines the requirements, constraints and scope of a solution in the form of a software requirements\n        specification ', null);
        this._text_32 = this.renderer.createText(this._el_28, '\n      ', null);
        this._el_33 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_34 = this.renderer.createText(this._el_33, 'A folio of two or three alternative design ideas and the detailed design specifications of the preferred design', null);
        this._text_35 = this.renderer.createText(this._el_28, '\n      ', null);
        this._el_36 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_37 = this.renderer.createText(this._el_36, 'A project plan (Gantt chart) indicating times, resources and tasks.', null);
        this._text_38 = this.renderer.createText(this._el_28, '\n      ', null);
        this._el_39 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_40 = this.renderer.createText(this._el_39, 'A software solution that meets the software requirements specification and the results of the usability test', null);
        this._text_41 = this.renderer.createText(this._el_28, '\n      ', null);
        this._el_42 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_28, 'li', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_43 = this.renderer.createText(this._el_42, 'An assessment of the extent to which the project plan (Gantt chart) assisted in monitoring project progress in a written\n        report or an annotated visual plan', null);
        this._text_44 = this.renderer.createText(this._el_28, '\n    ', null);
        this._text_45 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_46 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_47 = this.renderer.createText(this._el_46, 'End of the year examination', null);
        this._text_48 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_49 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_50 = this.renderer.createText(this._el_49, 'The end of the year examination for Software Development will be some time between 1/11/17 and 24/11/17 and will contribute\n      50% to the study score', null);
        this._text_51 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_52 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._el_11,
            this._text_12,
            this._text_13,
            this._el_14,
            this._text_15,
            this._text_16,
            this._el_17,
            this._text_18,
            this._el_19,
            this._text_20,
            this._text_21,
            this._el_22,
            this._text_23,
            this._text_24,
            this._el_25,
            this._text_26,
            this._text_27,
            this._el_28,
            this._text_29,
            this._el_30,
            this._text_31,
            this._text_32,
            this._el_33,
            this._text_34,
            this._text_35,
            this._el_36,
            this._text_37,
            this._text_38,
            this._el_39,
            this._text_40,
            this._text_41,
            this._el_42,
            this._text_43,
            this._text_44,
            this._text_45,
            this._el_46,
            this._text_47,
            this._text_48,
            this._el_49,
            this._text_50,
            this._text_51,
            this._text_52
        ]), null);
        return null;
    };
    View_AppComponent27.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent27.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[4];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent27.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_assessments_5.setDirty();
    };
    View_AppComponent27.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent27.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent27.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent28(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent27;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent32 = (function (_super) {
    __extends(View_AppComponent32, _super);
    function View_AppComponent32(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent32, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent32.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent32.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent32.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent32;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent31 = (function (_super) {
    __extends(View_AppComponent31, _super);
    function View_AppComponent31(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent31, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent31.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent31.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent31.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[5];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent31.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent31.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent31.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent32(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent31;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent33 = (function (_super) {
    __extends(View_AppComponent33, _super);
    function View_AppComponent33(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent33, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent33.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'app-card', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card'), null);
        this.compView_0 = new __WEBPACK_IMPORTED_MODULE_18__card_card_component_ngfactory__["a" /* View_CardComponent0 */](this.viewUtils, this, 0, this._el_0);
        this._CardComponent_0_3 = new __WEBPACK_IMPORTED_MODULE_18__card_card_component_ngfactory__["b" /* Wrapper_CardComponent */]();
        this.compView_0.create(this._CardComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return null;
    };
    View_AppComponent33.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_17__app_card_card_component__["a" /* CardComponent */]) && (0 === requestNodeIndex))) {
            return this._CardComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_AppComponent33.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_0_0_0 = this.context.$implicit.label;
        this._CardComponent_0_3.check_label(currVal_0_0_0, throwOnChange, false);
        var currVal_0_0_1 = this.context.$implicit.value;
        this._CardComponent_0_3.check_value(currVal_0_0_1, throwOnChange, false);
        this._CardComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_AppComponent33.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_AppComponent33.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent33;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent30 = (function (_super) {
    __extends(View_AppComponent30, _super);
    function View_AppComponent30(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent30, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent30.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'glossary'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'description'), null);
        this._text_5 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_6 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_7 = this.renderer.createText(this._el_6, 'Glossary', null);
        this._text_8 = this.renderer.createText(this._el_4, '\n    ', null);
        this._el_9 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_4, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card-box'), null);
        this._text_10 = this.renderer.createText(this._el_9, '\n      ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_9, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 9, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgFor_11_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_11.vcRef, this._TemplateRef_11_5, this.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentIndex), this.parentView.ref);
        this._text_12 = this.renderer.createText(this._el_9, '\n    ', null);
        this._text_13 = this.renderer.createText(this._el_4, '\n  ', null);
        this._text_14 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._el_6,
            this._text_7,
            this._text_8,
            this._el_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._text_13,
            this._text_14
        ]), null);
        return null;
    };
    View_AppComponent30.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (11 === requestNodeIndex))) {
            return this._NgFor_11_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent30.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[5];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        var currVal_11_0_0 = this.parentView.context.definitions;
        this._NgFor_11_6.check_ngForOf(currVal_11_0_0, throwOnChange, false);
        this._NgFor_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent30.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_glossary_6.setDirty();
    };
    View_AppComponent30.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
        this._vc_11.destroyNestedViews();
    };
    View_AppComponent30.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent30.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent31(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        if ((nodeIndex == 11)) {
            return new View_AppComponent33(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        return null;
    };
    return View_AppComponent30;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent36 = (function (_super) {
    __extends(View_AppComponent36, _super);
    function View_AppComponent36(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent36, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_10__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_AppComponent36.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'p', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1
        ]), null);
        return null;
    };
    View_AppComponent36.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.$implicit, '');
        if (__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currVal_2)) {
            this.renderer.setText(this._text_1, currVal_2);
            this._expr_2 = currVal_2;
        }
    };
    View_AppComponent36.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_AppComponent36;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent35 = (function (_super) {
    __extends(View_AppComponent35, _super);
    function View_AppComponent35(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent35, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent35.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'nav', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_1 = this.renderer.createText(this._el_0, '\n    ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgFor_2_6 = new __WEBPACK_IMPORTED_MODULE_11__gendir_node_modules_angular_common_src_directives_ng_for_ngfactory__["a" /* Wrapper_NgFor */](this._vc_2.vcRef, this._TemplateRef_2_5, this.parentView.parentView.injectorGet(__WEBPACK_IMPORTED_MODULE_13__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */], this.parentView.parentIndex), this.parentView.parentView.ref);
        this._text_3 = this.renderer.createText(this._el_0, '\n  ', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3
        ]), null);
        return null;
    };
    View_AppComponent35.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_14__angular_common_src_directives_ng_for__["a" /* NgFor */]) && (2 === requestNodeIndex))) {
            return this._NgFor_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent35.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = this.parentView.parentView.context.navs[6];
        this._NgFor_2_6.check_ngForOf(currVal_2_0_0, throwOnChange, false);
        this._NgFor_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent35.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent35.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent35.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent36(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent35;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var View_AppComponent34 = (function (_super) {
    __extends(View_AppComponent34, _super);
    function View_AppComponent34(viewUtils, parentView, parentIndex, parentElement, declaredViewContainer) {
        _super.call(this, View_AppComponent34, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].EMBEDDED, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways, declaredViewContainer);
    }
    View_AppComponent34.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, null, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'psm'), null);
        this._text_1 = this.renderer.createText(this._el_0, '\n  ', null);
        this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0, null);
        this._vc_2 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](2, 0, this, this._anchor_2);
        this._TemplateRef_2_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 2, this._anchor_2);
        this._NgIf_2_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_2.vcRef, this._TemplateRef_2_5);
        this._text_3 = this.renderer.createText(this._el_0, '\n ', null);
        this._el_4 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_0, 'a', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'psm', 'href', 'http://antonsidorov.github.io/it-psm'), null);
        this._text_5 = this.renderer.createText(this._el_4, 'PSM', null);
        this._text_6 = this.renderer.createText(this._el_0, '\n', null);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._anchor_2,
            this._text_3,
            this._el_4,
            this._text_5,
            this._text_6
        ]), null);
        return null;
    };
    View_AppComponent34.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (2 === requestNodeIndex))) {
            return this._TemplateRef_2_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (2 === requestNodeIndex))) {
            return this._NgIf_2_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent34.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_2_0_0 = !this.parentView.context.navVis[6];
        this._NgIf_2_6.check_ngIf(currVal_2_0_0, throwOnChange, false);
        this._NgIf_2_6.ngDoCheck(this, this._anchor_2, throwOnChange);
        this._vc_2.detectChangesInNestedViews(throwOnChange);
    };
    View_AppComponent34.prototype.dirtyParentQueriesInternal = function () {
        this.parentView._viewQuery_psm_7.setDirty();
    };
    View_AppComponent34.prototype.destroyInternal = function () {
        this._vc_2.destroyNestedViews();
    };
    View_AppComponent34.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    View_AppComponent34.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 2)) {
            return new View_AppComponent35(this.viewUtils, this, 2, this._anchor_2, this._vc_2);
        }
        return null;
    };
    return View_AppComponent34;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
var renderType_AppComponent = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_3__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_AppComponent, {});
var View_AppComponent0 = (function (_super) {
    __extends(View_AppComponent0, _super);
    function View_AppComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_AppComponent0, renderType_AppComponent, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_AppComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._viewQuery_landing_0 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_scope_1 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_concepts_2 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_unit3_3 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_unit4_4 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_assessments_5 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_glossary_6 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._viewQuery_psm_7 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_query_list__["a" /* QueryList */]();
        this._text_0 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_1 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'div', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'fixed'), null);
        this._text_2 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_3 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_3 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](3, 1, this, this._anchor_3);
        this._TemplateRef_3_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 3, this._anchor_3);
        this._NgIf_3_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_3.vcRef, this._TemplateRef_3_5);
        this._text_4 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_5 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_5 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](5, 1, this, this._anchor_5);
        this._TemplateRef_5_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 5, this._anchor_5);
        this._NgIf_5_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_5.vcRef, this._TemplateRef_5_5);
        this._text_6 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_7 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_7 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](7, 1, this, this._anchor_7);
        this._TemplateRef_7_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 7, this._anchor_7);
        this._NgIf_7_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_7.vcRef, this._TemplateRef_7_5);
        this._text_8 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_9 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_9 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](9, 1, this, this._anchor_9);
        this._TemplateRef_9_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 9, this._anchor_9);
        this._NgIf_9_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_9.vcRef, this._TemplateRef_9_5);
        this._text_10 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_11 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_11 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](11, 1, this, this._anchor_11);
        this._TemplateRef_11_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 11, this._anchor_11);
        this._NgIf_11_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_11.vcRef, this._TemplateRef_11_5);
        this._text_12 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_13 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_13 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](13, 1, this, this._anchor_13);
        this._TemplateRef_13_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 13, this._anchor_13);
        this._NgIf_13_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_13.vcRef, this._TemplateRef_13_5);
        this._text_14 = this.renderer.createText(this._el_1, '\n  ', null);
        this._anchor_15 = this.renderer.createTemplateAnchor(this._el_1, null);
        this._vc_15 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](15, 1, this, this._anchor_15);
        this._TemplateRef_15_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 15, this._anchor_15);
        this._NgIf_15_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_15.vcRef, this._TemplateRef_15_5);
        this._text_16 = this.renderer.createText(this._el_1, '\n', null);
        this._text_17 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_18 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'section', new __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["InlineArray4"](4, 'class', 'page', 'id', 'landing'), null);
        this._text_19 = this.renderer.createText(this._el_18, '\n  ', null);
        this._el_20 = __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, this._el_18, 'h1', __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], null);
        this._text_21 = this.renderer.createText(this._el_20, 'VCE Software Development - Study Design', null);
        this._text_22 = this.renderer.createText(this._el_18, '\n', null);
        this._text_23 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_24 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_24 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](24, null, this, this._anchor_24);
        this._TemplateRef_24_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 24, this._anchor_24);
        this._NgIf_24_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_24.vcRef, this._TemplateRef_24_5);
        this._text_25 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_26 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_26 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](26, null, this, this._anchor_26);
        this._TemplateRef_26_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 26, this._anchor_26);
        this._NgIf_26_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_26.vcRef, this._TemplateRef_26_5);
        this._text_27 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_28 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_28 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](28, null, this, this._anchor_28);
        this._TemplateRef_28_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 28, this._anchor_28);
        this._NgIf_28_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_28.vcRef, this._TemplateRef_28_5);
        this._text_29 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_30 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_30 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](30, null, this, this._anchor_30);
        this._TemplateRef_30_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 30, this._anchor_30);
        this._NgIf_30_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_30.vcRef, this._TemplateRef_30_5);
        this._text_31 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_32 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_32 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](32, null, this, this._anchor_32);
        this._TemplateRef_32_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 32, this._anchor_32);
        this._NgIf_32_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_32.vcRef, this._TemplateRef_32_5);
        this._text_33 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_34 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_34 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](34, null, this, this._anchor_34);
        this._TemplateRef_34_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 34, this._anchor_34);
        this._NgIf_34_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_34.vcRef, this._TemplateRef_34_5);
        this._text_35 = this.renderer.createText(parentRenderNode, '\n', null);
        this._anchor_36 = this.renderer.createTemplateAnchor(parentRenderNode, null);
        this._vc_36 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_linker_view_container__["a" /* ViewContainer */](36, null, this, this._anchor_36);
        this._TemplateRef_36_5 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["a" /* TemplateRef_ */](this, 36, this._anchor_36);
        this._NgIf_36_6 = new __WEBPACK_IMPORTED_MODULE_15__gendir_node_modules_angular_common_src_directives_ng_if_ngfactory__["a" /* Wrapper_NgIf */](this._vc_36.vcRef, this._TemplateRef_36_5);
        this._text_37 = this.renderer.createText(parentRenderNode, '\n', null);
        this._text_38 = this.renderer.createText(parentRenderNode, '\n', null);
        this._viewQuery_landing_0.reset([new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](this._el_18)]);
        this.context.landing = this._viewQuery_landing_0.first;
        this.init(null, (this.renderer.directRenderer ? null : [
            this._text_0,
            this._el_1,
            this._text_2,
            this._anchor_3,
            this._text_4,
            this._anchor_5,
            this._text_6,
            this._anchor_7,
            this._text_8,
            this._anchor_9,
            this._text_10,
            this._anchor_11,
            this._text_12,
            this._anchor_13,
            this._text_14,
            this._anchor_15,
            this._text_16,
            this._text_17,
            this._el_18,
            this._text_19,
            this._el_20,
            this._text_21,
            this._text_22,
            this._text_23,
            this._anchor_24,
            this._text_25,
            this._anchor_26,
            this._text_27,
            this._anchor_28,
            this._text_29,
            this._anchor_30,
            this._text_31,
            this._anchor_32,
            this._text_33,
            this._anchor_34,
            this._text_35,
            this._anchor_36,
            this._text_37,
            this._text_38
        ]), null);
        return null;
    };
    View_AppComponent0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (3 === requestNodeIndex))) {
            return this._TemplateRef_3_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (3 === requestNodeIndex))) {
            return this._NgIf_3_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (5 === requestNodeIndex))) {
            return this._TemplateRef_5_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (5 === requestNodeIndex))) {
            return this._NgIf_5_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (7 === requestNodeIndex))) {
            return this._TemplateRef_7_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (7 === requestNodeIndex))) {
            return this._NgIf_7_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (9 === requestNodeIndex))) {
            return this._TemplateRef_9_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (9 === requestNodeIndex))) {
            return this._NgIf_9_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (11 === requestNodeIndex))) {
            return this._TemplateRef_11_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (11 === requestNodeIndex))) {
            return this._NgIf_11_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (13 === requestNodeIndex))) {
            return this._TemplateRef_13_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (13 === requestNodeIndex))) {
            return this._NgIf_13_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (15 === requestNodeIndex))) {
            return this._TemplateRef_15_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (15 === requestNodeIndex))) {
            return this._NgIf_15_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (24 === requestNodeIndex))) {
            return this._TemplateRef_24_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (24 === requestNodeIndex))) {
            return this._NgIf_24_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (26 === requestNodeIndex))) {
            return this._TemplateRef_26_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (26 === requestNodeIndex))) {
            return this._NgIf_26_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (28 === requestNodeIndex))) {
            return this._TemplateRef_28_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (28 === requestNodeIndex))) {
            return this._NgIf_28_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (30 === requestNodeIndex))) {
            return this._TemplateRef_30_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (30 === requestNodeIndex))) {
            return this._NgIf_30_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (32 === requestNodeIndex))) {
            return this._TemplateRef_32_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (32 === requestNodeIndex))) {
            return this._NgIf_32_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (34 === requestNodeIndex))) {
            return this._TemplateRef_34_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (34 === requestNodeIndex))) {
            return this._NgIf_34_6.context;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_template_ref__["b" /* TemplateRef */]) && (36 === requestNodeIndex))) {
            return this._TemplateRef_36_5;
        }
        if (((token === __WEBPACK_IMPORTED_MODULE_16__angular_common_src_directives_ng_if__["a" /* NgIf */]) && (36 === requestNodeIndex))) {
            return this._NgIf_36_6.context;
        }
        return notFoundResult;
    };
    View_AppComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_3_0_0 = this.context.navVis[0];
        this._NgIf_3_6.check_ngIf(currVal_3_0_0, throwOnChange, false);
        this._NgIf_3_6.ngDoCheck(this, this._anchor_3, throwOnChange);
        var currVal_5_0_0 = this.context.navVis[1];
        this._NgIf_5_6.check_ngIf(currVal_5_0_0, throwOnChange, false);
        this._NgIf_5_6.ngDoCheck(this, this._anchor_5, throwOnChange);
        var currVal_7_0_0 = this.context.navVis[2];
        this._NgIf_7_6.check_ngIf(currVal_7_0_0, throwOnChange, false);
        this._NgIf_7_6.ngDoCheck(this, this._anchor_7, throwOnChange);
        var currVal_9_0_0 = this.context.navVis[3];
        this._NgIf_9_6.check_ngIf(currVal_9_0_0, throwOnChange, false);
        this._NgIf_9_6.ngDoCheck(this, this._anchor_9, throwOnChange);
        var currVal_11_0_0 = this.context.navVis[4];
        this._NgIf_11_6.check_ngIf(currVal_11_0_0, throwOnChange, false);
        this._NgIf_11_6.ngDoCheck(this, this._anchor_11, throwOnChange);
        var currVal_13_0_0 = this.context.navVis[5];
        this._NgIf_13_6.check_ngIf(currVal_13_0_0, throwOnChange, false);
        this._NgIf_13_6.ngDoCheck(this, this._anchor_13, throwOnChange);
        var currVal_15_0_0 = this.context.navVis[6];
        this._NgIf_15_6.check_ngIf(currVal_15_0_0, throwOnChange, false);
        this._NgIf_15_6.ngDoCheck(this, this._anchor_15, throwOnChange);
        var currVal_24_0_0 = this.context.setup;
        this._NgIf_24_6.check_ngIf(currVal_24_0_0, throwOnChange, false);
        this._NgIf_24_6.ngDoCheck(this, this._anchor_24, throwOnChange);
        var currVal_26_0_0 = this.context.setup;
        this._NgIf_26_6.check_ngIf(currVal_26_0_0, throwOnChange, false);
        this._NgIf_26_6.ngDoCheck(this, this._anchor_26, throwOnChange);
        var currVal_28_0_0 = this.context.setup;
        this._NgIf_28_6.check_ngIf(currVal_28_0_0, throwOnChange, false);
        this._NgIf_28_6.ngDoCheck(this, this._anchor_28, throwOnChange);
        var currVal_30_0_0 = this.context.setup;
        this._NgIf_30_6.check_ngIf(currVal_30_0_0, throwOnChange, false);
        this._NgIf_30_6.ngDoCheck(this, this._anchor_30, throwOnChange);
        var currVal_32_0_0 = this.context.setup;
        this._NgIf_32_6.check_ngIf(currVal_32_0_0, throwOnChange, false);
        this._NgIf_32_6.ngDoCheck(this, this._anchor_32, throwOnChange);
        var currVal_34_0_0 = this.context.setup;
        this._NgIf_34_6.check_ngIf(currVal_34_0_0, throwOnChange, false);
        this._NgIf_34_6.ngDoCheck(this, this._anchor_34, throwOnChange);
        var currVal_36_0_0 = this.context.setup;
        this._NgIf_36_6.check_ngIf(currVal_36_0_0, throwOnChange, false);
        this._NgIf_36_6.ngDoCheck(this, this._anchor_36, throwOnChange);
        this._vc_3.detectChangesInNestedViews(throwOnChange);
        this._vc_5.detectChangesInNestedViews(throwOnChange);
        this._vc_7.detectChangesInNestedViews(throwOnChange);
        this._vc_9.detectChangesInNestedViews(throwOnChange);
        this._vc_11.detectChangesInNestedViews(throwOnChange);
        this._vc_13.detectChangesInNestedViews(throwOnChange);
        this._vc_15.detectChangesInNestedViews(throwOnChange);
        this._vc_24.detectChangesInNestedViews(throwOnChange);
        this._vc_26.detectChangesInNestedViews(throwOnChange);
        this._vc_28.detectChangesInNestedViews(throwOnChange);
        this._vc_30.detectChangesInNestedViews(throwOnChange);
        this._vc_32.detectChangesInNestedViews(throwOnChange);
        this._vc_34.detectChangesInNestedViews(throwOnChange);
        this._vc_36.detectChangesInNestedViews(throwOnChange);
        if (!throwOnChange) {
            if (this._viewQuery_scope_1.dirty) {
                this._viewQuery_scope_1.reset([this._vc_24.mapNestedViews(View_AppComponent15, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.scope = this._viewQuery_scope_1.first;
            }
            if (this._viewQuery_concepts_2.dirty) {
                this._viewQuery_concepts_2.reset([this._vc_26.mapNestedViews(View_AppComponent18, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.concepts = this._viewQuery_concepts_2.first;
            }
            if (this._viewQuery_unit3_3.dirty) {
                this._viewQuery_unit3_3.reset([this._vc_28.mapNestedViews(View_AppComponent21, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.unit3 = this._viewQuery_unit3_3.first;
            }
            if (this._viewQuery_unit4_4.dirty) {
                this._viewQuery_unit4_4.reset([this._vc_30.mapNestedViews(View_AppComponent24, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.unit4 = this._viewQuery_unit4_4.first;
            }
            if (this._viewQuery_assessments_5.dirty) {
                this._viewQuery_assessments_5.reset([this._vc_32.mapNestedViews(View_AppComponent27, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.assessments = this._viewQuery_assessments_5.first;
            }
            if (this._viewQuery_glossary_6.dirty) {
                this._viewQuery_glossary_6.reset([this._vc_34.mapNestedViews(View_AppComponent30, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.glossary = this._viewQuery_glossary_6.first;
            }
            if (this._viewQuery_psm_7.dirty) {
                this._viewQuery_psm_7.reset([this._vc_36.mapNestedViews(View_AppComponent34, function (nestedView) {
                        return [new __WEBPACK_IMPORTED_MODULE_20__angular_core_src_linker_element_ref__["a" /* ElementRef */](nestedView._el_0)];
                    })]);
                this.context.psm = this._viewQuery_psm_7.first;
            }
        }
    };
    View_AppComponent0.prototype.destroyInternal = function () {
        this._vc_3.destroyNestedViews();
        this._vc_5.destroyNestedViews();
        this._vc_7.destroyNestedViews();
        this._vc_9.destroyNestedViews();
        this._vc_11.destroyNestedViews();
        this._vc_13.destroyNestedViews();
        this._vc_15.destroyNestedViews();
        this._vc_24.destroyNestedViews();
        this._vc_26.destroyNestedViews();
        this._vc_28.destroyNestedViews();
        this._vc_30.destroyNestedViews();
        this._vc_32.destroyNestedViews();
        this._vc_34.destroyNestedViews();
        this._vc_36.destroyNestedViews();
    };
    View_AppComponent0.prototype.createEmbeddedViewInternal = function (nodeIndex) {
        if ((nodeIndex == 3)) {
            return new View_AppComponent1(this.viewUtils, this, 3, this._anchor_3, this._vc_3);
        }
        if ((nodeIndex == 5)) {
            return new View_AppComponent3(this.viewUtils, this, 5, this._anchor_5, this._vc_5);
        }
        if ((nodeIndex == 7)) {
            return new View_AppComponent5(this.viewUtils, this, 7, this._anchor_7, this._vc_7);
        }
        if ((nodeIndex == 9)) {
            return new View_AppComponent7(this.viewUtils, this, 9, this._anchor_9, this._vc_9);
        }
        if ((nodeIndex == 11)) {
            return new View_AppComponent9(this.viewUtils, this, 11, this._anchor_11, this._vc_11);
        }
        if ((nodeIndex == 13)) {
            return new View_AppComponent11(this.viewUtils, this, 13, this._anchor_13, this._vc_13);
        }
        if ((nodeIndex == 15)) {
            return new View_AppComponent13(this.viewUtils, this, 15, this._anchor_15, this._vc_15);
        }
        if ((nodeIndex == 24)) {
            return new View_AppComponent15(this.viewUtils, this, 24, this._anchor_24, this._vc_24);
        }
        if ((nodeIndex == 26)) {
            return new View_AppComponent18(this.viewUtils, this, 26, this._anchor_26, this._vc_26);
        }
        if ((nodeIndex == 28)) {
            return new View_AppComponent21(this.viewUtils, this, 28, this._anchor_28, this._vc_28);
        }
        if ((nodeIndex == 30)) {
            return new View_AppComponent24(this.viewUtils, this, 30, this._anchor_30, this._vc_30);
        }
        if ((nodeIndex == 32)) {
            return new View_AppComponent27(this.viewUtils, this, 32, this._anchor_32, this._vc_32);
        }
        if ((nodeIndex == 34)) {
            return new View_AppComponent30(this.viewUtils, this, 34, this._anchor_34, this._vc_34);
        }
        if ((nodeIndex == 36)) {
            return new View_AppComponent34(this.viewUtils, this, 36, this._anchor_36, this._vc_36);
        }
        return null;
    };
    return View_AppComponent0;
}(__WEBPACK_IMPORTED_MODULE_1__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/app.component.ngfactory.js.map

/***/ },

/***/ 334:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = ['.description[_ngcontent-%COMP%] {\n  margin: 1rem 15rem;\n  margin-top: 8rem; }\n  .description[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n    font-size: 2.4rem;\n    font-weight: 200; }\n  .description[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    font-weight: 200; }\n  .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    margin: 2rem 0;\n    margin-left: 1rem;\n    font-size: 1.2rem;\n    font-weight: 300;\n    margin-bottom: 4rem; }\n    .description[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]:last-child, .description[_ngcontent-%COMP%]   p.nomargin[_ngcontent-%COMP%], .description[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:last-child, .description[_ngcontent-%COMP%]   ul.nomargin[_ngcontent-%COMP%] {\n      margin-bottom: 0; }'];
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/app.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 335:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_app_module__ = __webpack_require__(340);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__ = __webpack_require__(333);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_dom_events_dom_events__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_src_dom_events_key_events__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__angular_core_src_console__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__angular_core_src_error_handler__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_dom_tokens__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_src_dom_animation_driver__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__angular_core_src_render_api__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__angular_core_src_security__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__angular_core_src_change_detection_differs_iterable_differs__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__angular_core_src_change_detection_differs_keyvalue_differs__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__angular_http_src_interfaces__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__angular_http_src_http__ = __webpack_require__(151);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModuleNgFactory; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};











































var AppModuleInjector = (function (_super) {
    __extends(AppModuleInjector, _super);
    function AppModuleInjector(parent) {
        _super.call(this, parent, [__WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__["a" /* AppComponentNgFactory */]], [__WEBPACK_IMPORTED_MODULE_26__app_component_ngfactory__["a" /* AppComponentNgFactory */]]);
    }
    Object.defineProperty(AppModuleInjector.prototype, "_LOCALE_ID_7", {
        get: function () {
            if ((this.__LOCALE_ID_7 == null)) {
                (this.__LOCALE_ID_7 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["b" /* _localeFactory */](this.parent.get(__WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */], null)));
            }
            return this.__LOCALE_ID_7;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_NgLocalization_8", {
        get: function () {
            if ((this.__NgLocalization_8 == null)) {
                (this.__NgLocalization_8 = new __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["c" /* NgLocaleLocalization */](this._LOCALE_ID_7));
            }
            return this.__NgLocalization_8;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ApplicationRef_13", {
        get: function () {
            if ((this.__ApplicationRef_13 == null)) {
                (this.__ApplicationRef_13 = this._ApplicationRef__12);
            }
            return this.__ApplicationRef_13;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Compiler_14", {
        get: function () {
            if ((this.__Compiler_14 == null)) {
                (this.__Compiler_14 = new __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */]());
            }
            return this.__Compiler_14;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_APP_ID_15", {
        get: function () {
            if ((this.__APP_ID_15 == null)) {
                (this.__APP_ID_15 = __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__["e" /* _appIdRandomProviderFactory */]());
            }
            return this.__APP_ID_15;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DOCUMENT_16", {
        get: function () {
            if ((this.__DOCUMENT_16 == null)) {
                (this.__DOCUMENT_16 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["e" /* _document */]());
            }
            return this.__DOCUMENT_16;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_HAMMER_GESTURE_CONFIG_17", {
        get: function () {
            if ((this.__HAMMER_GESTURE_CONFIG_17 == null)) {
                (this.__HAMMER_GESTURE_CONFIG_17 = new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["c" /* HammerGestureConfig */]());
            }
            return this.__HAMMER_GESTURE_CONFIG_17;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EVENT_MANAGER_PLUGINS_18", {
        get: function () {
            if ((this.__EVENT_MANAGER_PLUGINS_18 == null)) {
                (this.__EVENT_MANAGER_PLUGINS_18 = [
                    new __WEBPACK_IMPORTED_MODULE_29__angular_platform_browser_src_dom_events_dom_events__["a" /* DomEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_src_dom_events_key_events__["a" /* KeyEventsPlugin */](),
                    new __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["a" /* HammerGesturesPlugin */](this._HAMMER_GESTURE_CONFIG_17)
                ]);
            }
            return this.__EVENT_MANAGER_PLUGINS_18;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_EventManager_19", {
        get: function () {
            if ((this.__EventManager_19 == null)) {
                (this.__EventManager_19 = new __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */](this._EVENT_MANAGER_PLUGINS_18, this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__EventManager_19;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSharedStylesHost_20", {
        get: function () {
            if ((this.__DomSharedStylesHost_20 == null)) {
                (this.__DomSharedStylesHost_20 = new __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */](this._DOCUMENT_16));
            }
            return this.__DomSharedStylesHost_20;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationDriver_21", {
        get: function () {
            if ((this.__AnimationDriver_21 == null)) {
                (this.__AnimationDriver_21 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["f" /* _resolveDefaultAnimationDriver */]());
            }
            return this.__AnimationDriver_21;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomRootRenderer_22", {
        get: function () {
            if ((this.__DomRootRenderer_22 == null)) {
                (this.__DomRootRenderer_22 = new __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["b" /* DomRootRenderer_ */](this._DOCUMENT_16, this._EventManager_19, this._DomSharedStylesHost_20, this._AnimationDriver_21, this._APP_ID_15));
            }
            return this.__DomRootRenderer_22;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RootRenderer_23", {
        get: function () {
            if ((this.__RootRenderer_23 == null)) {
                (this.__RootRenderer_23 = __WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__["b" /* _createConditionalRootRenderer */](this._DomRootRenderer_22, this.parent.get(__WEBPACK_IMPORTED_MODULE_32__angular_platform_browser_src_dom_debug_ng_probe__["c" /* NgProbeToken */], null), this.parent.get(__WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["g" /* NgProbeToken */], null)));
            }
            return this.__RootRenderer_23;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_DomSanitizer_24", {
        get: function () {
            if ((this.__DomSanitizer_24 == null)) {
                (this.__DomSanitizer_24 = new __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["b" /* DomSanitizerImpl */]());
            }
            return this.__DomSanitizer_24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Sanitizer_25", {
        get: function () {
            if ((this.__Sanitizer_25 == null)) {
                (this.__Sanitizer_25 = this._DomSanitizer_24);
            }
            return this.__Sanitizer_25;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_AnimationQueue_26", {
        get: function () {
            if ((this.__AnimationQueue_26 == null)) {
                (this.__AnimationQueue_26 = new __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */])));
            }
            return this.__AnimationQueue_26;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ViewUtils_27", {
        get: function () {
            if ((this.__ViewUtils_27 == null)) {
                (this.__ViewUtils_27 = new __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"](this._RootRenderer_23, this._Sanitizer_25, this._AnimationQueue_26));
            }
            return this.__ViewUtils_27;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_IterableDiffers_28", {
        get: function () {
            if ((this.__IterableDiffers_28 == null)) {
                (this.__IterableDiffers_28 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["c" /* _iterableDiffersFactory */]());
            }
            return this.__IterableDiffers_28;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_KeyValueDiffers_29", {
        get: function () {
            if ((this.__KeyValueDiffers_29 == null)) {
                (this.__KeyValueDiffers_29 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["d" /* _keyValueDiffersFactory */]());
            }
            return this.__KeyValueDiffers_29;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_SharedStylesHost_30", {
        get: function () {
            if ((this.__SharedStylesHost_30 == null)) {
                (this.__SharedStylesHost_30 = this._DomSharedStylesHost_20);
            }
            return this.__SharedStylesHost_30;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Title_31", {
        get: function () {
            if ((this.__Title_31 == null)) {
                (this.__Title_31 = new __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */]());
            }
            return this.__Title_31;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RadioControlRegistry_32", {
        get: function () {
            if ((this.__RadioControlRegistry_32 == null)) {
                (this.__RadioControlRegistry_32 = new __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */]());
            }
            return this.__RadioControlRegistry_32;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_BrowserXhr_33", {
        get: function () {
            if ((this.__BrowserXhr_33 == null)) {
                (this.__BrowserXhr_33 = new __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */]());
            }
            return this.__BrowserXhr_33;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_ResponseOptions_34", {
        get: function () {
            if ((this.__ResponseOptions_34 == null)) {
                (this.__ResponseOptions_34 = new __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["b" /* BaseResponseOptions */]());
            }
            return this.__ResponseOptions_34;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XSRFStrategy_35", {
        get: function () {
            if ((this.__XSRFStrategy_35 == null)) {
                (this.__XSRFStrategy_35 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["b" /* _createDefaultCookieXSRFStrategy */]());
            }
            return this.__XSRFStrategy_35;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_XHRBackend_36", {
        get: function () {
            if ((this.__XHRBackend_36 == null)) {
                (this.__XHRBackend_36 = new __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */](this._BrowserXhr_33, this._ResponseOptions_34, this._XSRFStrategy_35));
            }
            return this.__XHRBackend_36;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_RequestOptions_37", {
        get: function () {
            if ((this.__RequestOptions_37 == null)) {
                (this.__RequestOptions_37 = new __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["b" /* BaseRequestOptions */]());
            }
            return this.__RequestOptions_37;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppModuleInjector.prototype, "_Http_38", {
        get: function () {
            if ((this.__Http_38 == null)) {
                (this.__Http_38 = __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["c" /* httpFactory */](this._XHRBackend_36, this._RequestOptions_37));
            }
            return this.__Http_38;
        },
        enumerable: true,
        configurable: true
    });
    AppModuleInjector.prototype.createInternal = function () {
        this._CommonModule_0 = new __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */]();
        this._ApplicationModule_1 = new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */]();
        this._BrowserModule_2 = new __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */](this.parent.get(__WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */], null));
        this._InternalFormsSharedModule_3 = new __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */]();
        this._FormsModule_4 = new __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */]();
        this._HttpModule_5 = new __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */]();
        this._AppModule_6 = new __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]();
        this._ErrorHandler_9 = __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["g" /* errorHandler */]();
        this._ApplicationInitStatus_10 = new __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */](this.parent.get(__WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["b" /* APP_INITIALIZER */], null));
        this._Testability_11 = new __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */]));
        this._ApplicationRef__12 = new __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */](this.parent.get(__WEBPACK_IMPORTED_MODULE_31__angular_core_src_zone_ng_zone__["a" /* NgZone */]), this.parent.get(__WEBPACK_IMPORTED_MODULE_33__angular_core_src_console__["a" /* Console */]), this, this._ErrorHandler_9, this, this._ApplicationInitStatus_10, this.parent.get(__WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["b" /* TestabilityRegistry */], null), this._Testability_11);
        return this._AppModule_6;
    };
    AppModuleInjector.prototype.getInternal = function (token, notFoundResult) {
        if ((token === __WEBPACK_IMPORTED_MODULE_2__angular_common_src_common_module__["a" /* CommonModule */])) {
            return this._CommonModule_0;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_3__angular_core_src_application_module__["a" /* ApplicationModule */])) {
            return this._ApplicationModule_1;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_src_browser__["d" /* BrowserModule */])) {
            return this._BrowserModule_2;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_5__angular_forms_src_directives__["b" /* InternalFormsSharedModule */])) {
            return this._InternalFormsSharedModule_3;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_6__angular_forms_src_form_providers__["a" /* FormsModule */])) {
            return this._FormsModule_4;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_7__angular_http_src_http_module__["a" /* HttpModule */])) {
            return this._HttpModule_5;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */])) {
            return this._AppModule_6;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_27__angular_core_src_i18n_tokens__["a" /* LOCALE_ID */])) {
            return this._LOCALE_ID_7;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_8__angular_common_src_localization__["b" /* NgLocalization */])) {
            return this._NgLocalization_8;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_34__angular_core_src_error_handler__["a" /* ErrorHandler */])) {
            return this._ErrorHandler_9;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_9__angular_core_src_application_init__["a" /* ApplicationInitStatus */])) {
            return this._ApplicationInitStatus_10;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_10__angular_core_src_testability_testability__["a" /* Testability */])) {
            return this._Testability_11;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["d" /* ApplicationRef_ */])) {
            return this._ApplicationRef__12;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_11__angular_core_src_application_ref__["e" /* ApplicationRef */])) {
            return this._ApplicationRef_13;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_12__angular_core_src_linker_compiler__["b" /* Compiler */])) {
            return this._Compiler_14;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_28__angular_core_src_application_tokens__["d" /* APP_ID */])) {
            return this._APP_ID_15;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_35__angular_platform_browser_src_dom_dom_tokens__["a" /* DOCUMENT */])) {
            return this._DOCUMENT_16;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_13__angular_platform_browser_src_dom_events_hammer_gestures__["b" /* HAMMER_GESTURE_CONFIG */])) {
            return this._HAMMER_GESTURE_CONFIG_17;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["c" /* EVENT_MANAGER_PLUGINS */])) {
            return this._EVENT_MANAGER_PLUGINS_18;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_14__angular_platform_browser_src_dom_events_event_manager__["a" /* EventManager */])) {
            return this._EventManager_19;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["a" /* DomSharedStylesHost */])) {
            return this._DomSharedStylesHost_20;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_36__angular_platform_browser_src_dom_animation_driver__["a" /* AnimationDriver */])) {
            return this._AnimationDriver_21;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_16__angular_platform_browser_src_dom_dom_renderer__["a" /* DomRootRenderer */])) {
            return this._DomRootRenderer_22;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_37__angular_core_src_render_api__["a" /* RootRenderer */])) {
            return this._RootRenderer_23;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_17__angular_platform_browser_src_security_dom_sanitization_service__["a" /* DomSanitizer */])) {
            return this._DomSanitizer_24;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_38__angular_core_src_security__["a" /* Sanitizer */])) {
            return this._Sanitizer_25;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_18__angular_core_src_animation_animation_queue__["a" /* AnimationQueue */])) {
            return this._AnimationQueue_26;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_19__angular_core_src_linker_view_utils__["ViewUtils"])) {
            return this._ViewUtils_27;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_39__angular_core_src_change_detection_differs_iterable_differs__["a" /* IterableDiffers */])) {
            return this._IterableDiffers_28;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_40__angular_core_src_change_detection_differs_keyvalue_differs__["a" /* KeyValueDiffers */])) {
            return this._KeyValueDiffers_29;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_15__angular_platform_browser_src_dom_shared_styles_host__["b" /* SharedStylesHost */])) {
            return this._SharedStylesHost_30;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_20__angular_platform_browser_src_browser_title__["a" /* Title */])) {
            return this._Title_31;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_21__angular_forms_src_directives_radio_control_value_accessor__["b" /* RadioControlRegistry */])) {
            return this._RadioControlRegistry_32;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_22__angular_http_src_backends_browser_xhr__["a" /* BrowserXhr */])) {
            return this._BrowserXhr_33;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_23__angular_http_src_base_response_options__["a" /* ResponseOptions */])) {
            return this._ResponseOptions_34;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_41__angular_http_src_interfaces__["b" /* XSRFStrategy */])) {
            return this._XSRFStrategy_35;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_24__angular_http_src_backends_xhr_backend__["b" /* XHRBackend */])) {
            return this._XHRBackend_36;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_25__angular_http_src_base_request_options__["a" /* RequestOptions */])) {
            return this._RequestOptions_37;
        }
        if ((token === __WEBPACK_IMPORTED_MODULE_42__angular_http_src_http__["a" /* Http */])) {
            return this._Http_38;
        }
        return notFoundResult;
    };
    AppModuleInjector.prototype.destroyInternal = function () {
        this._ApplicationRef__12.ngOnDestroy();
    };
    return AppModuleInjector;
}(__WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["a" /* NgModuleInjector */]));
var AppModuleNgFactory = new __WEBPACK_IMPORTED_MODULE_0__angular_core_src_linker_ng_module_factory__["b" /* NgModuleFactory */](AppModuleInjector, __WEBPACK_IMPORTED_MODULE_1__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/app.module.ngfactory.js.map

/***/ },

/***/ 336:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__app_card_card_component__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__card_component_scss_shim_ngstyle__ = __webpack_require__(337);
/* harmony export (binding) */ __webpack_require__.d(exports, "b", function() { return Wrapper_CardComponent; });
/* unused harmony export CardComponentNgFactory */
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return View_CardComponent0; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};









var Wrapper_CardComponent = (function () {
    function Wrapper_CardComponent() {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__app_card_card_component__["a" /* CardComponent */]();
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_CardComponent.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_CardComponent.prototype.ngOnDestroy = function () {
    };
    Wrapper_CardComponent.prototype.check_label = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.label = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_CardComponent.prototype.check_value = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.value = currValue;
            this._expr_1 = currValue;
        }
    };
    Wrapper_CardComponent.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if ((view.numberOfChecks === 0)) {
                this.context.ngOnInit();
            }
        }
        return changed;
    };
    Wrapper_CardComponent.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_CardComponent.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_CardComponent.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_CardComponent;
}());
var renderType_CardComponent_Host = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].None, [], {});
var View_CardComponent_Host0 = (function (_super) {
    __extends(View_CardComponent_Host0, _super);
    function View_CardComponent_Host0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_CardComponent_Host0, renderType_CardComponent_Host, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].HOST, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
    }
    View_CardComponent_Host0.prototype.createInternal = function (rootSelector) {
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["selectOrCreateRenderHostElement"](this.renderer, 'app-card', __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["EMPTY_INLINE_ARRAY"], rootSelector, null);
        this.compView_0 = new View_CardComponent0(this.viewUtils, this, 0, this._el_0);
        this._CardComponent_0_3 = new Wrapper_CardComponent();
        this.compView_0.create(this._CardComponent_0_3.context);
        this.init(this._el_0, (this.renderer.directRenderer ? null : [this._el_0]), null);
        return new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["b" /* ComponentRef_ */](0, this, this._el_0, this._CardComponent_0_3.context);
    };
    View_CardComponent_Host0.prototype.injectorGetInternal = function (token, requestNodeIndex, notFoundResult) {
        if (((token === __WEBPACK_IMPORTED_MODULE_0__app_card_card_component__["a" /* CardComponent */]) && (0 === requestNodeIndex))) {
            return this._CardComponent_0_3.context;
        }
        return notFoundResult;
    };
    View_CardComponent_Host0.prototype.detectChangesInternal = function (throwOnChange) {
        this._CardComponent_0_3.ngDoCheck(this, this._el_0, throwOnChange);
        this.compView_0.internalDetectChanges(throwOnChange);
    };
    View_CardComponent_Host0.prototype.destroyInternal = function () {
        this.compView_0.destroy();
    };
    View_CardComponent_Host0.prototype.visitRootNodesInternal = function (cb, ctx) {
        cb(this._el_0, ctx);
    };
    return View_CardComponent_Host0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
var CardComponentNgFactory = new __WEBPACK_IMPORTED_MODULE_7__angular_core_src_linker_component_factory__["a" /* ComponentFactory */]('app-card', View_CardComponent_Host0, __WEBPACK_IMPORTED_MODULE_0__app_card_card_component__["a" /* CardComponent */]);
var styles_CardComponent = [__WEBPACK_IMPORTED_MODULE_8__card_component_scss_shim_ngstyle__["a" /* styles */]];
var renderType_CardComponent = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderComponentType"]('', 0, __WEBPACK_IMPORTED_MODULE_4__angular_core_src_metadata_view__["b" /* ViewEncapsulation */].Emulated, styles_CardComponent, {});
var View_CardComponent0 = (function (_super) {
    __extends(View_CardComponent0, _super);
    function View_CardComponent0(viewUtils, parentView, parentIndex, parentElement) {
        _super.call(this, View_CardComponent0, renderType_CardComponent, __WEBPACK_IMPORTED_MODULE_5__angular_core_src_linker_view_type__["a" /* ViewType */].COMPONENT, viewUtils, parentView, parentIndex, parentElement, __WEBPACK_IMPORTED_MODULE_6__angular_core_src_change_detection_constants__["b" /* ChangeDetectorStatus */].CheckAlways);
        this._expr_5 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_6 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    View_CardComponent0.prototype.createInternal = function (rootSelector) {
        var parentRenderNode = this.renderer.createViewRoot(this.parentElement);
        this._el_0 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card-label'), null);
        this._text_1 = this.renderer.createText(this._el_0, '', null);
        this._text_2 = this.renderer.createText(parentRenderNode, '\n', null);
        this._el_3 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["createRenderElement"](this.renderer, parentRenderNode, 'p', new __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["InlineArray2"](2, 'class', 'card-value'), null);
        this._text_4 = this.renderer.createText(this._el_3, '', null);
        this.init(null, (this.renderer.directRenderer ? null : [
            this._el_0,
            this._text_1,
            this._text_2,
            this._el_3,
            this._text_4
        ]), null);
        return null;
    };
    View_CardComponent0.prototype.detectChangesInternal = function (throwOnChange) {
        var currVal_5 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.label, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_5, currVal_5)) {
            this.renderer.setText(this._text_1, currVal_5);
            this._expr_5 = currVal_5;
        }
        var currVal_6 = __WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["inlineInterpolate"](1, '', this.context.value, '');
        if (__WEBPACK_IMPORTED_MODULE_3__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_6, currVal_6)) {
            this.renderer.setText(this._text_4, currVal_6);
            this._expr_6 = currVal_6;
        }
    };
    return View_CardComponent0;
}(__WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view__["a" /* AppView */]));
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/card.component.ngfactory.js.map

/***/ },

/***/ 337:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return styles; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */
var styles = [''];
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/card.component.scss.shim.ngstyle.js.map

/***/ },

/***/ 338:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgFor; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgFor = (function () {
    function Wrapper_NgFor(p0, p1, p2, p3) {
        this._changed = false;
        this._changes = {};
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_for__["a" /* NgFor */](p0, p1, p2, p3);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_1 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
        this._expr_2 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgFor.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgFor.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgFor.prototype.check_ngForOf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngForOf = currValue;
            this._changes['ngForOf'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_0, currValue);
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTrackBy = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_1, currValue))) {
            this._changed = true;
            this.context.ngForTrackBy = currValue;
            this._changes['ngForTrackBy'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_1, currValue);
            this._expr_1 = currValue;
        }
    };
    Wrapper_NgFor.prototype.check_ngForTemplate = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_2, currValue))) {
            this._changed = true;
            this.context.ngForTemplate = currValue;
            this._changes['ngForTemplate'] = new __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["e" /* SimpleChange */](this._expr_2, currValue);
            this._expr_2 = currValue;
        }
    };
    Wrapper_NgFor.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        if (!throwOnChange) {
            if (changed) {
                this.context.ngOnChanges(this._changes);
                this._changes = {};
            }
            this.context.ngDoCheck();
        }
        return changed;
    };
    Wrapper_NgFor.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgFor.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgFor.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgFor;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/ng_for.ngfactory.js.map

/***/ },

/***/ 339:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return Wrapper_NgIf; });
/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
/* tslint:disable */



var Wrapper_NgIf = (function () {
    function Wrapper_NgIf(p0, p1) {
        this._changed = false;
        this.context = new __WEBPACK_IMPORTED_MODULE_0__angular_common_src_directives_ng_if__["a" /* NgIf */](p0, p1);
        this._expr_0 = __WEBPACK_IMPORTED_MODULE_1__angular_core_src_change_detection_change_detection_util__["a" /* UNINITIALIZED */];
    }
    Wrapper_NgIf.prototype.ngOnDetach = function (view, componentView, el) {
    };
    Wrapper_NgIf.prototype.ngOnDestroy = function () {
    };
    Wrapper_NgIf.prototype.check_ngIf = function (currValue, throwOnChange, forceUpdate) {
        if ((forceUpdate || __WEBPACK_IMPORTED_MODULE_2__angular_core_src_linker_view_utils__["checkBinding"](throwOnChange, this._expr_0, currValue))) {
            this._changed = true;
            this.context.ngIf = currValue;
            this._expr_0 = currValue;
        }
    };
    Wrapper_NgIf.prototype.ngDoCheck = function (view, el, throwOnChange) {
        var changed = this._changed;
        this._changed = false;
        return changed;
    };
    Wrapper_NgIf.prototype.checkHost = function (view, componentView, el, throwOnChange) {
    };
    Wrapper_NgIf.prototype.handleEvent = function (eventName, $event) {
        var result = true;
        return result;
    };
    Wrapper_NgIf.prototype.subscribe = function (view, _eventHandler) {
        this._eventHandler = _eventHandler;
    };
    return Wrapper_NgIf;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/ng_if.ngfactory.js.map

/***/ },

/***/ 340:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(313);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__test_test_component__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__card_card_component__ = __webpack_require__(159);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__test_test_component__["a" /* TestComponent */],
                __WEBPACK_IMPORTED_MODULE_6__menu_menu_component__["a" /* MenuComponent */],
                __WEBPACK_IMPORTED_MODULE_7__card_card_component__["a" /* CardComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["c" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/app.module.js.map

/***/ },

/***/ 341:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return MenuComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-menu',
            templateUrl: './menu.component.html',
            styleUrls: ['./menu.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], MenuComponent);
    return MenuComponent;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/menu.component.js.map

/***/ },

/***/ 342:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return TestComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestComponent = (function () {
    function TestComponent() {
    }
    TestComponent.prototype.ngOnInit = function () {
    };
    TestComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["V" /* Component */])({
            selector: 'app-test',
            templateUrl: './test.component.html',
            styleUrls: ['./test.component.scss']
        }), 
        __metadata('design:paramtypes', [])
    ], TestComponent);
    return TestComponent;
}());
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/test.component.js.map

/***/ },

/***/ 343:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(exports, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/environment.js.map

/***/ },

/***/ 344:
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_symbol__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__ = __webpack_require__(351);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es6_object___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es6_object__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_core_js_es6_function___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_core_js_es6_function__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_core_js_es6_parse_int__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__ = __webpack_require__(352);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_core_js_es6_parse_float__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_core_js_es6_number___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_es6_number__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_core_js_es6_math___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_core_js_es6_math__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_core_js_es6_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_core_js_es6_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_core_js_es6_date___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_core_js_es6_date__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_core_js_es6_array___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_core_js_es6_array__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_core_js_es6_regexp__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__ = __webpack_require__(348);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_core_js_es6_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_core_js_es6_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_core_js_es6_set___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_core_js_es6_set__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__ = __webpack_require__(508);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_zone_js_dist_zone__);
















//# sourceMappingURL=/Users/antonsidorov/Documents/Programming/Git/it-sd/src/polyfills.js.map

/***/ },

/***/ 509:
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(268);


/***/ }

},[509]);
//# sourceMappingURL=main.bundle.map