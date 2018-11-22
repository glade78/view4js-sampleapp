import { EventUtils } from 'view4js';
import { EventBroadCaster } from 'view4js';
import { View } from 'view4js';
import { NavigationEvent } from 'view4js';

class View2 extends View {

    constructor(_id, _route, _navparams, _parentViewStackId) {
        super(_id, _route, _navparams, _parentViewStackId);
    }

    initView() {
        super.initView();
        this.back_lnk_id = "back";
        this.submit_lnk_id = "submit";
    }



    //Overrides by SubClass
    // call by attachView
    bindView() {
        super.bindView();
    }

    /*
    Add HTML Element Event Handlers 
    call by attachView
    */
    addViewHandler() {
        super.addViewHandler();
        let tmpviewEl = this.getViewElement();
        let backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
        backButt.addEventListener("click", (e) => { this.dispatchNavBackEvent(e); });
        let submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
        submitButt.addEventListener("click", (e) => { this.handleSubmit(e); });
    }

    handleSubmit(event) {
        event.preventDefault();
        let navEvent = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View3_Nav_Event", "testusers", this.route);
        EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
    }

    // call by attachView
    createViewContent() {
        let tmpViewContentEl = this.createViewHTML();
        let tmpViewElement = this.getViewElement();
        tmpViewElement.insertAdjacentHTML('beforeend', tmpViewContentEl);
    }

    createViewHTML() {
        let thisref = this;
        return `
        <div class="ui container">
                <div class="ui equal width center aligned padded grid stackable">
                    <div class="row">
                        <div class="five wide column">
                            <div class="ui segments">
                                <div class="ui segment inverted nightli">
                                    <h3 class="ui header">
                                        ${thisref.id}
                                    </h3>
                                </div>
                                <div class="ui segment">
                                    <button class="ui primary fluid button ${thisref.back_lnk_id}">
                                        <i class="send icon"></i> Back
                                    </button>
                                    <div class="ui divider hidden"></div>
                                    <button class="ui primary fluid button ${thisref.submit_lnk_id}">
                                        <i class="send icon"></i> Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        <!-- SignIn Panel Ends Here -->
        `
    }

    removeViewHandler() {
        super.removeViewHandler();
        let tmpviewEl = this.getViewElement();
        let backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
        backButt.removeEventListener("click", (e) => { this.dispatchNavBackEvent(e); });
        let submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
        submitButt.removeEventListener("click", (e) => { this.handleSubmit(e); });
    }




}

export default View2;