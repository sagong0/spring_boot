package com.sagong0.SpringDataJDBCSample.repository;

import com.sagong0.SpringDataJDBCSample.entity.Member;
import org.springframework.data.repository.CrudRepository;

public interface MemberCrudRepository extends CrudRepository<Member, Integer> {

}