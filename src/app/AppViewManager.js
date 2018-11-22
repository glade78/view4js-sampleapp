import { ViewManager } from 'view4js';
import { Router } from 'view4js';
import LoginNavigator from './navigators/LoginNavigator';
import { ViewNavigator } from 'view4js';


class AppViewManager extends ViewManager {

    initialize() {
        super.initialize();
        this.initRoutes();
    }

    createNavigator(_navigatorId, _parentId) {
        let tmpNavigator = null;
        switch (_navigatorId) {
            case "Navigator1":
                tmpNavigator = new LoginNavigator(_navigatorId, _parentId);
                break;
            default:
                tmpNavigator = new ViewNavigator(_navigatorId, _parentId);

        }
        return tmpNavigator;
    }

    initRoutes() {
        let tmpRoutes = [
            { path: "/path1", navigatorId: "Navigator1" },
            { path: "/path2", navigatorId: "Navigator2" },
            { path: "/path3", navigatorId: "Navigator2" },
            { path: "/path4", navigatorId: "Navigator2" },
            { path: "/path5", navigatorId: "Navigator2" },
            { path: "/path6", navigatorId: "Navigator2" },
            { path: "/path7", navigatorId: "Navigator3" },
            { path: "/path8", navigatorId: "Navigator4" }
        ];
        this.routes = new Router(tmpRoutes);
    }
}

export default AppViewManager;