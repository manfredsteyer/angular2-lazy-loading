describe("FlugApp", function() {

    beforeEach(function() {
        browser.get('http://localhost:8080/'); 
    });

    it('should load page and read title', function() {

          var expectedTitle = 'FlugApp';
          var actualTitle = browser.getTitle();
          expect(actualTitle).toBe(expectedTitle);
 
    });
});
