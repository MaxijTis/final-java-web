package com.codoacodo.service;

import com.codoacodo.entity.ProductEntity;
import com.codoacodo.exception.GenericException;
import com.codoacodo.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class ProductService {

    private final ProductRepository productRepository;

    public List<ProductEntity> findAll() {
        return productRepository.findAll();
    }

    public ProductEntity createProduct(ProductEntity product) {
        return productRepository.save(product);
    }

    public ProductEntity deleteProduct(Long productId) {
        Optional<ProductEntity> product = productRepository.findById(productId);
        if (product.isPresent()) {
            productRepository.deleteById(productId);
            return product.get();
        }
        throw new GenericException("No se encontró el producto");
    }

}
