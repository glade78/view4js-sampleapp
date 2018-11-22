import { EventUtils } from 'view5js';
import { EventBroadCaster } from 'view5js';
import { View } from 'view5js';
import { NavigationEvent } from 'view5js';

class LoginView extends View {

    constructor(_id) {
        super();

        //this.id = _id;

        this.initView();
    }

    initView() {
        super.initView();
        this.id = "loginview";
        this.login_butt_id = ".login_butt";
        this.forgotpwd_lnk_id = ".forgotpwd_lnk";
        this.register_lnk_id = ".register_lnk";
    }


    //Overrides by SubClass
    renderHTMLView() {
        super.renderHTMLView();
    }

    //Overrides by SubClass
    bindView() {
        super.bindView();
    }

    //Overrides by SubClass
    addEventHandler() {
        super.addEventHandler();
    }




    /*
    Add HTML Element Event Handlers 
    */
    addHTMLEventHandler() {
        // $(this.login_butt_id).on("click", (e) => { this.doLogin(e); });
        $(this.forgotpwd_lnk_id).on("click", (e) => { this.handleForgotPwd(e); });
        $(this.register_lnk_id).on("click", (e) => { this.handleRegister(e); });

    }

    handleForgotPwd(event) {
        event.preventDefault();
        let navEvent = new NavigationEvent(EventUtils.NAV_CHANGE_EVENT, EventUtils.FORGOTPWD_NAV_EVENT, "testusers", "/login");


        //this.dispatchEvent(EventUtils.FORGOTPWD_NAV_EVENT, this);
        EventBroadCaster.navEventChannel.dispatchEvent(navEvent);
    }

    handleRegister(event) {
        event.preventDefault();
        this.dispatchEvent(EventUtils.REGISTER_NAV_EVENT, this);
    }

    doLogin() {
        // event.preventDefault();
        $(this.login_butt_id).addClass('disabled');
    }

    createViewHtml() {
        let thisref = this;
        return `<div class="pjs-view loginview">
        <!-- SignIn Panel Start -->
        <div class="ui container">
            <div class="ui equal width center aligned padded grid stackable">
                <div class="row">
                    <div class="five wide column">
                        <div class="ui segments" style="border: 0px">
                            <h2 class="ui olive header">DealOffer</h2>
    
                            <div class="ui horizontal divider colwhite">
    
                                Login
    
                            </div>
                            <div class="ui segment" style="background: transparent; border: none">
                                <div class="description" style="color: #ffffff">
                                    Enter your email and password.
                                </div>
                                <div class="ui divider"></div>
                                <div class="ui input fluid">
                                    <input type="email" class="pjs-el login_email" placeholder="Your Email...">
                                </div>
                                <div class="ui divider hidden"></div>
                                <div class="ui input fluid">
                                    <input type="password" class="pjs-el login_pass" placeholder="Your Password...">
                                </div>
                                <div class="ui divider hidden"></div>
                                <div class="ui divider hidden"></div>
                                <button class="ui primary fluid button pjs-el login_butt" onclick="${thisref.doLogin()}">
                                    <i class="cart icon"></i> Login
                                </button>
                                <div class="ui divider hidden"></div>
                                <a href="#" class="ui pjs-el forgotpwd_lnk">Forgot Password</a>
                                <div class="ui hidden divider"></div>
                                Do not have an account? <a href="#" class="ui pjs-el register_lnk">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- SignIn Panel Ends Here -->
        </div>`
    }

    createHTML(data) {
        return `
        <article class="pokemon">
            <h3>${data.name}</h3>
            <p>The Pokemon ${data.name} has a base experience of ${data.base_experience}, they also weigh ${data.weight}</p>
            <br>
            Following element demonstrates chain binding
            Input Element binds to Model Object binds
            Model Object binds to Label Element
           <br>
           <br>
           <input id="inputtxt_1" data-id="inputtxt_11" type="text" value="test">
           <br>
           <br>
           Initially clicking BindInputText will show Model value by calling myCustomModel.getValue() , which is set to 10.
           <br>
           <input type="text" id="lbl_1" value="">
           <br>
           <input type="button" id="bindIText" value="BindInputText">
           <br>
           <input type="button" id="removebindIText" value="removeBindInputText">
        </article>
        
        `;

    }

    getHTMLElement() {
        let eleData = {};
        eleData.name = "TestName";
        eleData.base_experience = "3 years";
        eleData.weight = "pound";
        let tmpElement = this.createHTML(eleData);
        // let tmldoc = document.createElement(tmpElement);
        return tmpElement;
    }

}

export default LoginView;