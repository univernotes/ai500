import { test, expect } from '@playwright/test';

test.describe('AgroScore AI landing', () => {
  test('loads key sections and nav links', async ({ page }) => {
    await page.goto('/');

    await expect(page.getByRole('banner')).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Как будет работать наша система' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Проблема' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Реализация и Технологии' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Дорожная карта' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Команда' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Наши контакты' })).toBeVisible();

    const navLinks = ['Проблема', 'Демо', 'Технологии', 'Команда', 'Roadmap'];
    for (const name of navLinks) {
      await expect(page.getByRole('link', { name })).toBeVisible();
    }
  });

  test('demo cards are present and equalized', async ({ page }) => {
    await page.goto('/#demo');

    const cards = page.locator('#demo').locator('div').filter({ has: page.getByText('Параметры заемщика') });
    const resultCard = page.locator('#demo').locator('div').filter({ has: page.getByText('Результат оценки') });

    await expect(cards.first()).toBeVisible();
    await expect(resultCard.first()).toBeVisible();

    // Check height difference is within a small tolerance to ensure visual alignment
    const inputBox = cards.first();
    const resultBox = resultCard.first();
    const [inputHeight, resultHeight] = await Promise.all([
      inputBox.boundingBox().then((box) => box?.height ?? 0),
      resultBox.boundingBox().then((box) => box?.height ?? 0),
    ]);
    expect(Math.abs(inputHeight - resultHeight)).toBeLessThanOrEqual(32);
  });
});
