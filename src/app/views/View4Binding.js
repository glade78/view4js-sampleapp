import { EventUtils } from 'view4js';
import { EventBroadCaster } from 'view4js';
import { View } from 'view4js';
import { NavigationEvent } from 'view4js';
import { BindingUtils } from 'view4js';
import MyModel from './MyModel';
class View4Binding extends View {

    constructor(_id, _route, _navparams, _parentViewStackId) {
        super(_id, _route, _navparams, _parentViewStackId);
    }

    initView() {
        super.initView();
        this.back_lnk_id = "back";
        this.submit_lnk_id = "submit";
        this.myCustomModel = new MyModel();
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

        let clicksNodeList = tmpviewEl.querySelectorAll('[data-click]');
        for (let i = 0; i < clicksNodeList.length; i++) {
            let clickNode = clicksNodeList[i];
            this.addClickHandlers(clickNode);
        }

    }

    addClickHandlers(_node) {
        let handFnStr = _node.dataset.click;
        _node.addEventListener("click", (e) => { this[handFnStr](e); });
    }



    bindInputTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#inputtxt_1");
        let destele = tmpviewEl.querySelector("#lbl_1");
        destele.value = this.myCustomModel.getValue();
        BindingUtils.addBinding(srcele, "value", "change", this.myCustomModel, "setValue", false);
        BindingUtils.addBinding(this.myCustomModel, "getValue", "change", destele, "value", false);
    }

    removeBindInputTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#inputtxt_1");
        BindingUtils.removeBinding(srcele, "value");
    }


    bindTwowayInputTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#inputtxt_11");
        let destele = tmpviewEl.querySelector("#lbl_11");
        BindingUtils.addBinding(srcele, "value", "change", destele, "value", true);
    }

    removeBindTwowayInputTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#inputtxt_11");
        let destele = tmpviewEl.querySelector("#lbl_11");
        BindingUtils.removeBinding(srcele, "value");
        BindingUtils.removeBinding(destele, "value");
    }

    bindPasswordTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#pwd_2");
        let destele = tmpviewEl.querySelector("#lbl_2");
        BindingUtils.addBinding(srcele, "value", "change", destele, "value", false);
    }

    removeBindPasswordTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#pwd_2");
        let destele = tmpviewEl.querySelector("#lbl_2");
        BindingUtils.removeBinding(srcele, "value");
    }

    bindCheckBoxTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#chk_3");
        let destele = tmpviewEl.querySelector("#lbl_3");
        BindingUtils.addBinding(srcele, "checked", "change", destele, "value", false);
    }

    removeBindCheckBoxTextBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#chk_3");
        let destele = tmpviewEl.querySelector("#lbl_3");
        BindingUtils.removeBinding(srcele, "value");
    }


    bindSelectionBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#mySelect");
        let destele = tmpviewEl.querySelector("#lbl_4");
        BindingUtils.addBinding(srcele, "value", "change", destele, "value", false);
    }

    removeBindSelectionBox() {
        let tmpviewEl = this.getViewElement();
        let srcele = tmpviewEl.querySelector("#mySelect");
        let destele = tmpviewEl.querySelector("#lbl_4");
        BindingUtils.removeBinding(srcele, "value");
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
        <table class="ui celled table">
        <thead>
            <tr>
                <th></th>
                <th>HTML Controls</th>
                <th>Bindable Object Value</th>


            </tr>
        </thead>
        <tbody>

            <tr>
                <td>Test Input Values</td>
                <td style="width: 477px;">
                    <br>
                     Following element demonstrates chain binding
                     Input Element binds to Model Object binds
                     Model Object binds to Label Element
                    <br>
                    <br>
                    <input id="inputtxt_1" type="text" value="test">
                    <br>
                    <br>
                    Initially clicking BindInputText will show Model value by calling myCustomModel.getValue() , which is set to 10.
                    <br>
                    <br>
                    <input type="button" value="BindInputText" data-click="bindInputTextBox">
                    <br>
                    <input type="button" value="removeBindInputText" data-click="removeBindInputTextBox">
                </td>
                <td>
                    <input type="text" id="lbl_1" value="">
                </td>
            </tr>
            <tr>
                <td>Test Input Values</td>
                <td style="width: 477px;">
                    <br>
                    Following element demonstrate twoway binding
                    Input Element binds to Label Element
                    <br>
                    <br>
                    <input id="inputtxt_11" type="text" value="test">
                    <br>
                    <input type="button" value="Bind Twoway InputText" data-click="bindTwowayInputTextBox">
                    <br>
                    <input type="button" value="removeBind TwoWay InputText" data-click="removeBindTwowayInputTextBox">
                </td>
                <td>
                    <input type="text" id="lbl_11" value="">
                </td>
            </tr>
            <tr>
                <td>Test Password Values</td>
                <td style="width: 477px;">
                    <input id="pwd_2" type="password" value="test">
                    <br>
                    <input type="button" value="BindInputText" data-click="bindPasswordTextBox">

                </td>
                <td>
                    <input type="text" id="lbl_2" value="">
                </td>
            </tr>

            <tr>
                <td>Test CheckBox Values</td>
                <td style="width: 477px;">
                    <input id="chk_3" type="checkbox" value="check">
                    <br>
                    <input type="button" value="BindInputText" data-click="bindCheckBoxTextBox">

                </td>
                <td>
                    <input type="text" id="lbl_3" value="">
                </td>
            </tr>
            <tr>
                <td>Test Selection Values</td>
                <td style="width: 477px;">
                    <select id="mySelect">
                        <option value="Audi">Audi
                        <option value="BMW">BMW
                        <option value="Mercedes">Mercedes
                        <option value="Volvo">Volvo
                    </select>
                    <br>
                    <input type="button" value="BindInputText" data-click="bindSelectionBox">

                </td>
                <td>
                    <input type="text" id="lbl_4" value="">
                </td>
            </tr>


        </tbody>
    </table>
    </div>
    </div>
</div>
</div>
</div>
</div>
        `
    }

    removeViewHandler() {
        super.removeViewHandler();
        let tmpviewEl = this.getViewElement();
        let backButt = tmpviewEl.querySelector("." + this.back_lnk_id);
        backButt.removeEventListener("click", (e) => { this.dispatchNavBackEvent(e); });



    }




}

export default View4Binding;