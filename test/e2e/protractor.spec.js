describe("CorpApp PeopleFinder", function () {
	var ptor = protractor.getInstance();
	
    describe ("CorpApp1", function () {
        it("should display the correct title", function () {
		ptor.get('http://goole.nl'); 
		expect();
		
	//click on the menu button
	element(by.css('.button.button-menu')).click();
		//click on the PeopleFinder button
	element(by.css('.icon.modules.icon-peoplefinder')).click();
		//fill in a name and click on Search
	element(by.input('searchText')).sendKeys('Soeradj');
	element(by.css('.btn.btn-lg.btn-default')).click();
	
	});	
 });
});
