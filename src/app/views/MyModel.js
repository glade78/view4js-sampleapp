import { EventDispatcher } from 'view4js';

class MyModel extends EventDispatcher {
    constructor() {
        super();
        this.value = 10;
    }

    setValue(_val = 0) {
        this.value = _val;
        this.dispatchEvent("change", this);
    }

    getValue() {
        return this.value;
    }
}

export default MyModel;