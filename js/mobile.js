
window.onload = function(){
    var getNavi = document.getElementById('navigation');

    var mobile = document.createElement("span");
    mobile.setAttribute("id","mobile-navigation");
    getNavi.parentNode.insertBefore(mobile,getNavi);

    document.getElementById('mobile-navigation').onclick = function(){
        var a = getNavi.getAttribute('style');
        if(a){
            getNavi.removeAttribute('style');
            document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-menu.png)';
        } else {
            getNavi.style.display='block';
            document.getElementById('mobile-navigation').style.backgroundImage='url(images/mobile/mobile-close.png)';
        }
    };
    var getElm = getNavi.getElementsByTagName("LI");
    for(var i=0;i<getElm.length;i++){
        if(getElm[i].children.length>1){
            var smenu = document.createElement("span");
            smenu.setAttribute("class","mobile-submenu");
            smenu.setAttribute("OnClick","submenu("+i+")");
            getElm[i].appendChild(smenu);
        };
    };
    submenu = function (i){
        var sub = getElm[i].children[1];
        var b = sub.getAttribute('style');
        if(b){
            sub.removeAttribute('style');
            getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-expand.png)';
            getElm[i].lastChild.style.backgroundColor='rgba(121, 101, 102, 0.91)';
        } else {
            sub.style.display='block';
            getElm[i].lastChild.style.backgroundImage='url(images/mobile/mobile-collapse.png)';
            getElm[i].lastChild.style.backgroundColor='rgba(204, 60, 104, 0.91)';
        }
    };

    // Popup for thanking the user
    var welcomePopup = document.createElement("div");
    welcomePopup.setAttribute("id", "welcome-popup");
    welcomePopup.innerHTML = "<p>Thank you for visiting the website!</p>";
    document.body.appendChild(welcomePopup);
    setTimeout(function() {
        welcomePopup.style.display = "none";
    }, 4000);

    // Newsletter popup
    setTimeout(function() {
        var newsletterPopup = document.createElement("div");
        newsletterPopup.setAttribute("id", "newsletter-popup");
        newsletterPopup.innerHTML = `
            <div class="popup-content">
                <h2>Subscribe to our Newsletter!</h2>
                <p>Stay updated with the latest news and offers.</p>
                <input type="email" placeholder="Enter your email address" class="popup-email-input">
                <button class="popup-submit-button">Subscribe</button>
                <span class="popup-close-button">×</span>
            </div>
        `;
        document.body.appendChild(newsletterPopup);

        // Close button functionality
        document.querySelector(".popup-close-button").onclick = function() {
            newsletterPopup.style.display = "none";
        };

        // Submit button functionality
        document.querySelector(".popup-submit-button").onclick = function() {
            alert("Thank you for subscribing!");
            newsletterPopup.style.display = "none";
        };
    }, 4000);
};
