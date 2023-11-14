import {observable, action} from 'mobx';

export default class BaseStore {
    @observable visibleMenu = false;
    
    @action
    setVisibleMenu:(visible: boolean)=>void = (visible) => {
        this.visibleMenu = visible;
    } 
}