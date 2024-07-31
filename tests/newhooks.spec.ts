import { expect, test as base } from '@playwright/test';
import { describe } from 'node:test';

// https://www.youtube.com/watch?v=1wd5fJVD5jE

let x: number;

type newFixture = 
{
    fixOne: any;
    fixTwo: any;
}

const test = base.extend<newFixture>({
    fixOne: async ({}, use) => 
    {
        const fixOne = undefined;
        x = 1;
        await use(fixOne);
    },
    fixTwo: async ({}, use) =>
    {
        const fixTwo = undefined;
        x = 2;
        await use(fixTwo);
    },
});


test.describe('Current', () => {

        test('basic one', async ({ fixOne }) => {
            expect(x).toBe(1);
        });

        test('Two', async ({ fixTwo }) => {
            expect(x).toBe(2);
        });

});