'use strict'
const  JsonToExcel = require("../excel");
// async function getLinks(page , Selector) {
//     let result = await page.$$eval(
//         Selector ,
//         (links => links.map(link => {
//             const alinks = link.getAttribute('href');
//             const text = link.innerText;
//             return {
//                 name : text ,
//                 href : alinks
//             }
//         }))
//     );

//     return result ;
// }
// async function ScrapeProducts(page) {
//     let MerchantList = await page.$$eval(
//         '.merchant-list .voucher',
//         (links => links.map(link => {
//             const alinks = link.querySelector('a').getAttribute('href');
//             return alinks ;
//         }))
//     );
//     for(const link of MerchantList) {
//        await page.goto(link);
//        await getLinks(page , '.merchant-navigation a')
//     }
// }


module.exports = async function magicPinScrapper(page) {
    await page.waitForTimeout(3000);
    let FieldArr = [];
    // let HeaderLinks = await page.$$eval(
    //     '.header-categories a',
    //     (links => links.map(link => {
    //         const alinks = link.getAttribute('href');
    //         const text = link.innerText;
    //         return {
    //             name : text ,
    //             href : alinks
    //         }
    //     }))
    // );
    // let HeaderLinks = await getLinks(page , '.header-categories a')

    // for(const {name , href} of HeaderLinks ) {
    //     if(name === 'DINE-OUT') {
    //        await page.goto(href);
    //        let SelectBtn = await page.$$(
    //         '.locationConfirmationPopup button'
    //         );
    //         if(SelectBtn.length > 0) {
    //             await SelectBtn[1].click();
    //         }
    //         await page.evaluate(
    //             'document.querySelector(".collections-container a").click()'
    //         )
    //         await page.waitForTimeout(1000);
    //         await ScrapeProducts(page);
    //     }
    // }
   
    // for (let i = 0; i < Header.length; i++) {
    //     let ele = Header[i]
    //     let Text = await page.evaluate(ele => ele.innerText , ele);
    //     if (Text === 'DINE-OUT') {
    //         await Header[i].click();
    //     }
    // }
    await page.goto('https://magicpin.in/New-Delhi/Uttam-Nagar/Restaurant/Aaradhya-Food-Home-Delivery/store/5a5b52/');
    let data = await page.evaluate(()=> {
        let FieldObj = {};
        FieldObj["Name"] = document.querySelector(".merchant-name a").textContent;
        FieldObj["Phone"] = document.querySelector(".merchant-call span").textContent;
        // document.querySelector(".merchant-address a").click();
        // FieldObj["longitude"] = document.querySelector(".tAiQdd span").textContent;
        return FieldObj;
    })
    // await page.goBack();
    await page.waitForTimeout(2000);
    await page.evaluate('document.querySelector(".order-cta").click()');
    await page.waitForTimeout(2000);
    let result = await page.$$eval(
          '.categoryItemHolder',
        (Products => Products.map(product => {
            // const imglink = product.querySelectorAll('.itemImage')[0].getAttribute('src');
            const productName = product.querySelectorAll('.itemInfo p')[0].textContent;
            const productprice = product.querySelectorAll('.itemInfo p')[1].textContent;
            return {
                Productname : productName ,
                Productprice : productprice 
                // href : imglink
            }
        }))
    );
    result.push(data)
    JsonToExcel(result);
}




// header-categories

