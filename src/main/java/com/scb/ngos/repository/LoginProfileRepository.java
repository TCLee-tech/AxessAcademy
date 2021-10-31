package com.scb.ngos.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.scb.ngos.entity.LoginProfile;


@Repository
public interface LoginProfileRepository extends CrudRepository<LoginProfile, String> {
		
}
