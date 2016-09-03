describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://localhost:8080'); 
    });

    it('should load page and read title', function() {

        // var link = element(by.linkText("Flug buchen"));
        // link.click();

        var vonFilter = element(by.name("von"));
        var nachFilter = element(by.name("nach"));
        var suchen = element(by.css("button"));

        vonFilter.clear();
        nachFilter.clear();
       
        vonFilter.sendKeys("Graz");
        nachFilter.sendKeys("Hamburg");

        suchen.click();
        
        // browser.sleep(4000);
        
        browser.takeScreenshot().then(function (png) {
            writeScreenShot(png, 'info.png');
        });
        
        var cards = element.all(by.tagName("flug-card"));
        
        var first = cards.first();
                    //cards.get(1);
                    //cards.get(2);
        var h2 = first.element(by.tagName('h2'));        

        expect(cards.count()).toBe(3);
        expect(h2.getText()).toMatch(/Hamburg/);
        
 
    });
    
    function writeScreenShot(data, filename) {
        
        var fs = require("fs");
        
        var stream = fs.createWriteStream(filename);

        stream.write(new Buffer(data, 'base64'));
        stream.end();
    }
});


