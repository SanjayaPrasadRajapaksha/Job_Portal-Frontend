const companies = [
  {
    name: 'Dialog Axiata',
    logo: 'https://cdn.freebiesupply.com/logos/large/2x/dialog-axiata-1-logo-png-transparent.png',
  },
  {
    name: 'John Keells Holdings',
    logo: 'https://images.seeklogo.com/logo-png/7/1/john-keells-holdings-logo-png_seeklogo-75832.png',
  },
  {
    name: 'MAS Holdings',
    logo: 'https://images.seeklogo.com/logo-png/30/1/mas-holdings-logo-png_seeklogo-304054.png',
  },
  {
    name: 'Commercial Bank',
    logo: 'https://images.seeklogo.com/logo-png/34/1/commercial-bank-of-ceylon-plc-logo-png_seeklogo-348198.png',
  },
  {
    name: 'Hemas Holdings',
    logo: 'https://cdn.brandfetch.io/idirmmkjxh/w/1079/h/1079/theme/dark/icon.jpeg?c=1bxid64Mup7aczewSAYMX&t=1748908711382',
  },
  {
    name: 'Brandix',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Brandix_Apparel_Limited_Logo.png/960px-Brandix_Apparel_Limited_Logo.png?20200106053952',
  },
  {
    name: 'SriLankan Airlines',
    logo: 'https://images.seeklogo.com/logo-png/13/1/sri-lankan-airlines-logo-png_seeklogo-131159.png',
  },
  {
    name: 'DFCC Bank',
    logo: 'https://www.dfcc.lk/wp-content/themes/dfccbank/assets/images/dfcc-bank-logo.gif',
  },
  {
    name: 'Sampath Bank',
    logo: 'https://www.sampath.lk/_nuxt/img/logo.f40f302.jpg',
  },
  {
    name: 'NDB Bank',
    logo: 'https://www.ndbbank.com/_next/image?url=https%3A%2F%2Fndbbankweb.ndbbank.com%2Fimages%2Fstatic-image%2FNsKcG1728473250.webp&w=828&q=75',
  },
  {
    name: 'Seylan Bank',
    logo: 'https://www.seylan.lk/images/web/icons/logo-2025.png',
  },
  {
    name: 'LOLC Holdings',
    logo: 'https://www.lolc.com/storage/1/1.svg',
  },
  {
    name: 'Softlogic Holdings',
    logo: 'https://www.softlogic.lk/images/220518130506footer_logo.png',
  },
  {
    name: 'Tokyo Cement',
    logo: 'https://tokyocement.com/wp-content/uploads/2020/01/tokyo-cement-logo.png',
  },
  {
    name: 'Lanka IOC',
    logo: 'https://www.lankaioc.com/wp-content/themes/lioc/images/logo.png',
  },
  {
    name: 'Melstacorp',
    logo: 'https://www.melstacorp.com/assets/images/nav/logo.svg',
  },
  {
    name: 'Richard Pieris & Co',
    logo: 'https://media.licdn.com/dms/image/v2/C510BAQGM2Xcr0KUxgQ/company-logo_200_200/company-logo_200_200/0/1631333025667?e=2147483647&v=beta&t=1VMGSP76LQUcqreBRF3qw_azSUfnXN-ATFpEktT4POQ',
  },
  {
    name: 'Lanka Hospitals',
    logo: 'https://www.lankahospitals.com/wp-content/uploads/2024/07/Group-1000002308.png',
  },
  {
    name: 'Union Assurance',
    logo: 'https://unionassurance.com/wp-content/uploads/2018/12/union-assuarance-logo.svg',
  },
  {
    name: 'LB Finance',
    logo: 'https://www.lbfinance.com/assets/images/logo/brand-logo-box.png',
  },
  {
    name: 'HNB Finance',
    logo: 'https://hnbgrameen.wpenginepowered.com/wp-content/uploads/2022/12/hnb-finance-logo-color.svg',
  },
  {
    name: 'Sanasa Development Bank',
    logo: 'https://www.sdb.lk/templates/assets/images/sdb-logo-en.png',
  },
  {
    name: 'Pan Asia Bank',
    logo: 'https://www.pabcbank.com/wp-content/themes/pabc/assets/img/logo.png',
  },
  {
    name: 'Nations Trust Bank',
    logo: 'https://www.nationstrust.com/images/ntb_logo.png',
  },
  {
    name: 'Union Bank',
    logo: 'https://www.unionb.com/wp-content/themes/wizors-investments-dup/assets/img/e-ub-logo.png',
  },
  {
    name: 'CIC Holdings',
    logo: 'data:image/webp;base64,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',
  },
  {
    name: 'ACL Cables',
    logo: 'https://www.acl.lk/assets/frontend/images/main_logo.png',
  },
  {
    name: 'Lanka Tiles',
    logo: 'https://www.lankatiles.com/wp-content/uploads/2022/06/lanka-tiles-logo.svg',
  },
  {
    name: 'Kelani Cables',
    logo: 'https://kelanicables.com/assets/frontend/images/logo_2.svg',
  },
  {
    name: 'Dipped Products PLC',
    logo: 'https://www.dplgroup.com/wp-content/uploads/2022/05/dpl-logo.png',
  },
  {
    name: 'Royal Ceramics',
    logo: 'https://rocell.com/images/logo.jpg',
  },
  {
    name: 'Sunshine Holdings',
    logo: 'https://www.sunshineholdings.lk/templates/assets/images/logo.png',
  },
  {
    name: 'Laugfs Gas',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAABX1BMVEX/ywj/zQD/0AD/0gD/1QDXsSsAbD/VtDrWsS4AKIERXKQAFWYbKmfzxxHYvixnoURop1r4yQjnwRAAhFKNoT08ezh8n0mOokeQjyVwoERalFPNrlPIsBIbj1d0oj5adJOvsTAAhl2XsSw1YaR+nprDtCkPX7IAnN/Ww1xUoUG1n2ESabMeq+JCtduIojQAlEs6eLFJhKwjmtW8s2sAf0e3qm8/fKwkfr8kh8ZHj7oqdDsAhkYlk0LzzC2Nn4YcdLadoh2brph/kYkdaaY7ib6fmG2mniXQuANbka+Xpn8TO5l1d361sh5NfXOQsZkWIY9hYnwxhT9/i5CGkWZspa4IOop6d3CCnFQARpOlrU5oih8lYCZhcAmlpltqlMJwmKqLi3nAoDQAAG9KS2QYRIMAT69HbZZbbX0AIWWRfUwyTHo8Vnq3pFMbOGqxlz53bVRXUFyeh0Y1PWCMgWFeXVucI4/lAAAC8klEQVRIie1V61PTQBDv7iVNuCRg6tuCVYoRicpD8YUVoUSB+kSj55uzBw2kCX39/+M1BfWDH5rMOI4z/D7s3CX329373e1eLneM/wKQkWeNZmTC2Ak7G7Nw8lS2mHj6zNlMTDx3/kIxCxPGJy6W7AxMuHR5sjyF6Yn2xMkrztXp1CHx2sTYjHv9RmrezdmJwtz8wtVb6ULC+O3ZycU783fv3U9HxAdLDyvOI+ouu3oaJoznlx6vrM5XtTXHS0V8ks8/Xd+oamRqs0ZSEp+trD4n8OLlq1TEK/n8a7L1BvGt/y4Vcfp9Pn96XCtMz7GZVLLC2w8fP336/OWrz9LQJCoL6482vi0zpqa9c7Cx5rrVbSt9eQDaFmK2JpC10Q3hGeDXaICjj4eT33/9XJyzdX1wkyGna4ewQJoKoFpsFlXZBtBW5SpVVXXOuTXoC8C/G/X+9QBV+Iz5mzvM2amAI01l19lhjDWAeMIfkTCDwDACgydxcC8w9/o+yL4IhfD0JqVVojtulcxRWgRKN9WiL0Ku67EZ1UlsGAdJSNIyg74LjH3WZMJTZiitkUXH3bKcMgXL8zyrJkQMNugjkdkucD64FcQwjf45oxCvRpnoKtuUemTVdb2iQ0vFnTIVTOwLmSsn7SAyO1wZKKIaZiS3iG1fxBoTNWWXOhrZdR2t72GxWqaNGbG/32y2bVTsPTMyuknBYByYBwohMqDwfSFKyGSC4LgO7sotKjVKm1xIf0g0M+op0pjKkTZRr9erC7/L20yUCZOBGo6zrUhttrqUstGu1Ayl/CNRJ+6ZRjvRBgqt+gChTfQwDEFrVGm51EQoztHqdqMUYi0MtUS+VifqHGiHpQ3kCMlYeiYycyIXSoOoECWHyVQyCR4N/wjSNftnTFox5KAX7A37gEDcUwpWDrTOOwI8wqGbDulphSBGEsUByFMKtGHLC9t1ra6RuNWOdOS8xYeuS4y7sUxYiqyj3uUp3sikZSQ1KTvI3+sDx/j3+AELsIea6T7D5gAAAABJRU5ErkJggg==',
  },
  {
    name: 'Ceylon Tobacco Company',
    logo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAMAAACfWMssAAAAe1BMVEX////a3uUAGmIACl7i5egAFGEAJ2bz9PXW2uCvtsMAAFz8/Pzq7O7FytEADV/3+Pi/xNAAJmgAIWYAAFR9iKHO0tgAAFiJk6kAGGMGLmrLzNaUnq11g5tbbIxBVn4WNmxTY4hoc5M5TnorRHYjPnJxfZkwSHafqLmjrLhAyg3HAAAB00lEQVRIie2U0XKrIBCGFwRBBUEjamqiiW2i7/+ERcG0SZqOOdO7k48ZWV1+d9llAHjx4sWfIPibhaunREo2u33bxZsYfxQrpQkjRmppSALA5D7N6GFNenrYHQ99WJZxivvCAGgahmvC+Zm9Ve9pjoNWwEC7dale0B84zEOm4tOTQoAjDnEBMXpaCH2W9axwtkAeBQR9Z96eQtxBXLY037PZwVscODYIznHwxcYuVUWYBulE6cIgGkv3hzineCLPAgS9sx0lAXWmtfuU1U4oy6NLk+adJhOm6wiI2RRusv3eY1qh+dOhq1x1Wre/qs6E33aydCypKl81ktJhqYrz6oNf1eHirnAsL7WzonSbXLl4s1hZPcAtapt6YUPPVx7BL+YZH+8jXoQ6zdid2zFSKh9HFBg/OlxJl9dF5GG3EaEK6nbwXnOtJJ3tlKNES8RgEcKpxN4b31ZRNf02nEnRXcSp/t6Lqx/y9Xy9/+R+sNl/hRMj7FEDaZ8gJJNKAgE7Myl+FUaqUZGIhNRjA4m9mOSOnIwkduhfhUQgoQAxrpRtCksMcGYvt8SONVehmnJjgtt0iSBP3A9SSK6rZjSVGRsxrhcCg+n0JFND/rr8L178L3wCXxQba15BzSUAAAAASUVORK5CYII=',
  },
  {
    name: 'Finlays Colombo',
    logo: 'https://www.finlays.net/wp-content/uploads/2025/04/NEW-Finlays-logo-RGB.png',
  },
  {
    name: 'HNB Assurance',
    logo: 'https://www.hnbassurance.com/frontend/images/hnblogo.jpg',
  },
  {
    name: 'Janashakthi Insurance',
    logo: 'https://www.janashakthi.com/img/logo.png',
  },
  {
    name: 'Ceylon Petroleum Corporation',
    logo: 'https://ceypetco.gov.lk/wp-content/uploads/2024/02/Ceylon_Petroleum_Corporation_logo.png',
  },
  {
    name: 'Mobitel',
    logo: 'https://commons.wikimedia.org/static/images/mobile/copyright/commonswiki-wordmark.svg',
  }, 
  {
    name: 'Watawala Plantations',
    logo: 'https://watawalaplantations.lk/wp-content/uploads/2022/06/WatawalaLogo.png',
  },
];

export default function Company() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {companies.map((company) => (
          <div
            key={company.name}
            className="flex flex-col items-center bg-gray-100 rounded-xl shadow p-4 hover:shadow-lg transition"
          >
            <img
              src={company.logo}
              alt={''}
              className="w-20 h-20 object-contain mb-3 rounded"
              loading="lazy"
              style={{ background: '#f8fafc' }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
