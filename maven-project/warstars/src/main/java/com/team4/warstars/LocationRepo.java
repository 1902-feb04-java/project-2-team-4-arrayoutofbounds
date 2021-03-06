package com.team4.warstars;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel="locations", path="locations")
public interface LocationRepo extends CrudRepository<Locations, Long>
{
	Locations findByLocationId(@Param("locationId") long l);
}
