package ee.leena.webshop.controller;
//Spring WEB dependency
import ee.leena.webshop.entity.Product;
import ee.leena.webshop.model.ProductDTO;
import ee.leena.webshop.repository.ProductRepository;
import ee.leena.webshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    //dependency injection nagu constructor(private ProductService productService)
    @Autowired
    ProductService productService;// ProductService  productService = new ProductService()

    @GetMapping("getProducts") //localhost:8080/api/product/getProducts
    public ResponseEntity<Page<ProductDTO>> getProducts(Pageable pageable) {
        return ResponseEntity.ok(productService.getProducts(pageable));
    }

    @GetMapping("getProduct") //localhost:8080/api/product/getProduct?productId=10
    public ResponseEntity<Product> getProduct(@RequestParam UUID productId) {
        return ResponseEntity.ok(productService.getProduct(productId));
    }

    @PostMapping("saveProduct") //localhost:8080/api/product/saveProduct
    public ResponseEntity<String> saveProduct(@RequestBody Product product) {
        productService.saveProduct(product);
        return ResponseEntity.ok("Lisan ühe");
    }

    @DeleteMapping("deleteProduct") //localhost:8080/api/product/deleteProduct?productId=10
    public ResponseEntity<String> deleteProduct(@RequestParam UUID productId) {
        productService.deleteProduct(productId);
        return ResponseEntity.ok("Kustutan yhe, kelle ID on" + productId);
    }
}
