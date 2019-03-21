package com.team4.warstars;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel="items", path="items")
public interface ItemRepo extends CrudRepository<Item, Long>
{
	List<Item> findByCategory(@Param("category")String r); //url search?key=value
}
