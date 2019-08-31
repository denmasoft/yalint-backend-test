/**
 * The final callback(go, line 5) is expected to be called with retVal === true
 */

const myFunc = function(go: (retVal: boolean) => void): void {
    const doSomething = function(done: () => void) {
        done();
    };

    const a = {
        name: "a",
        getName: function() {
            doSomething(
                function() {
                    go(a.name == "a");
                }
            );
            return this.name;
        },
    };
    return a.getName();
};

myFunc(function(name){
    console.log(name);
});
