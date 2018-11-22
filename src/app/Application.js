import AppViewManager from './AppViewManager';
import { EventUtils } from 'view4js';
import { EventBroadCaster } from 'view4js';
import { NavigationEvent } from 'view4js';

class Application {
    constructor() {
        this.initialize();
    }

    initialize() {
        this.viewmanager = new AppViewManager();
    }

    start() {
        let navEvent1 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path1");
        let navEvent2 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path2");
        let navEvent3 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path3");
        let navEvent4 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path4");
        let navEvent5 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path5");
        let navEvent6 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path6");

        let navEvent7 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path7");

        let navEvent8 = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View1_Nav_Event", "testusers", "/path8");
        EventBroadCaster.navEventChannel.dispatchEvent(navEvent1);

        //EventBroadCaster.navEventChannel.dispatchEvent(navEvent3);
        //EventBroadCaster.navEventChannel.dispatchEvent(navEvent4);
        //EventBroadCaster.navEventChannel.dispatchEvent(navEvent5);
        //EventBroadCaster.navEventChannel.dispatchEvent(navEvent6);
        //EventBroadCaster.navEventChannel.dispatchEvent(navEvent2);


    }

}

export default Application;