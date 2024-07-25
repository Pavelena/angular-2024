package ee.leena.webshop.entity;

import ee.leena.webshop.model.BookStatus;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.Type;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity // teeb sellest klassist andmebaasimudeli
//@Table(name = "product") //saan tabeli nime andmebaasi muuta, kui ei taha seda mis on klassi nimi
public class Product {

    @Id
    @Column
    private UUID id;

    @Column
    private String title;

    @Column
    private String author;

    @Column
    private String genre;

    @Column(name="aasta")
    private Integer year;

    @Column
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate added;

    @Column(name = "check_out_count")
    private Integer checkOutCount;

    @Column
    @Enumerated(EnumType.STRING)
    private BookStatus status;

    @Column(name = "due_date")
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    private LocalDate dueDate;

    @Column
    private String comment;

    @OneToMany(mappedBy = "borrowedBook")
    private List<CheckOut> checkOuts = new ArrayList<>();


}
