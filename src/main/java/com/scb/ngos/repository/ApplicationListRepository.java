package com.scb.ngos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scb.ngos.entity.ApplicationList;

@Repository
public interface ApplicationListRepository extends CrudRepository<ApplicationList, Integer> {
		
}
