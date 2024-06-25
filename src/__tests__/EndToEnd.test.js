import puppeteer from 'puppeteer';

describe('show/hide an event details', () => {

    let browser;
    let page;
    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
        await page.goto('http://localhost:3000/');
        await page.waitForSelector('.event');
    });

    afterAll(async () => {
        await browser.close();
    });

    // Scenario 1
    test('An event element is collapsed by default', async () => {
        const eventDetails = await page.$('.event .details');
        const isVisible = await eventDetails?.isIntersectingViewport();
        expect(isVisible).toBe(false);
    });

    // Scenario 2
    test('User can expand an event to see its details', async () => {
        await page.click('.event .details-btn');
        await page.waitForSelector('.event .details', { visible: true });
        const eventDetails = await page.$('.event .details');
        const isVisible = await eventDetails.isIntersectingViewport();
        expect(isVisible).toBe(true);
    });

    // Scenario 3
    test('User can collapse an event to hide details', async () => {
        await page.click('.event .details-btn'); // Expand
        await page.waitForSelector('.event .details', { visible: true });
        await page.click('.event .details-btn'); // Collapse
        await page.waitForSelector('.event .details', { hidden: true });
        const eventDetails = await page.$('.event .details');
        const isVisible = await eventDetails?.isIntersectingViewport();
        expect(isVisible).toBe(false);
    });
});
