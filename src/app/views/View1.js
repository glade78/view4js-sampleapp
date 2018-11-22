import { EventUtils } from 'view4js';
import { EventBroadCaster } from 'view4js';
import { View } from 'view4js';
import { NavigationEvent } from 'view4js';

class View1 extends View {

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
        let submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
        // Use this for AutoWiring Events in HTML Tag
        let tmpFn = "handleSubmit";
        submitButt.addEventListener("click", (e) => { this[tmpFn](e); });
        // submitButt.addEventListener("click", (e) => { this.handleSubmit(e); });
    }

    handleSubmit(event) {
        console.log("View1 Submit Clicked");
        event.preventDefault();
        let navEvent = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, "View2_Nav_Event", "testusers", this.route);
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
        <div class="ui content">
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
                                    
                                    <div class="ui divider hidden"></div>
                                    <button class="ui primary fluid button ${thisref.submit_lnk_id}" data-click="handleSubmit">
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
        let submitButt = tmpviewEl.querySelector("." + this.submit_lnk_id);
        submitButt.removeEventListener("click", (e) => { this.handleSubmit(e); });
    }




}

export default View1;