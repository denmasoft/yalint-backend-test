/**
 * The final callback(cb, line 5) is expected to be called with retVal === true
 */

const testFunc = async function(cb: (retVal: boolean) => void) {
    var result = 0;
    const parseContent = function() {
        result += 2;
        
        cb(result == 3);
    };

    /*
     Modify below here
     */
    const getWebsiteContent = async function() {

        return new Promise(function(resolve) {
            setTimeout(function() {
                resolve(result += 1);
            }, 300);
        });
    };
    await getWebsiteContent();
    parseContent();
};
