import { CookieGetter } from '../cookie-getter';


it('should parseOptions the checked property', () => {
  const cookie = new CookieGetter();
    const testObj =[ {title: "Conservation des données techniques", 
description: "Lorem Ipsum is simply dummy text of the printing a…pe and scrambled it to make a type specimen book.",
 isActivated: true}]
  expect(cookie.parseOptions(testObj)).toEqualAttributes([{title: "Conservation des données techniques",
 description: "Lorem Ipsum is simply dummy text of the printing a…pe and scrambled it to make a type specimen book.",
 isActivated: true}])
});