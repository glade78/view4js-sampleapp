import { ViewNavigator } from 'view4js';
import { EventRouter } from 'view4js';
import View1 from '../views/View1';
import View2 from '../views/View2';
import View3 from '../views/View3';
import { ViewStack } from 'view4js';
import View4Binding from '../views/View4Binding';

class LoginNavigator extends ViewNavigator {
    constructor(_id, _parentId) {
        super(_id, _parentId);
    }

    //Overrides by SubClass
    initNavigator() {
        this.initEventRoutes();
    }

    //Overrides by SubClass
    renderNavigatorContent() {
        super.renderNavigatorContent();
    }

    //Overrides by SubClass
    //_id, _route, _navparams, _parentViewStackId
    createView(_viewId, _route, _navparams, _viewStackId) {
        let tmpView = null;
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
    }

    //Overrides by SubClass
    //_id, _route, _parentId
    createViewStack(_viewStackId, _route, _parentId) {
        return new ViewStack(_viewStackId, _route, _parentId);
    }

    initEventRoutes() {
        let tmpEvntRoutes = [
            { navEvent: "View1_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view1", path: "/path1" },
            { navEvent: "View2_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view2", path: "/path1" },
            { navEvent: "View3_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view3", path: "/path1" }, { navEvent: "View4_Nav_Event", viewstackId: "ViewStack1", viewId: "p1view4", path: "/path1" }
        ];
        this.eventRouter = new EventRouter(tmpEvntRoutes);
    }
}
export default LoginNavigator;