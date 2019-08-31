/**
 * Exercise 4
 *
 * Please open https://google.com in a headless browser. Once done enter "javascript" into the search field and go to the results page.
 * Follow the first non-ad result and save a screenshot of the page.
 *
 */
import googlePageScreenShot from './googlePageScreenShot';
export default class Exercise4 {
    constructor() {
        this.run();
    }

    public run(): void {
        googlePageScreenShot('javascript');
    }
}
