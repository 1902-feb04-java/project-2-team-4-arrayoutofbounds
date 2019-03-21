package com.team4.warstars;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@CrossOrigin
@RepositoryRestResource(collectionResourceRel="officers", path="officers")
public interface OfficerRepo extends CrudRepository<Officer, Long>
{
//	List<Reimbursement> findByDescription(@Param("desc")String description);
	List<Officer> findByRank(@Param("rank")String r); //url search?key=value
	
//	void save();
}
