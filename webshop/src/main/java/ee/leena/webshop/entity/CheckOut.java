package ee.leena.webshop.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "checkout")
public class CheckOut {

    @Id
    @Column
    private UUID id;

    @Column(name = "borrower_first_name")
    private String borrowerFirstName;

    @Column(name = "borrower_last_name")
    private String borrowerLastName;

    @JoinColumn(name = "product_id", referencedColumnName = "id")
    @ManyToOne(optional = false)
    private Product borrowedBook;

    @Column(name = "checked_out_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate checkedOutDate;

    @Column(name = "due_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dueDate;

    @Column(name = "returned_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate returnedDate;


}
