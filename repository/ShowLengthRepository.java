package com.okta.springbootvue.repository;

import com.okta.springbootvue.entity.ShowLength;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

@RepositoryRestResource
public
interface ShowLengthRepository extends JpaRepository<ShowLength , Long> { 
	ShowLength findById(long id);
}
