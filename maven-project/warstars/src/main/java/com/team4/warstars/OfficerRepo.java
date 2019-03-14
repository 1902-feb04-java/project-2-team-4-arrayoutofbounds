package com.team4.warstars;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource(collectionResourceRel="officers", path="officers")
public interface OfficerRepo extends PagingAndSortingRepository<Officer, Long>
{
//	List<Reimbursement> findByDescription(@Param("desc")String description);
	List<Officer> findByRank(@Param("rank")String r);
}
