package com.team4.warstars;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel = "inventories", path = "inventories")
public interface InventoryRepo extends CrudRepository<Inventory, Long> {
	List<Inventory> findByLocationId(@Param("locationId") int L);
	Inventory findByInventoryId(@Param("inventoryId") long i);
}
