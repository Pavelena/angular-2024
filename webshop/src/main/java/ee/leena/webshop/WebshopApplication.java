package ee.leena.webshop;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebshopApplication {

	public static void main(String[] args) {
		SpringApplication.run(WebshopApplication.class, args);
	}

	// base - konfiguratsiooni kaust
	// controller - API päringute vastuvõtmise kaust
	// entity - andmebaasimudelite kaust
	// model - API päringute mudelite kaust
	// repository - andmebaasiga suhtlemise failide kaust
	// service - controlleri funktsioonide tõstmise kaust
	// util - taaskasutamise kaust
}
