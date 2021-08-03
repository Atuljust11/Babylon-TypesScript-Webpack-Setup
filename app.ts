
export class Hero {

    myName() {
        return this.name;
    }

    id: number;
    name: string;


    // sceneSetup: SceneSetup;
    constructor(name: any) {

        // if(window.console) {
        //     var console = {
        //      log : function(){},
        //      warn : function(){},
        //      error : function(){},
        //      time : function(){},
        //      timeEnd : function(){}
        //     }
        //    }
        // console.log = function() {}
        // window.console.log = function () { };
        // window.console.warn = function () { };
        // window.console.error = function () { };
        // window.console.time = function () { };
        // window.console.timeEnd = function () { };


        this.name = name;
        // this.appManager = new AppManager();

    }



    // Declare with Brackets
    // (<any>window).CustomFunction = () => {
    //     alert("Hello World");
    // };


}

let hero = new Hero('Start');
// console.log(hero.myName());


