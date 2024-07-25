package ee.leena.webshop.repository;

import ee.leena.webshop.entity.CheckOut;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface CheckOutRepository extends JpaRepository<CheckOut, UUID> {
}
