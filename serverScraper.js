const { scraper: { executeScraper, executeScraperNYTData, excecuteScraperAppleData, excecuteScraperGov, excecuteScraperVaccine, executeScraperTherapeutics, excecuteScraperInfluenza },
	config } = require('./routes/instances');

executeScraper();
executeScraperNYTData();
excecuteScraperAppleData();
excecuteScraperGov();
excecuteScraperInfluenza();
excecuteScraperVaccine();
executeScraperTherapeutics();

// Update Worldometer and Johns Hopkins data every 10 minutes
setInterval(executeScraper, config.worldometersInterval);
// Update NYT data every hour
setInterval(executeScraperNYTData, 60000);
// Update Apple data every  24 hours
setInterval(excecuteScraperAppleData, config.appleInterval);
// Update Government data every  24 hours
setInterval(excecuteScraperGov, config.govInterval);
// Update vaccine data every  24 hours
setInterval(excecuteScraperVaccine, config.vaccineInterval);
// Update therapeutics data every 24 hours
setInterval(executeScraperTherapeutics, config.therapeuticsInterval);
// Update CDC Influenza data every  24 hours
setInterval(excecuteScraperInfluenza, config.cdcInterval);
