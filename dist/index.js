(function(l, i, v, e) { v = l.createElement(i); v.async = 1; v.src = '//' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; e = l.getElementsByTagName(i)[0]; e.parentNode.insertBefore(v, e)})(document, 'script');
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('view4js')) :
  typeof define === 'function' && define.amd ? define(['view4js'], factory) :
  (factory(global.view4js));
}(this, (function (view4js) { 'use strict';

  var classCallCheck = function (instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  };

  var inherits = function (subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  };

  var possibleConstructorReturn = function (self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  };

  var View1 = function (_View) {
      inherits(View1, _View);

      function View1(_id, _route, _navparams, _parentViewStackId) {
          classCallCheck(this, View1);
          return possibleConstructorReturn(this, _View.call(this, _id, _route, _navparams, _parentViewStackId));
      }

      View1.prototype.initView = function initView() {
          _View.prototype.initView.call(this);
          this.back_lnk_id = "back";
          this.submit_lnk_id = "submit";
      };

      //Overrides by SubClass
      // call by attachView


      View1.prototype.bindView = function bindView() {
          _View.prototype.bindView.call(this);
      };

      /*
      Add HTML Element Event Handlers 
      call by attachView
      */


      View1.prototype.addViewHandler = function addViewHandler() {
          var _this2 = this;

          _View.prototype.addViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          // Use this for AutoWiring Events in HTML Tag
          var tmpFn = "handleSubmit";
          submitButt.addEventListener("click", function (e) {
              _this2[tmpFn](e);
          });
          // submitButt.addEventListener("click", (e) => { this.handleSubmit(e); });
      };

      View1.prototype.handleSubmit = function handleSubmit(event) {
          console.log("View1 Submit Clicked");
          event.preventDefault();
          var navEvent = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View2_Nav_Event", "testusers", this.route);
          view4js.EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
      };

      // call by attachView


      View1.prototype.createViewContent = function createViewContent() {
          var tmpViewContentEl = this.createViewHTML();
          var tmpViewElement = this.getViewElement();
          tmpViewElement.insertAdjacentHTML('beforeend', tmpViewContentEl);
      };

      View1.prototype.createViewHTML = function createViewHTML() {
          var thisref = this;
          return '\n        <div class="ui content">\n                <div class="ui equal width center aligned padded grid stackable">\n                    <div class="row">\n                        <div class="five wide column">\n                            <div class="ui segments">\n                                <div class="ui segment inverted nightli">\n                                    <h3 class="ui header">\n                                        ' + thisref.id + '\n                                    </h3>\n                                </div>\n                                <div class="ui segment">\n                                    \n                                    <div class="ui divider hidden"></div>\n                                    <button class="ui primary fluid button ' + thisref.submit_lnk_id + '" data-click="handleSubmit">\n                                        <i class="send icon"></i> Submit\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <!-- SignIn Panel Ends Here -->\n        ';
      };

      View1.prototype.removeViewHandler = function removeViewHandler() {
          var _this3 = this;

          _View.prototype.removeViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          submitButt.removeEventListener("click", function (e) {
              _this3.handleSubmit(e);
          });
      };

      return View1;
  }(view4js.View);

  var View2 = function (_View) {
      inherits(View2, _View);

      function View2(_id, _route, _navparams, _parentViewStackId) {
          classCallCheck(this, View2);
          return possibleConstructorReturn(this, _View.call(this, _id, _route, _navparams, _parentViewStackId));
      }

      View2.prototype.initView = function initView() {
          _View.prototype.initView.call(this);
          this.back_lnk_id = "back";
          this.submit_lnk_id = "submit";
      };

      //Overrides by SubClass
      // call by attachView


      View2.prototype.bindView = function bindView() {
          _View.prototype.bindView.call(this);
      };

      /*
      Add HTML Element Event Handlers 
      call by attachView
      */


      View2.prototype.addViewHandler = function addViewHandler() {
          var _this2 = this;

          _View.prototype.addViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.addEventListener("click", function (e) {
              _this2.dispatchNavBackEvent(e);
          });
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          submitButt.addEventListener("click", function (e) {
              _this2.handleSubmit(e);
          });
      };

      View2.prototype.handleSubmit = function handleSubmit(event) {
          event.preventDefault();
          var navEvent = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View3_Nav_Event", "testusers", this.route);
          view4js.EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
      };

      // call by attachView


      View2.prototype.createViewContent = function createViewContent() {
          var tmpViewContentEl = this.createViewHTML();
          var tmpViewElement = this.getViewElement();
          tmpViewElement.insertAdjacentHTML('beforeend', tmpViewContentEl);
      };

      View2.prototype.createViewHTML = function createViewHTML() {
          var thisref = this;
          return '\n        <div class="ui container">\n                <div class="ui equal width center aligned padded grid stackable">\n                    <div class="row">\n                        <div class="five wide column">\n                            <div class="ui segments">\n                                <div class="ui segment inverted nightli">\n                                    <h3 class="ui header">\n                                        ' + thisref.id + '\n                                    </h3>\n                                </div>\n                                <div class="ui segment">\n                                    <button class="ui primary fluid button ' + thisref.back_lnk_id + '">\n                                        <i class="send icon"></i> Back\n                                    </button>\n                                    <div class="ui divider hidden"></div>\n                                    <button class="ui primary fluid button ' + thisref.submit_lnk_id + '">\n                                        <i class="send icon"></i> Submit\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <!-- SignIn Panel Ends Here -->\n        ';
      };

      View2.prototype.removeViewHandler = function removeViewHandler() {
          var _this3 = this;

          _View.prototype.removeViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.removeEventListener("click", function (e) {
              _this3.dispatchNavBackEvent(e);
          });
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          submitButt.removeEventListener("click", function (e) {
              _this3.handleSubmit(e);
          });
      };

      return View2;
  }(view4js.View);

  var View3 = function (_View) {
      inherits(View3, _View);

      function View3(_id, _route, _navparams, _parentViewStackId) {
          classCallCheck(this, View3);
          return possibleConstructorReturn(this, _View.call(this, _id, _route, _navparams, _parentViewStackId));
      }

      View3.prototype.initView = function initView() {
          _View.prototype.initView.call(this);
          this.back_lnk_id = "back";
          this.submit_lnk_id = "submit";
      };

      //Overrides by SubClass
      // call by attachView


      View3.prototype.bindView = function bindView() {
          _View.prototype.bindView.call(this);
      };

      /*
      Add HTML Element Event Handlers 
      call by attachView
      */


      View3.prototype.addViewHandler = function addViewHandler() {
          var _this2 = this;

          _View.prototype.addViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.addEventListener("click", function (e) {
              _this2.dispatchNavBackEvent(e);
          });
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          submitButt.addEventListener("click", function (e) {
              _this2.handleSubmit(e);
          });
      };

      View3.prototype.handleSubmit = function handleSubmit(event) {
          event.preventDefault();
          var navEvent = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View4_Nav_Event", "testusers", this.route);
          view4js.EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
      };

      // call by attachView


      View3.prototype.createViewContent = function createViewContent() {
          var tmpViewContentEl = this.createViewHTML();
          var tmpViewElement = this.getViewElement();
          tmpViewElement.insertAdjacentHTML('beforeend', tmpViewContentEl);
      };

      View3.prototype.createViewHTML = function createViewHTML() {
          var thisref = this;
          return '\n        <div class="ui container">\n                <div class="ui equal width center aligned padded grid stackable">\n                    <div class="row">\n                        <div class="five wide column">\n                            <div class="ui segments">\n                                <div class="ui segment inverted nightli">\n                                    <h3 class="ui header">\n                                        ' + thisref.id + '\n                                    </h3>\n                                </div>\n                                <div class="ui segment">\n                                    <button class="ui primary fluid button ' + thisref.back_lnk_id + '">\n                                        <i class="send icon"></i> Back\n                                    </button>\n                                    <div class="ui divider hidden"></div>\n                                    <button class="ui primary fluid button ' + thisref.submit_lnk_id + '">\n                                        <i class="send icon"></i> Submit\n                                    </button>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        <!-- SignIn Panel Ends Here -->\n        ';
      };

      View3.prototype.removeViewHandler = function removeViewHandler() {
          var _this3 = this;

          _View.prototype.removeViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.removeEventListener("click", function (e) {
              _this3.dispatchNavBackEvent(e);
          });
          var submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
          submitButt.removeEventListener("click", function (e) {
              _this3.handleSubmit(e);
          });
      };

      return View3;
  }(view4js.View);

  var MyModel = function (_EventDispatcher) {
      inherits(MyModel, _EventDispatcher);

      function MyModel() {
          classCallCheck(this, MyModel);

          var _this = possibleConstructorReturn(this, _EventDispatcher.call(this));

          _this.value = 10;
          return _this;
      }

      MyModel.prototype.setValue = function setValue() {
          var _val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

          this.value = _val;
          this.dispatchEvent("change", this);
      };

      MyModel.prototype.getValue = function getValue() {
          return this.value;
      };

      return MyModel;
  }(view4js.EventDispatcher);

  var View4Binding = function (_View) {
      inherits(View4Binding, _View);

      function View4Binding(_id, _route, _navparams, _parentViewStackId) {
          classCallCheck(this, View4Binding);
          return possibleConstructorReturn(this, _View.call(this, _id, _route, _navparams, _parentViewStackId));
      }

      View4Binding.prototype.initView = function initView() {
          _View.prototype.initView.call(this);
          this.back_lnk_id = "back";
          this.submit_lnk_id = "submit";
          this.myCustomModel = new MyModel();
      };

      //Overrides by SubClass
      // call by attachView


      View4Binding.prototype.bindView = function bindView() {
          _View.prototype.bindView.call(this);
      };

      /*
      Add HTML Element Event Handlers 
      call by attachView
      */


      View4Binding.prototype.addViewHandler = function addViewHandler() {
          var _this2 = this;

          _View.prototype.addViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.addEventListener("click", function (e) {
              _this2.dispatchNavBackEvent(e);
          });

          var clicksNodeList = tmpviewEl.querySelectorAll('[data-click]');
          for (var i = 0; i < clicksNodeList.length; i++) {
              var clickNode = clicksNodeList[i];
              this.addClickHandlers(clickNode);
          }
      };

      View4Binding.prototype.addClickHandlers = function addClickHandlers(_node) {
          var _this3 = this;

          var handFnStr = _node.dataset.click;
          _node.addEventListener("click", function (e) {
              _this3[handFnStr](e);
          });
      };

      View4Binding.prototype.bindInputTextBox = function bindInputTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#inputtxt_1");
          var destele = tmpviewEl.querySelector("#lbl_1");
          destele.value = this.myCustomModel.getValue();
          view4js.BindingUtils.addBinding(srcele, "value", "change", this.myCustomModel, "setValue", false);
          view4js.BindingUtils.addBinding(this.myCustomModel, "getValue", "change", destele, "value", false);
      };

      View4Binding.prototype.removeBindInputTextBox = function removeBindInputTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#inputtxt_1");
          view4js.BindingUtils.removeBinding(srcele, "value");
      };

      View4Binding.prototype.bindTwowayInputTextBox = function bindTwowayInputTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#inputtxt_11");
          var destele = tmpviewEl.querySelector("#lbl_11");
          view4js.BindingUtils.addBinding(srcele, "value", "change", destele, "value", true);
      };

      View4Binding.prototype.removeBindTwowayInputTextBox = function removeBindTwowayInputTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#inputtxt_11");
          var destele = tmpviewEl.querySelector("#lbl_11");
          view4js.BindingUtils.removeBinding(srcele, "value");
          view4js.BindingUtils.removeBinding(destele, "value");
      };

      View4Binding.prototype.bindPasswordTextBox = function bindPasswordTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#pwd_2");
          var destele = tmpviewEl.querySelector("#lbl_2");
          view4js.BindingUtils.addBinding(srcele, "value", "change", destele, "value", false);
      };

      View4Binding.prototype.removeBindPasswordTextBox = function removeBindPasswordTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#pwd_2");
          var destele = tmpviewEl.querySelector("#lbl_2");
          view4js.BindingUtils.removeBinding(srcele, "value");
      };

      View4Binding.prototype.bindCheckBoxTextBox = function bindCheckBoxTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#chk_3");
          var destele = tmpviewEl.querySelector("#lbl_3");
          view4js.BindingUtils.addBinding(srcele, "checked", "change", destele, "value", false);
      };

      View4Binding.prototype.removeBindCheckBoxTextBox = function removeBindCheckBoxTextBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#chk_3");
          var destele = tmpviewEl.querySelector("#lbl_3");
          view4js.BindingUtils.removeBinding(srcele, "value");
      };

      View4Binding.prototype.bindSelectionBox = function bindSelectionBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#mySelect");
          var destele = tmpviewEl.querySelector("#lbl_4");
          view4js.BindingUtils.addBinding(srcele, "value", "change", destele, "value", false);
      };

      View4Binding.prototype.removeBindSelectionBox = function removeBindSelectionBox() {
          var tmpviewEl = this.getViewElement();
          var srcele = tmpviewEl.querySelector("#mySelect");
          var destele = tmpviewEl.querySelector("#lbl_4");
          view4js.BindingUtils.removeBinding(srcele, "value");
      };

      View4Binding.prototype.handleSubmit = function handleSubmit(event) {
          event.preventDefault();
          var navEvent = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View3_Nav_Event", "testusers", this.route);
          view4js.EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
      };

      // call by attachView


      View4Binding.prototype.createViewContent = function createViewContent() {
          var tmpViewContentEl = this.createViewHTML();
          var tmpViewElement = this.getViewElement();
          tmpViewElement.insertAdjacentHTML('beforeend', tmpViewContentEl);
      };

      View4Binding.prototype.createViewHTML = function createViewHTML() {
          var thisref = this;
          return '\n        <div class="ui container">\n                <div class="ui equal width center aligned padded grid stackable">\n                    <div class="row">\n                        <div class="five wide column">\n                            <div class="ui segments">\n                                <div class="ui segment inverted nightli">\n                                    <h3 class="ui header">\n                                        ' + thisref.id + '\n                                    </h3>\n                                </div>\n                                <div class="ui segment">\n                                <button class="ui primary fluid button ' + thisref.back_lnk_id + '">\n                                        <i class="send icon"></i> Back\n                                    </button>\n                                    <div class="ui divider hidden"></div>\n        <table class="ui celled table">\n        <thead>\n            <tr>\n                <th></th>\n                <th>HTML Controls</th>\n                <th>Bindable Object Value</th>\n\n\n            </tr>\n        </thead>\n        <tbody>\n\n            <tr>\n                <td>Test Input Values</td>\n                <td style="width: 477px;">\n                    <br>\n                     Following element demonstrates chain binding\n                     Input Element binds to Model Object binds\n                     Model Object binds to Label Element\n                    <br>\n                    <br>\n                    <input id="inputtxt_1" type="text" value="test">\n                    <br>\n                    <br>\n                    Initially clicking BindInputText will show Model value by calling myCustomModel.getValue() , which is set to 10.\n                    <br>\n                    <br>\n                    <input type="button" value="BindInputText" data-click="bindInputTextBox">\n                    <br>\n                    <input type="button" value="removeBindInputText" data-click="removeBindInputTextBox">\n                </td>\n                <td>\n                    <input type="text" id="lbl_1" value="">\n                </td>\n            </tr>\n            <tr>\n                <td>Test Input Values</td>\n                <td style="width: 477px;">\n                    <br>\n                    Following element demonstrate twoway binding\n                    Input Element binds to Label Element\n                    <br>\n                    <br>\n                    <input id="inputtxt_11" type="text" value="test">\n                    <br>\n                    <input type="button" value="Bind Twoway InputText" data-click="bindTwowayInputTextBox">\n                    <br>\n                    <input type="button" value="removeBind TwoWay InputText" data-click="removeBindTwowayInputTextBox">\n                </td>\n                <td>\n                    <input type="text" id="lbl_11" value="">\n                </td>\n            </tr>\n            <tr>\n                <td>Test Password Values</td>\n                <td style="width: 477px;">\n                    <input id="pwd_2" type="password" value="test">\n                    <br>\n                    <input type="button" value="BindInputText" data-click="bindPasswordTextBox">\n\n                </td>\n                <td>\n                    <input type="text" id="lbl_2" value="">\n                </td>\n            </tr>\n\n            <tr>\n                <td>Test CheckBox Values</td>\n                <td style="width: 477px;">\n                    <input id="chk_3" type="checkbox" value="check">\n                    <br>\n                    <input type="button" value="BindInputText" data-click="bindCheckBoxTextBox">\n\n                </td>\n                <td>\n                    <input type="text" id="lbl_3" value="">\n                </td>\n            </tr>\n            <tr>\n                <td>Test Selection Values</td>\n                <td style="width: 477px;">\n                    <select id="mySelect">\n                        <option value="Audi">Audi\n                        <option value="BMW">BMW\n                        <option value="Mercedes">Mercedes\n                        <option value="Volvo">Volvo\n                    </select>\n                    <br>\n                    <input type="button" value="BindInputText" data-click="bindSelectionBox">\n\n                </td>\n                <td>\n                    <input type="text" id="lbl_4" value="">\n                </td>\n            </tr>\n\n\n        </tbody>\n    </table>\n    </div>\n    </div>\n</div>\n</div>\n</div>\n</div>\n        ';
      };

      View4Binding.prototype.removeViewHandler = function removeViewHandler() {
          var _this4 = this;

          _View.prototype.removeViewHandler.call(this);
          var tmpviewEl = this.getViewElement();
          var backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
          backButt.removeEventListener("click", function (e) {
              _this4.dispatchNavBackEvent(e);
          });
      };

      return View4Binding;
  }(view4js.View);

  var LoginNavigator = function (_ViewNavigator) {
      inherits(LoginNavigator, _ViewNavigator);

      function LoginNavigator(_id, _parentId) {
          classCallCheck(this, LoginNavigator);
          return possibleConstructorReturn(this, _ViewNavigator.call(this, _id, _parentId));
      }

      //Overrides by SubClass


      LoginNavigator.prototype.initNavigator = function initNavigator() {
          this.initEventRoutes();
      };

      //Overrides by SubClass


      LoginNavigator.prototype.renderNavigatorContent = function renderNavigatorContent() {
          _ViewNavigator.prototype.renderNavigatorContent.call(this);
      };

      //Overrides by SubClass
      //_id, _route, _navparams, _parentViewStackId


      LoginNavigator.prototype.createView = function createView(_viewId, _route, _navparams, _viewStackId) {
          var tmpView = null;
          switch (_viewId) {
              case "p1view1":
                  tmpView = new View1(_viewId, _route, _navparams, _viewStackId);
                  break;
              case "p1view2":
                  tmpView = new View2(_viewId, _route, _navparams, _viewStackId);
                  break;
              case "p1view3":
                  tmpView = new View3(_viewId, _route, _navparams, _viewStackId);
                  break;
              case "p1view4":
                  tmpView = new View4Binding(_viewId, _route, _navparams, _viewStackId);
                  break;
              default:
                  tmpView = new View(_viewId, _route, _navparams, _viewStackId);
                  break;

          }
          return tmpView;
      };

      //Overrides by SubClass
      //_id, _route, _parentId


      LoginNavigator.prototype.createViewStack = function createViewStack(_viewStackId, _route, _parentId) {
          return new view4js.ViewStack(_viewStackId, _route, _parentId);
      };

      LoginNavigator.prototype.initEventRoutes = function initEventRoutes() {
          var tmpEvntRoutes = [{ navEvent: "View1_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view1", path: "/path1" }, { navEvent: "View2_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view2", path: "/path1" }, { navEvent: "View3_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view3", path: "/path1" }, { navEvent: "View4_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view4", path: "/path1" }];
          this.eventRouter = new view4js.EventRouter(tmpEvntRoutes);
      };

      return LoginNavigator;
  }(view4js.ViewNavigator);

  var AppViewManager = function (_ViewManager) {
      inherits(AppViewManager, _ViewManager);

      function AppViewManager() {
          classCallCheck(this, AppViewManager);
          return possibleConstructorReturn(this, _ViewManager.apply(this, arguments));
      }

      AppViewManager.prototype.initialize = function initialize() {
          _ViewManager.prototype.initialize.call(this);
          this.initRoutes();
      };

      AppViewManager.prototype.createNavigator = function createNavigator(_navigatorId, _parentId) {
          var tmpNavigator = null;
          switch (_navigatorId) {
              case "Navigator1":
                  tmpNavigator = new LoginNavigator(_navigatorId, _parentId);
                  break;
              default:
                  tmpNavigator = new view4js.ViewNavigator(_navigatorId, _parentId);

          }
          return tmpNavigator;
      };

      AppViewManager.prototype.initRoutes = function initRoutes() {
          var tmpRoutes = [{ path: "/path1", navigatorId: "Navigator1" }, { path: "/path2", navigatorId: "Navigator2" }, { path: "/path3", navigatorId: "Navigator2" }, { path: "/path4", navigatorId: "Navigator2" }, { path: "/path5", navigatorId: "Navigator2" }, { path: "/path6", navigatorId: "Navigator2" }, { path: "/path7", navigatorId: "Navigator3" }, { path: "/path8", navigatorId: "Navigator4" }];
          this.routes = new view4js.Router(tmpRoutes);
      };

      return AppViewManager;
  }(view4js.ViewManager);

  var Application = function () {
      function Application() {
          classCallCheck(this, Application);

          this.initialize();
      }

      Application.prototype.initialize = function initialize() {
          this.viewmanager = new AppViewManager();
      };

      Application.prototype.start = function start() {
          var navEvent1 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path1");
          var navEvent2 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path2");
          var navEvent3 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path3");
          var navEvent4 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path4");
          var navEvent5 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path5");
          var navEvent6 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path6");

          var navEvent7 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path7");

          var navEvent8 = new view4js.NavigationEvent(view4js.EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path8");
          view4js.EventBroadCaster.navEventChannel.dispatchEvent(navEvent1);

          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent3);
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent4);
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent5);
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent6);
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent2);

          // Side Bar Not working well 
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent7);
          //EventBroadCaster.navEventChannel.dispatchEvent(navEvent8);
      };

      return Application;
  }();

  var startApp = function startApp() {
      var myapp = new Application();
      myapp.start();
  };

  startApp();

})));
