window.onload = function () {
    var shop = document.querySelector('.shop');
    var shopping = document.querySelector('.shopping');
    var shoppingP = document.createElement('p');
    var form = document.querySelector('.form');
    var Input = document.querySelector('.Input');
    var option = document.querySelector('.option')
    var mi8 = document.querySelector('.mi8');
    var Submit = document.querySelector('.Sumbit');
    var search = document.querySelector('.search');
    var formA = document.querySelectorAll('.mi8 a');
    var searchI = document.querySelector('.search i');
    var RoundSowing = document.querySelectorAll('.Round-sowing li');
    var sButton = document.querySelectorAll('.s-button a');
    var left = document.querySelector('.left');
    var right = document.querySelector('.right');
    var navFixA = document.querySelectorAll('.nav-fix a');
    var navFixImg = document.querySelectorAll('.nav-fix a img');
    var Select1 = document.querySelector('.select1');
    var Select1ul = document.querySelectorAll('.select1 ul');
    var Fnav = document.querySelectorAll('.fnav li');
    var Fnavlen = Fnav.length;
    var Select1Line1 = document.querySelector('.line1');
    var Select1Line2 = document.querySelector('.line2');
    var Select1Line3 = document.querySelector('.line3');
    var Select1Line4 = document.querySelector('.line4');
    var Select1Line5 = document.querySelector('.line5');
    var navAsideli = document.querySelectorAll('.nav-aside li');
    var navAsidelilen = navAsideli.length;
    var navAsideCon = document.querySelectorAll('.nav-aside-content ul');
    var threeLeft = document.querySelector('.three-control-left');
    var threeRight = document.querySelector('.three-control-right');
    var threeGoods = document.querySelector('.three-goods');
    var timeButtomspan = document.querySelectorAll('.time-bottom span');
    var phoneTexta = document.querySelector('.section-main .phone .phone-text a');
    var phoneTexti = document.querySelector('.section-main .phone .phone-text a i');
    var homeAppliancesSli = document.querySelectorAll('.homeAppliances-nav li');
    var capacitySli = document.querySelectorAll('.capacity-nav li');
    var matchSli = document.querySelectorAll('.match-nav li');
    var partsSli = document.querySelectorAll('.parts-nav li');
    var rimSli = document.querySelectorAll('.rim-nav li');
    var evaluate = document.querySelectorAll('.homeAppliances-allul .evaluate')
    var evaluate2 = document.querySelectorAll('.capacity-allul .evaluate')
    var evaluate3 = document.querySelectorAll('.match-allul .evaluate')
    var evaluate4 = document.querySelectorAll('.parts-allul .evaluate')
    var evaluate5 = document.querySelectorAll('.rim-allul .evaluate')
    var homeAppliancesSliA = document.querySelectorAll('.homeAppliances-nav li a')
    var capacitySliA = document.querySelectorAll('.capacity-nav li a')
    var matchSliA = document.querySelectorAll('.match-nav li a')
    var partsSliA = document.querySelectorAll('.parts-nav li a')
    var rimSliA = document.querySelectorAll('.rim-nav li a')
    var homeSlilen = homeAppliancesSli.length;
    var capacitylen = capacitySli.length;
    var matchlen = matchSli.length;
    var partslen = partsSli.length;
    var rimlen = rimSli.length;
    var homeAppliancesAllul = document.querySelectorAll('.homeAppliances-allul ul');
    var capacityAllul = document.querySelectorAll('.capacity-allul ul');
    var matchAllul = document.querySelectorAll('.match-allul ul');
    var partsAllul = document.querySelectorAll('.parts-allul ul');
    var rimAllul = document.querySelectorAll('.rim-allul ul');
    var homeAppliancesAllulLI = document.querySelectorAll('.homeAppliances-allul .sallul li');
    var capacityAllulLI = document.querySelectorAll('.capacity-allul .sallul li');
    var matchAllulLI = document.querySelectorAll('.match-allul .sallul li');
    var partsAllulLI = document.querySelectorAll('.parts-allul .sallul li');
    var rimAllulLI = document.querySelectorAll('.rim-allul .sallul li');
    var homeAppliancesAllulLIlen = homeAppliancesAllulLI.length;
    var capacityAllulLIlen = capacityAllulLI.length;
    var matchAllulLIlen = matchAllulLI.length;
    var partsAllulLIlen = partsAllulLI.length;
    var rimAllulLIlen = rimAllulLI.length;
    var index = 0;
    var timer = null;
    var i = 0;
    var j = 0;
    var l = 0;
    var d = 0;
    var b = 0;
    var z = 0;
    var q = 0;
    var o = 0;
    var oo = 0;
    var ooo= 0;
    var p = 0;
    var pp = 0;

    var len = sButton.length;
    var reControlLeft = document.querySelector('.re-control-left');
    var reControlRight = document.querySelector('.re-control-right');
    var reBoxContent = document.querySelector('.re-box-content');
    var bookLeftButton = document.querySelector('.book-left-button');
    var itemLeftButton = document.querySelector('.item-left-button');
    var playLeftButton = document.querySelector('.play-left-button');
    var appLeftButton = document.querySelector('.app-left-button');
    var bookRightButton = document.querySelector('.book-right-button');
    var itemRightButton = document.querySelector('.item-right-button');
    var playRightButton = document.querySelector('.play-right-button');
    var appRightButton = document.querySelector('.app-right-button');
    var bookBox = document.querySelector('.book-box .book-list');
    var itemBox = document.querySelector('.item-box .item-list');
    var playBox = document.querySelector('.play-box .play-list');
    var appBox = document.querySelector('.app-box .app-list');
    var liBook = document.querySelector('.book');
    var liitem = document.querySelector('.item');
    var liplay = document.querySelector('.play');
    var liapp = document.querySelector('.app');
    var bookButtonA = document.querySelectorAll('.book-button a');
    var itemButtonA = document.querySelectorAll('.item-button a');
    var playButtonA = document.querySelectorAll('.play-button a');
    var appButtonA = document.querySelectorAll('.app-button a');
    var bookButtonAlen = bookButtonA.length;
    var itemButtonAlen = itemButtonA.length;
    var playButtonAlen = playButtonA.length;
    var appButtonAlen = appButtonA.length;
    var bookListli = document.querySelectorAll('.book-list li');
    var itemListli = document.querySelectorAll('.item-list li');
    var playListli = document.querySelectorAll('.play-list li');
    var appListli = document.querySelectorAll('.app-list li');
    var videoTexta = document.querySelector('.section-main .video .video-text a');
    var videoTexti = document.querySelector('.section-main .video .video-text a i');
    var videoPlay = document.querySelectorAll('.video-play i');
    var video = document.querySelector('#video');
    var video2 = document.querySelector('#video2');
    var video3 = document.querySelector('#video3');
    var video4 = document.querySelector('#video4');
    var videoPause = document.querySelector('#video p');
    var videoPause2 = document.querySelector('#video2 p');
    var videoPause3 = document.querySelector('#video3 p');
    var videoPause4 = document.querySelector('#video4 p');
    var videofather = document.querySelector('#videofather');
    videoPlay[0].onclick = function () {
        video.style.display = 'block';
        videofather.appendChild(video);
    }
    videoPause.onclick = function () {
        video.style.display = 'none';
        videofather.removeChild(video);
    }
    videoPlay[1].onclick = function () {
        video2.style.display = 'block';
        videofather.appendChild(video2);
    }
    videoPause2.onclick = function () {
        video2.style.display = 'none';
        videofather.removeChild(video2);
    }
    videoPlay[2].onclick = function () {
        video3.style.display = 'block';
        videofather.appendChild(video3);
    }
    videoPause3.onclick = function () {
        video3.style.display = 'none';
        videofather.removeChild(video3);
    }
    videoPlay[3].onclick = function () {
        video4.style.display = 'block';
        videofather.appendChild(video4);
    }
    videoPause4.onclick = function () {
        video4.style.display = 'none';
        videofather.removeChild(video4);
    }
    for(var y=0;y<bookButtonAlen;y++){
        bookButtonA[y].index = y;
        bookButtonA[y].onclick = function () {
            bookButtonA[this.index].id = 'active2';
            for(var j=0;j<bookButtonAlen;j++){
                if(j!=this.index){
                    bookButtonA[j].id = '';
                }
            }
            if(this.index==1){
                bookBox.style.transform = 'translateX('+(-296)+'px)';
                bookBox.style.transition = '.5s';
            }
            if(this.index==2){
                bookBox.style.transform = 'translateX('+(-592)+'px)';
                bookBox.style.transition = '.5s';
            }
            if(this.index==0){
                bookBox.style.transform = 'translateX('+0+'px)';
                bookBox.style.transition = '.5s';
            }
        }
    }
    liBook.onmouseover = function(){
        bookRightButton.style.display = 'block'
        bookLeftButton.style.display = 'block'
    }
    liBook.onmouseout = function(){
        bookRightButton.style.display = 'none'
        bookLeftButton.style.display = 'none'
    }
    bookRightButton.onclick = function(){
        d = d-296;
        if(d<=-592){
            d=-592;
        }
        z++;
        if(z>2){
            z=2;
        }
        bookButtonA[z].id = 'active2';
        for(var j=0;j<bookButtonAlen;j++){
            if(j!=z){
                bookButtonA[j].id = '';
            }
        }
        bookBox.style.transform = 'translateX('+d+'px)';
        console.log(d)
        bookBox.style.transition = '.5s';

    }
    bookLeftButton.onclick = function(){
        d = d+296;
        if(d>=0){
            d=0;
        }
        z--;
        if(z<0){
            z=0;
        }
        bookButtonA[z].id = 'active2';
        for(var j=0;j<bookButtonAlen;j++){
            if(j!=z){
                bookButtonA[j].id = '';
            }
        }
        bookBox.style.transform = 'translateX('+d+'px)';
        bookBox.style.transition = '.5s';

    }
    for(var b=0;b<itemButtonAlen;b++){
        itemButtonA[b].index = b;
        itemButtonA[b].onclick = function () {
            itemButtonA[this.index].id = 'active2';
            for(var o=0;o<itemButtonAlen;o++){
                if(o!=this.index){
                    itemButtonA[o].id = '';
                }
            }
            if(this.index==1){
                itemBox.style.transform = 'translateX('+(-296)+'px)';
                itemBox.style.transition = '.5s';
            }
            if(this.index==2){
                itemBox.style.transform = 'translateX('+(-592)+'px)';
                itemBox.style.transition = '.5s';
            }
            if(this.index==3){
                itemBox.style.transform = 'translateX('+(-888)+'px)';
                itemBox.style.transition = '.5s';
            }
            if(this.index==0){
                itemBox.style.transform = 'translateX('+0+'px)';
                itemBox.style.transition = '.5s';
            }
        }
    }
    liitem.onmouseover = function(){
        itemRightButton.style.display = 'block'
        itemLeftButton.style.display = 'block'
    }
    liitem.onmouseout = function(){
        itemRightButton.style.display = 'none'
        itemLeftButton.style.display = 'none'
    }
    itemRightButton.onclick = function(){
        o = o-296;
        if(o<=-888){
            o=-888;
        }
        q++;
        if(q>3){
            q=3;
        }
        itemButtonA[q].id = 'active2';
        for(var j=0;j<itemButtonAlen;j++){
            if(j!=q){
                itemButtonA[j].id = '';
            }
        }
        itemBox.style.transform = 'translateX('+o+'px)';
        itemBox.style.transition = '.5s';
        console.log(o)
    }
    itemLeftButton.onclick = function(){
        o = o+296;
        if(o>=0){
            o=0;
        }
        q--;
        if(q<0){
            q=0;
        }
        itemButtonA[q].id = 'active2';
        for(var j=0;j<itemButtonAlen;j++){
            if(j!=q){
                itemButtonA[j].id = '';
            }
        }
        itemBox.style.transform = 'translateX('+o+'px)';
        itemBox.style.transition = '.5s';

    }
    for(var r=0;r<playButtonAlen;r++){
        playButtonA[r].index = r;
        playButtonA[r].onclick = function () {
            playButtonA[this.index].id = 'active2';
            for(var oo=0;oo<playButtonAlen;oo++){
                if(oo!=this.index){
                    playButtonA[oo].id = '';
                }
            }
            if(this.index==1){
                playBox.style.transform = 'translateX('+(-296)+'px)';
                playBox.style.transition = '.5s';
            }
            if(this.index==2){
                playBox.style.transform = 'translateX('+(-592)+'px)';
                playBox.style.transition = '.5s';
            }
            if(this.index==3){
                playBox.style.transform = 'translateX('+(-888)+'px)';
                playBox.style.transition = '.5s';
            }
            if(this.index==0){
                playBox.style.transform = 'translateX('+0+'px)';
                playBox.style.transition = '.5s';
            }
        }
    }
    liplay.onmouseover = function(){
        playRightButton.style.display = 'block'
        playLeftButton.style.display = 'block'
    }
    liplay.onmouseout = function(){
        playRightButton.style.display = 'none'
        playLeftButton.style.display = 'none'
    }
    playRightButton.onclick = function(){
        oo = oo-296;
        if(oo<=-888){
            oo=-888;
        }
        p++;
        if(p>3){
            p=3;
        }
        playButtonA[p].id = 'active2';
        for(var e=0;e<playButtonAlen;e++){
            if(e!=p){
                playButtonA[e].id = '';
            }
        }
        playBox.style.transform = 'translateX('+oo+'px)';
        playBox.style.transition = '.5s';
        console.log(oo)
    }
    playLeftButton.onclick = function(){
        oo = oo+296;
        if(oo>=0){
            oo=0;
        }
        p--;
        if(p<0){
            p=0;
        }
        playButtonA[p].id = 'active2';
        for(var e=0;e<playButtonAlen;e++){
            if(e!=p){
                playButtonA[e].id = '';
            }
        }
        playBox.style.transform = 'translateX('+oo+'px)';
        playBox.style.transition = '.5s';

    }
    for(var r=0;r<appButtonAlen;r++){
        appButtonA[r].index = r;
        appButtonA[r].onclick = function () {
            appButtonA[this.index].id = 'active2';
            for(var oo=0;oo<appButtonAlen;oo++){
                if(oo!=this.index){
                    appButtonA[oo].id = '';
                }
            }
            if(this.index==1){
                appBox.style.transform = 'translateX('+(-296)+'px)';
                appBox.style.transition = '.5s';
            }
            if(this.index==2){
                appBox.style.transform = 'translateX('+(-592)+'px)';
                appBox.style.transition = '.5s';
            }
            if(this.index==3){
                appBox.style.transform = 'translateX('+(-888)+'px)';
                appBox.style.transition = '.5s';
            }
            if(this.index==0){
                appBox.style.transform = 'translateX('+0+'px)';
                appBox.style.transition = '.5s';
            }
        }
    }
    liapp.onmouseover = function(){
        appRightButton.style.display = 'block'
        appLeftButton.style.display = 'block'
    }
    liapp.onmouseout = function(){
        appRightButton.style.display = 'none'
        appLeftButton.style.display = 'none'
    }
    appRightButton.onclick = function(){
        ooo = ooo-296;
        if(ooo<=-888){
            ooo=-888;
        }
        pp++;
        if(pp>3){
            pp=3;
        }
        appButtonA[pp].id = 'active2';
        for(var e=0;e<appButtonAlen;e++){
            if(e!=pp){
                appButtonA[e].id = '';
            }
        }
        appBox.style.transform = 'translateX('+ooo+'px)';
        appBox.style.transition = '.5s';
        console.log(oo)
    }
    appLeftButton.onclick = function(){
        ooo = ooo+296;
        if(ooo>=0){
            ooo=0;
        }
        pp--;
        if(pp<0){
            pp=0;
        }
        appButtonA[pp].id = 'active2';
        for(var e=0;e<appButtonAlen;e++){
            if(e!=pp){
                appButtonA[e].id = '';
            }
        }
        appBox.style.transform = 'translateX('+ooo+'px)';
        appBox.style.transition = '.5s';

    }
    shop.onmouseover = function () {
        shoppingP.innerHTML = '购物车中还没有商品，赶紧选购吧！';
        shopping.appendChild(shoppingP);
        shoppingP.style.transition = '.3s'
        shopping.style.height = '100px';
        shoppingP.style.fontSize = '12px'
    };
    shop.onmouseout = function () {
        shoppingP.style.transition = '';
        shopping.style.height = '';
        shoppingP.style.fontSize = '';
        shopping.removeChild(shoppingP);
    };
    Input.onclick = function(){
        Input.style.borderColor = '#ff6700';
        Submit.style.borderColor = '#ff6700';
        mi8.style.opacity = '0';
        option.style.display = 'block';
    }
    option.onmouseover = function(){
        option.style.display = 'block';
        Input.style.borderColor = '#ff6700';
        Submit.style.borderColor = '#ff6700';
        mi8.style.opacity = '0';
    }
    option.onmouseout = function(){
        option.style.display = 'none';
        Input.style.borderColor = '';
        Submit.style.borderColor = '';
        mi8.style.opacity = '1';
    }
    Submit.onmouseover = function () {
        search.style.color = 'white';

    };
    Submit.onmouseout = function () {
        search.style.color = '#616161';
    };
    search.onmouseover = function () {
        Submit.style.background = '#ff6700';
        search.style.color = 'white';
    };
    search.onmouseout = function () {
        Submit.style.background = '';
    };
    form.onmouseover = function () {
        Input.style.borderColor = '#919191';
        Submit.style.borderColor = '#919191';
    };
    form.onmouseout = function () {
        Input.style.borderColor = '#ccc';
        Submit.style.borderColor = '#ccc';
        mi8.style.opacity = '1';
        option.style.display = 'none';
    };
    formA[0].onmouseover = function () {
        Input.style.borderColor = '#919191';
        Submit.style.borderColor = '#919191';
    };
    formA[1].onmouseover = function () {
        Input.style.borderColor = '#919191';
        Submit.style.borderColor = '#919191';
    };
    searchI.onmouseover = function () {
        Input.style.borderColor = '#919191';
        Submit.style.borderColor = '#919191';
    };
    navFixA[0].onmouseover = function () {
        navFixImg[0].src = 'img/nav-fix1x.png';
        navFixA[0].style.color = '#ff7600';
    };
    navFixA[0].onmouseout = function () {
        navFixImg[0].src = 'img/nav-fix1.png';
        navFixA[0].style.color = '';
    };
    navFixA[1].onmouseover = function () {
        navFixImg[1].src = 'img/nav-fix2x.png';
        navFixA[1].style.color = '#ff7600';
    };
    navFixA[1].onmouseout = function () {
        navFixImg[1].src = 'img/nav-fix2.png';
        navFixA[1].style.color = '';
    };
    navFixA[2].onmouseover = function () {
        navFixImg[2].src = 'img/nav-fix3x.png';
        navFixA[2].style.color = '#ff7600';
    };
    navFixA[2].onmouseout = function () {
        navFixImg[2].src = 'img/nav-fix3.png';
        navFixA[2].style.color = '';
    };
    function arr(){
        Select1.style.height = '225px';
        Select1.style.boxShadow = '0px 1px 1px 1px #ccc';
        Select1Line1.style.height = '95px';
        Select1Line2.style.height = '95px';
        Select1Line3.style.height = '95px';
        Select1Line4.style.height = '95px';
        Select1Line5.style.height = '95px';
    }
    function arr2(){
        Select1.style.height = '0';
        Select1.style.boxShadow = '';
        Select1Line1.style.height = '';
        Select1Line2.style.height = '';
        Select1Line3.style.height = '';
        Select1Line4.style.height = '';
        Select1Line5.style.height = '';
    }
    for(var j=5;j<Fnavlen-2;j++){
        Fnav[j].index = j;
        Fnav[j].onmouseover = function () {
            arr()
            Select1ul[this.index].style.height = '210px';
        }
        Fnav[j].onmouseout = function () {
            arr2()
            Select1ul[this.index].style.height = '0';
        }
    }
    for(var k=5;k<Fnavlen-2;k++){
        Select1ul[k].index = k;
        Select1ul[k].onmouseover = function () {
            arr()
            Select1ul[this.index].style.height = '210px';
        }
        Select1ul[k].onmouseout = function () {
            arr2()
            Select1ul[this.index].style.height = '0';
        }
    }
    for(var j=0;j<Fnavlen-6;j++){
        Fnav[j].index = j;
        Fnav[j].onmouseover = function () {
            arr()
            Select1ul[this.index].style.height = '210px';
        }
        Fnav[j].onmouseout = function () {
            arr2()
            Select1ul[this.index].style.height = '0';
        }
    }
    for(var k=0;k<Fnavlen-6;k++){
        Select1ul[k].index = k;
        Select1ul[k].onmouseover = function () {
            arr()
            Select1ul[this.index].style.height = '210px';
        }
        Select1ul[k].onmouseout = function () {
            arr2()
            Select1ul[this.index].style.height = '0';
        }
    }
    Fnav[4].onmouseover = function () {
        Select1.style.height = '225px';
        Select1.style.boxShadow = '0px 1px 1px 1px #ccc';
        Select1Line1.style.height = '0';
        Select1Line2.style.height = '0';
        Select1Line3.style.height = '0';
        Select1Line4.style.height = '0';
        Select1Line5.style.height = '0';
        Select1ul[4].style.height = '210px';
    }
    Fnav[4].onmouseout = function () {
        Select1.style.height = '0';
        Select1.style.boxShadow = '';
        Select1Line1.style.height = '';
        Select1Line2.style.height = '';
        Select1Line3.style.height = '';
        Select1Line4.style.height = '';
        Select1Line5.style.height = '';
        Select1ul[4].style.height = '0';
    }
    Select1ul[4].onmouseover = function () {
        Select1.style.height = '225px';
        Select1.style.boxShadow = '0px 1px 1px 1px #ccc';
        Select1Line1.style.height = '0';
        Select1Line2.style.height = '0';
        Select1Line3.style.height = '0';
        Select1Line4.style.height = '0';
        Select1Line5.style.height = '0';
        Select1ul[4].style.height = '210px';
    }
    Select1ul[4].onmouseout = function () {
        Select1.style.height = '0';
        Select1.style.boxShadow = '';
        Select1Line1.style.height = '';
        Select1Line2.style.height = '';
        Select1Line3.style.height = '';
        Select1Line4.style.height = '';
        Select1Line5.style.height = '';
        Select1ul[4].style.height = '0';
    }
    function autoplay(){
        ++index;
        if(index>=len){
            index = 0;
        }
        a = index;
        update(index)
    }
    function update(num){
        for(var j=0;j<len;j++){
            RoundSowing[j].style.opacity = '0';
            sButton[j].id = '';
        }
        RoundSowing[num].style.opacity = '1';
        sButton[num].id = 'active';
    }
    timer = setInterval(autoplay,3000);
    for(i=0;i<len;i++){
        sButton[i].index = i;
        sButton[i].onmouseover = function () {
            clearInterval(timer);
            index = this.index;
            update(this.index);
        }
        sButton[i].onmouseout = function () {
            timer = setInterval(autoplay,3000);
        }
    }
    var a = null;
    left.onmouseover = function(){
        clearInterval(timer)
    }
    left.onclick = function(){
        clearInterval(timer);
        a--;
        if(a<0){
            a=4;
        }
        if(a<4){
            RoundSowing[a].style.opacity = '1'
            RoundSowing[a+1].style.opacity = '0';
            sButton[a].id = 'active';
            sButton[a+1].id = '';
        }
        console.log(a)
        if(a==4){
            RoundSowing[a].style.opacity = '1';
            sButton[a].id = 'active';
            sButton[0].id = '';
        }
    }
    left.onmouseout = function(){
        index=a;
        timer = setInterval(autoplay,3000);
    }
    right.onmouseover = function(){
        clearInterval(timer);
    }
    right.onclick = function () {
        clearInterval(timer);
        a++;
        if(a>=5){
            a=0;
        }
        if(a!=0){
            RoundSowing[a].style.opacity = '1'
            RoundSowing[a-1].style.opacity = '0'
            sButton[a].id = 'active';
            sButton[a-1].id = '';
        }
        console.log(a)
        if(a==0){
            RoundSowing[4].style.opacity = '0';
            RoundSowing[a].style.opacity = '1';
            sButton[4].id = '';
            sButton[a].id = 'active';
        }
    }
    right.onmouseout = function () {
        index=a;
        timer = setInterval(autoplay,3000);
    }
    for(l=0;l<navAsidelilen;l++){
        navAsideli[l].index = l;
        navAsideli[l].onmouseover = function () {
            navAsideCon[this.index].id = 'show'
        }
        navAsideli[l].onmouseout = function () {
            navAsideCon[this.index].id = ''
        }
    }
    for(l=0;l<navAsidelilen;l++){
        navAsideCon[l].index = l;
        navAsideCon[l].onmouseover = function () {
            navAsideCon[this.index].id = 'show'
        }
        navAsideCon[l].onmouseout = function () {
            navAsideCon[this.index].id = ''
        }
    }
    threeLeft.onclick = function () {
        l=l+980;
        if(l>=0){
            l=0;
            threeLeft.onmouseover = function () {
                threeLeft.style.cursor = 'default'
            }
            threeRight.onmouseover = function () {
                threeRight.style.cursor = 'pointer'
            }
        }
        threeGoods.style.transform = 'translateX(' + l +'px)';
        threeGoods.style.transition = '.5s';
    }
    threeRight.onclick = function () {
        l=l-989;
        if(l<=-979){
            l=-979;
            threeLeft.onmouseover = function () {
                threeLeft.style.cursor = 'pointer';
            }
            threeRight.onmouseover = function () {
                threeRight.style.cursor = 'default'
            }
        }
        threeGoods.style.transform = 'translateX(' + l +'px)';
        threeGoods.style.transition = '.5s';
    }
    function con() {
        var now = new Date()
        var endTime = new Date("2018 8 27 18:00:00");
        var time = endTime.getTime() - now.getTime();
        var hour = parseInt(time/1000/60/60);
        var minute = parseInt(time/1000/60%60);
        var second = parseInt(time/1000%60);
        if(hour<10){
            hour = '0' + hour;
        }
        if(minute<10){
            minute = '0' + minute;
        }
        if(second<10){
            second = '0' + second;
        }
        timeButtomspan[0].innerHTML = hour;
        timeButtomspan[1].innerHTML = minute;
        timeButtomspan[2].innerHTML = second;
        setTimeout(con,1000)
        if(time<0){
            timeButtomspan[0].innerHTML = '00';
            timeButtomspan[1].innerHTML = '00';
            timeButtomspan[2].innerHTML = '00';
        }
    }con()
    phoneTexta.onmouseover = function () {
        phoneTexti.style.background = '#ff7600';
    }
    phoneTexta.onmouseout = function () {
        phoneTexti.style.background = '#b0b0b0';
    }
    homeAppliancesSli[0].onmouseover = function () {
        homeAppliancesAllul[0].style.display = 'block';
        homeAppliancesSli[0].style.borderBottom = '2px solid #ff6700';
        homeAppliancesSliA[0].style.color = '#ff7600';
        homeAppliancesAllul[1].style.display = 'none';
        homeAppliancesAllul[2].style.display = 'none';
        homeAppliancesAllul[3].style.display = 'none';
        homeAppliancesSli[1].style.borderBottom = '0';
        homeAppliancesSli[2].style.borderBottom = '0';
        homeAppliancesSli[3].style.borderBottom = '0';
        homeAppliancesSliA[2].style.color = '#424242';
        homeAppliancesSliA[1].style.color = '#424242';
        homeAppliancesSliA[3].style.color = '#424242';
    }
    homeAppliancesSli[1].onmouseover = function () {
        homeAppliancesSli[1].style.borderBottom = '2px solid #ff6700';
        homeAppliancesSliA[0].style.color = '#424242';
        homeAppliancesSliA[1].style.color = '#ff6700';
        homeAppliancesAllul[1].style.display = 'block';
        homeAppliancesAllul[0].style.display = 'none';
        homeAppliancesAllul[2].style.display = 'none';
        homeAppliancesAllul[3].style.display = 'none';
        homeAppliancesSli[0].style.borderBottom = '0';
        homeAppliancesSli[2].style.borderBottom = '0';
        homeAppliancesSli[3].style.borderBottom = '0';
        homeAppliancesSliA[0].style.color = '#424242';
        homeAppliancesSliA[2].style.color = '#424242';
        homeAppliancesSliA[3].style.color = '#424242';
    }
    homeAppliancesSli[2].onmouseover = function () {
        homeAppliancesSli[2].style.borderBottom = '2px solid #ff6700';
        homeAppliancesSliA[2].style.color = '#ff6700';
        homeAppliancesAllul[2].style.display = 'block';
        homeAppliancesAllul[0].style.display = 'none';
        homeAppliancesAllul[1].style.display = 'none';
        homeAppliancesAllul[3].style.display = 'none';
        homeAppliancesSli[0].style.borderBottom = '0';
        homeAppliancesSli[1].style.borderBottom = '0';
        homeAppliancesSli[3].style.borderBottom = '0';
        homeAppliancesSliA[0].style.color = '#424242';
        homeAppliancesSliA[1].style.color = '#424242';
        homeAppliancesSliA[3].style.color = '#424242';
    }
    homeAppliancesSli[3].onmouseover = function () {
        homeAppliancesSli[3].style.borderBottom = '2px solid #ff6700';
        homeAppliancesSliA[3].style.color = '#ff6700';
        homeAppliancesAllul[3].style.display = 'block';
        homeAppliancesAllul[0].style.display = 'none';
        homeAppliancesAllul[2].style.display = 'none';
        homeAppliancesAllul[1].style.display = 'none';
        homeAppliancesSli[0].style.borderBottom = '0';
        homeAppliancesSli[1].style.borderBottom = '0';
        homeAppliancesSli[2].style.borderBottom = '0';
        homeAppliancesSliA[0].style.color = '#424242';
        homeAppliancesSliA[1].style.color = '#424242';
        homeAppliancesSliA[2].style.color = '#424242';
    }
    for(var t=0;t<homeAppliancesAllulLIlen;t++){
        homeAppliancesAllulLI[t].index = t;
        homeAppliancesAllulLI[t].onmouseover = function () {
            evaluate[this.index].style.height = '85px';
        }
        homeAppliancesAllulLI[t].onmouseout = function () {
            evaluate[this.index].style.height = '0';
        }
    }
    capacitySli[0].onmouseover = function () {
        capacityAllul[0].style.display = 'block';
        capacitySli[0].style.borderBottom = '2px solid #ff6700';
        capacitySliA[0].style.color = '#ff7600';
        capacityAllul[1].style.display = 'none';
        capacityAllul[2].style.display = 'none';
        capacityAllul[3].style.display = 'none';
        capacityAllul[4].style.display = 'none';
        capacitySli[1].style.borderBottom = '0';
        capacitySli[2].style.borderBottom = '0';
        capacitySli[3].style.borderBottom = '0';
        capacitySli[4].style.borderBottom = '0';
        capacitySliA[2].style.color = '#424242';
        capacitySliA[1].style.color = '#424242';
        capacitySliA[3].style.color = '#424242';
        capacitySliA[4].style.color = '#424242';
    }
    capacitySli[1].onmouseover = function () {
        capacitySli[1].style.borderBottom = '2px solid #ff6700';
        capacitySliA[0].style.color = '#424242';
        capacitySliA[1].style.color = '#ff6700';
        capacityAllul[1].style.display = 'block';
        capacityAllul[0].style.display = 'none';
        capacityAllul[2].style.display = 'none';
        capacityAllul[3].style.display = 'none';
        capacityAllul[4].style.display = 'none';
        capacitySli[0].style.borderBottom = '0';
        capacitySli[2].style.borderBottom = '0';
        capacitySli[3].style.borderBottom = '0';
        capacitySli[4].style.borderBottom = '0';
        capacitySliA[0].style.color = '#424242';
        capacitySliA[2].style.color = '#424242';
        capacitySliA[3].style.color = '#424242';
        capacitySliA[4].style.color = '#424242';
    }
    capacitySli[2].onmouseover = function () {
        capacitySli[2].style.borderBottom = '2px solid #ff6700';
        capacitySliA[2].style.color = '#ff6700';
        capacityAllul[2].style.display = 'block';
        capacityAllul[0].style.display = 'none';
        capacityAllul[1].style.display = 'none';
        capacityAllul[3].style.display = 'none';
        capacityAllul[4].style.display = 'none';
        capacitySli[0].style.borderBottom = '0';
        capacitySli[1].style.borderBottom = '0';
        capacitySli[3].style.borderBottom = '0';
        capacitySli[4].style.borderBottom = '0';
        capacitySliA[0].style.color = '#424242';
        capacitySliA[1].style.color = '#424242';
        capacitySliA[3].style.color = '#424242';
        capacitySliA[4].style.color = '#424242';
    }
    capacitySli[3].onmouseover = function () {
        capacitySli[3].style.borderBottom = '2px solid #ff6700';
        capacitySliA[3].style.color = '#ff6700';
        capacityAllul[3].style.display = 'block';
        capacityAllul[0].style.display = 'none';
        capacityAllul[2].style.display = 'none';
        capacityAllul[1].style.display = 'none';
        capacityAllul[4].style.display = 'none';
        capacitySli[0].style.borderBottom = '0';
        capacitySli[1].style.borderBottom = '0';
        capacitySli[2].style.borderBottom = '0';
        capacitySli[4].style.borderBottom = '0';
        capacitySliA[0].style.color = '#424242';
        capacitySliA[1].style.color = '#424242';
        capacitySliA[2].style.color = '#424242';
        capacitySliA[4].style.color = '#424242';
    }
    capacitySli[4].onmouseover = function () {
        capacitySli[4].style.borderBottom = '2px solid #ff6700';
        capacitySliA[4].style.color = '#ff6700';
        capacityAllul[4].style.display = 'block';
        capacityAllul[0].style.display = 'none';
        capacityAllul[2].style.display = 'none';
        capacityAllul[1].style.display = 'none';
        capacityAllul[3].style.display = 'none';
        capacitySli[0].style.borderBottom = '0';
        capacitySli[1].style.borderBottom = '0';
        capacitySli[2].style.borderBottom = '0';
        capacitySli[3].style.borderBottom = '0';
        capacitySliA[0].style.color = '#424242';
        capacitySliA[1].style.color = '#424242';
        capacitySliA[2].style.color = '#424242';
        capacitySliA[3].style.color = '#424242';
    }
    for(var t=0;t<capacityAllulLIlen;t++){
        capacityAllulLI[t].index = t;
        capacityAllulLI[t].onmouseover = function () {
            evaluate2[this.index].style.height = '85px';
        }
        capacityAllulLI[t].onmouseout = function () {
            evaluate2[this.index].style.height = '0';
        }
    }
    matchSli[0].onmouseover = function () {
        matchAllul[0].style.display = 'block';
        matchSli[0].style.borderBottom = '2px solid #ff6700';
        matchSliA[0].style.color = '#ff7600';
        matchAllul[1].style.display = 'none';
        matchAllul[2].style.display = 'none';
        matchAllul[3].style.display = 'none';
        matchSli[1].style.borderBottom = '0';
        matchSli[2].style.borderBottom = '0';
        matchSli[3].style.borderBottom = '0';
        matchSliA[2].style.color = '#424242';
        matchSliA[1].style.color = '#424242';
        matchSliA[3].style.color = '#424242';
    }
    matchSli[1].onmouseover = function () {
        matchSli[1].style.borderBottom = '2px solid #ff6700';
        matchSliA[0].style.color = '#424242';
        matchSliA[1].style.color = '#ff6700';
        matchAllul[1].style.display = 'block';
        matchAllul[0].style.display = 'none';
        matchAllul[2].style.display = 'none';
        matchAllul[3].style.display = 'none';
        matchSli[0].style.borderBottom = '0';
        matchSli[2].style.borderBottom = '0';
        matchSli[3].style.borderBottom = '0';
        matchSliA[0].style.color = '#424242';
        matchSliA[2].style.color = '#424242';
        matchSliA[3].style.color = '#424242';
    }
    matchSli[2].onmouseover = function () {
        matchSli[2].style.borderBottom = '2px solid #ff6700';
        matchSliA[2].style.color = '#ff6700';
        matchAllul[2].style.display = 'block';
        matchAllul[0].style.display = 'none';
        matchAllul[1].style.display = 'none';
        matchAllul[3].style.display = 'none';
        matchSli[0].style.borderBottom = '0';
        matchSli[1].style.borderBottom = '0';
        matchSli[3].style.borderBottom = '0';
        matchSliA[0].style.color = '#424242';
        matchSliA[1].style.color = '#424242';
        matchSliA[3].style.color = '#424242';
    }
    matchSli[3].onmouseover = function () {
        matchSli[3].style.borderBottom = '2px solid #ff6700';
        matchSliA[3].style.color = '#ff6700';
        matchAllul[3].style.display = 'block';
        matchAllul[0].style.display = 'none';
        matchAllul[2].style.display = 'none';
        matchAllul[1].style.display = 'none';
        matchSli[0].style.borderBottom = '0';
        matchSli[1].style.borderBottom = '0';
        matchSli[2].style.borderBottom = '0';
        matchSliA[0].style.color = '#424242';
        matchSliA[1].style.color = '#424242';
        matchSliA[2].style.color = '#424242';
    }
    for(var t=0;t<matchAllulLIlen;t++){
        matchAllulLI[t].index = t;
        matchAllulLI[t].onmouseover = function () {
            evaluate3[this.index].style.height = '85px';
        }
        matchAllulLI[t].onmouseout = function () {
            evaluate3[this.index].style.height = '0';
        }
    }
    partsSli[0].onmouseover = function () {
        partsAllul[0].style.display = 'block';
        partsSli[0].style.borderBottom = '2px solid #ff6700';
        partsSliA[0].style.color = '#ff7600';
        partsAllul[1].style.display = 'none';
        partsAllul[2].style.display = 'none';
        partsAllul[3].style.display = 'none';
        partsSli[1].style.borderBottom = '0';
        partsSli[2].style.borderBottom = '0';
        partsSli[3].style.borderBottom = '0';
        partsSliA[2].style.color = '#424242';
        partsSliA[1].style.color = '#424242';
        partsSliA[3].style.color = '#424242';
    }
    partsSli[1].onmouseover = function () {
        partsSli[1].style.borderBottom = '2px solid #ff6700';
        partsSliA[0].style.color = '#424242';
        partsSliA[1].style.color = '#ff6700';
        partsAllul[1].style.display = 'block';
        partsAllul[0].style.display = 'none';
        partsAllul[2].style.display = 'none';
        partsAllul[3].style.display = 'none';
        partsSli[0].style.borderBottom = '0';
        partsSli[2].style.borderBottom = '0';
        partsSli[3].style.borderBottom = '0';
        partsSliA[0].style.color = '#424242';
        partsSliA[2].style.color = '#424242';
        partsSliA[3].style.color = '#424242';
    }
    partsSli[2].onmouseover = function () {
        partsSli[2].style.borderBottom = '2px solid #ff6700';
        partsSliA[2].style.color = '#ff6700';
        partsAllul[2].style.display = 'block';
        partsAllul[0].style.display = 'none';
        partsAllul[1].style.display = 'none';
        partsAllul[3].style.display = 'none';
        partsSli[0].style.borderBottom = '0';
        partsSli[1].style.borderBottom = '0';
        partsSli[3].style.borderBottom = '0';
        partsSliA[0].style.color = '#424242';
        partsSliA[1].style.color = '#424242';
        partsSliA[3].style.color = '#424242';
    }
    partsSli[3].onmouseover = function () {
        partsSli[3].style.borderBottom = '2px solid #ff6700';
        partsSliA[3].style.color = '#ff6700';
        partsAllul[3].style.display = 'block';
        partsAllul[0].style.display = 'none';
        partsAllul[2].style.display = 'none';
        partsAllul[1].style.display = 'none';
        partsSli[0].style.borderBottom = '0';
        partsSli[1].style.borderBottom = '0';
        partsSli[2].style.borderBottom = '0';
        partsSliA[0].style.color = '#424242';
        partsSliA[1].style.color = '#424242';
        partsSliA[2].style.color = '#424242';
    }
    for(var t=0;t<partsAllulLIlen;t++){
        partsAllulLI[t].index = t;
        partsAllulLI[t].onmouseover = function () {
            evaluate4[this.index].style.height = '85px';
        }
        partsAllulLI[t].onmouseout = function () {
            evaluate4[this.index].style.height = '0';
        }
    }
    rimSli[0].onmouseover = function () {
        rimAllul[0].style.display = 'block';
        rimSli[0].style.borderBottom = '2px solid #ff6700';
        rimSliA[0].style.color = '#ff7600';
        rimAllul[1].style.display = 'none';
        rimAllul[2].style.display = 'none';
        rimAllul[3].style.display = 'none';
        rimAllul[4].style.display = 'none';
        rimSli[1].style.borderBottom = '0';
        rimSli[2].style.borderBottom = '0';
        rimSli[3].style.borderBottom = '0';
        rimSli[4].style.borderBottom = '0';
        rimSliA[2].style.color = '#424242';
        rimSliA[1].style.color = '#424242';
        rimSliA[3].style.color = '#424242';
        rimSliA[4].style.color = '#424242';
    }
    rimSli[1].onmouseover = function () {
        rimSli[1].style.borderBottom = '2px solid #ff6700';
        rimSliA[0].style.color = '#424242';
        rimSliA[1].style.color = '#ff6700';
        rimAllul[1].style.display = 'block';
        rimAllul[0].style.display = 'none';
        rimAllul[2].style.display = 'none';
        rimAllul[3].style.display = 'none';
        rimAllul[4].style.display = 'none';
        rimSli[0].style.borderBottom = '0';
        rimSli[2].style.borderBottom = '0';
        rimSli[3].style.borderBottom = '0';
        rimSli[4].style.borderBottom = '0';
        rimSliA[0].style.color = '#424242';
        rimSliA[2].style.color = '#424242';
        rimSliA[3].style.color = '#424242';
        rimSliA[4].style.color = '#424242';
    }
    rimSli[2].onmouseover = function () {
        rimSli[2].style.borderBottom = '2px solid #ff6700';
        rimSliA[2].style.color = '#ff6700';
        rimAllul[2].style.display = 'block';
        rimAllul[0].style.display = 'none';
        rimAllul[1].style.display = 'none';
        rimAllul[3].style.display = 'none';
        rimAllul[4].style.display = 'none';
        rimSli[0].style.borderBottom = '0';
        rimSli[1].style.borderBottom = '0';
        rimSli[3].style.borderBottom = '0';
        rimSli[4].style.borderBottom = '0';
        rimSliA[0].style.color = '#424242';
        rimSliA[1].style.color = '#424242';
        rimSliA[3].style.color = '#424242';
        rimSliA[4].style.color = '#424242';
    }
    rimSli[3].onmouseover = function () {
        rimSli[3].style.borderBottom = '2px solid #ff6700';
        rimSliA[3].style.color = '#ff6700';
        rimAllul[3].style.display = 'block';
        rimAllul[0].style.display = 'none';
        rimAllul[2].style.display = 'none';
        rimAllul[1].style.display = 'none';
        rimAllul[4].style.display = 'none';
        rimSli[0].style.borderBottom = '0';
        rimSli[1].style.borderBottom = '0';
        rimSli[2].style.borderBottom = '0';
        rimSli[4].style.borderBottom = '0';
        rimSliA[0].style.color = '#424242';
        rimSliA[1].style.color = '#424242';
        rimSliA[2].style.color = '#424242';
        rimSliA[4].style.color = '#424242';
    }
    rimSli[4].onmouseover = function () {
        rimSli[4].style.borderBottom = '2px solid #ff6700';
        rimSliA[4].style.color = '#ff6700';
        rimAllul[4].style.display = 'block';
        rimAllul[0].style.display = 'none';
        rimAllul[2].style.display = 'none';
        rimAllul[1].style.display = 'none';
        rimAllul[3].style.display = 'none';
        rimSli[0].style.borderBottom = '0';
        rimSli[1].style.borderBottom = '0';
        rimSli[2].style.borderBottom = '0';
        rimSli[3].style.borderBottom = '0';
        rimSliA[0].style.color = '#424242';
        rimSliA[1].style.color = '#424242';
        rimSliA[2].style.color = '#424242';
        rimSliA[3].style.color = '#424242';
    }
    for(var t=0;t<rimAllulLIlen;t++){
        rimAllulLI[t].index = t;
        rimAllulLI[t].onmouseover = function () {
            evaluate5[this.index].style.height = '85px';
        }
        rimAllulLI[t].onmouseout = function () {
            evaluate5[this.index].style.height = '0';
        }
    }
    reControlRight.onclick = function () {
        d = d-1226;
        if(d<=-3678){
            d=-3678;
            reControlLeft.onmouseover = function () {
                reControlLeft.style.cursor = 'pointer';
            }
            reControlRight.onmouseover = function () {
                reControlRight.style.cursor = 'default'
            }
        }
        reBoxContent.style.transform = 'translateX('+d+'px)';
        reBoxContent.style.transition = '.5s';
    }
    reControlLeft.onclick = function () {
        d = d+1226;
        if(d>=0){
            d=0;
            reControlLeft.onmouseover = function () {
                reControlLeft.style.cursor = 'default'
            }
            reControlRight.onmouseover = function () {
                reControlRight.style.cursor = 'pointer'
            }
        }
        reBoxContent.style.transform = 'translateX('+d+'px)';
        reBoxContent.style.transition = '.5s';
    }
    videoTexta.onmouseover = function () {
        videoTexti.style.background = '#ff7600';
    }
    videoTexta.onmouseout = function () {
        videoTexti.style.background = '#b0b0b0';
    }
}