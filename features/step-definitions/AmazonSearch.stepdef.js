import {Given, Then, When} from "@wdio/cucumber-framework";

Given(/^I'm in the Amazon Search page$/,function () {
    browser.url("https://www.amazon.in/")
})
When(/^ Search for Iphone X $/,function (){
    browser.$("#twotabsearchtextbox").click()
    browser.$("#twotabsearchtextbox").setValue('Iphone X')
    browser.$("#nav-search-submit-button").click()
})
Then(/^ Print URL$/,function (){

    const strUrl = browser.getUrl()
    console.log("URL is : - "+ strUrl)

    browser.pause(10000)
})
