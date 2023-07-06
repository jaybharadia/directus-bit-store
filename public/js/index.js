console.log('script loaded ****', window );




setTimeout( () => {
    console.log('Query', document.querySelector('#main-content .header-bar .title-container'));

    const header = document.querySelector('#main-content .header-bar .title-container');
    const banner = document.createElement('div');

    banner.innerHTML = "<h2>Welcome JAY 🎉 </h2>";

    header.appendChild(banner);





} , 10000 );




