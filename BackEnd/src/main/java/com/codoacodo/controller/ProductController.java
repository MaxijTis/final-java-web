package com.codoacodo.controller;

import com.codoacodo.entity.ProductEntity;
import com.codoacodo.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/products")
@CrossOrigin
public class ProductController {

    private final ProductService productService;

    @GetMapping
    public ResponseEntity<List<ProductEntity>> getProducts() {
        return new ResponseEntity<>( productService.findAll(), HttpStatus.OK);
    }

    @PostMapping
    public ResponseEntity<ProductEntity> createProduct(@RequestBody ProductEntity product) {
        return new ResponseEntity<>( productService.createProduct(product), HttpStatus.CREATED);
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<ProductEntity> deleteProduct(@PathVariable Long productId) throws Exception {
        return new ResponseEntity<>( productService.deleteProduct(productId), HttpStatus.OK);
    }

}
