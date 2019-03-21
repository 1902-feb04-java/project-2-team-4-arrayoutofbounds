package com.team4.warstars;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel="orders", path="orders")
public interface OrderRepo extends CrudRepository<Order, Long> {
	Order findByOrderId(@Param("orderId")long id);
}
