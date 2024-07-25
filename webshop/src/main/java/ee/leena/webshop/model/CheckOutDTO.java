package ee.leena.webshop.model;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
//DTO Data Transfer Object - mudel millega saadetakse front-endi
public class CheckOutDTO {
    private UUID id;

    private String borrowerFirstName;

    private String borrowerLastName;

    private ProductDTO borrowedBook;

    private LocalDate checkedOutDate;

    private LocalDate dueDate;

    private LocalDate returnedDate;
}
