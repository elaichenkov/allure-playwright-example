import { test, expect } from '@playwright/test';

const searchField = '[name="q"]';

test.describe('GitHub - Search Result', () => {

  test.beforeEach(async ({ page }) => {
    await page.goto('https://github.com/');
  });

  test('should verify search result with valid repository name', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright';
    const expectedLink = 'microsoft/playwright';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });
  
  test.skip('should verify search result with valid repository name 2', async ({ page }) => {
    // Selectors
    const firstSearchResultLink = '.repo-list li a';

    // Test data
    const keyword = 'playwright2';
    const expectedLink = 'microsoft/playwright2';

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect.skip(await page.textContent(firstSearchResultLink)).toBe(expectedLink);
  });

  test('should verify "We couldn’t find any repositories" message, after entering invalid keyword', async ({ page }) => {
    // Selectors
    const notFoundMessage = '.blankslate';

    // Test data
    const keyword = 'qzzsa';
    const expectedMessage = "We couldn’t find any repositories matching 'qzzsa' You could try an advanced search.";

    await page.fill(searchField, keyword);
    await page.press(searchField, 'Enter');

    expect(await page.textContent(notFoundMessage)).toBe(expectedMessage);
  });
});
