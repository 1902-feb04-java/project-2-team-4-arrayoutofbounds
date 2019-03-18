package com.team4.warstars;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "inventories", path = "inventories")
public interface InventoryRepo extends PagingAndSortingRepository<Inventory, Long> {
	List<Inventory> findByLocation_id(@Param("location_id") String L);
}
