package ee.leena.webshop.service;

import ee.leena.webshop.entity.Product;
import ee.leena.webshop.model.ProductDTO;
import ee.leena.webshop.repository.ProductRepository;
import ee.leena.webshop.util.ModelMapperFactory;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

//@RestController saab hakkata API päringuid tegema
//@Entity läheb andmebaasitabeliks
//@configuration läheb üle terve projekti seadistama
//@Repository andmebaasiga suhtleja
//
@Service // pole mingeid eriomadusi
//@Component pole mingeid eriomadusi
public class ProductService {
    @Autowired
    ProductRepository productRepository;

    public Page<ProductDTO> getProducts(Pageable pageable) {
        ModelMapper modelMapper = ModelMapperFactory.getMapper();
        //return bookRepository.findAll(pageable).map(book -> modelMapper.map(book, BookDTO.class));
        return productRepository.findAll(pageable).map(product -> modelMapper.map(product, ProductDTO.class));
    }

    public Product getProduct(UUID id){
        return productRepository.findById(id).get();
    }

    public UUID saveProduct(Product product){
        productRepository.save(product);
        return product.getId();
    }
    public void deleteProduct(UUID id){
        productRepository.deleteById(id);
    }
}
