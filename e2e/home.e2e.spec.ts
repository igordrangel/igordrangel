import { expect, test } from '@playwright/test';

test('home page loads', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Igor D\. Rangel/);
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
});

test('navigates to projects page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Meus Projetos' }).click();

  await expect(page).toHaveURL(/\/projetos$/);
});
