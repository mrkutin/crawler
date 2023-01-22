// puppeteer-extra is a drop-in replacement for puppeteer,
// it augments the installed puppeteer with plugin functionality
const { executablePath } = require('puppeteer')
const puppeteer = require('puppeteer-extra')

// const SessionPlugin = require('puppeteer-extra-plugin-session').default()
// puppeteer.use(SessionPlugin())

const SessionPlugin = require('puppeteer-extra-plugin-session')
puppeteer.use(SessionPlugin.default())

// add stealth plugin and use defaults (all evasion techniques)
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const { scrollPageToBottom, scrollPageToTop } = require('puppeteer-autoscroll-down')

// puppeteer usage as normal
puppeteer.launch({
    headless: false,
    executablePath: executablePath(),
    defaultViewport: {
        width: 1920,
        height: 1080
    },
    //args: [ '--proxy-server=http://80.244.229.102:10000' ]
}).then(async browser => {
    console.log('Running tests..')
    const page = await browser.newPage()
    // const pages = await browser.pages()
    // const page = pages[0]


    await page.goto('https://dkbm-web.autoins.ru/dkbm-web-1.0/policyInfo.htm')
    await page.waitForSelector('#tsBlockTab')
    await page.click('#tsBlockTab')

    await page.focus('#vin')
    // await page.focus('#licensePlate')
    await page.keyboard.type('Jthbk262402022481')

    await page.click('#buttonFind')
    await page.waitForNavigation({waitUntil: 'networkidle2'})

    console.log()

    // const sessionData = await page.session.dump()
    // const parsedCookie = JSON.parse(sessionData.cookie)
    // const parsedLocalStorage = JSON.parse(sessionData.localStorage)
    // const parsedSessionStorage = JSON.parse(sessionData.sessionStorage)
    // const parsedIndexedDB = JSON.parse(sessionData.indexedDB)

    // console.log('session data: ', sessionData)

    // const lastPosition = await scrollPageToBottom(page, {
    //     size: Math.floor(Math.random() * 500) + 100,
    //     delay: Math.floor(Math.random() * 250) + 50
    // })
    //
    // const firstPosition = await scrollPageToTop(page, {
    //     size: Math.floor(Math.random() * 500) + 100,
    //     delay: Math.floor(Math.random() * 250) + 50
    // })

    // console.log(JSON.stringify({lastPosition, firstPosition}, null, 2))

    // const delay = Math.floor(Math.random() * 5000) + 1000
    // console.log('delay: ', delay)
    // await page.waitForTimeout(delay)

    // await page.screenshot({ path: 'testresult.png', fullPage: true })
    // await browser.close()
    // console.log(`All done, check the screenshot. ✨`)
})