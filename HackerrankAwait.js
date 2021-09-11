let path = require('path');
let puppeteer = require('puppeteer');
let answer = require('./answer');
let browserStartPromise = puppeteer.launch({
    headless: false,
    defaultViewport: null,
    args: ["--start-maximized", "--disable-notifications"]
});
// let page, hcResult;
(async function fn(){
        let browserObj= await browserStartPromise;
        let page =   await browserObj.newPage();
        await page.goto("https://www.google.com");
        await page.type("input[title='Search']", "hackerrank");
        await page.keyboard.press('Enter', { delay: 100 });
        await waitAndClick(".LC20lb.DKV0Md", page);
        await waitAndClick(".fl-module.fl-module-button.fl-node-5d7c1d1ca23ba.hr__builder-button.hr__builder-button--secondary.hr__builder-button--lg", page);
        await waitAndClick("#tab-1-item-1", page);
        await waitAndClick("input[id='input-1']", page);
        await page.type("input[id='input-1']", "lochlyn.keinan@zooape.net", { delay: 50 });
        await page.type("input[id='input-2']", "tempo@2021");
        await page.click(".ui-btn.ui-btn-large.ui-btn-primary.auth-button.ui-btn-styled");
        await waitAndClick("div[data-automation='algorithms']", page);
        await waitAndClick("input[value='warmup']", page);
        await solveQuestion(page,"a[data-attr1='simple-array-sum']", answer.answers);
})();
    


function waitAndClick(selector, page) {
    return new Promise(function (resolve, reject) {
        let waitPepPromise = page.waitForSelector(selector, { visible: true });
        waitPepPromise.then(function () {
            let pepResultPromise = page.click(selector);
            return pepResultPromise;
        }).then(function () {
            resolve();
        }).catch(function (err) {
            reject(err);
        })
    })
}

//function to solve any question 
function solveQuestion(page, question, ans) {
    return new Promise(function (resolve, reject) {
        let problemOpenPromise = waitAndClick(question, page);
        problemOpenPromise.then(function () {
            let editorClickPromise = waitAndClick(".lines-content.monaco-editor-background", page);
            return editorClickPromise;
        }).then(function () {
            let ctrlDownPromise = page.keyboard.down('Control');
            return ctrlDownPromise;
        }).then(function () {
            let pressAPromise = page.keyboard.press('A', { delay: 50 });
            return pressAPromise;
        }).then(function () {
            let pressXPromise = page.keyboard.press('X', { delay: 50 });
            return pressXPromise;
        }).then(function () {
            let ctrlUpPromise = page.keyboard.up('Control');
            return ctrlUpPromise;
        }).then(function () {
            let typeCodePromise = page.keyboard.type(ans, { delay: 100 });
            console.log("code typed successfully using automation");
            return typeCodePromise;
        }).then(function(){
            let clickSubmitPromise=page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
            return clickSubmitPromise;
        }).then(function () {
            resolve()
        }).catch(function (err) {
            console.log(err);
            reject();
        })
    }
        
    )
}

//select textarea->type code->ctrl+A->ctrl+x->editor->ctrl+A->ctrl+V

function solveQuestion2(page, question, ans) {
        return new Promise(function (resolve, reject) {
            let problemOpenPromise = waitAndClick(question,page);
            problemOpenPromise.then(function(){
                let waitFor3sPromise=page.waitFor(3000);
                return waitFor3sPromise;
            }).then(function () {
                let checkClickPromise = waitAndClick("input[class='checkbox-input']",page);
                return checkClickPromise;
            }).then(function(){
                let textWaitPromise=waitAndClick("textarea[class='input text-area custominput auto-width']",page);
                return textWaitPromise;
            }).then(function () {
                let typeCodePromise = page.keyboard.type(ans, { delay: 100 });
                return typeCodePromise;
            }).then(function () {
                let ctrlDownPromise = page.keyboard.down('Control');
                return ctrlDownPromise;
            }).then(function () {
                let pressAPromise = page.keyboard.press('A', { delay: 50 });
                return pressAPromise;
            }).then(function () {
                let pressXPromise = page.keyboard.press('X', { delay: 50 });
                return pressXPromise;
            }).then(function () {
                let ctrlUpPromise = page.keyboard.up('Control');
                return ctrlUpPromise;
            }).then(function () {
                let editorClickPromise = waitAndClick(".lines-content.monaco-editor-background",page);
               return editorClickPromise;
           }).then(function () {
            let ctrlDownPromise = page.keyboard.down('Control');
            return ctrlDownPromise;
        }).then(function () {
            let pressAPromise = page.keyboard.press('A', { delay: 50 });
            return pressAPromise;
        }).then(function () {
            let pressXPromise = page.keyboard.press('V', { delay: 50 });
            return pressXPromise;
        }).then(function () {
            let ctrlUpPromise = page.keyboard.up('Control');
            return ctrlUpPromise;
        }).then(function(){
                let clickSubmitPromise=page.click(".ui-btn.ui-btn-normal.ui-btn-primary.pull-right.hr-monaco-submit.ui-btn-styled");
                return clickSubmitPromise;
            }).then(function () {
                resolve()
            }).catch(function (err) {
                console.log(err);
                reject();
            })
        }
            
        )
    }
