import { expect, test } from '@playwright/test';
import { getDom } from '../utils'

test.describe('Scrollbar', () => {


  test('scrollbar should be initialized', async({ page }) => {

    await page.goto('/');

    const html = await page.content();
    
    
    const dom = getDom(html)
    
    dom.querySelector('#scrollToSection5').classList.add('active')
    
    console.log(html)
    page.waitForTimeout(10000)

    expect(dom.querySelector('#scrollToSection5').getAttribute('type')).toEqual('button')
  })
  


})
